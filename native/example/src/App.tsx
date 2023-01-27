import * as React from 'react';

import {
  Container,
  View,
  OreoProvider,
  DefaultTheme,
  Button,
  Input,
  Textarea,
  PinInput,
  Checkbox,
  Radio,
  Switch,
  Select,
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
          // state="disabled"
          // disabled
        />

        <View my="lg">
          <Textarea
            label="Email"
            hint="Please enter a valid email"
            // state="disabled"
            // disabled
          />
        </View>

        <PinInput
          label="OTP"
          hint="Please enter a valid one time password"
          onFilled={(code) => console.log(code)}
          type="password"
          // state="disabled"
          // disabled
        />

        <View mt="lg">
          <Select
            label="Email"
            hint="Please enter a valid email"
            placeholder="Select an option"
          />
        </View>

        <View my="lg">
          <Checkbox
            label="Remember me"
            description="Save my login details for next time."
            onChange={(checked) => {
              console.log({ checked });
            }}
          />
        </View>

        <Radio
          data={[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
          ]}
          onChange={(value) => {
            console.log({ value });
          }}
          size="sm"
          horizontal
        />

        <View my="lg">
          <Switch
            label="Remember me"
            description="Save my login details for next time."
            onChange={(checked) => {
              console.log({ checked });
            }}
          />
        </View>
      </Container>
    </OreoProvider>
  );
}
