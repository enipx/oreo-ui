import { render } from '@testing-library/react';
import React from 'react';

import { Scrollbar } from './scrollbar';

describe('Scrollbar', () => {
  test('renders scroolbar', async () => {
    render(<Scrollbar />);
  });
});
