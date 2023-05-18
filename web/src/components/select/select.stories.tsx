import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Select } from './select';

export default {
  title: 'Components/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'md',
  width: '280px',
  label: 'Email',
  hint: 'Please enter a valid email',
  type: 'password',
  placeholder: 'Select an option',
  data: [
    { value: 'female', title: 'Female' },
    { value: 'male', title: 'Male' },
    { value: 'others', title: 'Others' },
  ],
};
