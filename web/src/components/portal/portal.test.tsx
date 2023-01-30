import { render } from '@testing-library/react';
import React from 'react';

import { Portal } from './portal';

describe('Portal', () => {
  test('renders container', async () => {
    render(<Portal />);
  });
});
