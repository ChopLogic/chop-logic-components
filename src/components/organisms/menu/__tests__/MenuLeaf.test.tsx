import { IconName } from '@enums';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { MenuLeaf } from '../leaf/MenuLeaf';

describe('MenuLeaf', () => {
  const testLabeledItem = {
    id: 'item-1',
    label: 'Go Home',
    icon: IconName.Home,
    onClick: vi.fn(),
    onFocus: vi.fn(),
    onHover: vi.fn(),
  };

  const testLinkItem = {
    id: 'item-1',
    label: 'Go Home',
    icon: IconName.Home,
    link: 'https://example.com/',
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

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

  it('should call onClick handler when clicked', async () => {
    render(<MenuLeaf item={testLabeledItem} />);
    await userEvent.click(screen.getByText(testLabeledItem.label));
    expect(testLabeledItem.onClick).toHaveBeenCalledOnce();
  });

  describe('keyboard interactions', () => {
    it('should call onClick handler when Enter is pressed', async () => {
      render(<MenuLeaf item={testLabeledItem} />);
      const menuItem = screen.getByRole('menuitem');
      await userEvent.type(menuItem, '{Enter}');
      expect(testLabeledItem.onClick).toHaveBeenCalled();
    });

    it('should stop event propagation on keydown', async () => {
      const parentOnKeyDown = vi.fn();
      render(
        <nav onKeyDown={parentOnKeyDown}>
          <MenuLeaf item={testLabeledItem} />
        </nav>,
      );
      const menuItem = screen.getByRole('menuitem');
      await userEvent.type(menuItem, '{Enter}');
      expect(parentOnKeyDown).not.toHaveBeenCalled();
    });
  });

  describe('event handlers', () => {
    it('should call onFocus handler when focused', async () => {
      render(<MenuLeaf item={testLabeledItem} />);
      await userEvent.tab(); // Focus the menu item
      expect(testLabeledItem.onFocus).toHaveBeenCalledOnce();
    });

    it('should call onHover handler when mouse is over', async () => {
      render(<MenuLeaf item={testLabeledItem} />);
      const menuItem = screen.getByRole('menuitem');
      await userEvent.hover(menuItem);
      expect(testLabeledItem.onHover).toHaveBeenCalledOnce();
    });
  });
});
