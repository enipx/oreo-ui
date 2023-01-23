import * as React from 'react';

import {
  Container,
  View,
  OreoProvider,
  DefaultTheme,
  Text,
  Button,
  IconButton,
  Input,
  Textarea,
  PinInput,
} from '@oreo-ui/native';

const customTheme: DefaultTheme = {
  colors: {
    primary: '#0ff',
  },
};

export default function App() {
  return (
    <OreoProvider theme={customTheme}>
      <Container px="lg" scrollable>
        <Button colorScheme="blue" text="Button" my="lg" />

        <Input
          type="password"
          size="md"
          label="Email"
          hint="Please enter a valid email"
        />

        <View my="lg">
          <Textarea label="Email" hint="Please enter a valid email" />
        </View>

        <PinInput
          label="OTP"
          hint="Please enter a valid one time password"
          onFilled={(code) => console.log(code)}
          type="password"
        />
      </Container>
    </OreoProvider>
  );
}
