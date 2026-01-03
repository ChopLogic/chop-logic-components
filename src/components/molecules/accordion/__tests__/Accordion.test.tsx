import { render, screen } from '@testing-library/react';
import type { AccordionItemProps } from '@types';
import { describe, expect, it, vi } from 'vitest';

import Accordion from '../Accordion';

vi.mock('../AccordionItem', () => ({
  AccordionItem: vi.fn(({ summary, children }) => (
    <div data-testid="accordion-item" data-summary={summary}>
      <div className="accordion-item-summary">{summary}</div>
      <div className="accordion-item-content">{children}</div>
    </div>
  )),
}));

describe('Accordion', () => {
  const mockItems: AccordionItemProps[] = [
    { summary: 'Section 1', children: 'Content 1' },
    { summary: 'Section 2', children: 'Content 2' },
    { summary: 'Section 3', children: 'Content 3' },
  ];

  it('renders correctly with default props', () => {
    const { asFragment } = render(<Accordion items={mockItems} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders all items as AccordionItem components', () => {
    render(<Accordion items={mockItems} />);
    const items = screen.getAllByTestId('accordion-item');
    expect(items).toHaveLength(mockItems.length);
  });

  it('passes summary prop to AccordionItem', () => {
    render(<Accordion items={mockItems} />);
    const items = screen.getAllByTestId('accordion-item');
    mockItems.forEach((item, index) => {
      expect(items[index]).toHaveAttribute('data-summary', item.summary);
    });
  });

  it('passes children prop to AccordionItem', () => {
    render(<Accordion items={mockItems} />);
    mockItems.forEach((item) => {
      expect(screen.getByText(item.children as string)).toBeInTheDocument();
    });
  });

  it('renders empty state when items array is empty', () => {
    const { container } = render(<Accordion items={[]} />);
    const accordionDiv = container.firstChild as HTMLElement;
    expect(accordionDiv.children).toHaveLength(0);
  });

  it('applies custom className along with default styles', () => {
    const customClass = 'custom-accordion-class';
    const { container } = render(<Accordion items={mockItems} className={customClass} />);
    const accordionDiv = container.firstChild as HTMLElement;
    expect(accordionDiv.className).toContain(customClass);
  });

  it('applies default accordion styles', () => {
    const { container } = render(<Accordion items={mockItems} />);
    const accordionDiv = container.firstChild as HTMLElement;
    expect(accordionDiv.className).toBeTruthy();
  });

  it('uses summary as key for each item', () => {
    const itemsWithUniqueSummaries: AccordionItemProps[] = [
      { summary: 'Unique Summary 1', children: 'Content 1' },
      { summary: 'Unique Summary 2', children: 'Content 2' },
    ];
    render(<Accordion items={itemsWithUniqueSummaries} />);
    const items = screen.getAllByTestId('accordion-item');
    expect(items[0]).toHaveAttribute('data-summary', 'Unique Summary 1');
    expect(items[1]).toHaveAttribute('data-summary', 'Unique Summary 2');
  });

  it('handles single item', () => {
    const singleItem: AccordionItemProps[] = [
      { summary: 'Single Item', children: 'Single Content' },
    ];
    render(<Accordion items={singleItem} />);
    const items = screen.getAllByTestId('accordion-item');
    expect(items).toHaveLength(1);
  });

  it('handles many items', () => {
    const manyItems: AccordionItemProps[] = Array.from({ length: 10 }, (_, i) => ({
      summary: `Item ${i + 1}`,
      children: `Content ${i + 1}`,
    }));
    render(<Accordion items={manyItems} />);
    const items = screen.getAllByTestId('accordion-item');
    expect(items).toHaveLength(10);
  });

  it('handles items with complex children content', () => {
    const complexItems: AccordionItemProps[] = [
      {
        summary: 'Complex Item',
        children: (
          <div>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
          </div>
        ),
      },
    ];
    render(<Accordion items={complexItems} />);
    expect(screen.getByText('Paragraph 1')).toBeInTheDocument();
    expect(screen.getByText('Paragraph 2')).toBeInTheDocument();
  });

  it('renders with className prop only', () => {
    const { container } = render(<Accordion items={mockItems} className="custom-class" />);
    const accordionDiv = container.firstChild as HTMLElement;
    expect(accordionDiv.className).toContain('custom-class');
  });

  it('renders with both default styles and custom className', () => {
    const { container } = render(<Accordion items={mockItems} className="my-custom-accordion" />);
    const accordionDiv = container.firstChild as HTMLElement;
    const classes = accordionDiv.className.split(' ');
    expect(classes.length).toBeGreaterThan(1);
    expect(accordionDiv.className).toContain('my-custom-accordion');
  });
});
