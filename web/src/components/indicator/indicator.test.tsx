import { render } from '@testing-library/react';
import React from 'react';

import { Indicator } from './indicator';

describe('Indicator', () => {
  test('renders Indicator', async () => {
    render(<Indicator />);
  });
});
