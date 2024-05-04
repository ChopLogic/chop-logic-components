import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from '../components/button/Button';

describe('ChopLogicButton component', () => {
  it('should render correctly', () => {
    render(<Button />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
