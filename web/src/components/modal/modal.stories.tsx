import { ComponentStory, ComponentMeta } from '@storybook/react';

import { useDisclosure } from '../../hooks';
import { Button } from '../button';
import { Text } from '../text';
import { Modal } from './modal';

const StoryModal = (args: any) => {
  return (
    <Modal {...args}>
      <Text pb="md">
        Are you sure you want to continue? You’ll lose all your saved items, we
        can’t recover once this changes is made.
      </Text>
    </Modal>
  );
};

const StoryWrapper = (args: any) => {
  const [isOpen, handler] = useDisclosure(false);

  return (
    <>
      <Button text="Open modal" onClick={handler.open} />
      <StoryModal {...args} isOpen={isOpen} onClose={handler.close} />
      <div style={{ height: '2000px' }} />
    </>
  );
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Modal',
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => (
  <StoryWrapper {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: 'Discard changes',
  size: 'xs',
  withFooter: true,
  overlayBlur: '1px',
  overflow: 'inside',
  footerAlt: true,
};
