import { JsonSchema } from '../types';

export type JsonTraverseSchemaFn = (schema: JsonSchema, sourceNodeId: string) => void;

export interface IJsonSchemaTraverser {
  traverseSchema: JsonTraverseSchemaFn;
}

export interface IJsonSubschemaTraverser {
  traverseSubschema: JsonTraverseSchemaFn;
}
