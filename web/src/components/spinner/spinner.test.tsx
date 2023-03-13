import { render } from '@testing-library/react';
import React from 'react';

import { Spinner } from './spinner';

describe('Spinner', () => {
  test('renders Spinner', async () => {
    render(<Spinner />);
  });
});
