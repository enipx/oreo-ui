import { ComponentStory, ComponentMeta } from '@storybook/react';

import { View } from '../view';
import { Flex } from './flex';

export default {
  title: 'Components/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => (
  <Flex {...args}>
    <View bg="blue.500" size="40px" borderRadius="full" />
    <View bg="red.500" size="40px" borderRadius="full" />
    <View bg="green.500" size="40px" borderRadius="full" />
  </Flex>
);

export const Default = Template.bind({});
Default.args = {};

export const Spacing = Template.bind({});
Spacing.args = {
  spacing: 'lg',
  wrap: true,
};

const FillTemplate: ComponentStory<typeof Flex> = (args) => (
  <Flex {...args}>
    <View bg="blue.500" size="40px" borderRadius="full" />
    <Flex.Fill />
    <View bg="red.500" size="40px" borderRadius="full" />
    <Flex.Fill />
    <View bg="green.500" size="40px" borderRadius="full" />
  </Flex>
);

export const Spacer = FillTemplate.bind({});
Spacer.args = {};
