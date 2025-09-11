import { OrientationMode } from '@enums';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import Tabs from '../Tabs';

describe('Tabs', () => {
  const tabs = [
    { id: 'tab-1', title: 'Tab 1', disabled: false, content: <>Tab 1 content</> },
    { id: 'tab-2', title: 'Tab 2', disabled: false, content: <>Tab 2 content</> },
    { id: 'tab-3', title: 'Tab 3', disabled: false, content: <>Tab 3 content</> },
  ];

  const testProps = {
    tabs,
    defaultTabId: 'tab-1',
    mode: OrientationMode.Horizontal,
    className: 'test-class',
    id: 'tabs-id',
  };

  it('should match the snapshot', () => {
    const { asFragment } = render(<Tabs {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render another tab content when user clicks on tabs', async () => {
    render(<Tabs {...testProps} />);
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
    render(<Tabs {...testProps} />);
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
