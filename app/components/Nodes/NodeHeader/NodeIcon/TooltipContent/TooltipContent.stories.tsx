import type { Meta, StoryObj } from '@storybook/react';
import { TooltipContent, TooltipContentProps } from './TooltipContent';

const meta: Meta<typeof TooltipContent> = {
  component: TooltipContent,
};

export default meta;

type TooltipContentStory = StoryObj<typeof TooltipContent>;

const nodeIconProps: TooltipContentProps = {
  headerText: 'Header Text',
  text: 'description text',
};

export const Primary: TooltipContentStory = {
  args: {
    ...nodeIconProps,
  },
};
