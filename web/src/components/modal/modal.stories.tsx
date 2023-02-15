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
      <Button text="Open modal" colorScheme="gray" onClick={handler.open} />
      <StoryModal {...args} isOpen={isOpen} onClose={handler.close} />
      <div style={{ height: '2000px' }} />
    </>
  );
};

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
  <StoryWrapper {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Discard changes',
  size: 'xs',
  withFooter: true,
  overlayBlur: '1px',
  overflow: 'inside',
  footerAlt: true,
};
