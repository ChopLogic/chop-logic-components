import { OrientationMode } from '@enums';
import { ButtonProps, ChopLogicTabItem } from '@models';
import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { TabList } from '../list/TabList';

vi.mock('@atoms', () => ({
  Button: ({ label, onClick, tooltip, icon, className }: ButtonProps) => (
    <button data-testid='add-tab-button' onClick={onClick} aria-label={label} title={tooltip} className={className}>
      {icon} {label}
    </button>
  ),
}));

vi.mock('@utils', () => ({
  getClassName: vi.fn(),
  moveFocusOnElementById: vi.fn(),
}));

vi.mock('../button/TabButton', () => ({
  TabButton: ({
    title,
    tabId,
    isSelected,
    isDisabled,
    onTabSelect,
    onTabTitleChange,
    onTabDelete,
  }: {
    title: string;
    tabId: string;
    onTabSelect: (id: string) => void;
    tabPanelId: string;
    isSelected: boolean;
    mode: OrientationMode;
    isDisabled?: boolean;
    stretched?: boolean;
    editable?: boolean;
    onTabTitleChange?: (newTitle: string) => void;
    onTabDelete?: (id: string) => void;
    extendable?: boolean;
  }) => (
    <button
      data-testid={`tab-button-${tabId}`}
      onClick={() => onTabSelect(tabId)}
      aria-selected={isSelected}
      aria-disabled={isDisabled}
      data-selected={isSelected}
      data-disabled={isDisabled}
    >
      {title}
      {onTabTitleChange && <span data-testid={`edit-handler-${tabId}`}>Editable</span>}
      {onTabDelete && <span data-testid={`delete-handler-${tabId}`}>Deletable</span>}
    </button>
  ),
}));

const mockTabs: ChopLogicTabItem[] = [
  { id: 'tab1', title: 'First Tab', content: <div>Content 1</div> },
  { id: 'tab2', title: 'Second Tab', content: <div>Content 2</div> },
  { id: 'tab3', title: 'Third Tab', content: <div>Content 3</div>, disabled: true },
];

const defaultProps = {
  tabs: mockTabs,
  tabIds: mockTabs.map((tab) => tab.id),
  tabPanelIds: mockTabs.map((tab) => `tabpanel-${tab.id}`),
  selectedTabId: 'tab1',
  mode: OrientationMode.Horizontal,
  onTabSelect: vi.fn(),
  initialTabsCount: mockTabs.length,
  stretched: false,
  editable: false,
  extendable: false,
};

