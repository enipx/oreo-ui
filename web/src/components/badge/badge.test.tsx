import { render } from '@testing-library/react';
import React from 'react';

import { Badge } from './badge';

describe('Badge', () => {
  test('renders Badge', async () => {
    render(<Badge />);
  });
});
