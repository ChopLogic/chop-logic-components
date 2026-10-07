import { IconName, OrientationMode } from '@enums';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { SubMenu } from '../sub-menu/SubMenu';

vi.mock('@hooks', () => ({
  useClickOutside: vi.fn(),
}));

describe('SubMenu', () => {
  const mockToggleSubMenu = vi.fn();
  const mockCloseSubMenu = vi.fn();
  const mockOpenSubMenu = vi.fn();

  const itemWithLink = {
    id: '1',
    label: 'Item with Link',
    link: 'https://example.com',
    icon: IconName.ArrowUp,
  };

  const itemWithoutLink = {
    id: '2',
    label: 'Item without Link',
    icon: IconName.ArrowDown,
  };

  it('should match the snapshot', () => {
    const { asFragment } = render(
      <SubMenu
        item={itemWithoutLink}
        isSubMenuOpened={true}
        toggleSubMenu={mockToggleSubMenu}
        closeSubMenu={mockCloseSubMenu}
        openSubMenu={mockOpenSubMenu}
        mode={OrientationMode.Horizontal}
      >
        <div>Submenu Content</div>
      </SubMenu>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with a link', () => {
    render(
      <SubMenu
        item={itemWithLink}
        isSubMenuOpened={false}
        toggleSubMenu={mockToggleSubMenu}
        closeSubMenu={mockCloseSubMenu}
        openSubMenu={mockOpenSubMenu}
        mode={OrientationMode.Horizontal}
      />,
    );

    const link = screen.getByRole('link', { name: /item with link/i });
    expect(link).toHaveAttribute('href', 'https://example.com');
  });

  it('defaults the link target to _blank with a safe rel', () => {
    render(
      <SubMenu
        item={itemWithLink}
        isSubMenuOpened={false}
        toggleSubMenu={mockToggleSubMenu}
        closeSubMenu={mockCloseSubMenu}
        openSubMenu={mockOpenSubMenu}
        mode={OrientationMode.Horizontal}
      />,
    );

    const link = screen.getByRole('link', { name: /item with link/i });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noreferrer');
  });

  it('respects a custom link target and omits rel for non-blank targets', () => {
    render(
      <SubMenu
        item={{ ...itemWithLink, target: '_self' }}
        isSubMenuOpened={false}
        toggleSubMenu={mockToggleSubMenu}
        closeSubMenu={mockCloseSubMenu}
        openSubMenu={mockOpenSubMenu}
        mode={OrientationMode.Horizontal}
      />,
    );

    const link = screen.getByRole('link', { name: /item with link/i });
    expect(link).toHaveAttribute('target', '_self');
    expect(link).not.toHaveAttribute('rel');
  });

  it('renders correctly without a link', () => {
    render(
      <SubMenu
        item={itemWithoutLink}
        isSubMenuOpened={false}
        toggleSubMenu={mockToggleSubMenu}
        closeSubMenu={mockCloseSubMenu}
        openSubMenu={mockOpenSubMenu}
        mode={OrientationMode.Horizontal}
      />,
    );

    const span = screen.getByText(/item without link/i);
    expect(span).toBeInTheDocument();
  });

  it('should apply a custom className alongside the base class', () => {
    render(
      <SubMenu
        item={{ ...itemWithoutLink, className: 'custom-sub-menu' }}
        isSubMenuOpened={false}
        toggleSubMenu={mockToggleSubMenu}
        closeSubMenu={mockCloseSubMenu}
        openSubMenu={mockOpenSubMenu}
        mode={OrientationMode.Horizontal}
      />,
    );

    const menuItem = screen.getByRole('menuitem');
    expect(menuItem).toHaveClass('cl-sub-menu');
    expect(menuItem).toHaveClass('custom-sub-menu');
  });

  it('calls toggleSubMenu on click', () => {
    render(
      <SubMenu
        item={itemWithoutLink}
        isSubMenuOpened={false}
        toggleSubMenu={mockToggleSubMenu}
        closeSubMenu={mockCloseSubMenu}
        openSubMenu={mockOpenSubMenu}
        mode={OrientationMode.Horizontal}
      />,
    );

    const submenuText = screen.getByText(/item without link/i);
    fireEvent.click(submenuText);

    expect(mockToggleSubMenu).toHaveBeenCalledTimes(1);
  });

  it('toggles submenu on Space key press', () => {
    render(
      <SubMenu
        item={itemWithoutLink}
        isSubMenuOpened={false}
        toggleSubMenu={mockToggleSubMenu}
        closeSubMenu={mockCloseSubMenu}
        openSubMenu={mockOpenSubMenu}
        mode={OrientationMode.Horizontal}
      />,
    );

    const submenu = screen.getByRole('menuitem');
    fireEvent.keyDown(submenu, { key: ' ' });

    expect(mockToggleSubMenu).toHaveBeenCalledTimes(1);
  });

  it('renders children when isSubMenuOpened is true', () => {
    render(
      <SubMenu
        item={itemWithoutLink}
        isSubMenuOpened={true}
        toggleSubMenu={mockToggleSubMenu}
        closeSubMenu={mockCloseSubMenu}
        openSubMenu={mockOpenSubMenu}
        mode={OrientationMode.Horizontal}
      >
        <div>Submenu Content</div>
      </SubMenu>,
    );

    expect(screen.getByText(/submenu content/i)).toBeInTheDocument();
  });
});
