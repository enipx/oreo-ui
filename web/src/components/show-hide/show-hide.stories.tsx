import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Show as ShowElement, Hide as HideElement } from './show-hide';

export default {
  title: 'Components/Show-Hide',
  component: ShowElement,
} as ComponentMeta<typeof ShowElement>;

const Template: ComponentStory<typeof ShowElement> = (args) => (
  <ShowElement {...args} />
);

export const Show = Template.bind({});
Show.args = {
  above: 'lg',
  children: 'Show this only when device screen match the "lg" value',
};

const HideTemplate: ComponentStory<typeof HideElement> = (args) => (
  <HideElement {...args} />
);

export const Hide = HideTemplate.bind({});
Hide.args = {
  above: 'lg',
  children: 'Hide this only when device screen match the "lg" value',
};
