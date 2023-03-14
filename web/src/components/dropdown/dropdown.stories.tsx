import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../button';
import { View } from '../view';
import { Dropdown } from './index';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <View padding="lg" flexCenterX>
    <View height="100px" />
    <Dropdown {...args}>
      <Dropdown.Target>
        <Button colorScheme="blue" variant="subtle" text="Open" />
      </Dropdown.Target>

      <Dropdown.Content>
        <Dropdown.Item text="Action 1" />
        <Dropdown.Item text="Action 2" />

        <Dropdown.Item text="Action 3" />
      </Dropdown.Content>
    </Dropdown>
    <View height="100px" />
  </View>
);

export const Default = Template.bind({});
Default.args = {};

const TemplateDescription: ComponentStory<typeof Dropdown> = (args) => (
  <View padding="lg" flexCenterX>
    <View height="100px" />
    <Dropdown {...args}>
      <Dropdown.Target>
        <Button colorScheme="blue" variant="subtle" text="Open" />
      </Dropdown.Target>

      <Dropdown.Content>
        <Dropdown.Item
          text="Action 1"
          description="This compliments the action one action"
        />
        <Dropdown.Item
          text="Action 2"
          description="This compliments the action two action"
        />

        <Dropdown.Item
          text="Action 3"
          description="This compliments the action one action"
        />
      </Dropdown.Content>
    </Dropdown>
    <View height="100px" />
  </View>
);

export const Description = TemplateDescription.bind({});
Description.args = {};

const TemplateIconDescription: ComponentStory<typeof Dropdown> = (args) => (
  <View padding="lg" flexCenterX>
    <View height="100px" />
    <Dropdown {...args}>
      <Dropdown.Target>
        <Button colorScheme="blue" variant="subtle" text="Open" />
      </Dropdown.Target>

      <Dropdown.Content>
        <Dropdown.Item
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#53617F"
              aria-hidden="true"
              width="20"
              height="20">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          }
          text="Action 1"
          description="This compliments the action one action"
        />
        <Dropdown.Item
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#53617F"
              aria-hidden="true"
              width="20"
              height="20">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          }
          text="Action 2"
          description="This compliments the action two action"
        />

        <Dropdown.Item
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#53617F"
              aria-hidden="true"
              width="20"
              height="20">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          }
          text="Action 3"
          description="This compliments the action one action"
        />
      </Dropdown.Content>
    </Dropdown>
    <View height="100px" />
  </View>
);

export const Icon = TemplateIconDescription.bind({});
Icon.args = {};
