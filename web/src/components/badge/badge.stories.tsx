import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Badge } from './badge';

export default {
  title: 'Components/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'DEFAULT',
};

export const Rounded = Template.bind({});
Rounded.args = {
  children: 'DEFAULT',
  rounded: true,
};
