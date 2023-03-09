import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../button';
import { View } from '../view';
import { Popover } from './popover';

export default {
  title: 'Components/Popover',
  component: Popover,
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
  <View padding="lg" flexCenterX>
    <View height="100px" />
    <Popover {...args}>
      <Popover.Target>
        <Button colorScheme="gray" text="Click me" />
      </Popover.Target>

      <Popover.Content p="base">My name is Hashir</Popover.Content>
    </Popover>
    <View height="100px" />
  </View>
);

export const Default = Template.bind({});
Default.args = {
  openDelay: 0,
  closeDelay: 0,
};
