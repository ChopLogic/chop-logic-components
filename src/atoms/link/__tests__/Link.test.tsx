import { IconName } from '@enums';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import Link from '../Link';

// Mock the Icon component
vi.mock('@atoms', () => ({
  Icon: vi.fn(({ className, 'aria-hidden': ariaHidden }) => (
    <span className={className} aria-hidden={ariaHidden} data-testid="mock-icon" />
  )),
}));

describe('Link', () => {
  const defaultProps = {
    href: 'https://example.com',
    children: 'Example Link',
    target: '_blank',
    rel: 'noopener noreferrer',
    onClick: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the link with correct href and text', () => {
    render(<Link {...defaultProps} />);

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://example.com');
  });

  it('applies target and rel attributes', () => {
    render(<Link {...defaultProps} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('calls onClick handler when clicked', async () => {
    render(<Link {...defaultProps} />);

    const link = screen.getByRole('link');
    await userEvent.click(link);

    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('renders children correctly', () => {
    render(<Link {...defaultProps}>Custom Text</Link>);

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
  });

  it('does not throw error when onClick is not provided', async () => {
    const { href, children, target, rel } = defaultProps;
    render(
      <Link href={href} target={target} rel={rel}>
        {children}
      </Link>,
    );

    const link = screen.getByRole('link');
    await userEvent.click(link);

    expect(link).toBeInTheDocument();
  });

  describe('target handling', () => {
    it('sets _blank target for external links without explicit target', () => {
      render(<Link href="https://example.com">External Link</Link>);
      expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
    });

    it('uses provided target for external links', () => {
      render(
        <Link href="https://example.com" target="_self">
          External Link
        </Link>,
      );
      expect(screen.getByRole('link')).toHaveAttribute('target', '_self');
    });

    it('keeps target undefined for internal links', () => {
      render(<Link href="/internal">Internal Link</Link>);
      const link = screen.getByRole('link');
      expect(link.getAttribute('target')).toBeNull();
    });

    it('sets target to _blank for URLs starting with //', () => {
      render(<Link href="//example.com">Protocol-relative Link</Link>);
      expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
    });
  });

  describe('icon rendering', () => {
    it('renders icon on the left by default', () => {
      render(
        <Link {...defaultProps} icon={IconName.Search}>
          With Icon
        </Link>,
      );
      const icon = screen.getByTestId('mock-icon');
      const text = screen.getByText('With Icon');
      expect(icon.compareDocumentPosition(text)).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
    });

    it('renders icon on the right when specified', () => {
      render(
        <Link {...defaultProps} icon={IconName.Search} iconPosition="right">
          With Icon
        </Link>,
      );
      const icon = screen.getByTestId('mock-icon');
      const text = screen.getByText('With Icon');
      expect(icon.compareDocumentPosition(text)).toBe(Node.DOCUMENT_POSITION_PRECEDING);
    });

    it('applies correct aria-hidden to icon', () => {
      render(
        <Link {...defaultProps} icon={IconName.Search}>
          With Icon
        </Link>,
      );
      expect(screen.getByTestId('mock-icon')).toHaveAttribute('aria-hidden', 'true');
    });

    it('does not render icon when not provided', () => {
      render(<Link {...defaultProps}>No Icon</Link>);
      expect(screen.queryByTestId('mock-icon')).not.toBeInTheDocument();
    });
  });

  describe('aria-label handling', () => {
    it('adds (opens in new window) to aria-label for string children', () => {
      render(<Link href="https://example.com">Visit Site</Link>);
      expect(screen.getByRole('link')).toHaveAttribute(
        'aria-label',
        'Visit Site (opens in new window)',
      );
    });

    it('uses generic aria-label for non-string children', () => {
      render(
        <Link href="https://example.com">
          <span>Complex Content</span>
        </Link>,
      );
      expect(screen.getByRole('link')).toHaveAttribute('aria-label', 'Opens in new window');
    });

    it('does not add aria-label for internal links', () => {
      render(<Link href="/internal">Internal Link</Link>);
      expect(screen.getByRole('link')).not.toHaveAttribute('aria-label');
    });
  });
});
