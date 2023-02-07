import * as React from 'react';

import {
  Container,
  View,
  OreoProvider,
  Button,
  Input,
  Textarea,
  PinInput,
  Checkbox,
  Radio,
  Switch,
  Select,
  Modal,
  useDisclosure,
  Text,
} from '@oreo-ui/native';

const customTheme = {
  colors: {
    primary: '#0f0',
  },
};

export default function App() {
  const [isOpen, modalHandler] = useDisclosure(false);

  return (
    <OreoProvider theme={customTheme}>
      <Container px="lg" scrollable pb="xl">
        <Text>Text</Text>
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

        <Button onPress={modalHandler.open} text="Open Modal" />

        <Modal
          title="Discard changes"
          isOpen={isOpen}
          onClose={modalHandler.close}
          withFooter
          removeContentMargin
          pos="bottom">
          {[...Array(1)].map((_item, _index) => (
            <Text my={_index === 0 ? '0' : 'lg'}>
              Are you sure you want to continue? You’ll lose all your saved
              items, we can’t recover once this changes is made.
            </Text>
          ))}
        </Modal>
      </Container>
    </OreoProvider>
  );
}
