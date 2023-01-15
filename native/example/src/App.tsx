import * as React from 'react';

import {
  Container,
  View,
  OreoProvider,
  DefaultTheme,
  Text,
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
        <View backgroundColor="primary" p="2" size={200}>
          <Text fontSize="3xl" color="red.500" textTransform="uppercase">
            Xello
          </Text>
        </View>
      </Container>
    </OreoProvider>
  );
}
