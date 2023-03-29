import { render } from '@testing-library/react';
import React from 'react';

import { Show, Hide } from './show-hide';

describe('Show', () => {
  test('renders show', async () => {
    render(<Show />);
  });
});

describe('Hide', () => {
  test('renders hide', async () => {
    render(<Hide />);
  });
});
