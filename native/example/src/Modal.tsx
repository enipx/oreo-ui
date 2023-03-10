import * as React from 'react';

import { View, Button, useModal } from '@oreo-ui/native';

export const ModalApi = () => {
  const modal = useModal();

  return (
    <View>
      <Button
        colorScheme="gray"
        text="Show Modal API"
        my="lg"
        onPress={() => {
          modal.show({
            title: 'Discard changes',
            withFooter: true,
            removeContentMargin: true,
            pos: 'bottom',
          });
        }}
      />
    </View>
  );
};
