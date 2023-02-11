import { render } from '@testing-library/react';
import React from 'react';

import { Alert } from './alert';

describe('Alert', () => {
  test('renders alert', async () => {
    render(<Alert />);
  });
});
