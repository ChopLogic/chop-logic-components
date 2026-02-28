import { ElementSize, IconName } from '@enums';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Icon from '../Icon';

describe('Icon', () => {
  it('should render nothing when name is not provided', () => {
    const { container } = render(<Icon />);
    expect(container.firstChild).toBeNull();
  });

  it('should render nothing when name is undefined', () => {
    const { container } = render(<Icon name={undefined} />);
    expect(container.firstChild).toBeNull();
  });

  it('should render icon with correct name class', () => {
    render(<Icon name={IconName.Activity} testId="test-icon" />);

    const icon = screen.getByTestId('test-icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('chop-icon__activity');
  });

  it('should render icon with default medium size class', () => {
    render(<Icon name={IconName.Activity} testId="test-icon" />);

    const icon = screen.getByTestId('test-icon');
    expect(icon).toHaveClass('cl-icon_medium');
  });

  it('should render icon with extra-small size class', () => {
    render(<Icon name={IconName.Activity} testId="test-icon" size={ElementSize.ExtraSmall} />);

    const icon = screen.getByTestId('test-icon');
    expect(icon).toHaveClass('cl-icon_extra-small');
    expect(icon).not.toHaveClass('cl-icon_medium');
  });

  it('should render icon with small size class', () => {
    render(<Icon name={IconName.Activity} testId="test-icon" size={ElementSize.Small} />);

    const icon = screen.getByTestId('test-icon');
    expect(icon).toHaveClass('cl-icon_small');
  });

  it('should render icon with large size class', () => {
    render(<Icon name={IconName.Activity} testId="test-icon" size={ElementSize.Large} />);

    const icon = screen.getByTestId('test-icon');
    expect(icon).toHaveClass('cl-icon_large');
  });

  it('should render icon with extra-large size class', () => {
    render(<Icon name={IconName.Activity} testId="test-icon" size={ElementSize.ExtraLarge} />);

    const icon = screen.getByTestId('test-icon');
    expect(icon).toHaveClass('cl-icon_xlarge');
  });

  it('should render icon with extra-extra-large size class', () => {
    render(<Icon name={IconName.Activity} testId="test-icon" size={ElementSize.ExtraExtraLarge} />);

    const icon = screen.getByTestId('test-icon');
    expect(icon).toHaveClass('cl-icon_2xlarge');
  });

  it('should always have base cl-icon class', () => {
    render(<Icon name={IconName.Activity} testId="test-icon" />);

    const icon = screen.getByTestId('test-icon');
    expect(icon).toHaveClass('cl-icon');
  });

  it('should apply custom className along with default classes', () => {
    render(<Icon name={IconName.Activity} testId="test-icon" className="custom-class" />);

    const icon = screen.getByTestId('test-icon');
    expect(icon).toHaveClass('custom-class');
    expect(icon).toHaveClass('cl-icon');
    expect(icon).toHaveClass('chop-icon__activity');
  });

  it('should set aria-hidden attribute when hidden is true', () => {
    render(<Icon name={IconName.Activity} testId="test-icon" hidden={true} />);

    const icon = screen.getByTestId('test-icon');
    expect(icon).toHaveAttribute('aria-hidden', 'true');
  });

  it('should set aria-hidden to false when hidden is false', () => {
    render(<Icon name={IconName.Activity} testId="test-icon" hidden={false} />);

    const icon = screen.getByTestId('test-icon');
    expect(icon).toHaveAttribute('aria-hidden', 'false');
  });

  it('should not set aria-hidden when hidden is not provided', () => {
    render(<Icon name={IconName.Activity} testId="test-icon" />);

    const icon = screen.getByTestId('test-icon');
    expect(icon).not.toHaveAttribute('aria-hidden');
  });

  it('should render as a span element', () => {
    render(<Icon name={IconName.Activity} testId="test-icon" />);

    const icon = screen.getByTestId('test-icon');
    expect(icon.tagName).toBe('SPAN');
  });

  it('should accept and apply data attributes', () => {
    render(<Icon name={IconName.Activity} testId="test-icon" data-custom="custom-value" />);

    const icon = screen.getByTestId('test-icon');
    expect(icon).toHaveAttribute('data-custom', 'custom-value');
  });

  it('should work with different icon names', () => {
    const { rerender } = render(<Icon name={IconName.Activity} testId="test-icon" />);

    let icon = screen.getByTestId('test-icon');
    expect(icon).toHaveClass('chop-icon__activity');

    rerender(<Icon name={IconName.AlertCircle} testId="test-icon" />);

    icon = screen.getByTestId('test-icon');
    expect(icon).toHaveClass('chop-icon__alert-circle');
    expect(icon).not.toHaveClass('chop-icon__activity');
  });

  it('should handle multiple size changes', () => {
    const { rerender } = render(
      <Icon name={IconName.Activity} testId="test-icon" size={ElementSize.Small} />,
    );

    let icon = screen.getByTestId('test-icon');
    expect(icon).toHaveClass('cl-icon_small');

    rerender(<Icon name={IconName.Activity} testId="test-icon" size={ElementSize.Large} />);

    icon = screen.getByTestId('test-icon');
    expect(icon).toHaveClass('cl-icon_large');
    expect(icon).not.toHaveClass('cl-icon_small');
  });

  it('should accept title attribute as rest prop', () => {
    render(<Icon name={IconName.Activity} testId="test-icon" title="Activity Icon" />);

    const icon = screen.getByTestId('test-icon');
    expect(icon).toHaveAttribute('title', 'Activity Icon');
  });

  it('should render with multiple props combined', () => {
    render(
      <Icon
        name={IconName.AlertTriangle}
        testId="test-icon"
        size={ElementSize.Large}
        className="custom"
        hidden={true}
        data-test="value"
        title="Warning"
      />,
    );

    const icon = screen.getByTestId('test-icon');
    expect(icon).toHaveClass('custom');
    expect(icon).toHaveClass('cl-icon');
    expect(icon).toHaveClass('chop-icon__alert-triangle');
    expect(icon).toHaveClass('cl-icon_large');
    expect(icon).toHaveAttribute('aria-hidden', 'true');
    expect(icon).toHaveAttribute('data-test', 'value');
    expect(icon).toHaveAttribute('title', 'Warning');
  });

  it('should not have aria-hidden attribute when hidden prop is not specified', () => {
    render(<Icon name={IconName.Activity} testId="test-icon" />);

    const icon = screen.getByTestId('test-icon');
    // Check that aria-hidden is not present
    expect(icon.getAttribute('aria-hidden')).toBeNull();
  });

  it('should render different icon variants correctly', () => {
    const iconVariants = [
      IconName.Activity,
      IconName.AlertCircle,
      IconName.ArrowDown,
      IconName.Award,
    ];

    iconVariants.forEach((iconName) => {
      const { unmount } = render(<Icon name={iconName} testId={`icon-${iconName}`} />);

      const icon = screen.getByTestId(`icon-${iconName}`);
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveClass(iconName);

      unmount();
    });
  });
});
