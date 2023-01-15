import { render } from '@testing-library/react';
import React from 'react';

import { Text } from './text';

describe('Text', () => {
  test('renders text', async () => {
    render(<Text />);
  });
});
