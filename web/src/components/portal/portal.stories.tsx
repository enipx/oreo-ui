import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Text } from '../text';
import { Portal } from './portal';

export default {
  title: 'Components/Portal',
  component: Portal,
} as ComponentMeta<typeof Portal>;

const Template: ComponentStory<typeof Portal> = (args) => <Portal {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <Text>Portal: This should be render in the portal dom</Text>,
};
