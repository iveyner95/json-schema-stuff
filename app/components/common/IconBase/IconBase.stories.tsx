import type { Meta, StoryObj } from '@storybook/react';

import { IconBase, IconBaseProps } from './IconBase';

const IconBaseWithSVGIcon = ({ size, fill }: Omit<IconBaseProps, 'children'>) => {
  return (
    <IconBase size={size} fill={fill}>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M3 13.6493C3 16.6044 5.41766 19 8.4 19L16.5 19C18.9853 19 21 16.9839 21 14.4969C21 12.6503 19.8893 10.9449 18.3 10.25C18.1317 7.32251 15.684 5 12.6893 5C10.3514 5 8.34694 6.48637 7.5 8.5C4.8 8.9375 3 11.2001 3 13.6493Z"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
};

const meta: Meta<typeof IconBase> = {
  component: IconBaseWithSVGIcon,
};

export default meta;

type IconBaseStory = StoryObj<typeof IconBaseWithSVGIcon>;

export const Primary: IconBaseStory = {
  args: {
    size: '20px',
    fill: 'white',
  },
};
