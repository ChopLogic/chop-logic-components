import { OrientationMode } from '@enums';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { TabButton } from '../__elements__/button/TabButton';

describe('TabButton', () => {
  const testProps = {
    title: 'Tab button',
    tabId: 'id-1',
    onTabSelect: vi.fn(),
    tabPanelId: 'panel-id-1',
    isSelected: true,
    mode: OrientationMode.Vertical,
    isDisabled: false,
  };

  it('should match the snapshot', () => {
    const { asFragment } = render(<TabButton {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have the aria attribute', () => {
    render(<TabButton {...testProps} />);
    expect(screen.getByRole('tab')).toBeInTheDocument();
  });
});
