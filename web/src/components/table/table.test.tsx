import { render } from '@testing-library/react';
import React from 'react';

import { Table } from './table';

describe('Table', () => {
  test('renders Table', async () => {
    render(<Table />);
  });
});
