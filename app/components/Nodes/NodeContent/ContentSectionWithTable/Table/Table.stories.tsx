import type { Meta, StoryObj } from '@storybook/react';

import { Table } from './Table';

const meta: Meta<typeof Table> = {
  component: Table,
};

export default meta;

type TableStory = StoryObj<typeof Table>;

export const Primary: TableStory = {
  args: {
    rowsData: [
      ['key1', 'One'],
      ['key2', 'Two'],
      ['key3', 'Three'],
      ['key4', 'Four'],
      ['key5', 'Five'],
    ],
  },
};
