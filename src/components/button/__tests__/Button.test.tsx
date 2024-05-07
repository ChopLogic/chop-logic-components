import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from '../Button';

describe('ChopLogicButton component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Button text='Test' id='test-id' className='test-class' />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have the accessible role', () => {
    render(<Button id='test-id' />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
