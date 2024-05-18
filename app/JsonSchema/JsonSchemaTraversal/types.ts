import { GraphElementState } from '../GraphElementState';

export enum ObjectSubschemaKeyValues {
  PROPERTIES = 'properties',
  PATTERN_PROPERTIES = 'patternProperties',
  ADDITIONAL_PROPERTIES = 'additionalProperties',
  PROPERTY_NAMES = 'propertyNames',
}

export interface GlobalJsonSchemaTraverserArgs {
  graphElementState: GraphElementState;
}
