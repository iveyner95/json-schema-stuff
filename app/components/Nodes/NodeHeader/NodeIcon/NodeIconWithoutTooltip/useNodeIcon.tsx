import { JsonSchemaType } from '../../../../../JsonSchema';
import { getIconForJsonSchemaType } from '../../../NodeHeader/icons/mapJsonSchemaTypeToIcon';

export const useNodeIcon = (jsonSchemaType: JsonSchemaType) => {
  const Icon = getIconForJsonSchemaType(jsonSchemaType);
  return { Icon };
};
