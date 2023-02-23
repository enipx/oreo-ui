import { ComponentStory, ComponentMeta } from '@storybook/react';

import { View } from '..';
import { Button } from '../button';
import { useToast } from './';

const StoryWrapper = (args: any) => {
  const toast = useToast();

  return (
    <View flexCenterY>
      <Button
        text="Show bottom toast"
        colorScheme="gray"
        mr="md"
        onClick={() => {
          toast.show({
            title: 'There are 5 different variants available',
            content:
              'The description are avaliable in for different variants: gray, blue, red, green, orange',

            withCloseButton: true,
          });
        }}
      />

      <Button
        text="Show top toast"
        colorScheme="gray"
        mr="md"
        onClick={() => {
          toast.show({
            title: 'There are 5 different variants available',
            content:
              'The description are avaliable in for different variants: gray, blue, red, green, orange',
            pos: 'top',
            withCloseButton: true,
          });
        }}
      />

      <Button
        text="Hide"
        colorScheme="gray"
        mr="md"
        onClick={() => {
          toast.hideAll();
        }}
      />
    </View>
  );
};

export default {
  title: 'Components/Toast',
  component: StoryWrapper,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof StoryWrapper>;

const Template: ComponentStory<typeof StoryWrapper> = (args) => (
  <StoryWrapper {...args} />
);

export const Default = Template.bind({});
Default.args = {};
