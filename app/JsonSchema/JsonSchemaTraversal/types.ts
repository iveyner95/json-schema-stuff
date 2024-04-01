import { AddEdgeFn, AddNodeFn, GetLastNodeIdFn } from '../types';

export enum ObjectSubschemaKeyValues {
  PROPERTIES = 'properties',
  PATTERN_PROPERTIES = 'patternProperties',
  ADDITIONAL_PROPERTIES = 'additionalProperties',
  PROPERTY_NAMES = 'propertyNames',
}

export interface GlobalJsonSchemaTraverserArgs {
  addNode: AddNodeFn;
  addEdge: AddEdgeFn;
  getLastNodeId: GetLastNodeIdFn;
}
