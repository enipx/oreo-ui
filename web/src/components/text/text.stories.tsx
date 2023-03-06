import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from './text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <Text
    css={`
      color: red;
    `}
    {...args}
  />
);

export const Primary = Template.bind({});
Primary.args = {
  fontSize: 'lg',
  children: 'Hi',
};
