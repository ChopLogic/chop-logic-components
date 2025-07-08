import { describe, expect, it, vi } from 'vitest';
import { ChopLogicOrientationMode } from '@enums';
import { render, screen } from '@testing-library/react';
import { TabButton } from './TabButton';

describe('TabButton', () => {
  const testProps = {
    title: 'Tab button',
    tabId: 'id-1',
    onTabSelect: vi.fn(),
    tabPanelId: 'panel-id-1',
    isSelected: true,
    mode: ChopLogicOrientationMode.Vertical,
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
