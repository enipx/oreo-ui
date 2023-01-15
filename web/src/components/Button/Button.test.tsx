import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import { Button } from './button';

describe('Button', () => {
  test('renders primary button with text', async () => {
    render(<Button primary label="Click me" />);

    const button = screen.getByText('Click me');

    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({
      backgroundColor: '#1ea7fd',
      color: 'white',
    });
  });

  test('renders secondary button with text', async () => {
    render(<Button label="Click me" />);

    const button = screen.getByText('Click me');

    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({
      backgroundColor: '#eeeeee',
      color: '#000',
    });
  });

  test('handle onClick', async () => {
    const mockOnClick = jest.fn();

    render(<Button label="Click me" onClick={mockOnClick} />);

    const button = screen.getByText('Click me');

    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
