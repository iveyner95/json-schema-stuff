import React from 'react';
import { JsonSchemaType } from '../../../../JsonSchema';
import { BooleanIcon } from "./BooleanIcon";
import { FallbackIcon } from './FallbackIcon';
import { ObjectIcon } from "./ObjectIcon";
import { StringIcon } from "./StringIcon";

export const getIconForJsonSchemaType = (jsonSchemaType: JsonSchemaType) => {
  const componentForRender = mapJsonSchemaTypeToIcon[jsonSchemaType];

  if (!componentForRender) {
    return FallbackIcon
  }

  return componentForRender
}

// TODO: Add support for other JsonSchemaTypes
const mapJsonSchemaTypeToIcon: Partial<Record<JsonSchemaType, () => React.JSX.Element>> = {
  [JsonSchemaType.OBJECT]: ObjectIcon,
  [JsonSchemaType.BOOLEAN]: BooleanIcon,
  [JsonSchemaType.STRING]: StringIcon,
}