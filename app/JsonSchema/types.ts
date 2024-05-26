import { Node } from 'reactflow';

export type JsonSchema = Partial<Record<string, any>>;
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
