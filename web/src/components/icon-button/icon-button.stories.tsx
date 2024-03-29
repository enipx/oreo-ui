import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { IconButton } from './icon-button';

export default {
  title: 'Components/Icon Button',
  component: IconButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Blue = Template.bind({});
Blue.args = {
  icon: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.4"
        d="M10.717 1.33333H12.9743C13.9092 1.33333 14.6667 2.09723 14.6667 3.03997V5.31635C14.6667 6.25909 13.9092 7.02299 12.9743 7.02299H10.717C9.78216 7.02299 9.02466 6.25909 9.02466 5.31635V3.03997C9.02466 2.09723 9.78216 1.33333 10.717 1.33333"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.02572 1.33333H5.28303C6.21788 1.33333 6.97538 2.09723 6.97538 3.03997V5.31635C6.97538 6.25909 6.21788 7.02299 5.28303 7.02299H3.02572C2.09088 7.02299 1.33337 6.25909 1.33337 5.31635V3.03997C1.33337 2.09723 2.09088 1.33333 3.02572 1.33333ZM3.02572 8.97701H5.28303C6.21788 8.97701 6.97538 9.74091 6.97538 10.6836V12.96C6.97538 13.9021 6.21788 14.6667 5.28303 14.6667H3.02572C2.09088 14.6667 1.33337 13.9021 1.33337 12.96V10.6836C1.33337 9.74091 2.09088 8.97701 3.02572 8.97701ZM12.9744 8.97701H10.717C9.7822 8.97701 9.0247 9.74091 9.0247 10.6836V12.96C9.0247 13.9021 9.7822 14.6667 10.717 14.6667H12.9744C13.9092 14.6667 14.6667 13.9021 14.6667 12.96V10.6836C14.6667 9.74091 13.9092 8.97701 12.9744 8.97701Z"
        fill="currentColor"
      />
    </svg>
  ),
  size: 'md',

  onClick: () => {
    alert('Clicked');
  },
};
