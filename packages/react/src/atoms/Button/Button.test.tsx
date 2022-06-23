import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from '.';

test('renders properly', () => {
  render(<Button label="test" />);

  expect(screen.getByRole('button')).toBeInTheDocument();
});

test('Calls function onClick', async () => {
  const onClick = jest.fn();
  render(<Button label="test" onClick={onClick} />);

  await userEvent.click(screen.getByRole('button'));

  expect(onClick).toHaveBeenCalled();
});
