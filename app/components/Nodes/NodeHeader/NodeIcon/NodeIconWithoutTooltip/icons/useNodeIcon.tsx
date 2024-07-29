import { JsonSchemaType } from '../../../../../../JsonSchema';

import { ArrayIcon } from './ArrayIcon';
import { BooleanIcon } from './BooleanIcon';
import { FallbackIcon } from './FallbackIcon';
import { IntegerIcon } from './IntegerIcon';
import { NullIcon } from './NullIcon';
import { NumberIcon } from './NumberIcon';
import { ObjectIcon } from './ObjectIcon';
import { StringIcon } from './StringIcon';

export const useNodeIcon = (jsonSchemaType: JsonSchemaType): { Icon: () => JSX.Element } => {
  const Icon = mapJsonSchemaTypeToIcon[jsonSchemaType];

  if (!Icon) {
    return { Icon: FallbackIcon };
  }

  return { Icon };
};

const mapJsonSchemaTypeToIcon: Partial<Record<JsonSchemaType, () => React.JSX.Element>> = {
  [JsonSchemaType.ARRAY]: ArrayIcon,
  [JsonSchemaType.BOOLEAN]: BooleanIcon,
  [JsonSchemaType.INTEGER]: IntegerIcon,
  [JsonSchemaType.NULL]: NullIcon,
  [JsonSchemaType.NUMBER]: NumberIcon,
  [JsonSchemaType.OBJECT]: ObjectIcon,
  [JsonSchemaType.STRING]: StringIcon,
};
