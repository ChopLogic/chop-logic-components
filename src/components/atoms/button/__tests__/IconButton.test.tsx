import { IconName } from '@enums';
import { render, screen } from '@testing-library/react';
import { PointerEventsCheckLevel, userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { IconButton } from '../../button/icon-button/IconButton';

describe('IconButton', () => {
  const testProps = {
    id: 'button-id',
    className: 'button-class',
    disabled: false,
    children: 'Button',
  };

  it('should have the accessible role', () => {
    render(<IconButton {...testProps} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should have the passed className', () => {
    render(<IconButton {...testProps} />);
    expect(screen.getByRole('button')).toHaveClass(testProps.className);
  });

  it('should call the callback function on click', async () => {
    const mockedCallback = vi.fn();
    render(<IconButton {...testProps} onClick={mockedCallback} />);
    await userEvent.click(screen.getByRole('button'));
    expect(mockedCallback).toHaveBeenCalledOnce();
  });

  it('should not call the callback function on click if the button is disabled', async () => {
    const mockedCallback = vi.fn();
    render(<IconButton {...testProps} onClick={mockedCallback} disabled={true} />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    await userEvent.click(button, {
      pointerEventsCheck: PointerEventsCheckLevel.Never,
    });
    expect(mockedCallback).not.toHaveBeenCalled();
  });

  it('should have focus on Tab press', () => {
    render(<IconButton {...testProps} />);
    const button = screen.getByRole('button');
    expect(button).not.toHaveFocus();
    button.focus();
  });

  it('should call the callback function on Enter press', async () => {
    const mockedCallback = vi.fn();
    render(<IconButton {...testProps} onClick={mockedCallback} />);
    const button = screen.getByRole('button');
    button.focus();
    await userEvent.keyboard('{Enter}');
    expect(mockedCallback).toHaveBeenCalledOnce();
  });

  describe('loading state', () => {
    it('should render Loader icon when isLoading is true and icon is provided', () => {
      render(<IconButton {...testProps} icon={IconName.Save} isLoading={true} />);

      const button = screen.getByRole('button');
      const icon = button.querySelector('.cl-icon-button__icon');

      expect(icon).toHaveClass('chop-icon__loader');
      expect(icon).toHaveClass('cl-button__icon_spinning');
    });

    it('should not call onClick when isLoading is true', async () => {
      const mockedCallback = vi.fn();
      render(<IconButton {...testProps} onClick={mockedCallback} isLoading={true} />);

      const button = screen.getByRole('button');
      await userEvent.click(button);

      expect(mockedCallback).not.toHaveBeenCalled();
    });

    it('should have aria-busy="true" when isLoading is true', () => {
      render(<IconButton {...testProps} isLoading={true} />);

      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-busy', 'true');
    });

    it('should have cl-button_loading class when isLoading is true', () => {
      render(<IconButton {...testProps} isLoading={true} />);

      const button = screen.getByRole('button');
      expect(button).toHaveClass('cl-button_loading');
    });

    it('should not have aria-busy when isLoading is false', () => {
      render(<IconButton {...testProps} isLoading={false} />);

      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-busy', 'false');
    });

    it('should not have cl-button_loading class when isLoading is false', () => {
      render(<IconButton {...testProps} isLoading={false} />);

      const button = screen.getByRole('button');
      expect(button).not.toHaveClass('cl-button_loading');
    });
  });
});
