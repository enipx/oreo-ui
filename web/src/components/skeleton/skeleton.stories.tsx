import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';

import { Button } from '../button';
import { View } from '../view';
import { Skeleton } from './skeleton';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  height: '20px',
  count: 3,
};

export const Round = Template.bind({});
Round.args = {
  size: '60px',
  rounded: true,
};

const LoadingStory = (props: any) => {
  const [loading, setLoading] = useState(true);

  return (
    <View flexCenter flexDirection="column" maxWidth="500px" mx="auto" my="lg">
      <Skeleton loaded={!loading} {...props}>
        <View>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </View>
      </Skeleton>

      <View my="xl">
        <Button
          text="Toggle"
          onClick={() => setLoading((prev) => !prev)}
          colorScheme="gray"
          variant="subtle"
        />
      </View>
    </View>
  );
};

const LoadingTemplate: ComponentStory<typeof Skeleton> = (args) => (
  <LoadingStory {...args} />
);

export const Loading = LoadingTemplate.bind({});
Loading.args = {
  height: '10px',
  count: 10,
};
