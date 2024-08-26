import type { Meta, StoryObj } from '@storybook/react';

import { Rows } from './Rows';

const meta: Meta<typeof Rows> = {
  component: Rows,
};

export default meta;

type RowsStory = StoryObj<typeof Rows>;

export const Primary: RowsStory = {
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
