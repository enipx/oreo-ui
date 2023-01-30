import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Portal } from './portal';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Portal',
  component: Portal,
} as ComponentMeta<typeof Portal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Portal> = (args) => <Portal {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: <p>Portal: need to test portal</p>,
};
