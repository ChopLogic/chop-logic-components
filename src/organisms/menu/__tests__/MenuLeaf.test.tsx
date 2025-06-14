import { ChopLogicIconName } from '@enums';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import MenuLeaf from '../elements/MenuLeaf';

describe('MenuLeaf', () => {
  const testLabeledItem = {
    id: 'item-1',
    label: 'Go Home',
    icon: ChopLogicIconName.Home,
    onClick: vi.fn(),
  };

  const testLinkItem = {
    id: 'item-1',
    label: 'Go Home',
    icon: ChopLogicIconName.Home,
    link: 'https://example.com/',
  };

  it('should match the snapshot', () => {
    const { asFragment } = render(<MenuLeaf item={testLabeledItem} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the link', () => {
    render(<MenuLeaf item={testLinkItem} />);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should have accessible role', () => {
    render(<MenuLeaf item={testLinkItem} />);
    expect(screen.getByRole('menuitem')).toBeInTheDocument();
  });

  it('should call onClick handler', async () => {
    render(<MenuLeaf item={testLabeledItem} />);
    await userEvent.click(screen.getByText(testLabeledItem.label));
    expect(testLabeledItem.onClick).toHaveBeenCalledOnce();
  });
});
