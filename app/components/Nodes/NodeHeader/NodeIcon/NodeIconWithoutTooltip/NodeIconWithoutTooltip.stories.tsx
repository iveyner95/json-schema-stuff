import type { Meta, StoryObj } from '@storybook/react';

import { JsonSchemaType } from '../../../../../JsonSchema';
import { NodeIconWithoutTooltip } from './NodeIconWithoutTooltip';

const meta: Meta<typeof NodeIconWithoutTooltip> = {
  component: NodeIconWithoutTooltip,
};

export default meta;

type NodeIconWithoutTooltipStory = StoryObj<typeof NodeIconWithoutTooltip>;

export const Array: NodeIconWithoutTooltipStory = {
  args: {
    jsonSchemaType: JsonSchemaType.ARRAY,
  },
};

export const Boolean: NodeIconWithoutTooltipStory = {
  args: {
    jsonSchemaType: JsonSchemaType.BOOLEAN,
  },
};

export const Integer: NodeIconWithoutTooltipStory = {
  args: {
    jsonSchemaType: JsonSchemaType.INTEGER,
  },
};

export const Null: NodeIconWithoutTooltipStory = {
  args: {
    jsonSchemaType: JsonSchemaType.NULL,
  },
};

export const Number: NodeIconWithoutTooltipStory = {
  args: {
    jsonSchemaType: JsonSchemaType.NUMBER,
  },
};

export const Object: NodeIconWithoutTooltipStory = {
  args: {
    jsonSchemaType: JsonSchemaType.OBJECT,
  },
};

export const String: NodeIconWithoutTooltipStory = {
  args: {
    jsonSchemaType: JsonSchemaType.STRING,
  },
};

export const Fallback: NodeIconWithoutTooltipStory = {
  args: {
    jsonSchemaType: 'invalidStr' as JsonSchemaType,
  },
};
