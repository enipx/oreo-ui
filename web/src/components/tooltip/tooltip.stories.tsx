import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tooltip } from './tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <>
    <div style={{ height: '100px' }} />
    <Tooltip {...args}>Hover on me</Tooltip>
    <div style={{ height: '100px' }} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Hi, My name Hashir',
  openDelay: 0,
  closeDelay: 0,
  opened: true,
};
