import { ComponentStory, ComponentMeta } from '@storybook/react';

import { View } from '../view';
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
    <View bg="blue.500" height="40px" />
    <View bg="red.500" height="40px" />
    <View bg="green.500" height="40px" />
    <View bg="green.500" height="40px" />
    <View bg="green.500" height="40px" />
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  columns: 3,
  spacing: '1rem',
};
