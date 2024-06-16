import type { Meta, StoryObj } from '@storybook/react';

import { JsonSchemaType } from '../../../../../JsonSchema';
import { NodeIcon, NodeIconProps } from './NodeIcon';

const NodeIconWrapper = (props: any) => {
  return (
    <div className='flex justify-center items-center'>
      <NodeIcon {...props} />
    </div>
  )
}

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

export const Object: Story = {
  args: {
    ...baseNodeIconProps,
    jsonSchemaType: JsonSchemaType.OBJECT
  },
}