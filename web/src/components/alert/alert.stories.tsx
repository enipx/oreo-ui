import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Alert } from './alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'There are 5 different variants available',
  children:
    'The description are avaliable in for different variants: gray, blue, red, green, orange',
  maxWidth: '375px',
};
