import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { withTooltip } from '../index.tsx';

vi.mock('@atoms', () => ({
  ChopLogicTooltip: ({ children, tooltipContent }: { tooltipContent: string } & React.PropsWithChildren) => (
    <div data-testid='tooltip' data-tooltip={tooltipContent}>
      {children}
    </div>
  ),
}));

// Mocked Component
const MockComponent = ({ label }: { label: string }) => <button>{label}</button>;

describe('withTooltip HOC', () => {
  it('renders the wrapped component without ChopLogicTooltip if no tooltip is provided', () => {
    const WrappedComponent = withTooltip(MockComponent);

    render(<WrappedComponent label='Click me' />);

    // Assert that the MockComponent is rendered
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();

    // Assert that ChopLogicTooltip is not rendered
    expect(screen.queryByTestId('tooltip')).not.toBeInTheDocument();
  });

  it('wraps the component with ChopLogicTooltip when a tooltip is provided', () => {
    const WrappedComponent = withTooltip(MockComponent);

    render(<WrappedComponent label='Click me' tooltip='Tooltip text' />);

    // Assert that ChopLogicTooltip is rendered with the correct content
    const tooltip = screen.getByTestId('tooltip');
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveAttribute('data-tooltip', 'Tooltip text');

    // Assert that the MockComponent is still rendered inside the tooltip
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('passes down props correctly to the wrapped component', () => {
    const WrappedComponent = withTooltip(MockComponent);

    render(<WrappedComponent label='Click me' tooltip='Tooltip text' />);

    // Assert that the MockComponent received and rendered the "label" prop
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('passes the visibleOn prop to ChopLogicTooltip when provided', () => {
    const WrappedComponent = withTooltip(MockComponent);

    render(<WrappedComponent label='Click me' tooltip='Tooltip text' visibleOn='hover' />);

    // Assert that ChopLogicTooltip is rendered with the correct "visibleOn" prop
    const tooltip = screen.getByTestId('tooltip');
    expect(tooltip).toBeInTheDocument();
  });
});
