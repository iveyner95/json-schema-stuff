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

const nodeIconProps: NodeIconProps = {
  id: 'id',
  jsonSchemaType: JsonSchemaType.ARRAY,
};

export const Array: Story = {
  args: {
    ...nodeIconProps,
  },
};

export const Object: Story = {
  args: {
    ...nodeIconProps,
    jsonSchemaType: JsonSchemaType.OBJECT
  },
}