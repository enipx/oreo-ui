import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Spinner } from './spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'sm',
};

export const Thickness = Template.bind({});
Thickness.args = {
  thickness: '4px',
};

export const Duration = Template.bind({});
Duration.args = {
  duration: 200,
};

export const EmptyColor = Template.bind({});
EmptyColor.args = {
  emptyColor: 'gray.100',
};
