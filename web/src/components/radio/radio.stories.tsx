import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Radio } from './radio';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Radio',
  component: Radio,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Radio>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
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
