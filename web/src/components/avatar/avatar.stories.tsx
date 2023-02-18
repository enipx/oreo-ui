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
      <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
      <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
      <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
      <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
      <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
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
