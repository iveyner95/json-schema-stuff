import type { Meta, StoryObj } from '@storybook/react';

import { MinimizeIcon } from './MinimizeIcon';

const meta: Meta<typeof MinimizeIcon> = {
  component: MinimizeIcon,
};

export default meta;

type MinimizeIconStory = StoryObj<typeof MinimizeIcon>;

export const Primary: MinimizeIconStory = {
  args: {},
};
