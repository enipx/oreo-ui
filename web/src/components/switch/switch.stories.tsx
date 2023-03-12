import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Switch } from './switch';

export default {
  title: 'Components/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Remember me',
  description: 'Save my login details for next time.',
  size: 'md',
};
