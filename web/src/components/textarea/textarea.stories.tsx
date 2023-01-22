import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Textarea } from './textarea';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Textarea',
  component: Textarea,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Textarea>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  icon: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00016 2.33333C4.8755 2.33333 2.3335 4.87533 2.3335 7.99999C2.3335 11.1247 4.8755 13.6667 8.00016 13.6667C11.1248 13.6667 13.6668 11.1247 13.6668 7.99999C13.6668 4.87533 11.1248 2.33333 8.00016 2.33333M8.00016 14.6667C4.32416 14.6667 1.3335 11.676 1.3335 8C1.3335 4.324 4.32416 1.33333 8.00016 1.33333C11.6762 1.33333 14.6668 4.324 14.6668 8C14.6668 11.676 11.6762 14.6667 8.00016 14.6667"
        fill="#53617F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99609 8.91533C7.72009 8.91533 7.49609 8.69133 7.49609 8.41533V5.46933C7.49609 5.19333 7.72009 4.96933 7.99609 4.96933C8.27209 4.96933 8.49609 5.19333 8.49609 5.46933V8.41533C8.49609 8.69133 8.27209 8.91533 7.99609 8.91533"
        fill="#53617F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00252 11.1973C7.63385 11.1973 7.33252 10.8993 7.33252 10.5306C7.33252 10.1619 7.62785 9.86392 7.99585 9.86392H8.00252C8.37119 9.86392 8.66919 10.1619 8.66919 10.5306C8.66919 10.8993 8.37119 11.1973 8.00252 11.1973"
        fill="#53617F"
      />
    </svg>
  ),
  width: '320px',
  label: 'Email',
  hint: 'Please enter a valid email',
  placeholder: 'This is a placeholder...',
  resize: 'both',
};
