import type { Meta, StoryObj } from '@storybook/react';

import { ContentSectionWithTable } from './ContentSectionWithTable';

const meta: Meta<typeof ContentSectionWithTable> = {
  component: ContentSectionWithTable,
};

export default meta;

type ContentSectionWithTableStory = StoryObj<typeof ContentSectionWithTable>;

export const Primary: ContentSectionWithTableStory = {
  args: {
    headerText: 'Section Header',
    rowsData: [
      ['keyword1', 'key1', 'One'],
      ['keyword2', 'key2', 'Two'],
      ['keyword3', 'key3', 'Three'],
      ['keyword4', 'key4', 'Four'],
      ['keyword5', 'key5', 'Five'],
    ],
  },
};

export const WithNoRows: ContentSectionWithTableStory = {
  args: {
    headerText: 'Section Header',
    rowsData: [],
  },
};
