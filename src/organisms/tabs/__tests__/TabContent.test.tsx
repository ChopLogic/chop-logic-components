import type { ChopLogicTabItem } from '@models';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TabContent } from '../content/TabContent';

const mockTabs: ChopLogicTabItem[] = [
  {
    id: 'tab1',
    title: 'First Tab',
    content: <div data-testid="tab1-content">Content for Tab 1</div>,
  },
  {
    id: 'tab2',
    title: 'Second Tab',
    content: <div data-testid="tab2-content">Content for Tab 2</div>,
  },
  {
    id: 'tab3',
    title: 'Third Tab',
    content: <div data-testid="tab3-content">Content for Tab 3</div>,
  },
];

const defaultProps = {
  tabs: mockTabs,
  selectedTabId: 'tab1',
};

describe('TabContent', () => {
  it('renders tabpanel with correct role and attributes', () => {
    render(<TabContent {...defaultProps} />);

    const tabpanel = screen.getByRole('tabpanel');
    expect(tabpanel).toBeInTheDocument();
    expect(tabpanel).toHaveAttribute('aria-labelledby', 'tab1');
    expect(tabpanel).toHaveAttribute('id', 'tabpanel_tab1');
  });

  it('renders content for selected tab', () => {
    render(<TabContent {...defaultProps} />);

    expect(screen.getByTestId('tab1-content')).toBeInTheDocument();
    expect(screen.queryByTestId('tab2-content')).not.toBeInTheDocument();
    expect(screen.queryByTestId('tab3-content')).not.toBeInTheDocument();
  });

  it('renders different content when selectedTabId changes', () => {
    const { rerender } = render(<TabContent {...defaultProps} />);

    expect(screen.getByTestId('tab1-content')).toBeInTheDocument();
    expect(screen.queryByTestId('tab2-content')).not.toBeInTheDocument();

    // Change selected tab
    rerender(<TabContent {...defaultProps} selectedTabId="tab2" />);

    expect(screen.queryByTestId('tab1-content')).not.toBeInTheDocument();
    expect(screen.getByTestId('tab2-content')).toBeInTheDocument();
  });

  it('renders extended tab content when extendable is true and no content found', () => {
    const extendedContent = <div data-testid="extended-content">Extended Tab Content</div>;

    render(
      <TabContent
        {...defaultProps}
        selectedTabId="nonexistent-tab"
        extendable={true}
        extendedTabContent={extendedContent}
      />,
    );

    expect(screen.getByTestId('extended-content')).toBeInTheDocument();
    expect(screen.queryByTestId('tab1-content')).not.toBeInTheDocument();
  });

  it('renders regular content when extendable is true but content exists', () => {
    const extendedContent = <div data-testid="extended-content">Extended Tab Content</div>;

    render(
      <TabContent
        {...defaultProps}
        selectedTabId="tab2"
        extendable={true}
        extendedTabContent={extendedContent}
      />,
    );

    expect(screen.getByTestId('tab2-content')).toBeInTheDocument();
    expect(screen.queryByTestId('extended-content')).not.toBeInTheDocument();
  });

  it('renders nothing when extendable is false and no content found', () => {
    render(<TabContent {...defaultProps} selectedTabId="nonexistent-tab" extendable={false} />);

    const tabpanel = screen.getByRole('tabpanel');
    expect(tabpanel).toBeEmptyDOMElement();
  });

  it('renders nothing when extendable is undefined and no content found', () => {
    render(<TabContent {...defaultProps} selectedTabId="nonexistent-tab" />);

    const tabpanel = screen.getByRole('tabpanel');
    expect(tabpanel).toBeEmptyDOMElement();
  });

  it('handles empty tabs array', () => {
    render(<TabContent tabs={[]} selectedTabId="tab1" />);

    const tabpanel = screen.getByRole('tabpanel');
    expect(tabpanel).toBeInTheDocument();
    expect(tabpanel).toBeEmptyDOMElement();
  });

  it('updates aria attributes when selectedTabId changes', () => {
    const { rerender } = render(<TabContent {...defaultProps} />);

    let tabpanel = screen.getByRole('tabpanel');
    expect(tabpanel).toHaveAttribute('aria-labelledby', 'tab1');
    expect(tabpanel).toHaveAttribute('id', 'tabpanel_tab1');

    rerender(<TabContent {...defaultProps} selectedTabId="tab3" />);

    tabpanel = screen.getByRole('tabpanel');
    expect(tabpanel).toHaveAttribute('aria-labelledby', 'tab3');
    expect(tabpanel).toHaveAttribute('id', 'tabpanel_tab3');
  });

  it('handles tabs with complex content', () => {
    const complexTabs: ChopLogicTabItem[] = [
      {
        id: 'complex-tab',
        title: 'Complex Tab',
        content: (
          <div data-testid="complex-content">
            <h1>Title</h1>
            <p>Paragraph</p>
            <button>Click me</button>
          </div>
        ),
      },
    ];

    render(<TabContent tabs={complexTabs} selectedTabId="complex-tab" />);

    expect(screen.getByTestId('complex-content')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Title' })).toBeInTheDocument();
    expect(screen.getByText('Paragraph')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('handles multiple re-renders efficiently', () => {
    const { rerender } = render(<TabContent {...defaultProps} />);

    // Initial render
    expect(screen.getByTestId('tab1-content')).toBeInTheDocument();

    // Re-render with same props
    rerender(<TabContent {...defaultProps} />);
    expect(screen.getByTestId('tab1-content')).toBeInTheDocument();

    // Re-render with different selected tab
    rerender(<TabContent {...defaultProps} selectedTabId="tab2" />);
    expect(screen.getByTestId('tab2-content')).toBeInTheDocument();

    // Re-render back to original
    rerender(<TabContent {...defaultProps} selectedTabId="tab1" />);
    expect(screen.getByTestId('tab1-content')).toBeInTheDocument();
  });

  describe('Extended Tab Content Scenarios', () => {
    it('uses extended content when tab exists but has no content property', () => {
      const tabsWithMissingContent: ChopLogicTabItem[] = [
        { id: 'tab1', title: 'Tab 1', content: <div>Content 1</div> },
        { id: 'tab2', title: 'Tab 2' } as ChopLogicTabItem, // No content property
      ];

      const extendedContent = <div data-testid="extended-content">Default Content</div>;

      render(
        <TabContent
          tabs={tabsWithMissingContent}
          selectedTabId="tab2"
          extendable={true}
          extendedTabContent={extendedContent}
        />,
      );

      expect(screen.getByTestId('extended-content')).toBeInTheDocument();
    });

    it('uses extended content when tab content is null', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const tabsWithNullContent: ChopLogicTabItem[] = [
        { id: 'tab1', title: 'Tab 1', content: null as any },
      ];

      const extendedContent = <div data-testid="extended-content">Default Content</div>;

      render(
        <TabContent
          tabs={tabsWithNullContent}
          selectedTabId="tab1"
          extendable={true}
          extendedTabContent={extendedContent}
        />,
      );

      expect(screen.getByTestId('extended-content')).toBeInTheDocument();
    });

    it('uses extended content when tab content is undefined', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const tabsWithUndefinedContent: ChopLogicTabItem[] = [
        { id: 'tab1', title: 'Tab 1', content: undefined as any },
      ];

      const extendedContent = <div data-testid="extended-content">Default Content</div>;

      render(
        <TabContent
          tabs={tabsWithUndefinedContent}
          selectedTabId="tab1"
          extendable={true}
          extendedTabContent={extendedContent}
        />,
      );

      expect(screen.getByTestId('extended-content')).toBeInTheDocument();
    });
  });

  it('handles rapid tab switching', () => {
    const { rerender } = render(<TabContent {...defaultProps} selectedTabId="tab1" />);
    expect(screen.getByTestId('tab1-content')).toBeInTheDocument();

    rerender(<TabContent {...defaultProps} selectedTabId="tab2" />);
    expect(screen.getByTestId('tab2-content')).toBeInTheDocument();

    rerender(<TabContent {...defaultProps} selectedTabId="tab3" />);
    expect(screen.getByTestId('tab3-content')).toBeInTheDocument();

    rerender(<TabContent {...defaultProps} selectedTabId="tab1" />);
    expect(screen.getByTestId('tab1-content')).toBeInTheDocument();
  });

  it('maintains component integrity with invalid selectedTabId', () => {
    render(<TabContent {...defaultProps} selectedTabId="invalid-id-that-doesnt-exist" />);

    const tabpanel = screen.getByRole('tabpanel');
    expect(tabpanel).toBeInTheDocument();
    expect(tabpanel).toHaveAttribute('aria-labelledby', 'invalid-id-that-doesnt-exist');
    expect(tabpanel).toHaveAttribute('id', 'tabpanel_invalid-id-that-doesnt-exist');
    expect(tabpanel).toBeEmptyDOMElement();
  });
});
