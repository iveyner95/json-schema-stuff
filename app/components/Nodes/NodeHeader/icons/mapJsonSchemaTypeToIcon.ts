import React from 'react';
import { JsonSchemaType } from '../../../../JsonSchema';
import { ArrayIcon } from './ArrayIcon';
import { BooleanIcon } from "./BooleanIcon";
import { FallbackIcon } from './FallbackIcon';
import { IntegerIcon } from './IntegerIcon';
import { NullIcon } from './NullIcon';
import { NumberIcon } from "./NumberIcon";
import { ObjectIcon } from "./ObjectIcon";
import { StringIcon } from "./StringIcon";

export const getIconForJsonSchemaType = (jsonSchemaType: JsonSchemaType) => {
  const componentForRender = mapJsonSchemaTypeToIcon[jsonSchemaType];

  if (!componentForRender) {
    return FallbackIcon
  }

  return componentForRender
}

const mapJsonSchemaTypeToIcon: Partial<Record<JsonSchemaType, () => React.JSX.Element>> = {
  [JsonSchemaType.ARRAY]: ArrayIcon,
  [JsonSchemaType.BOOLEAN]: BooleanIcon,
  [JsonSchemaType.INTEGER]: IntegerIcon,
  [JsonSchemaType.NULL]: NullIcon,
  [JsonSchemaType.NUMBER]: NumberIcon,
  [JsonSchemaType.OBJECT]: ObjectIcon,
  [JsonSchemaType.STRING]: StringIcon,
}