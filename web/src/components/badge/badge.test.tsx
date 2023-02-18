import { render } from '@testing-library/react';
import React from 'react';

import { Container } from './badge';

describe('Container', () => {
  test('renders container', async () => {
    render(<Container />);
  });
});
