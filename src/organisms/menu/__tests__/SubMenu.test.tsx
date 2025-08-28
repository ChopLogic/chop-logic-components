import { IconName, OrientationMode } from '@enums';
import { SubMenu } from '@organisms/menu/sub-menu/SubMenu';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

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

    expect(mockToggleSubMenu).toHaveBeenCalledTimes(2);
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
