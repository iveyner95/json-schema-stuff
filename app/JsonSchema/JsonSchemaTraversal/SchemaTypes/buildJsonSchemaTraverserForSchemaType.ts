import { IJsonSchemaTraverser, JsonSchemaType } from '../../types';
import { IJsonSubschemaTraverser } from '../types';
import { ObjectJsonSchemaTraverser } from './ObjectJsonSchemaTraverser';

// TODO: add test
export const buildJsonSchemaTraverserForSchemaType = (
  jsonSchemaType: JsonSchemaType,
  subschemaTraverser: IJsonSubschemaTraverser
) => {
  // TODO: Add other SchemaType Traversers
  const typeToJsonSchemaTraverser: Partial<Record<JsonSchemaType, IJsonSchemaTraverser>> = {
    [JsonSchemaType.OBJECT]: new ObjectJsonSchemaTraverser(subschemaTraverser),
  };

  return typeToJsonSchemaTraverser[jsonSchemaType];
};
