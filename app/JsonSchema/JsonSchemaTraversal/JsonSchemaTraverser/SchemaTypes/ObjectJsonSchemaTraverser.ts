import { JsonSchema } from '@/app/JsonSchema/types';
import { IJsonSchemaTraverser, IJsonSubschemaTraverser } from '../../types';
import { subschemaExists } from './utils';

import { ObjectSubschemaKeyValues } from './types';

export class ObjectJsonSchemaTraverser implements IJsonSchemaTraverser {
  private subschemaTraverser: IJsonSubschemaTraverser;

  constructor(subschemaTraverser: IJsonSubschemaTraverser) {
    this.subschemaTraverser = subschemaTraverser;
  }

  public traverseSchema = (schema: JsonSchema, sourceNodeId: string) => {
    this.traverseNormalSchemas(schema, sourceNodeId);
    this.traverseAdditionalProperties(schema, sourceNodeId);
  };

  private traverseNormalSchemas = (schema: JsonSchema, sourceNodeId: string) => {
    const subschemaKeys = [
      ObjectSubschemaKeyValues.PROPERTIES,
      ObjectSubschemaKeyValues.PATTERN_PROPERTIES,
      ObjectSubschemaKeyValues.PROPERTY_NAMES,
    ];

    subschemaKeys.forEach((subschemaKey) => {
      if (subschemaExists(schema, subschemaKey)) {
        const subschema = schema[subschemaKey];
        this.subschemaTraverser.traverseSubschema(subschema, sourceNodeId);
      }
    });
  };

  private traverseAdditionalProperties = (schema: JsonSchema, sourceNodeId: string) => {
    const additionalProperties = ObjectSubschemaKeyValues.ADDITIONAL_PROPERTIES;
    if (subschemaExists(schema, additionalProperties)) {
      const subschema: JsonSchema | false = schema[additionalProperties];

      if (subschema) {
        this.subschemaTraverser.traverseSubschema(subschema, sourceNodeId);
      }
    }
  };
}
