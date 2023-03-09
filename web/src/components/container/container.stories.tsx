import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Container } from './container';

export default {
  title: 'Components/Container',
  component: Container,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const Small = Template.bind({});
Small.args = {
  type: 'sm',
  backgroundColor: 'gray.500',
  height: '100vh',
};
