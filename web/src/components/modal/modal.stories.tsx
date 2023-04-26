import { ComponentStory, ComponentMeta } from '@storybook/react';

import { useDisclosure } from '../../hooks';
import { Button } from '../button';
import { Text } from '../text';
import { View } from '../view';
import { Modal, useModal } from './';

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
    <View flexCenterX>
      <Button colorScheme="gray" text="Open modal" onClick={handler.open} />
      <StoryModal {...args} isOpen={isOpen} onClose={handler.close} />
      <div style={{ height: '2000px' }} />
    </View>
  );
};

const APIStoryWrapper = (args: any) => {
  const modal = useModal();

  return (
    <View flexCenterX>
      <Button
        text="Open modal"
        colorScheme="gray"
        mr="md"
        onClick={() => {
          modal.show({
            ...args,
          });
        }}
      />
    </View>
  );
};

export default {
  title: 'Components/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
  <StoryWrapper {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: 'Discard changes',
  size: 'xs',
  withFooter: true,
  removeContentMargin: true,
  removeContentPadding: true,
  hideCloseButton: true,
  borderRadius: '16px',
};

const APITemplate: ComponentStory<typeof Modal> = (args) => (
  <APIStoryWrapper {...args} />
);

export const API = APITemplate.bind({});
API.args = {
  title: 'Discard changes',
  size: 'xs',
  withFooter: true,
  overlayBlur: '1px',
  overflow: 'inside',
  footerAlt: true,
};
