import { ComponentStory, ComponentMeta } from '@storybook/react';

import { View } from '../view';
import { Tooltip } from './tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <View flexCenterX padding="lg">
    <Tooltip {...args}>Hover on me</Tooltip>
  </View>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Hi, My name Hashir',
  openDelay: 0,
  closeDelay: 0,
  colorScheme: 'gray',
};
