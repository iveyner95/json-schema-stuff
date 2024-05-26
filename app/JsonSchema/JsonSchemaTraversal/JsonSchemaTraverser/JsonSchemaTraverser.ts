import { IGraphElementState } from '../../GraphElementState';
import { JsonSchema, JsonSchemaType } from '../../types';
import { JsonSubschemaTraverser } from '../JsonSubschemaTraverser';
import { IJsonSchemaTraverser } from '../types';
import { buildJsonSchemaTraverserForSchemaType } from './SchemaTypes';

export class JsonSchemaTraverser {
  private subschemaTraverser: JsonSubschemaTraverser;

  constructor(graphElementState: IGraphElementState) {
    this.subschemaTraverser = new JsonSubschemaTraverser(graphElementState, this.traverseSchema);
  }

  public traverseSchema(jsonSchema: JsonSchema, sourceNodeId: string) {
    const schemaTypeOrTypes = jsonSchema.type as JsonSchemaType | JsonSchemaType[];
    const jsonSchemaTraversers = this.getSchemaTraversers(schemaTypeOrTypes);

    jsonSchemaTraversers.forEach((jsonSchemaTraverser) => {
      jsonSchemaTraverser.traverseSchema(jsonSchema, sourceNodeId);
    });
  }

  private getSchemaTraversers = (schemaTypeOrTypes: JsonSchemaType | JsonSchemaType[]) => {
    const jsonSchemaTraversers: IJsonSchemaTraverser[] = [];

    if (Array.isArray(schemaTypeOrTypes)) {
      schemaTypeOrTypes.forEach((schemaType) => {
        this.addJsonSchemaTraverser(schemaType, jsonSchemaTraversers);
      });
    } else {
      this.addJsonSchemaTraverser(schemaTypeOrTypes, jsonSchemaTraversers);
    }

    return jsonSchemaTraversers;
  };

  private addJsonSchemaTraverser = (
    jsonSchemaType: JsonSchemaType,
    jsonSchemaTraversers: IJsonSchemaTraverser[]
  ) => {
    const jsonSchemaTraverser = buildJsonSchemaTraverserForSchemaType(
      jsonSchemaType,
      this.subschemaTraverser
    );

    if (jsonSchemaTraverser) {
      jsonSchemaTraversers.push(jsonSchemaTraverser);
    }
  };
}
