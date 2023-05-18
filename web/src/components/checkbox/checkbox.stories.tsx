import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Checkbox } from './checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Remember me',
  description: 'Save my login details for next time.',
};

export const Checked = Template.bind({});
Checked.args = {
  label: 'Remember me',
  description: 'Save my login details for next time.',
  defaultChecked: true,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  label: 'Remember me',
  description: 'Save my login details for next time.',
  defaultChecked: true,
  indeterminate: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Remember me',
  description: 'Save my login details for next time.',
  disabled: true,
};
