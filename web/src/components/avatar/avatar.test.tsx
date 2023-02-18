import { render } from '@testing-library/react';
import React from 'react';

import { Avatar } from './avatar';

describe('Avatar', () => {
  test('renders Avatar', async () => {
    render(<Avatar />);
  });
});
