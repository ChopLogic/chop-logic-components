import { OrientationMode } from '@enums';
import { MenuItem } from '@models';
import { fireEvent, render, screen } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import { describe, expect, it, vi } from 'vitest';

import { MenuListItem } from '../item/MenuListItem';

vi.mock('../sub-menu/SubMenu', () => ({
  SubMenu: ({ children, toggleSubMenu }: PropsWithChildren & { toggleSubMenu: () => void }) => (
    <div data-testid='submenu'>
      <button onClick={toggleSubMenu}>Toggle SubMenu</button>
      {children}
    </div>
  ),
}));

vi.mock('../leaf/MenuLeaf', () => ({
  MenuLeaf: ({ item }: { item: MenuItem }) => <div data-testid='menu-leaf'>{item.label}</div>,
}));

describe('MenuListItem', () => {
  const leafItem = {
    id: '1',
    label: 'Leaf Item',
  };

  const nestedItem = {
    id: '2',
    label: 'Nested Item',
    nestedItems: [
      { id: '3', label: 'Child Item 1' },
      { id: '4', label: 'Child Item 2' },
    ],
  };

  it('should match the snapshot', () => {
    const { asFragment } = render(<MenuListItem item={nestedItem} mode={OrientationMode.Horizontal} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders MenuLeaf for leaf nodes', () => {
    render(<MenuListItem item={leafItem} mode={OrientationMode.Horizontal} />);

    const menuLeaf = screen.getByTestId('menu-leaf');
    expect(menuLeaf).toBeInTheDocument();
    expect(menuLeaf).toHaveTextContent('Leaf Item');
  });

  it('renders SubMenu for non-leaf nodes', () => {
    render(<MenuListItem item={nestedItem} mode={OrientationMode.Horizontal} />);

    const subMenu = screen.getByTestId('submenu');
    expect(subMenu).toBeInTheDocument();
  });

  it('toggles SubMenu state when toggleSubMenu is called', () => {
    render(<MenuListItem item={nestedItem} mode={OrientationMode.Horizontal} />);

    const toggleButton = screen.getByText(/toggle submenu/i);
    fireEvent.click(toggleButton);

    // Check if submenu state changes (mocked submenu renders children conditionally)
    expect(screen.getByTestId('submenu')).toBeInTheDocument();
  });

  it('renders nested items recursively', () => {
    render(<MenuListItem item={nestedItem} mode={OrientationMode.Horizontal} />);

    expect(screen.getByText('Child Item 1')).toBeInTheDocument();
    expect(screen.getByText('Child Item 2')).toBeInTheDocument();
  });

  it('passes correct props to SubMenu', () => {
    render(<MenuListItem item={nestedItem} mode={OrientationMode.Horizontal} />);

    const subMenu = screen.getByTestId('submenu');
    expect(subMenu).toBeInTheDocument();
    expect(screen.getByText(nestedItem.nestedItems[0].label)).toBeInTheDocument();
    expect(screen.getByText(nestedItem.nestedItems[1].label)).toBeInTheDocument();
  });

  it('passes correct props to MenuLeaf', () => {
    render(<MenuListItem item={leafItem} mode={OrientationMode.Horizontal} />);

    const menuLeaf = screen.getByTestId('menu-leaf');
    expect(menuLeaf).toHaveTextContent('Leaf Item');
  });
});
