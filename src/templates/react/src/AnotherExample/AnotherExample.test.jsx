import React from 'react';
import { render, screen } from '@testing-library/react';

import AnotherExample from './index';

describe('AnotherExample', () => {
  it('renders welcome message', () => {
     render(<AnotherExample />);
     expect(screen.getByText('This is another example by')).toBeInTheDocument();
  });
});
