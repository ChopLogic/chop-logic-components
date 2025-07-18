import { render, screen } from '@testing-library/react';
import { PointerEventsCheckLevel, userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { PrimaryButton } from './PrimaryButton';

describe('PrimaryButton', () => {
  const testProps = {
    id: 'button-id',
    className: 'button-class',
    disabled: false,
    children: 'Button',
  };

  it('should have the accessible role', () => {
    render(<PrimaryButton {...testProps} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should have the passed className', () => {
    render(<PrimaryButton {...testProps} />);
    expect(screen.getByRole('button')).toHaveClass(testProps.className);
  });

  it('should call the callback function on click', async () => {
    const mockedCallback = vi.fn();
    render(<PrimaryButton {...testProps} onClick={mockedCallback} />);
    await userEvent.click(screen.getByRole('button'));
    expect(mockedCallback).toHaveBeenCalledOnce();
  });

  it('should not call the callback function on click if the button is disabled', async () => {
    const mockedCallback = vi.fn();
    render(<PrimaryButton {...testProps} onClick={mockedCallback} disabled={true} />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    await userEvent.click(button, {
      pointerEventsCheck: PointerEventsCheckLevel.Never,
    });
    expect(mockedCallback).not.toHaveBeenCalled();
  });

  it('should have focus on Tab press', () => {
    render(<PrimaryButton {...testProps} />);
    const button = screen.getByRole('button');
    expect(button).not.toHaveFocus();
    button.focus();
  });

  it('should call the callback function on Enter press', async () => {
    const mockedCallback = vi.fn();
    render(<PrimaryButton {...testProps} onClick={mockedCallback} />);
    const button = screen.getByRole('button');
    button.focus();
    await userEvent.keyboard('{Enter}');
    expect(mockedCallback).toHaveBeenCalledOnce();
  });
});
