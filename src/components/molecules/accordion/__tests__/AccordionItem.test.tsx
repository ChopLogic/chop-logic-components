import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { AccordionItem } from '../AccordionItem';

describe('AccordionItem', () => {
  const testProps = {
    summary: 'Test Summary',
  };

  it('renders correctly', () => {
    const { asFragment } = render(<AccordionItem {...testProps}>Test content</AccordionItem>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the summary text', () => {
    render(<AccordionItem {...testProps}>Test content</AccordionItem>);
    expect(screen.getByText(testProps.summary)).toBeInTheDocument();
  });

  it('renders children content', () => {
    const childrenText = 'This is the accordion content';
    render(<AccordionItem {...testProps}>{childrenText}</AccordionItem>);
    expect(screen.getByText(childrenText)).toBeInTheDocument();
  });

  it('sets proper aria-label on the icon', () => {
    render(<AccordionItem {...testProps}>Test content</AccordionItem>);
    const icon = screen.getByTestId('accordion-icon');
    expect(icon).toHaveAttribute('aria-label', 'Toggle Details');
  });

  it('renders the details element with correct semantic structure', () => {
    const { container } = render(<AccordionItem {...testProps}>Test content</AccordionItem>);
    const details = container.querySelector('details');
    expect(details).toBeInTheDocument();
  });

  it('renders the summary element inside details', () => {
    const { container } = render(<AccordionItem {...testProps}>Test content</AccordionItem>);
    const summary = container.querySelector('summary');
    expect(summary).toBeInTheDocument();
    expect(summary?.parentElement?.tagName).toBe('DETAILS');
  });

  it('wraps children content in a div', () => {
    const { container } = render(<AccordionItem {...testProps}>Test content</AccordionItem>);
    const details = container.querySelector('details');
    const contentDiv = details?.lastElementChild;
    expect(contentDiv?.tagName).toBe('DIV');
    expect(contentDiv?.textContent).toContain('Test content');
  });

  it('renders multiple children elements', () => {
    render(
      <AccordionItem {...testProps}>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
      </AccordionItem>,
    );
    expect(screen.getByText('Paragraph 1')).toBeInTheDocument();
    expect(screen.getByText('Paragraph 2')).toBeInTheDocument();
  });

  it('handles empty children gracefully', () => {
    const { container } = render(<AccordionItem {...testProps} />);
    const details = container.querySelector('details');
    const contentDiv = details?.lastElementChild;
    expect(contentDiv?.tagName).toBe('DIV');
  });

  it('handles special characters in summary text', () => {
    const specialSummary = 'Test Summary & Special Characters <>';
    render(<AccordionItem summary={specialSummary}>Test content</AccordionItem>);
    expect(screen.getByText(specialSummary)).toBeInTheDocument();
  });

  it('handles long content without issues', () => {
    const longContent = 'A'.repeat(1000);
    render(<AccordionItem {...testProps}>{longContent}</AccordionItem>);
    expect(screen.getByText(longContent)).toBeInTheDocument();
  });
});
