import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Container } from './container';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Container',
  component: Container,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Container>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const Small = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Small.args = {
  type: 'sm',
  backgroundColor: 'primary',
  height: 400,
  p: 'base',
};
