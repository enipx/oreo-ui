import React from 'react';

import { OreoProvider } from '../src/system/provider';

export const decorators = [
  (Story) => (
    <OreoProvider theme={{
        colors: {
        primary: '#0ff',
        
      },
      mode: 'dark'
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