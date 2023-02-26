import { render } from '@testing-library/react';
import React from 'react';

import { Tooltip } from './tooltip';

describe('Tooltip', () => {
  test('renders tooltip', async () => {
    render(<Tooltip />);
  });
});
