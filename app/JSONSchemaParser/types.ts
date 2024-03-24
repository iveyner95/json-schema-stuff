export interface LabeledObjectForNode {
  label: string;
}

export enum SchemaTypes {
  STRING = 'string',
  NUMBER = 'number',
  INTEGER = 'integer',
  OBJECT = 'object',
  ARRAY = 'array',
  BOOLEAN = 'boolean',
  NULL = 'null'
}

export enum ObjectSubschemaKeyValues {
  PROPERTIES = 'properties',
  PATTERN_PROPERTIES = 'patternProperties',
  ADDITIONAL_PROPERTIES = 'additionalProperties',
  PROPERTY_NAMES = 'propertyNames'
}

export const ObjectSubschemaKeys = Object.values(ObjectSubschemaKeyValues)