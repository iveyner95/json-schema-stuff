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
      ['key1', 'One'],
      ['key2', 'Two'],
      ['key3', 'Three'],
      ['key4', 'Four'],
      ['key5', 'Five'],
    ],
  },
};
