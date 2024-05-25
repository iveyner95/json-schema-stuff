import { JsonSchema, SubschemaExistsFn } from '../../types';

// TODO: add test
export const subschemaExists: SubschemaExistsFn = (schema: JsonSchema, subschemaKey: string) => {
  return Object.hasOwn(schema, subschemaKey);
};
