import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { useDisclosure } from '../../hooks';
import { Button } from '../button';
import { Text } from '../text';
import { Drawer } from './drawer';

const StoryDrawer = (args: any) => {
  return (
    <Drawer {...args}>
      <Text pb="md">
        Are you sure you want to continue? You’ll lose all your saved items, we
        can’t recover once this changes is made.
      </Text>
    </Drawer>
  );
};

const StoryWrapper = (args: any) => {
  const [isOpen, handler] = useDisclosure(false);

  return (
    <>
      <Button text="Open drawer" onClick={handler.open} />
      <StoryDrawer {...args} isOpen={isOpen} onClose={handler.close} />
      <div style={{ height: '2000px' }} />
    </>
  );
};

export default {
  title: 'Components/Drawer',
  component: Drawer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => (
  <StoryWrapper {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Discard changes',
  withFooter: true,
  overlayBlur: '1px',
  size: 'xs',
  pos: 'right',
};
