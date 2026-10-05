import { IconName } from '@enums';
import { render, screen, waitFor } from '@testing-library/react';
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

  it('should apply a custom className alongside the base class', () => {
    render(<MenuLeaf item={{ ...testLabeledItem, className: 'custom-leaf' }} />);
    const menuItem = screen.getByRole('menuitem');
    expect(menuItem).toHaveClass('cl-menu-leaf');
    expect(menuItem).toHaveClass('custom-leaf');
  });

  it('should call onClick handler when clicked', async () => {
    render(<MenuLeaf item={testLabeledItem} />);
    await userEvent.click(screen.getByText(testLabeledItem.label));
    await waitFor(() => {
      expect(testLabeledItem.onClick).toHaveBeenCalledOnce();
    });
  });

  it('should flash the item before firing onClick, then clear the flash', async () => {
    render(<MenuLeaf item={testLabeledItem} />);
    const menuItem = screen.getByRole('menuitem');

    await userEvent.click(menuItem);

    // The item is highlighted immediately and onClick is deferred until the flash ends.
    expect(menuItem).toHaveClass('cl-menu-leaf_activated');
    expect(testLabeledItem.onClick).not.toHaveBeenCalled();

    await waitFor(() => {
      expect(menuItem).not.toHaveClass('cl-menu-leaf_activated');
    });
    expect(testLabeledItem.onClick).toHaveBeenCalledOnce();
  });

  it('should call closeMenu after the flash when an action item is activated', async () => {
    const closeMenu = vi.fn();
    render(<MenuLeaf item={testLabeledItem} closeMenu={closeMenu} />);

    await userEvent.click(screen.getByRole('menuitem'));

    await waitFor(() => {
      expect(closeMenu).toHaveBeenCalledOnce();
    });
    expect(testLabeledItem.onClick).toHaveBeenCalledOnce();
  });

  it('should close the menu immediately for link items without flashing', async () => {
    const closeMenu = vi.fn();
    render(<MenuLeaf item={testLinkItem} closeMenu={closeMenu} />);

    const menuItem = screen.getByRole('menuitem');
    await userEvent.click(menuItem);

    expect(menuItem).not.toHaveClass('cl-menu-leaf_activated');
    expect(closeMenu).toHaveBeenCalledOnce();
  });

  describe('keyboard interactions', () => {
    it('should call onClick handler when Enter is pressed', async () => {
      render(<MenuLeaf item={testLabeledItem} />);
      const menuItem = screen.getByRole('menuitem');
      await userEvent.type(menuItem, '{Enter}');
      await waitFor(() => {
        expect(testLabeledItem.onClick).toHaveBeenCalled();
      });
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
