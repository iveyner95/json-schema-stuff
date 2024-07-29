import type { Meta, StoryObj } from '@storybook/react';

import { JsonSchemaType } from '../../../JsonSchema';
import { NodeHeader } from './NodeHeader';

const meta: Meta<typeof NodeHeader> = {
  component: NodeHeader,
};

export default meta;

type NodeHeaderStory = StoryObj<typeof NodeHeader>;

export const Primary: NodeHeaderStory = {
  args: {
    id: 'string',
    name: 'Primary',
    jsonSchemaType: JsonSchemaType.STRING,
  },
};
