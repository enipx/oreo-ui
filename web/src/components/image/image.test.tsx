import { render } from '@testing-library/react';
import React from 'react';

import { Image } from './image';

describe('Image', () => {
  test('renders image', async () => {
    render(<Image />);
  });
});
