import { GraphElementState } from '../GraphElementState';
import {
  IJsonSchemaTraverser,
  JsonSchema,
  JsonSchemaType,
  JsonSchemaTypeTraverserArgs,
  JsonTraverseSchemaFn,
  SubschemaExistsFn,
} from '../types';
import { ObjectJsonSchemaTraverser } from './ObjectJsonSchemaTraverser';
import { GlobalJsonSchemaTraverserArgs } from './types';

export class JsonSchemaTraverser {
  private graphElementState: GraphElementState;

  constructor({ graphElementState }: GlobalJsonSchemaTraverserArgs) {
    this.graphElementState = graphElementState;
  }

  public traverseSchema(jsonSchema: JsonSchema, sourceNodeId: string) {
    const schemaTypeOrTypes = jsonSchema.type as JsonSchemaType | JsonSchemaType[];
    const jsonSchemaTraversers = this.getSchemaTraversers(schemaTypeOrTypes);

    jsonSchemaTraversers.forEach((jsonSchemaTraverser) => {
      jsonSchemaTraverser.traverseSchema(jsonSchema, sourceNodeId);
    });
  }

  private traverseSubschema: JsonTraverseSchemaFn = (schema: JsonSchema, sourceNodeId: string) => {
    Object.entries(schema).forEach(([key, subschema]: [string, JSON]) => {
      this.graphElementState.addNode(key, subschema);
      const lastNodeId = this.graphElementState.getLastNodeId();
      this.graphElementState.addEdge(lastNodeId, sourceNodeId);
      this.traverseSchema(subschema, lastNodeId);
    });
  };

  private getSchemaTraversers = (schemaTypeOrTypes: JsonSchemaType | JsonSchemaType[]) => {
    const jsonSchemaTraversers: IJsonSchemaTraverser[] = [];
    const jsonSchemaTypeTraverserArgs = this.buildJsonSchemaTypeTraverserArgs();

    const addJsonSchemaTraverser = (jsonSchemaType: JsonSchemaType) => {
      const jsonSchemaTraverser = this.buildJsonSchemaTraverser(
        jsonSchemaType,
        jsonSchemaTypeTraverserArgs
      );

      if (jsonSchemaTraverser) {
        jsonSchemaTraversers.push(jsonSchemaTraverser);
      }
    };

    if (Array.isArray(schemaTypeOrTypes)) {
      schemaTypeOrTypes.forEach((schemaType) => {
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
    };
  };

  private subschemaExists: SubschemaExistsFn = (schema: JsonSchema, subschemaKey: string) => {
    return Object.hasOwn(schema, subschemaKey);
  };

  private buildJsonSchemaTraverser = (
    jsonSchemaType: JsonSchemaType,
    jsonSchemaTypeTraverserArgs: JsonSchemaTypeTraverserArgs
  ) => {
    // TODO: Add other SchemaType Traversers
    const typeToJsonSchemaTraverser: Partial<Record<JsonSchemaType, IJsonSchemaTraverser>> = {
      [JsonSchemaType.OBJECT]: new ObjectJsonSchemaTraverser(jsonSchemaTypeTraverserArgs),
    };

    return typeToJsonSchemaTraverser[jsonSchemaType];
  };
}
