import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import ChopLogicTabButton from '../elements/TabButton';
import ChopLogicTabContent from '../elements/TabContent';
import ChopLogicTabs, { ChopLogicTabsMode } from '../Tabs';

describe('ChopLogicTabs', () => {
  const tabs = [
    { id: 'tab-1', title: 'Tab 1', disabled: false, content: <>Tab 1 content</> },
    { id: 'tab-2', title: 'Tab 2', disabled: false, content: <>Tab 2 content</> },
    { id: 'tab-3', title: 'Tab 3', disabled: false, content: <>Tab 3 content</> },
  ];
  const testProps = {
    tabs,
    defaultTabId: 'tab-1',
    mode: 'horizontal' as ChopLogicTabsMode,
  };

  it('should match the snapshot', () => {
    const { asFragment } = render(<ChopLogicTabs {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render another tab content when user clicks on tabs', async () => {
    render(<ChopLogicTabs {...testProps} />);
    expect(screen.getByText('Tab 1 content')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Tab 2'));
    expect(screen.queryByText('Tab 1 content')).not.toBeInTheDocument();
    expect(screen.getByText('Tab 2 content')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Tab 3'));
    expect(screen.queryByText('Tab 2 content')).not.toBeInTheDocument();
    expect(screen.getByText('Tab 3 content')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Tab 1'));
    expect(screen.queryByText('Tab 3 content')).not.toBeInTheDocument();
    expect(screen.getByText('Tab 1 content')).toBeInTheDocument();
  });

  it('should render another tab content when user switches tabs via keyboard', async () => {
    render(<ChopLogicTabs {...testProps} />);
    expect(screen.getByText('Tab 1 content')).toBeInTheDocument();

    const firstTab = screen.getByText('Tab 1');
    firstTab.focus();
    await userEvent.keyboard('[ArrowRight]');
    expect(screen.queryByText('Tab 1 content')).not.toBeInTheDocument();
    expect(screen.getByText('Tab 2 content')).toBeInTheDocument();

    await userEvent.keyboard('[ArrowRight]');
    expect(screen.queryByText('Tab 2 content')).not.toBeInTheDocument();
    expect(screen.getByText('Tab 3 content')).toBeInTheDocument();

    await userEvent.keyboard('[ArrowRight]');
    expect(screen.queryByText('Tab 3 content')).not.toBeInTheDocument();
    expect(screen.getByText('Tab 1 content')).toBeInTheDocument();

    await userEvent.keyboard('[ArrowLeft]');
    expect(screen.queryByText('Tab 1 content')).not.toBeInTheDocument();
    expect(screen.getByText('Tab 3 content')).toBeInTheDocument();
  });
});

describe('ChopLogicTabButton', () => {
  const testProps = {
    title: 'Tab button',
    tabId: 'id-1',
    onTabSelect: vi.fn(),
    tabPanelId: 'panel-id-1',
    isSelected: true,
    mode: 'vertical' as ChopLogicTabsMode,
    isDisabled: false,
  };

  it('should match the snapshot', () => {
    const { asFragment } = render(<ChopLogicTabButton {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have the aria attribute', () => {
    render(<ChopLogicTabButton {...testProps} />);
    expect(screen.getByRole('tab')).toBeInTheDocument();
  });
});

describe('ChopLogicTabContent', () => {
  const tabs = [
    { id: 'tab-1', title: 'Tab 1', disabled: false, content: <>Tab 1 content</> },
    { id: 'tab-2', title: 'Tab 2', disabled: false, content: <>Tab 2 content</> },
    { id: 'tab-3', title: 'Tab 3', disabled: false, content: <>Tab 3 content</> },
  ];

  it('should match the snapshot for the first tab', () => {
    const { asFragment } = render(<ChopLogicTabContent tabs={tabs} selectedTabId='tab-1' />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match the snapshot for the second tab', () => {
    const { asFragment } = render(<ChopLogicTabContent tabs={tabs} selectedTabId='tab-2' />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have the aria attribute', () => {
    render(<ChopLogicTabContent tabs={tabs} selectedTabId='tab-2' />);
    expect(screen.getByRole('tabpanel')).toBeInTheDocument();
  });
});
