import { ComponentStory, ComponentMeta } from '@storybook/react';

import { View } from '../view';
import { Accordion } from './accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <View width="500px" border="1px solid gray.100">
    <Accordion {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Button text="Section 1 title" />

        <Accordion.Panel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.Button text="Section 2 title" />

        <Accordion.Panel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  </View>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
};

export const Seperated = Template.bind({});
Seperated.args = {
  variant: 'separated',
};

export const Left = Template.bind({});
Left.args = {
  iconPosition: 'left',
};
