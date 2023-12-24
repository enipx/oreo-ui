# Oreo UI

Oreo is a cross-platform UI components library built for React and React Native designed to reduce the constraint faced when building products that span across both native and web platforms.

## Features

- Components & Styling: It includes a wide range of pre-built components, including `buttons`, `modals`, and more, fully customizable and offer a range of configuration options, making it easy to tailor them to your specific needs.

- Flexibility: You can effortlessly compose UI components of your ideal choice to create a seamless user experience.

- Dark mode: All components support dark mode.

## Installation

Install dependencies:

Web

```sh
$ yarn add @oreo-ui/web styled-components

# or

$ npm i @oreo-ui/web styled-components
```

Native

```sh
$ yarn add @oreo-ui/native @oreo-ui/core styled-components react-native-svg react-native-safe-area-context

# or

$ npm i @oreo-ui/native @oreo-ui/core styled-components react-native-svg react-native-safe-area-context
```

## Usage

Once you have installed the dependencies, the next step is to wrap your application root component with the `OreoProvider`.

```jsx
import { OreoProvider } from "@oreo-ui/web" | "@oreo-ui/native"

export default function App() {
  return <OreoProvider>{children}</OreoProvider>
}
```

Great! You're all set. You can now use Oreo throughout your application.

```jsx
import { Button } from "@oreo-ui/web" | "@oreo-ui/native"

function Example() {
  return <Button text="Button">
}
```

Full documentation available [here](https://oreo-ui.com/)

## Todo

- [ ] improve documentation (majorly to accommodate native users properly)
- [ ] write test
- [ ] enhance UI and accessibility

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT ©
