import { render } from '@testing-library/react';
import React from 'react';

import { Container } from './container';

describe('Container', () => {
  test('renders container', async () => {
    render(<Container />);
  });
});
