import { render } from '@testing-library/react';
import React from 'react';

import { Skeleton } from './skeleton';

describe('Skeleton', () => {
  test('renders skeleton', async () => {
    render(<Skeleton />);
  });
});
