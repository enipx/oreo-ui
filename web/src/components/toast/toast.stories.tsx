import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../button';
import { Toast } from './toast';

const StoryWrapper = (args: any) => {
  return (
    <>
      <Button
        text="Open toast"
        colorScheme="gray"
        onClick={() => {
          // Toast.show({
          //   title: 'There are 5 different variants available',
          //   children:
          //     'The description are avaliable in for different variants: gray, blue, red, green, orange',
          // });
        }}
      />
      <Toast />
      <div style={{ height: '2000px' }} />
    </>
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
