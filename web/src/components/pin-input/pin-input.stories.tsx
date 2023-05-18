import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PinInput } from './pin-input';
import React from 'react';

export default {
  title: 'Components/Pin Input',
  component: PinInput,
} as ComponentMeta<typeof PinInput>;

const Template: ComponentStory<typeof PinInput> = (args) => (
  <PinInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'OTP',
  hint: 'Please enter a valid one time password',
  focusOnMounted: true,
  size: '50px',
};
