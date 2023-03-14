import { render } from '@testing-library/react';
import React from 'react';

import { Popover } from './dropdown';

describe('Popover', () => {
  test('renders popover', async () => {
    render(<Popover />);
  });
});
