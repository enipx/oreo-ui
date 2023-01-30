import { render } from '@testing-library/react';
import React from 'react';

import { Modal } from './modal';

describe('Modal', () => {
  test('renders container', async () => {
    render(<Modal />);
  });
});
