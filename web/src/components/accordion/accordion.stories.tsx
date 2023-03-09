import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Accordion } from './accordion';

export default {
  title: 'Components/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args}>
    <Accordion.Item value="item-1">
      <Accordion.Button text="Section 1 title" />

      <Accordion.Panel>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Accordion.Panel>
    </Accordion.Item>

    <Accordion.Item value="item-2">
      <Accordion.Button text="Section 2 title" />

      <Accordion.Panel>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Accordion.Panel>
    </Accordion.Item>
  </Accordion>
);

export const Default = Template.bind({});
Default.args = {};

export const Left = Template.bind({});
Left.args = {
  iconPosition: 'left',
};
