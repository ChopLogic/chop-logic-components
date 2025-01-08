import { ChopLogicIconName, ChopLogicOrientationMode } from '@enums';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import SubMenu from '../elements/SubMenu';

import { LIGHT_THEME } from '@css';

vi.mock('@hooks', () => ({
  useClickOutside: vi.fn(),
}));

describe('SubMenu', () => {
  const mockToggleSubMenu = vi.fn();
  const mockCloseSubMenu = vi.fn();

  const itemWithLink = {
    id: '1',
    label: 'Item with Link',
    link: 'https://example.com',
    icon: ChopLogicIconName.ArrowUp,
  };

  const itemWithoutLink = {
    id: '2',
    label: 'Item without Link',
    icon: ChopLogicIconName.ArrowDown,
  };

  it('should match the snapshot', () => {
    const { asFragment } = render(
      <SubMenu
        item={itemWithoutLink}
        theme={LIGHT_THEME}
        isSubMenuOpened={true}
        toggleSubMenu={mockToggleSubMenu}
        closeSubMenu={mockCloseSubMenu}
        mode={ChopLogicOrientationMode.Horizontal}
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
        theme={LIGHT_THEME}
        isSubMenuOpened={false}
        toggleSubMenu={mockToggleSubMenu}
        closeSubMenu={mockCloseSubMenu}
        mode={ChopLogicOrientationMode.Horizontal}
      />,
    );

    const link = screen.getByRole('link', { name: /item with link/i });
    expect(link).toHaveAttribute('href', 'https://example.com');
  });

  it('renders correctly without a link', () => {
    render(
      <SubMenu
        item={itemWithoutLink}
        theme={LIGHT_THEME}
        isSubMenuOpened={false}
        toggleSubMenu={mockToggleSubMenu}
        closeSubMenu={mockCloseSubMenu}
        mode={ChopLogicOrientationMode.Horizontal}
      />,
    );

    const span = screen.getByText(/item without link/i);
    expect(span).toBeInTheDocument();
  });

  it('calls toggleSubMenu on click', () => {
    render(
      <SubMenu
        item={itemWithoutLink}
        theme={LIGHT_THEME}
        isSubMenuOpened={false}
        toggleSubMenu={mockToggleSubMenu}
        closeSubMenu={mockCloseSubMenu}
        mode={ChopLogicOrientationMode.Horizontal}
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
        theme={LIGHT_THEME}
        isSubMenuOpened={false}
        toggleSubMenu={mockToggleSubMenu}
        closeSubMenu={mockCloseSubMenu}
        mode={ChopLogicOrientationMode.Horizontal}
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
        theme={LIGHT_THEME}
        isSubMenuOpened={true}
        toggleSubMenu={mockToggleSubMenu}
        closeSubMenu={mockCloseSubMenu}
        mode={ChopLogicOrientationMode.Horizontal}
      >
        <div>Submenu Content</div>
      </SubMenu>,
    );

    expect(screen.getByText(/submenu content/i)).toBeInTheDocument();
  });
});
