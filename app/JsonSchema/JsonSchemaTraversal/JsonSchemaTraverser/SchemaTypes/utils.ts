import { JsonSchema } from '../../../types';

export const subschemaExists = (schema: JsonSchema, subschemaKey: string) => {
  return Object.hasOwn(schema, subschemaKey);
};
