import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { moveFocusOnElementById } from 'utils/move-focus-on-element-by-id';
import { describe, expect, it, vi } from 'vitest';

import ChopLogicTabList from '../elements/TabList';

vi.mock('utils/move-focus-on-element-by-id', () => ({
  moveFocusOnElementById: vi.fn(),
}));

describe('ChopLogicTabList', () => {
  const tabs = [
    { id: 'tab-1', title: 'Tab 1', disabled: false, content: <>Tab 1 content</> },
    { id: 'tab-2', title: 'Tab 2', disabled: false, content: <>Tab 2 content</> },
    { id: 'tab-3', title: 'Tab 3', disabled: false, content: <>Tab 3 content</> },
  ];
  const tabIds = ['tab-1', 'tab-2', 'tab-3'];
  const tabPanelIds = ['panel-1', 'panel-2', 'panel-3'];
  const onTabSelect = vi.fn();

  it('renders all tabs correctly', () => {
    render(
      <ChopLogicTabList
        tabs={tabs}
        tabIds={tabIds}
        onTabSelect={onTabSelect}
        selectedTabId='tab-1'
        tabPanelIds={tabPanelIds}
        mode='horizontal'
      />,
    );

    tabs.forEach(({ title }) => {
      expect(screen.getByRole('tab', { name: title })).toBeInTheDocument();
    });
  });

  it('does not move focus in vertical mode when ArrowLeft is pressed', async () => {
    render(
      <ChopLogicTabList
        tabs={tabs}
        tabIds={tabIds}
        onTabSelect={onTabSelect}
        selectedTabId='tab-1'
        tabPanelIds={tabPanelIds}
        mode='vertical'
      />,
    );

    const tabList = screen.getByRole('tablist');
    tabList.focus();
    await userEvent.keyboard('[ArrowLeft]');

    expect(onTabSelect).not.toHaveBeenCalled();
    expect(moveFocusOnElementById).not.toHaveBeenCalled();
  });

  it('does not move focus in horizontal mode when ArrowUp is pressed', async () => {
    render(
      <ChopLogicTabList
        tabs={tabs}
        tabIds={tabIds}
        onTabSelect={onTabSelect}
        selectedTabId='tab-1'
        tabPanelIds={tabPanelIds}
        mode='horizontal'
      />,
    );

    const tabList = screen.getByRole('tablist');
    tabList.focus();
    await userEvent.keyboard('[ArrowUp]');

    expect(onTabSelect).not.toHaveBeenCalled();
    expect(moveFocusOnElementById).not.toHaveBeenCalled();
  });

  it('handles tab selection when a tab is clicked', async () => {
    render(
      <ChopLogicTabList
        tabs={tabs}
        tabIds={tabIds}
        onTabSelect={onTabSelect}
        selectedTabId='tab-1'
        tabPanelIds={tabPanelIds}
        mode='horizontal'
      />,
    );

    const secondTab = screen.getByRole('tab', { name: 'Tab 2' });
    await userEvent.click(secondTab);

    expect(onTabSelect).toHaveBeenCalledWith('tab-2');
  });

  it('moves focus to the next tab when pressing ArrowRight in horizontal mode', async () => {
    render(
      <ChopLogicTabList
        tabs={tabs}
        tabIds={tabIds}
        onTabSelect={onTabSelect}
        selectedTabId='tab-1'
        tabPanelIds={tabPanelIds}
        mode='horizontal'
      />,
    );

    const firstTab = screen.getByText('Tab 1');
    firstTab.focus();
    await userEvent.keyboard('[ArrowRight]');

    expect(moveFocusOnElementById).toHaveBeenCalledWith('tab-2');
    expect(onTabSelect).toHaveBeenCalledWith('tab-2');
  });

  it('moves focus to the previous tab when pressing ArrowLeft in horizontal mode', async () => {
    render(
      <ChopLogicTabList
        tabs={tabs}
        tabIds={tabIds}
        onTabSelect={onTabSelect}
        selectedTabId='tab-3'
        tabPanelIds={tabPanelIds}
        mode='horizontal'
      />,
    );

    const tabList = screen.getByRole('tablist');
    tabList.focus();
    await userEvent.keyboard('[ArrowLeft]');

    expect(moveFocusOnElementById).toHaveBeenCalledWith('tab-2');
    expect(onTabSelect).toHaveBeenCalledWith('tab-2');
  });

  it('moves focus to the next tab when pressing ArrowDown in vertical mode', async () => {
    render(
      <ChopLogicTabList
        tabs={tabs}
        tabIds={tabIds}
        onTabSelect={onTabSelect}
        selectedTabId='tab-1'
        tabPanelIds={tabPanelIds}
        mode='vertical'
      />,
    );

    const tabList = screen.getByRole('tablist');
    tabList.focus();
    await userEvent.keyboard('[ArrowDown]');

    expect(moveFocusOnElementById).toHaveBeenCalledWith('tab-2');
    expect(onTabSelect).toHaveBeenCalledWith('tab-2');
  });

  it('moves focus to the previous tab when pressing ArrowUp in vertical mode', async () => {
    render(
      <ChopLogicTabList
        tabs={tabs}
        tabIds={tabIds}
        onTabSelect={onTabSelect}
        selectedTabId='tab-3'
        tabPanelIds={tabPanelIds}
        mode='vertical'
      />,
    );

    const tabList = screen.getByRole('tablist');
    tabList.focus();
    await userEvent.keyboard('[ArrowUp]');

    expect(moveFocusOnElementById).toHaveBeenCalledWith('tab-2');
    expect(onTabSelect).toHaveBeenCalledWith('tab-2');
  });
});
