import { render } from '@testing-library/react';
import React from 'react';

import { Divider } from './divider';

describe('Divider', () => {
  test('renders divider', async () => {
    render(<Divider />);
  });
});
