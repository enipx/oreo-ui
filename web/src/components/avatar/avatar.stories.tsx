import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Indicator } from '../indicator';
import { Avatar } from './avatar';
import { AvatarGroup } from './avatar-group';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

// ** Default
export const Default = Template.bind({});
Default.args = {
  name: 'Lawal Hashir',
};

const AvatarGroupStory = (args: any) => {
  return (
    <Avatar.Group {...args}>
      <Avatar
        name="Random Image"
        src="https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&w=200"
      />
      <Avatar
        name="Random Image"
        src="https://images.pexels.com/photos/11608681/pexels-photo-11608681.jpeg?auto=compress&cs=tinysrgb&w=200&h=750&dpr=1"
      />
      <Avatar
        name="Random Image"
        src="https://images.pexels.com/photos/2738919/pexels-photo-2738919.jpeg?auto=compress&cs=tinysrgb&w=200&h=750&dpr=1"
      />
      <Avatar
        name="Random Image"
        src="https://images.pexels.com/photos/3936894/pexels-photo-3936894.jpeg?auto=compress&cs=tinysrgb&w=200&h=750&dpr=1"
      />
      <Avatar
        name="Random Image"
        src="https://images.pexels.com/photos/7562076/pexels-photo-7562076.jpeg?auto=compress&cs=tinysrgb&w=200&h=750&dpr=1"
      />
    </Avatar.Group>
  );
};

// ** Group
const GroupTemplate: ComponentStory<typeof AvatarGroup> = (args) => (
  <AvatarGroupStory {...args} />
);

export const Group = GroupTemplate.bind({});

Group.args = {
  size: 'md',
  max: 2,
};

// ** Badge
const BadgeTemplate: ComponentStory<typeof Indicator> = (args) => (
  <Indicator {...args}>
    <Avatar name="Lawal Hashir" size={args.size} />
  </Indicator>
);

export const Badge = BadgeTemplate.bind({});

Badge.args = {
  size: 'md',
  max: 2,
};
