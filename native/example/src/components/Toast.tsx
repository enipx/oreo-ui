import * as React from 'react';

import { View, Button, useToast } from '@oreo-ui/native';

export const Toast = () => {
  const toast = useToast();

  return (
    <View>
      <Button
        colorScheme="gray"
        text="Show toast"
        my="lg"
        onPress={() => {
          toast.show({
            title: 'There are 5 different variants available',
            content:
              'The description are avaliable in for different variants: gray, blue, red, green, orange',
          });
        }}
      />
    </View>
  );
};
