import { ObjectJsonSchemaTraverser } from '../JsonSchemaTraversal/ObjectJsonSchemaTraverser';
import {
  AddEdgeFn,
  AddNodeFn,
  GetLastNodeIdFn,
  JsonSchema,
  JsonSchemaTraverser,
  JsonSchemaType,
  JsonSchemaTypeTraverserArgs,
  JsonTraverseSchemaFn,
  SubschemaExistsFn
} from '../types';
import { GlobalJsonSchemaTraverserArgs } from './types';

export class GlobalJsonSchemaTraverser {
  private addNode: AddNodeFn;
  private addEdge: AddEdgeFn;
  private getLastNodeId: GetLastNodeIdFn;

  constructor({
    addNode, addEdge, getLastNodeId,
  }: GlobalJsonSchemaTraverserArgs) {
    this.addNode = addNode;
    this.addEdge = addEdge;
    this.getLastNodeId = getLastNodeId;
  }

  public traverseSchema(jsonSchema: JsonSchema, sourceNodeId: string) {
    const schemaTypeOrTypes = jsonSchema.type as JsonSchemaType | JsonSchemaType[];
    const jsonSchemaTraversers = this.getSchemaTraversers(schemaTypeOrTypes);

    jsonSchemaTraversers.forEach(jsonSchemaTraverser => {
      jsonSchemaTraverser.traverseSchema(jsonSchema, sourceNodeId);
    });
  }

  private traverseSubschema: JsonTraverseSchemaFn = (schema: JsonSchema, sourceNodeId: string) => {
    Object.entries(schema).forEach(([key, subschema]: [string, JSON]) => {
      this.addNode(key, subschema);
      const lastNodeId = this.getLastNodeId();
      this.addEdge(lastNodeId, sourceNodeId);
      this.traverseSchema(subschema, lastNodeId);
    });
  };

  private getSchemaTraversers = (schemaTypeOrTypes: JsonSchemaType | JsonSchemaType[]) => {
    const jsonSchemaTraversers: JsonSchemaTraverser[] = [];
    const jsonSchemaTypeTraverserArgs = this.buildJsonSchemaTypeTraverserArgs()

    const addJsonSchemaTraverser = (jsonSchemaType: JsonSchemaType) => {
      const jsonSchemaTraverser = this.buildJsonSchemaTraverser(jsonSchemaType, jsonSchemaTypeTraverserArgs);

      if (jsonSchemaTraverser) {
        jsonSchemaTraversers.push(jsonSchemaTraverser);
      }
    };

    if (Array.isArray(schemaTypeOrTypes)) {
      schemaTypeOrTypes.forEach(schemaType => {
        addJsonSchemaTraverser(schemaType);
      });
    } else {
      addJsonSchemaTraverser(schemaTypeOrTypes);
    }

    return jsonSchemaTraversers;
  };

  private buildJsonSchemaTypeTraverserArgs = (): JsonSchemaTypeTraverserArgs => {
    return {
      subschemaExists: this.subschemaExists,
      traverseSubschema: this.traverseSubschema,
    }
  }

  private subschemaExists: SubschemaExistsFn = (schema: JsonSchema, subschemaKey: string) => {
    return Object.hasOwn(schema, subschemaKey);
  };

  private buildJsonSchemaTraverser = (jsonSchemaType: JsonSchemaType, jsonSchemaTypeTraverserArgs: JsonSchemaTypeTraverserArgs) => {
    // TODO: Add other SchemaType Traversers
    const typeToJsonSchemaTraverser: Partial<Record<JsonSchemaType, JsonSchemaTraverser>> = {
      [JsonSchemaType.OBJECT]: new ObjectJsonSchemaTraverser(jsonSchemaTypeTraverserArgs)
    };

    return typeToJsonSchemaTraverser[jsonSchemaType];
  };
}
