export type JsonSchema = Partial<Record<string, any>>
export type JsonTraverseSchemaFn = (schema: JsonSchema, sourceNodeId: string) => void
export type AddNodeFn = (label: string) => void
export type AddEdgeFn = (target: string, source: string) => void
export type GetLastNodeIdFn = () => string;
export type SubschemaExistsFn = (schema: JsonSchema, subschemaKey: string) => boolean

export interface JsonSchemaTraverser {
  traverseSchema: JsonTraverseSchemaFn;
}

export interface JsonSchemaTypeTraverserArgs {
  subschemaExists: SubschemaExistsFn;
  traverseSubschema: JsonTraverseSchemaFn;
}