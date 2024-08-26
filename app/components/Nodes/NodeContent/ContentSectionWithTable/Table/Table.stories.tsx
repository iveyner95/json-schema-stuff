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
      ['keyword1', 'key1', 'One'],
      ['keyword2', 'key2', 'Two'],
      ['keyword3', 'key3', 'Three'],
      ['keyword4', 'key4', 'Four'],
      ['keyword5', 'key5', 'Five'],
    ],
  },
};
