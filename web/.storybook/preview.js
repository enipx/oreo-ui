import React from 'react';

import { OreoProvider } from '../src/system/provider';

export const decorators = [
  (Story) => (
    <OreoProvider theme={{
      mode: 'dark',
      colors: {
        primary: '#0ff',
      },
      fonts: {
        heading: 'inter',
        body: 'inter',
      }
    }}>
      <Story />
    </OreoProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}