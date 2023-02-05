import { ComponentStory, ComponentMeta } from '@storybook/react';

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

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Drawer',
  component: Drawer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Drawer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Drawer> = (args) => (
  <StoryWrapper {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: 'Discard changes',
  withFooter: true,
  overlayBlur: '1px',
  size: 'xs',
  pos: 'right',
};
