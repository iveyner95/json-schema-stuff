import { Node } from 'reactflow';

// TODO: move to appropriate places

export type JsonSchema = Partial<Record<string, any>>;
export type JsonTraverseSchemaFn = (schema: JsonSchema, sourceNodeId: string) => void;
export type AddNodeFn = (label: string, jsonSchema: JsonSchema) => void;
export type AddEdgeFn = (target: string, source: string) => void;
export type GetLastNodeIdFn = () => string;
export type SubschemaExistsFn = (schema: JsonSchema, subschemaKey: string) => boolean;

export interface IJsonSchemaTraverser {
  traverseSchema: JsonTraverseSchemaFn;
}

export type NodeSchemaData = Record<Node['id'], JsonSchema>;

export enum JsonSchemaType {
  STRING = 'string',
  NUMBER = 'number',
  INTEGER = 'integer',
  OBJECT = 'object',
  ARRAY = 'array',
  BOOLEAN = 'boolean',
  NULL = 'null',
}