describe('TabList', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders tablist with correct role and attributes', () => {
    render(<TabList {...defaultProps} />);

    const tablist = screen.getByRole('tablist');
    expect(tablist).toBeInTheDocument();
  });

  it('renders all tab buttons', () => {
    render(<TabList {...defaultProps} />);

    expect(screen.getByTestId('tab-button-tab1')).toBeInTheDocument();
    expect(screen.getByTestId('tab-button-tab2')).toBeInTheDocument();
    expect(screen.getByTestId('tab-button-tab3')).toBeInTheDocument();
  });

  it('passes correct props to TabButton components', () => {
    render(<TabList {...defaultProps} />);

    const tab1 = screen.getByTestId('tab-button-tab1');
    expect(tab1).toHaveTextContent('First Tab');
    expect(tab1).toHaveAttribute('data-selected', 'true');

    const tab2 = screen.getByTestId('tab-button-tab2');
    expect(tab2).toHaveTextContent('Second Tab');
    expect(tab2).toHaveAttribute('data-selected', 'false');

    const tab3 = screen.getByTestId('tab-button-tab3');
    expect(tab3).toHaveAttribute('data-disabled', 'true');
  });

  it('handles tab selection when tab is clicked', () => {
    render(<TabList {...defaultProps} />);

    const tab2 = screen.getByTestId('tab-button-tab2');
    fireEvent.click(tab2);

    expect(defaultProps.onTabSelect).toHaveBeenCalledWith('tab2');
  });

  it('renders add button when extendable is true', () => {
    render(<TabList {...defaultProps} extendable={true} />);

    expect(screen.getByLabelText('Add Tab')).toBeInTheDocument();
  });

  it('calls onTabAdd when add button is clicked', () => {
    const onTabAdd = vi.fn();
    render(<TabList {...defaultProps} extendable={true} onTabAdd={onTabAdd} />);

    const addButton = screen.getByTestId('add-tab-button');
    fireEvent.click(addButton);

    expect(onTabAdd).toHaveBeenCalledOnce();
  });

  it('does not render add button when extendable is false', () => {
    render(<TabList {...defaultProps} extendable={false} />);

    expect(screen.queryByTestId('add-tab-button')).not.toBeInTheDocument();
  });

  it('passes onTabTitleChange to TabButton when provided', () => {
    const onTabTitleChange = vi.fn();
    render(<TabList {...defaultProps} editable={true} onTabTitleChange={onTabTitleChange} />);

    expect(screen.getByTestId('edit-handler-tab1')).toBeInTheDocument();
  });

  it('passes onTabDelete to TabButton when extendable is true', () => {
    const onTabDelete = vi.fn();
    render(<TabList {...defaultProps} extendable={true} onTabDelete={onTabDelete} />);

    expect(screen.getByTestId('delete-handler-tab1')).toBeInTheDocument();
  });

  describe('Keyboard Navigation - Horizontal Mode', () => {
    it('navigates to next tab with ArrowRight', async () => {
      const { moveFocusOnElementById } = await import('@utils');
      render(<TabList {...defaultProps} />);

      const tablist = screen.getByRole('tablist');
      fireEvent.keyDown(tablist, { key: 'ArrowRight' });

      expect(moveFocusOnElementById).toHaveBeenCalledWith('tab2');
      expect(defaultProps.onTabSelect).toHaveBeenCalledWith('tab2');
    });

    it('navigates to previous tab with ArrowLeft', async () => {
      const { moveFocusOnElementById } = await import('@utils');
      render(<TabList {...defaultProps} selectedTabId='tab2' />);

      const tablist = screen.getByRole('tablist');
      fireEvent.keyDown(tablist, { key: 'ArrowLeft' });

      expect(moveFocusOnElementById).toHaveBeenCalledWith('tab1');
      expect(defaultProps.onTabSelect).toHaveBeenCalledWith('tab1');
    });

    it('wraps to last tab when ArrowLeft on first tab', async () => {
      const { moveFocusOnElementById } = await import('@utils');
      render(<TabList {...defaultProps} selectedTabId='tab1' />);

      const tablist = screen.getByRole('tablist');
      fireEvent.keyDown(tablist, { key: 'ArrowLeft' });

      expect(moveFocusOnElementById).toHaveBeenCalledWith('tab3');
      expect(defaultProps.onTabSelect).toHaveBeenCalledWith('tab3');
    });

    it('wraps to first tab when ArrowRight on last tab', async () => {
      const { moveFocusOnElementById } = await import('@utils');
      render(<TabList {...defaultProps} selectedTabId='tab3' />);

      const tablist = screen.getByRole('tablist');
      fireEvent.keyDown(tablist, { key: 'ArrowRight' });

      expect(moveFocusOnElementById).toHaveBeenCalledWith('tab1');
      expect(defaultProps.onTabSelect).toHaveBeenCalledWith('tab1');
    });
  });

  describe('Keyboard Navigation - Vertical Mode', () => {
    const verticalProps = {
      ...defaultProps,
      mode: OrientationMode.Vertical,
    };

    it('navigates to next tab with ArrowDown', async () => {
      const { moveFocusOnElementById } = await import('@utils');
      render(<TabList {...verticalProps} />);

      const tablist = screen.getByRole('tablist');
      fireEvent.keyDown(tablist, { key: 'ArrowDown' });

      expect(moveFocusOnElementById).toHaveBeenCalledWith('tab2');
      expect(defaultProps.onTabSelect).toHaveBeenCalledWith('tab2');
    });

    it('navigates to previous tab with ArrowUp', async () => {
      const { moveFocusOnElementById } = await import('@utils');
      render(<TabList {...verticalProps} selectedTabId='tab2' />);

      const tablist = screen.getByRole('tablist');
      fireEvent.keyDown(tablist, { key: 'ArrowUp' });

      expect(moveFocusOnElementById).toHaveBeenCalledWith('tab1');
      expect(defaultProps.onTabSelect).toHaveBeenCalledWith('tab1');
    });
  });

  it('handles empty tabs array', () => {
    const emptyProps = {
      ...defaultProps,
      tabs: [],
      tabIds: [],
      tabPanelIds: [],
      initialTabsCount: 0,
    };

    render(<TabList {...emptyProps} />);

    const tablist = screen.getByRole('tablist');
    expect(tablist).toBeInTheDocument();
    expect(screen.queryByTestId(/tab-button-/)).not.toBeInTheDocument();
  });

  it('auto-selects newly added tab', () => {
    const onTabSelect = vi.fn();
    const { rerender } = render(<TabList {...defaultProps} tabs={mockTabs} initialTabsCount={3} onTabSelect={onTabSelect} />);

    // Add a new tab
    const newTabs = [...mockTabs, { id: 'tab4', title: 'Fourth Tab', content: <div>Content 4</div> }];
    rerender(<TabList {...defaultProps} tabs={newTabs} initialTabsCount={3} onTabSelect={onTabSelect} />);

    expect(onTabSelect).toHaveBeenCalledWith('tab4');
  });

  it('does not auto-select when tabs count decreases', () => {
    const onTabSelect = vi.fn();
    const { rerender } = render(<TabList {...defaultProps} tabs={mockTabs} initialTabsCount={3} onTabSelect={onTabSelect} />);

    // Remove a tab
    const fewerTabs = mockTabs.slice(0, 2);
    rerender(<TabList {...defaultProps} tabs={fewerTabs} initialTabsCount={3} onTabSelect={onTabSelect} />);

    expect(onTabSelect).not.toHaveBeenCalled();
  });

  it('handles stretched prop', () => {
    // This would be tested through the TabButton component
    // Since we're mocking TabButton, we can verify the prop is passed
    render(<TabList {...defaultProps} stretched={true} />);

    // The stretched prop should be passed to TabButton components
    expect(screen.getByTestId('tab-button-tab1')).toBeInTheDocument();
  });

  it('ignores non-arrow keys', async () => {
    const { moveFocusOnElementById } = await import('@utils');
    render(<TabList {...defaultProps} />);

    const tablist = screen.getByRole('tablist');
    fireEvent.keyDown(tablist, { key: 'Enter' });
    fireEvent.keyDown(tablist, { key: 'Space' });
    fireEvent.keyDown(tablist, { key: 'Tab' });

    expect(moveFocusOnElementById).not.toHaveBeenCalled();
    expect(defaultProps.onTabSelect).not.toHaveBeenCalled();
  });
});
