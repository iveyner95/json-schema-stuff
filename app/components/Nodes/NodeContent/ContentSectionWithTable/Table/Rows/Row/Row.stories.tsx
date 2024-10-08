import type { Meta, StoryObj } from '@storybook/react';

import { Row } from './Row';

const meta: Meta<typeof Row> = {
  component: Row,
};

export default meta;

type RowStory = StoryObj<typeof Row>;

export const Even: RowStory = {
  args: {
    rowData: ['keyword', 'isEven', 'true'],
    isEven: true,
  },
};

export const Odd: RowStory = {
  args: {
    rowData: ['keyword', 'isEven', 'false'],
    isEven: false,
  },
};
