import type { Meta, StoryObj } from '@storybook/react';

import { NodeContent } from './NodeContent';

const meta: Meta<typeof NodeContent> = {
  component: NodeContent,
};

export default meta;

type NodeContentStory = StoryObj<typeof NodeContent>;

export const Primary: NodeContentStory = {
  args: {
    nodeSchemaDataForNode: {
      type: 'number',
      multipleOf: 10,
      minimum: 20,
      maximum: 100,
    },
  },
};

export const EmptyNodeSchema: NodeContentStory = {
  args: {
    nodeSchemaDataForNode: {},
  },
};
