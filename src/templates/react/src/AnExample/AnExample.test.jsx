import React from 'react';
import { render, screen } from '@testing-library/react';
import AnExample from './index';

describe('AnExample', () => {
  it('renders example message', () => {
     render(<AnExample />);
     expect(screen.getByText('This is an example by')).toBeInTheDocument();
  });
});
