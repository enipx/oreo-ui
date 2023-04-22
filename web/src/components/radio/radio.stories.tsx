import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Radio } from './radio';

export default {
  title: 'Components/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Remember me',
  description: '',
  name: 'gender',
  data: [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ],
  horizontal: true,
  onChange: (event) => {
    console.log(event.target.value);
  },
  defaultValue: 'female',
};
