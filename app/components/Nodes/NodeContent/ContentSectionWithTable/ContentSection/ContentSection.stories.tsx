import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { ContentSection } from './ContentSection';

const meta: Meta<typeof ContentSection> = {
  component: ContentSection,
};

export default meta;

type ContentSectionStory = StoryObj<typeof ContentSection>;

const ComponentForStory = () => <div>Section Content</div>;

export const Primary: ContentSectionStory = {
  args: {
    headerText: 'Section Header',
    children: <ComponentForStory />,
  },
};
