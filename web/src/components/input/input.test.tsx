import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { Input } from './input';

describe('Icon Button', () => {
  test('renders primary button with text', async () => {
    render(<Input />);

    const button = screen.getByText('Click me');

    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({
      backgroundColor: '#1ea7fd',
      color: 'white',
    });
  });
  test('handle onClick', async () => {
    const mockOnClick = jest.fn();

    render(<Input />);

    const button = screen.getByText('Click me');

    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
