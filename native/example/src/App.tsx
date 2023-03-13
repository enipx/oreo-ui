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
  Accordion,
  Alert,
  Avatar,
  Indicator,
  Badge,
  Tabs,
  Skeleton,
  Image,
  Flex,
  Grid,
  Spinner,
  useMode,
} from '@oreo-ui/native';
import { Toast } from './Toast';
import { ModalApi } from './Modal';

const customTheme = {
  colors: {
    primary: '#0f0',
  },
};

export default function App() {
  const [isOpen, modalHandler] = useDisclosure(false);

  const { mode, toggle: toggleMode } = useMode({ mode: 'light' });

  return (
    <OreoProvider theme={{ ...customTheme, mode }}>
      <Container px="lg" scrollable pb="xl">
        <Text>Text</Text>

        <Button
          colorScheme="gray"
          text="Button"
          my="lg"
          fullWidth
          rounded
          onPress={toggleMode}
        />

        <Input
          type="password"
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
            label="Select"
            hint="You can only select a single item at a time"
            placeholder="Select an option"
            data={[
              { id: 'general', value: '🧮 General' },
              { id: 'transport', value: '🚗 Transport' },
              { id: 'home', value: '🏡 Home' },
              { id: 'business', value: '💼 Business' },
              { id: 'groceries', value: '🛒 Groceries' },
              { id: 'food', value: '🍱 Food' },
              { id: 'shopping', value: '🛍️ Shopping' },
              { id: 'clothing', value: '👕 Clothing' },
              { id: 'miscellaneous', value: '🤪 Miscellaneous' },
            ]}
            onChange={(item) => {
              console.log({ item });
            }}
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
            <Text my={_index === 0 ? '0' : 'lg'} key={_index}>
              Are you sure you want to continue? You’ll lose all your saved
              items, we can’t recover once this changes is made.
            </Text>
          ))}
        </Modal>

        <ModalApi />

        <View marginY="lg">
          <Accordion>
            <Accordion.Item value="item-1">
              <Accordion.Button text="Section 1 title" />

              <Accordion.Panel
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat."
              />
            </Accordion.Item>

            <Accordion.Item value="item-2">
              <Accordion.Button text="Section 2 title" />

              <Accordion.Panel
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat."
              />
            </Accordion.Item>
          </Accordion>
        </View>

        <Alert
          title="There are 5 different variants available"
          content="The description are avaliable in for different variants: gray, blue, red, green, orange"
          colorScheme="blue"
          variant="subtle"
          withCloseButton
          withIcon
        />

        <View my="lg">
          <Avatar
            name="Lawal Hashir"
            src="https://bit.ly/ryan-florence"
            colorScheme="purple"
          />
        </View>

        <Avatar.Group max={3}>
          <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
          <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
          <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
          <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
          <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
        </Avatar.Group>

        <View my="lg">
          <Indicator>
            <Avatar name="Lawal Hashir" />
          </Indicator>
        </View>

        <Badge colorScheme="blue" fontSize="sm">
          DEFAULT
        </Badge>

        <Badge colorScheme="blue" fontSize="sm" rounded mt="lg">
          DEFAULT
        </Badge>

        <View my="lg">
          <Tabs
            variant="pills"
            withEqualWidth
            onTabChange={(val) => console.log(val)}>
            <Tabs.List>
              <Tabs.Item value="1" title="Item 1" />
              <Tabs.Item value="2" title="Item 2" />
              <Tabs.Item value="3" title="Item 3" />
            </Tabs.List>

            <Tabs.Panel value="1">
              <Text>Tab 1</Text>
            </Tabs.Panel>
            <Tabs.Panel value="2">
              <Text>Tab 2</Text>
            </Tabs.Panel>
            <Tabs.Panel value="3">
              <Text>Tab 3</Text>
            </Tabs.Panel>
          </Tabs>
        </View>

        <Toast />

        <View my="lg">
          <Skeleton width="40px" height="40px" rounded mb="md" />
          <Skeleton height="20px" borderRadius={12} count={3} />
        </View>

        <Image
          src="https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=320"
          size="200px"
          fallbackSrc="https://via.placeholder.com/320"
        />

        <View my="lg">
          <Flex>
            <View bg="blue.500" size="40px" borderRadius="full" />
            <View bg="red.500" size="40px" borderRadius="full" />
            <View bg="green.500" size="40px" borderRadius="full" />
          </Flex>
        </View>

        <View my="lg">
          <Flex spacing={20}>
            <View bg="blue.500" size="40px" borderRadius="full" />
            <View bg="red.500" size="40px" borderRadius="full" />
            <View bg="green.500" size="40px" borderRadius="full" />
          </Flex>
        </View>

        <View my="lg">
          <Flex>
            <View bg="blue.500" size="40px" borderRadius="full" />
            <Flex.Fill />
            <View bg="red.500" size="40px" borderRadius="full" />
            <Flex.Fill />
            <View bg="green.500" size="40px" borderRadius="full" />
          </Flex>
        </View>

        <View my="lg">
          <Grid columns={3} spacing={2}>
            <View bg="blue.500" height="80px" />
            <View bg="blue.500" height="80px" />
            <View bg="blue.500" height="80px" />
            <View bg="blue.500" height="80px" />
            <View bg="blue.500" height="80px" />
            <View bg="blue.500" height="80px" />
            <View bg="blue.500" height="80px" />
            <View bg="blue.500" height="80px" />
          </Grid>
        </View>

        <Spinner />
      </Container>
    </OreoProvider>
  );
}
