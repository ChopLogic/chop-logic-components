import { ButtonView, IconName } from '@enums';
import { fireEvent, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import Button from '../Button';

vi.mock('@components/hocs', () => ({
  withTooltip: vi.fn((Component) => Component),
  withFigureCaption: vi.fn((Component) => Component),
}));

describe('Button', () => {
  const defaultProps = {
    text: 'Click me',
    label: 'button-label',
    onClick: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders PrimaryButton by default', () => {
    render(<Button {...defaultProps} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('renders PrimaryButton with Primary view', () => {
    render(<Button {...defaultProps} view={ButtonView.Primary} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders SecondaryButton with Secondary view', () => {
    render(<Button {...defaultProps} view={ButtonView.Secondary} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders IconButton with Icon view', () => {
    render(<Button {...defaultProps} view={ButtonView.Icon} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders InnerButton with Inner view', () => {
    render(<Button {...defaultProps} view={ButtonView.Inner} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('passes onClick handler to the button', () => {
    const onClick = vi.fn();
    render(<Button {...defaultProps} onClick={onClick} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('passes disabled state to the button', () => {
    render(<Button {...defaultProps} disabled={true} />);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('passes type attribute to the button', () => {
    render(<Button {...defaultProps} type="submit" />);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
  });

  it('passes aria-label to the button', () => {
    render(<Button {...defaultProps} />);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'button-label');
  });

  it('passes additional props to the button', () => {
    const buttonId = 'test-button';
    render(<Button {...defaultProps} id={buttonId} title="Test Button" />);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('id', buttonId);
    expect(button).toHaveAttribute('title', 'Test Button');
  });

  it('renders only icon for IconButton view', () => {
    render(<Button {...defaultProps} view={ButtonView.Icon} icon={IconName.Save} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    // Text should not be rendered for icon buttons
    expect(screen.queryByText('Click me')).not.toBeInTheDocument();
  });

  it('handles different button types', () => {
    const { rerender } = render(<Button {...defaultProps} type="button" />);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');

    rerender(<Button {...defaultProps} type="reset" />);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'reset');

    rerender(<Button {...defaultProps} type="submit" />);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  it('returns null for unknown view type', () => {
    // @ts-expect-error Testing unknown view type
    render(<Button {...defaultProps} view="unknown" />);

    expect(screen.queryByTestId('primary-button')).not.toBeInTheDocument();
    expect(screen.queryByTestId('secondary-button')).not.toBeInTheDocument();
    expect(screen.queryByTestId('icon-button')).not.toBeInTheDocument();
    expect(screen.queryByTestId('inner-button')).not.toBeInTheDocument();
  });

  it('handles focus and blur events', () => {
    const onFocus = vi.fn();
    const onBlur = vi.fn();

    render(<Button {...defaultProps} onFocus={onFocus} onBlur={onBlur} />);

    const button = screen.getByRole('button');
    fireEvent.focus(button);
    fireEvent.blur(button);

    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  describe('loading state', () => {
    it('should render Loader icon when isLoading is true and icon is provided (Primary view)', () => {
      render(<Button {...defaultProps} icon={IconName.Save} isLoading={true} />);

      const button = screen.getByRole('button');
      const icon = button.querySelector('.cl-primary-button__icon');

      expect(icon).toHaveClass('chop-icon__loader');
      expect(icon).toHaveClass('cl-button__icon_spinning');
    });

    it('should render Loader icon when isLoading is true and icon is provided (Secondary view)', () => {
      render(
        <Button
          {...defaultProps}
          icon={IconName.Save}
          isLoading={true}
          view={ButtonView.Secondary}
        />,
      );

      const button = screen.getByRole('button');
      const icon = button.querySelector('.cl-secondary-button__icon');

      expect(icon).toHaveClass('chop-icon__loader');
      expect(icon).toHaveClass('cl-button__icon_spinning');
    });

    it('should render Loader icon when isLoading is true (Icon view)', () => {
      render(
        <Button {...defaultProps} icon={IconName.Save} isLoading={true} view={ButtonView.Icon} />,
      );

      const button = screen.getByRole('button');
      const icon = button.querySelector('.cl-icon-button__icon');

      expect(icon).toHaveClass('chop-icon__loader');
      expect(icon).toHaveClass('cl-button__icon_spinning');
    });

    it('should not call onClick when isLoading is true', async () => {
      const mockedCallback = vi.fn();
      render(<Button {...defaultProps} onClick={mockedCallback} isLoading={true} />);

      const button = screen.getByRole('button');
      await userEvent.click(button);

      expect(mockedCallback).not.toHaveBeenCalled();
    });

    it('should have aria-busy="true" when isLoading is true', () => {
      render(<Button {...defaultProps} isLoading={true} />);

      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-busy', 'true');
    });

    it('should have cl-button_loading class when isLoading is true', () => {
      render(<Button {...defaultProps} isLoading={true} />);

      const button = screen.getByRole('button');
      expect(button).toHaveClass('cl-button_loading');
    });

    it('should not have aria-busy when isLoading is false', () => {
      render(<Button {...defaultProps} isLoading={false} />);

      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-busy', 'false');
    });

    it('should not have cl-button_loading class when isLoading is false', () => {
      render(<Button {...defaultProps} isLoading={false} />);

      const button = screen.getByRole('button');
      expect(button).not.toHaveClass('cl-button_loading');
    });

    it('should pass isLoading prop to Secondary view button', () => {
      render(<Button {...defaultProps} isLoading={true} view={ButtonView.Secondary} />);

      const button = screen.getByRole('button');
      expect(button).toHaveClass('cl-button_loading');
      expect(button).toHaveAttribute('aria-busy', 'true');
    });

    it('should pass isLoading prop to Icon view button', () => {
      render(
        <Button {...defaultProps} icon={IconName.Save} isLoading={true} view={ButtonView.Icon} />,
      );

      const button = screen.getByRole('button');
      expect(button).toHaveClass('cl-button_loading');
      expect(button).toHaveAttribute('aria-busy', 'true');
    });
  });
});
