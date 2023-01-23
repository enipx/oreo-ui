import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { PinInput } from './pin-input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Pin Input',
  component: PinInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof PinInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PinInput> = (args) => (
  <PinInput {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: 'OTP',
  hint: 'Please enter a valid one time password',
  focusOnMounted: true,
};
