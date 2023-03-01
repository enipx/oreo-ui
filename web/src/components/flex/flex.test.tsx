import { render } from '@testing-library/react';
import React from 'react';

import { Flex } from './flex';

describe('Flex', () => {
  test('renders flex', async () => {
    render(<Flex />);
  });
});
