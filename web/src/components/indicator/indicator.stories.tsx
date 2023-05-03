import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Avatar } from '../avatar';
import { Indicator } from './indicator';

export default {
  title: 'Components/Indicator',
  component: Indicator,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Indicator>;

const Template: ComponentStory<typeof Indicator> = (args) => (
  <Indicator {...args}>
    <Avatar name="Lawal Hashir" size={args.size} />
  </Indicator>
);

export const Default = Template.bind({});
Default.args = {
  pos: 'bottom-left',
};
