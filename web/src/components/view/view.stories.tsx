import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Text } from '../text';
import { View } from './view';

export default {
  title: 'Components/View',
  component: View,
  argTypes: {
    backgroundColor: { control: 'color' },
    bg: { control: 'color' },
  },
} as ComponentMeta<typeof View>;

const Template: ComponentStory<typeof View> = (args) => <View {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  bg: 'gray.100',
  size: '400px',
  children: <Text color="gray.500">This is a view</Text>,
  flexCenter: true,
  p: 'lg',
  mx: 'auto',
};
