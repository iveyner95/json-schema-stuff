import { JsonSchemaType } from '../../../../JsonSchema';
import { getIconForJsonSchemaType } from '../icons';

export const useNodeIcon = (jsonSchemaType: JsonSchemaType) => {
  const Icon = getIconForJsonSchemaType(jsonSchemaType)
  return { Icon }
}