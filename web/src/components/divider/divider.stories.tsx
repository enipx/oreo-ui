import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Divider } from './divider';

export default {
  title: 'Components/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => (
  <Divider {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Vertical = Template.bind({});
Vertical.args = {
  orientation: 'vertical',
  height: '100px',
};
