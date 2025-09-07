import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TabContent } from '../__elements__/content/TabContent.tsx';

describe('TabContent', () => {
  const tabs = [
    { id: 'tab-1', title: 'Tab 1', disabled: false, content: <>Tab 1 content</> },
    { id: 'tab-2', title: 'Tab 2', disabled: false, content: <>Tab 2 content</> },
    { id: 'tab-3', title: 'Tab 3', disabled: false, content: <>Tab 3 content</> },
  ];

  it('should match the snapshot for the first tab', () => {
    const { asFragment } = render(<TabContent tabs={tabs} selectedTabId='tab-1' />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match the snapshot for the second tab', () => {
    const { asFragment } = render(<TabContent tabs={tabs} selectedTabId='tab-2' />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have the aria attribute', () => {
    render(<TabContent tabs={tabs} selectedTabId='tab-2' />);
    expect(screen.getByRole('tabpanel')).toBeInTheDocument();
  });
});
