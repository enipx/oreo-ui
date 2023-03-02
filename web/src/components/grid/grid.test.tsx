import { render } from '@testing-library/react';
import React from 'react';

import { Grid } from './grid';

describe('Grid', () => {
  test('renders grid', async () => {
    render(<Grid />);
  });
});
