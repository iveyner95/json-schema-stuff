import type { Meta, StoryObj } from '@storybook/react';

import { NodeName } from './NodeName';

const meta: Meta<typeof NodeName> = {
  component: NodeName,
};

export default meta;

type NodeNameStory = StoryObj<typeof NodeName>;

export const Primary: NodeNameStory = {
  args: {
    name: 'Primary',
  },
};
