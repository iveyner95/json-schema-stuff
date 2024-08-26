import type { Meta, StoryObj } from '@storybook/react';

import { JsonSchemaType } from '../../../../JsonSchema';
import { NodeIcon, NodeIconProps } from './NodeIcon';

const NodeIconWrapper = (props: any) => {
  return (
    <div className="flex justify-center items-center">
      <NodeIcon {...props} />
    </div>
  );
};

const meta: Meta<typeof NodeIcon> = {
  component: NodeIconWrapper,
};

export default meta;

type NodeIconStory = StoryObj<typeof NodeIcon>;

const baseNodeIconProps: Partial<NodeIconProps> = {
  id: 'id',
};

export const Array: NodeIconStory = {
  args: {
    ...baseNodeIconProps,
    jsonSchemaType: JsonSchemaType.ARRAY,
  },
};

export const Boolean: NodeIconStory = {
  args: {
    ...baseNodeIconProps,
    jsonSchemaType: JsonSchemaType.BOOLEAN,
  },
};

export const Integer: NodeIconStory = {
  args: {
    ...baseNodeIconProps,
    jsonSchemaType: JsonSchemaType.INTEGER,
  },
};

export const Null: NodeIconStory = {
  args: {
    ...baseNodeIconProps,
    jsonSchemaType: JsonSchemaType.NULL,
  },
};

export const Number: NodeIconStory = {
  args: {
    ...baseNodeIconProps,
    jsonSchemaType: JsonSchemaType.NUMBER,
  },
};

export const Object: NodeIconStory = {
  args: {
    ...baseNodeIconProps,
    jsonSchemaType: JsonSchemaType.OBJECT,
  },
};

export const String: NodeIconStory = {
  args: {
    ...baseNodeIconProps,
    jsonSchemaType: JsonSchemaType.STRING,
  },
};

export const Fallback: NodeIconStory = {
  args: {
    ...baseNodeIconProps,
    jsonSchemaType: 'invalidStr' as JsonSchemaType,
  },
};
