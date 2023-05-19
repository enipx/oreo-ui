import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Grid } from './grid';

export default {
  title: 'Components/Grid',
  component: Grid,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => (
  <Grid {...args}>
    <Grid.Item col={{ base: 2, md: 3, lg: 1 }} bg="blue.500" height="40px" />
    <Grid.Item bg="red.500" height="40px" />
    <Grid.Item bg="green.500" height="40px" />
    <Grid.Item bg="green.500" height="40px" />
    <Grid.Item bg="green.500" height="40px" />
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  columns: 3,
  spacing: '1rem',
};
