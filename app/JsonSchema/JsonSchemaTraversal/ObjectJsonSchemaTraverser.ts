import {
  JsonSchema,
  JsonSchemaTraverser,
  JsonSchemaTypeTraverserArgs,
  JsonTraverseSchemaFn,
  SubschemaExistsFn
} from "../types";

import { ObjectSubschemaKeyValues } from './types';

export class ObjectJsonSchemaTraverser implements JsonSchemaTraverser {
  private subschemaExists: SubschemaExistsFn
  private traverseSubschema: JsonTraverseSchemaFn;

  constructor({ subschemaExists, traverseSubschema }: JsonSchemaTypeTraverserArgs) {
    this.subschemaExists = subschemaExists;
    this.traverseSubschema = traverseSubschema
  }

  public traverseSchema: JsonTraverseSchemaFn = (schema: JsonSchema, sourceNodeId: string) => {
    this.traverseNormalSchemas(schema, sourceNodeId)
    this.traverseAdditionalProperties(schema, sourceNodeId)
  }

  private traverseNormalSchemas: JsonTraverseSchemaFn = (
    schema: JsonSchema, sourceNodeId: string
  ) => {
    const subschemaKeys = [
      ObjectSubschemaKeyValues.PROPERTIES,
      ObjectSubschemaKeyValues.PATTERN_PROPERTIES,
      ObjectSubschemaKeyValues.PROPERTY_NAMES
    ];

    subschemaKeys.forEach(subschemaKey => {
      if (this.subschemaExists(schema, subschemaKey)) {
        const subschema = schema[subschemaKey];
        this.traverseSubschema(subschema, sourceNodeId);
      }
    });
  }

  private traverseAdditionalProperties: JsonTraverseSchemaFn = (
    schema: JsonSchema, sourceNodeId: string
  ) => {
    const additionalProperties = ObjectSubschemaKeyValues.ADDITIONAL_PROPERTIES;
    if (this.subschemaExists(schema, additionalProperties)) {
      const subschema: JsonSchema | false = schema[additionalProperties];

      if (subschema) {
        this.traverseSubschema(subschema, sourceNodeId);
      }
    }
  }
}
