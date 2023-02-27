import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../button';
import { Popover } from './popover';

export default {
  title: 'Components/Popover',
  component: Popover,
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
  <>
    <div style={{ height: '100px' }} />
    <Popover {...args}>
      <Popover.Target>
        <Button text="Click me" />
      </Popover.Target>

      <Popover.Content>My name is Hashir</Popover.Content>
    </Popover>
    <div style={{ height: '100px' }} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  openDelay: 0,
  closeDelay: 0,
};
