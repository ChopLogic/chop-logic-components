import { IconName } from '@enums';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import Header from '../Header';

vi.mock('@atoms', () => ({
  Icon: () => <span data-testid="choplogic-icon">Mock icon</span>,
}));

describe('Header component', () => {
  it('renders as h1 by default with correct content', () => {
    const testContent = 'Test Header';
    render(<Header>{testContent}</Header>);

    const header = screen.getByRole('heading', { level: 1 });
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent(testContent);
  });

  it.each(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const)(
    'renders as %s when specified',
    (level) => {
      render(<Header as={level}>{level} Header</Header>);
      const header = screen.getByRole('heading', { level: parseInt(level[1], 10) });
      expect(header).toBeInTheDocument();
      expect(header.tagName.toLowerCase()).toBe(level);
    },
  );

  it('applies custom className correctly', () => {
    const customClass = 'custom-class';
    render(<Header className={customClass}>Test</Header>);

    const header = screen.getByRole('heading');
    expect(header).toHaveClass(customClass);
  });

  it('renders icon when provided', () => {
    const testIcon = IconName.Delete;
    render(<Header icon={testIcon}>With Icon</Header>);

    const icon = screen.getByTestId('choplogic-icon');
    expect(icon).toBeInTheDocument();
  });

  it('does not render icon when not provided', () => {
    render(<Header>No Icon</Header>);

    const icons = screen.queryAllByTestId('choplogic-icon');
    expect(icons).toHaveLength(0);
  });

  it('passes additional HTML attributes to the heading element', () => {
    const testId = 'header-test-id';
    const headerId = 'main-header';
    render(
      <Header data-testid={testId} id={headerId}>
        Test
      </Header>,
    );

    const header = screen.getByTestId(testId);
    expect(header).toBeInTheDocument();
    expect(header).toHaveAttribute('id', 'main-header');
  });

  it('renders both icon and children correctly', () => {
    const testContent = 'Icon Header';
    const testIcon = IconName.Info;
    render(<Header icon={testIcon}>{testContent}</Header>);

    const header = screen.getByRole('heading');
    const icon = screen.getByTestId('choplogic-icon');

    expect(header).toHaveTextContent(testContent);
    expect(icon).toBeInTheDocument();
  });
});
