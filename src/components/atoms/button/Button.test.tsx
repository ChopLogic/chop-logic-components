import { ChopLogicButtonView, ChopLogicIconName } from '@enums';
import { render, screen } from '@testing-library/react';
import { PointerEventsCheckLevel, userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import Button from './Button.tsx';

describe('ChopLogicButton', () => {
  const testProps = {
    id: 'button-id',
    text: 'Test button',
    icon: ChopLogicIconName.Copy,
    className: 'button-class',
    view: ChopLogicButtonView.Primary,
    disabled: false,
  };

  it('should have the accessible role', () => {
    render(<Button {...testProps} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should not render the text if view is icon', () => {
    render(<Button {...testProps} view={ChopLogicButtonView.Icon} />);
    expect(screen.queryByRole(testProps.text)).not.toBeInTheDocument();
  });

  it('should call the callback function on click', async () => {
    const mockedCallback = vi.fn();
    render(<Button {...testProps} onClick={mockedCallback} />);
    await userEvent.click(screen.getByRole('button'));
    expect(mockedCallback).toHaveBeenCalledOnce();
  });

  it('should not call the callback function on click if the button is disabled', async () => {
    const mockedCallback = vi.fn();
    render(<Button {...testProps} onClick={mockedCallback} disabled={true} />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    await userEvent.click(button, {
      pointerEventsCheck: PointerEventsCheckLevel.Never,
    });
    expect(mockedCallback).not.toHaveBeenCalled();
  });

  it('should have focus on Tab press', () => {
    render(<Button {...testProps} />);
    const button = screen.getByRole('button');
    expect(button).not.toHaveFocus();
    button.focus();
  });

  it('should call the callback function on Enter press', async () => {
    const mockedCallback = vi.fn();
    render(<Button {...testProps} onClick={mockedCallback} />);
    const button = screen.getByRole('button');
    button.focus();
    await userEvent.keyboard('{Enter}');
    expect(mockedCallback).toHaveBeenCalledOnce();
  });
});
