import { render } from '@testing-library/react';
import React from 'react';

import { Accordion } from './tabs';

describe('Accordion', () => {
  test('renders container', async () => {
    render(<Accordion />);
  });
});
