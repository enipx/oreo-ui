import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

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

const FlexGridTemplate: ComponentStory<typeof Flex> = (args) => (
  <Flex.Row {...args}>
    <Flex.Col col={{ base: 12, md: 4, lg: 6 }} bg="blue.500" height="100px">
      1
    </Flex.Col>

    <Flex.Col col={{ base: 12, md: 4, lg: 6 }} bg="green.500" height="100px">
      3
    </Flex.Col>

    <Flex.Col col={{ base: 12, md: 4, lg: 6 }} bg="red.500" height="100px">
      2
    </Flex.Col>
  </Flex.Row>
);

export const FlexGrid = FlexGridTemplate.bind({});
FlexGrid.args = {
  spacing: 'md',
};
