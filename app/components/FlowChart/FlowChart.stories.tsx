import type { Meta, StoryObj } from '@storybook/react';
import Draft12 from '../../__fixtures__/2020-12.json';

import { FlowChart } from './FlowChart';

const meta: Meta<typeof FlowChart> = {
  component: FlowChart,
};

export default meta;

type FlowChartStory = StoryObj<typeof FlowChart>;

const SchemaFixture = Draft12 as unknown as JSON;

export const Primary: FlowChartStory = {
  args: {
    schema: SchemaFixture,
  },
};

export const Empty: FlowChartStory = {
  args: {
    schema: undefined,
  },
};
