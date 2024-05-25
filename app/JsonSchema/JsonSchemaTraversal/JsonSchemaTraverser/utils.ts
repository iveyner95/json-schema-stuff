import { JsonSchema } from '../../types';

// TODO: add test
export const subschemaExists = (schema: JsonSchema, subschemaKey: string) => {
  return Object.hasOwn(schema, subschemaKey);
};
