import type { Meta, StoryObj } from '@storybook/react';

import { JsonSchemaType } from '../../../../../JsonSchema';
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

type Story = StoryObj<typeof NodeIcon>;

const baseNodeIconProps: Partial<NodeIconProps> = {
  id: 'id',
};

export const Array: Story = {
  args: {
    ...baseNodeIconProps,
    jsonSchemaType: JsonSchemaType.ARRAY,
  },
};

export const Boolean: Story = {
  args: {
    ...baseNodeIconProps,
    jsonSchemaType: JsonSchemaType.BOOLEAN,
  },
};

export const Integer: Story = {
  args: {
    ...baseNodeIconProps,
    jsonSchemaType: JsonSchemaType.INTEGER,
  },
};

export const Null: Story = {
  args: {
    ...baseNodeIconProps,
    jsonSchemaType: JsonSchemaType.NULL,
  },
};

export const Number: Story = {
  args: {
    ...baseNodeIconProps,
    jsonSchemaType: JsonSchemaType.NUMBER,
  },
};

export const Object: Story = {
  args: {
    ...baseNodeIconProps,
    jsonSchemaType: JsonSchemaType.OBJECT,
  },
};

export const String: Story = {
  args: {
    ...baseNodeIconProps,
    jsonSchemaType: JsonSchemaType.STRING,
  },
};

export const Fallback: Story = {
  args: {
    ...baseNodeIconProps,
    jsonSchemaType: 'invalidStr' as JsonSchemaType,
  },
};
