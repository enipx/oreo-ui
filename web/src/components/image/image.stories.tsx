import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Image } from './image';

export default {
  title: 'Components/Image',
  component: Image,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=320',
  fallbackSrc: 'https://via.placeholder.com/150',
  fallback: 'Hi, I`m the fallback',
};

export const Size = Template.bind({});
Size.args = {
  src: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=320',
  fallbackSrc: 'https://via.placeholder.com/100',
  size: '100px',
};

export const Fallback = Template.bind({});
Fallback.args = {
  src: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=320',
  fallbackSrc: 'https://via.placeholder.com/320',
};

export const Radius = Template.bind({});
Radius.args = {
  src: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=320',
  fallbackSrc: 'https://via.placeholder.com/100',
  size: '100px',
  borderRadius: 'full',
};
