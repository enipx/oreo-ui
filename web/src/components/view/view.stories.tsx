import { ComponentStory, ComponentMeta } from '@storybook/react';

import { View } from './view';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/View',
  component: View,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof View>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof View> = (args) => <View {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  backgroundColor: 'blue.500',
  size: '400px',
  children: <p>Hi, My name is Hashir</p>,
  flexCenterY: true,
  p: 'lg',
};
