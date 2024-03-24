export interface LabeledObjectForNode {
  label: string;
}

export enum SchemaSubschemaKeys {
  PROPERTIES = 'properties',
  PATTERN_PROPERTIES = 'patternProperties',
  ADDITIONAL_PROPERTIES = 'additionalProperties',
  PROPERTY_NAMES = 'propertyNames'
}
