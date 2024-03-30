import { JsonSchemaType } from '@/app/JsonSchema';
import { getIconForJsonSchemaType } from '../icons';

export const useNodeHeader = (jsonSchemaType: JsonSchemaType) => {
  const Icon = getIconForJsonSchemaType(jsonSchemaType)
  return { Icon }
}