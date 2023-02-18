import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tabs } from './tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => (
  <Tabs {...args}>
    <Tabs.List>
      <Tabs.Item value="1">Item 1</Tabs.Item>
      <Tabs.Item value="2">Item 2</Tabs.Item>
      <Tabs.Item value="3">Item 3</Tabs.Item>
    </Tabs.List>

    <Tabs.Panel value="1">Tab 1</Tabs.Panel>
    <Tabs.Panel value="2">Tab 2</Tabs.Panel>
    <Tabs.Panel value="3">Tab 3</Tabs.Panel>
  </Tabs>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'fenced',
};
