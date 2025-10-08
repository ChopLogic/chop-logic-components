import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import Link from '../Link';

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
});
