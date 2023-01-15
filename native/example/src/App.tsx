import * as React from 'react';

import { StyleSheet, Text, TextInput } from 'react-native';
import { Container, View, OreoProvider } from '@oreo-ui/native';

const customTheme = {
  colors: {
    primary: '#0ff',
  },
};

export default function App() {
  return (
    <OreoProvider theme={customTheme}>
      <Container scrollable>
        <View backgroundColor="primary" p="2" size={200}>
          <Text style={styles.text}>Xello</Text>
        </View>
      </Container>
    </OreoProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  text: {
    color: '#000',
    fontSize: 20,
  },
});
