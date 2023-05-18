import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

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
  children: 'This is a view',
  flexCenter: true,
  p: 'lg',
  mx: 'auto',
  _mediaStyle: {
    base: {
      color: 'yellow',
    },
    md: {
      fontSize: '2rem',
      color: 'red',
    },
    lg: {
      fontSize: '3rem',
      color: 'blue',
    },
    xl: {
      fontSize: '4rem',
      color: 'black',
    },
  },
  _hover: {
    backgroundColor: '#000 !important',
    color: '#fff !important',
  },
};
