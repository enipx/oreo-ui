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
  Divider,
  DefaultTheme,
  Show,
} from '@oreo-ui/native';
import { Toast } from './components/Toast';
import { ModalApi } from './components/Modal';
import { ModeButton } from './components/Button';
import useFontsLoading from './hooks/useCachedResources';
import { PreviewCard } from './components/Card';

const customTheme: DefaultTheme = {
  colors: {},
  fonts: {
    body: 'Inter-Medium',
    heading: 'Inter-SemiBold',
  },
};

export default function App() {
  const fontLoaded = useFontsLoading();

  const [isOpen, modalHandler] = useDisclosure(false);

  if (!fontLoaded) {
    return null;
  }

  return (
    <OreoProvider theme={{ ...customTheme }}>
      <Container px="lg" scrollable pb="xl">
        <ModeButton />

        <PreviewCard title="Text" description="Used to render a text.">
          <Text>This is a sample text</Text>
        </PreviewCard>

        <PreviewCard
          title="Button"
          description="Used to perform an action such as submission, cancellation, deletion or any other desired action.">
          <Button text="Button" mb="lg" />

          <Button text="Button" fullWidth mb="lg" />

          <Button
            loading
            loadingText="Loading"
            text="Button"
            mb="lg"
            fullWidth
            rounded
          />
        </PreviewCard>

        <PreviewCard title="Input" description="Used to add an input field.">
          <View mb="lg">
            <Input
              type="password"
              label="Email"
              hint="Please enter a valid email"
            />
          </View>

          <View mb="lg">
            <Input
              type="password"
              label="Email"
              hint="Please enter a valid email"
              state="invalid"
            />
          </View>

          <Input
            type="password"
            label="Email"
            hint="Please enter a valid email"
            disabled
          />
        </PreviewCard>

        <PreviewCard
          title="Textarea"
          description="Used to add multi-line text inputs">
          <View mb="lg">
            <Textarea label="Email" hint="Please enter a valid email" />
          </View>

          <View mb="lg">
            <Textarea
              label="Email"
              hint="Please enter a valid email"
              state="invalid"
            />
          </View>

          <Textarea label="Email" hint="Please enter a valid email" disabled />
        </PreviewCard>

        <PreviewCard
          title="Textarea"
          description="Used to add multi-line text inputs">
          <View mb="lg">
            <PinInput
              label="OTP"
              hint="Please enter a valid one time password"
              onFilled={(code) => console.log(code)}
            />
          </View>

          <View mb="lg">
            <PinInput
              label="OTP"
              hint="Please enter a valid one time password"
              onFilled={(code) => console.log(code)}
              type="password"
            />
          </View>

          <View mb="lg">
            <PinInput
              label="OTP"
              hint="Please enter a valid one time password"
              onFilled={(code) => console.log(code)}
              type="password"
              state="invalid"
            />
          </View>

          <PinInput
            label="OTP"
            hint="Please enter a valid one time password"
            onFilled={(code) => console.log(code)}
            disabled
          />
        </PreviewCard>

        <PreviewCard
          title="Select"
          description="Used to add a dropdown options.">
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
        </PreviewCard>

        <PreviewCard
          title="Checkbox"
          description="Used to add options and it is ticked upon activation">
          <View mb="lg">
            <Checkbox
              label="Remember me"
              description="Save my login details for next time."
              onChange={(checked) => {
                console.log({ checked });
              }}
            />
          </View>

          <View mb="lg">
            <Checkbox
              label="Remember me"
              description="Save my login details for next time."
              onChange={(checked) => {
                console.log({ checked });
              }}
              checked
            />
          </View>

          <View mb="lg">
            <Checkbox
              label="Remember me"
              description="Save my login details for next time."
              onChange={(checked) => {
                console.log({ checked });
              }}
              disabled
            />
          </View>

          <View>
            <Checkbox
              label="Remember me"
              description="Save my login details for next time."
              onChange={(checked) => {
                console.log({ checked });
              }}
              disabled
              checked
            />
          </View>
        </PreviewCard>

        <PreviewCard
          title="Radio"
          description=" Used to add options when only a single option can be selected from the given options.">
          <View mb="xl">
            <Radio
              data={[
                { label: 'Male', value: 'male' },
                { label: 'Female', value: 'female' },
              ]}
              onChange={(value) => {
                console.log({ value });
              }}
            />
          </View>
          <View>
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
          </View>
        </PreviewCard>

        <PreviewCard
          title="Switch"
          description="Used to add options and it is ticked upon activation">
          <View mb="lg">
            <Switch
              label="Remember me"
              description="Save my login details for next time."
              onChange={(checked) => {
                console.log({ checked });
              }}
            />
          </View>

          <View mb="lg">
            <Switch
              label="Remember me"
              description="Save my login details for next time."
              onChange={(checked) => {
                console.log({ checked });
              }}
              checked
            />
          </View>

          <View mb="lg">
            <Switch
              label="Remember me"
              description="Save my login details for next time."
              onChange={(checked) => {
                console.log({ checked });
              }}
              disabled
            />
          </View>

          <View>
            <Switch
              label="Remember me"
              description="Save my login details for next time."
              onChange={(checked) => {
                console.log({ checked });
              }}
              disabled
              checked
            />
          </View>
        </PreviewCard>

        <PreviewCard
          title="Modal"
          description="Used as a dialog that focuses the user's attention exclusively on an information via a window that is overlaid on primary content">
          <View>
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
          </View>

          <ModalApi />
        </PreviewCard>

        <PreviewCard
          title="Alert"
          description="Used to convey the state of an item to users">
          <Alert
            title="There are 5 different variants available"
            content="The description are avaliable in for different variants: gray, blue, red, green, orange"
            colorScheme="blue"
            variant="subtle"
            withCloseButton
            withIcon
          />
        </PreviewCard>

        <PreviewCard
          title="Toast"
          description="Used to give feedback to users after an action has taken place.">
          <Toast />
        </PreviewCard>

        <PreviewCard
          title="Accordion"
          description="Used to switch between hiding and viewing a more info about a content">
          <View mb="lg">
            <Accordion variant="separated">
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

          <View mb="lg">
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
        </PreviewCard>

        <PreviewCard
          title="Avatar"
          description="Used to add options when only a single option can be selected from the given options.">
          <View mb="lg">
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
            <Avatar
              name="Prosper Otemuyiwa"
              src="https://bit.ly/prosper-baba"
            />
            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
          </Avatar.Group>

          <View mt="lg">
            <Indicator>
              <Avatar name="Lawal Hashir" />
            </Indicator>
          </View>
        </PreviewCard>

        <PreviewCard
          title="Badge"
          description=" Used to emphasize the state of an item to quickly identify it.">
          <Flex spacing={8} mb="lg">
            <Badge>Default</Badge>

            <Badge colorScheme="green">SUCCESS</Badge>

            <Badge colorScheme="red">DANGER</Badge>

            <Badge colorScheme="blue">PENDING</Badge>

            <Badge colorScheme="purple">RECOMMEND</Badge>

            <Badge colorScheme="orange">BUSY</Badge>
          </Flex>

          <Flex spacing={8} mb="lg">
            <Badge variant="solid">Default</Badge>

            <Badge colorScheme="green" variant="solid">
              SUCCESS
            </Badge>

            <Badge colorScheme="red" variant="solid">
              DANGER
            </Badge>

            <Badge colorScheme="blue" variant="solid">
              PENDING
            </Badge>

            <Badge colorScheme="purple" variant="solid">
              RECOMMEND
            </Badge>

            <Badge colorScheme="orange" variant="solid">
              BUSY
            </Badge>
          </Flex>
        </PreviewCard>

        <PreviewCard
          title="Tabs"
          description="Used for switching between different views.">
          <View mb="lg">
            <Tabs
              variant="pills"
              withEqualWidth
              onTabChange={(val) => console.log(val)}>
              <Tabs.List>
                <Tabs.Item value="1" title="Item 1" />
                <Tabs.Item value="2" title="Item 2" />
                <Tabs.Item value="3" title="Item 3" />
              </Tabs.List>

              <Tabs.Panel py="md" value="1">
                <Text>Tab 1</Text>
              </Tabs.Panel>
              <Tabs.Panel py="md" value="2">
                <Text>Tab 2</Text>
              </Tabs.Panel>
              <Tabs.Panel py="md" value="3">
                <Text>Tab 3</Text>
              </Tabs.Panel>
            </Tabs>
          </View>
        </PreviewCard>

        <PreviewCard
          title="Skeleton"
          description="Used to add the loading state of some component.">
          <View mb="lg">
            <Skeleton width="40px" height="40px" rounded mb="md" />
            <Skeleton height="20px" borderRadius={12} count={3} />
          </View>
        </PreviewCard>

        <PreviewCard title="Image" description="Used to render image">
          <Image
            src="https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=320"
            size="100px"
            fallbackSrc="https://via.placeholder.com/320"
          />
        </PreviewCard>

        <PreviewCard
          title="Flex"
          description="Used to add a view with flex layout configured on it.">
          <View mb="lg">
            <Flex>
              <View bg="blue.500" size="40px" borderRadius="full" />
              <View bg="red.500" size="40px" borderRadius="full" />
              <View bg="green.500" size="40px" borderRadius="full" />
            </Flex>
          </View>

          <View mb="lg">
            <Flex spacing={20}>
              <View bg="blue.500" size="40px" borderRadius="full" />
              <View bg="red.500" size="40px" borderRadius="full" />
              <View bg="green.500" size="40px" borderRadius="full" />
            </Flex>
          </View>

          <View>
            <Flex>
              <View bg="blue.500" size="40px" borderRadius="full" />
              <Flex.Fill />
              <View bg="red.500" size="40px" borderRadius="full" />
              <Flex.Fill />
              <View bg="green.500" size="40px" borderRadius="full" />
            </Flex>
          </View>
        </PreviewCard>

        <PreviewCard
          title="Grid"
          description="Used to add a view with grid layout configured on it.">
          <View>
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
        </PreviewCard>

        <PreviewCard
          title="Spinner"
          description=" Used to add a processing awaiting a course of change or a result">
          <Spinner />
        </PreviewCard>

        <PreviewCard
          title="Divider"
          description="Used to add a line that groups content in lists and layouts">
          <Divider my="lg" />
        </PreviewCard>

        <PreviewCard
          title="Show / Hide"
          description="Used to conditionally render children elements based on whether the media query matches">
          <Show above={100}>
            <Text>Show text</Text>
          </Show>
        </PreviewCard>
      </Container>
    </OreoProvider>
  );
}
