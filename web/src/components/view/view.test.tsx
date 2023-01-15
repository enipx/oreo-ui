import { render } from '@testing-library/react';
import React from 'react';

import { View } from './view';

describe('View', () => {
  test('renders view', async () => {
    render(<View />);
  });
});
