import * as React from 'react';

import {
  Container,
  View,
  OreoProvider,
  DefaultTheme,
  Text,
  Button,
  IconButton,
} from '@oreo-ui/native';

const customTheme: DefaultTheme = {
  colors: {
    primary: '#0ff',
  },
};

export default function App() {
  return (
    <OreoProvider theme={customTheme}>
      <Container scrollable>
        <View flex={1} flexCenterX backgroundColor="blue.100" p="2" size={200}>
          <Text fontSize="3xl" color="red.500" textTransform="uppercase">
            Xello
          </Text>
        </View>
        <Button colorScheme="blue" text="Button" />
        <IconButton
          m="lg"
          size="lg"
          colorScheme="blue"
          icon={<Text color="white">P</Text>}
        />
      </Container>
    </OreoProvider>
  );
}
