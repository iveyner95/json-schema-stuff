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
      ['key1', 'One'],
      ['key2', 'Two'],
      ['key3', 'Three'],
      ['key4', 'Four'],
      ['key5', 'Five'],
    ],
  },
};

export const WithNoRows: ContentSectionWithTableStory = {
  args: {
    headerText: 'Section Header',
    rowsData: [],
  },
};
