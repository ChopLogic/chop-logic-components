import { render, screen } from '@testing-library/react';
import type { FC } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { withErrorBoundary } from '../with-error-boundary';

const QuietChild: FC<{ text: string }> = ({ text }) => <span>{text}</span>;

const QuietChildWithExtra: FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <span>
    {title}: {subtitle}
  </span>
);

const ThrowingChild: FC = () => {
  throw new Error('render error');
};

/** Throws from a descendant; boundary still catches it. */
const DeepThrowParent: FC = () => <ThrowingChild />;

describe('withErrorBoundary', () => {
  let consoleSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('renders the wrapped component when no error occurs', () => {
    const Wrapped = withErrorBoundary(QuietChild);

    render(<Wrapped text="hello" />);

    expect(screen.getByText('hello')).toBeInTheDocument();
  });

  it('forwards all wrapped props to the inner component', () => {
    const Wrapped = withErrorBoundary(QuietChildWithExtra);

    render(<Wrapped title="Main" subtitle="detail" />);

    expect(screen.getByText('Main: detail')).toBeInTheDocument();
  });

  it('does not invoke onError when rendering succeeds', () => {
    const onError = vi.fn();
    const Wrapped = withErrorBoundary(QuietChild);

    render(<Wrapped text="ok" onError={onError} />);

    expect(onError).not.toHaveBeenCalled();
  });

  it('shows ErrorMessage when the wrapped component throws during render', () => {
    const Wrapped = withErrorBoundary(ThrowingChild);

    render(<Wrapped />);

    expect(screen.getByText('Error!')).toBeInTheDocument();
  });

  it('shows ErrorMessage when a descendant throws during render', () => {
    const Wrapped = withErrorBoundary(DeepThrowParent);

    render(<Wrapped />);

    expect(screen.getByText('Error!')).toBeInTheDocument();
  });

  it('shows custom errorMessage when provided', () => {
    const Wrapped = withErrorBoundary(ThrowingChild);

    render(<Wrapped errorMessage="Something broke" />);

    expect(screen.getByText('Something broke')).toBeInTheDocument();
  });

  it('sets ErrorMessage id with the cl-error-boundary prefix', () => {
    const Wrapped = withErrorBoundary(ThrowingChild);

    render(<Wrapped />);

    const message = screen.getByText('Error!');
    expect(message).toHaveAttribute('id', expect.stringMatching(/^cl-error-boundary-/));
  });

  it('calls onError once when an error is caught', () => {
    const onError = vi.fn();
    const Wrapped = withErrorBoundary(ThrowingChild);

    render(<Wrapped onError={onError} />);

    expect(onError).toHaveBeenCalledTimes(1);
  });

  it('shows custom errorMessage and calls onError when an error is caught', () => {
    const onError = vi.fn();
    const Wrapped = withErrorBoundary(ThrowingChild);

    render(<Wrapped errorMessage="Handled" onError={onError} />);

    expect(screen.getByText('Handled')).toBeInTheDocument();
    expect(onError).toHaveBeenCalledTimes(1);
  });
});
