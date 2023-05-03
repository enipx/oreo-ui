import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Text } from './text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <Text
    css={`
      color: red;
    `}
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = {
  children: 'This is a text',
  as: 'sub',
};

export const Truncate = Template.bind({});
Truncate.args = {
  children:
    'Used to truncate the text with an ellipsis after computing the text layout, including line wrapping, such that the total number of lines does not exceed this number. Setting this property to 0 will result in unsetting this value, which means that no lines restriction will be applied.',
  numberOfLines: 1,
};

export const H1 = Template.bind({});
H1.args = {
  children: 'Heading 1',
  as: 'h1',
  fontWeight: 400,
};

export const H2 = Template.bind({});
H2.args = {
  children: 'Heading 2',
  as: 'h2',
};

export const H3 = Template.bind({});
H3.args = {
  children: 'Heading 3',
  as: 'h3',
};

export const H4 = Template.bind({});
H4.args = {
  children: 'Heading 4',
  as: 'h4',
};

export const H5 = Template.bind({});
H5.args = {
  children: 'Heading 5',
  as: 'h5',
};

export const H6 = Template.bind({});
H6.args = {
  children: 'Heading 6',
  as: 'h6',
};

export const Kbd = Template.bind({});
Kbd.args = {
  children: 'Shift + B',
  as: 'kbd',
};
