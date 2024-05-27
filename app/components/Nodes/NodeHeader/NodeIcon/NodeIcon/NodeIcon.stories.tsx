import type { Meta, StoryObj } from '@storybook/react';

import { JsonSchemaType } from '../../../../../JsonSchema';
import { NodeIcon, NodeIconProps } from './NodeIcon';

const meta: Meta<typeof NodeIcon> = {
  component: NodeIcon,
};

export default meta;

type Story = StoryObj<typeof NodeIcon>;

const nodeIconProps: NodeIconProps = {
  id: 'id',
  jsonSchemaType: JsonSchemaType.ARRAY,
};

export const Primary: Story = {
  args: {
    ...nodeIconProps,
  },
};
