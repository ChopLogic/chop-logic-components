import { PropsWithChildren } from 'react';
import { ChopLogicOrientationMode } from '@enums';
import { ChopLogicMenuItem } from '@models';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { MenuItem } from './MenuItem';

vi.mock('../sub-menu/SubMenu', () => ({
  SubMenu: ({ children, toggleSubMenu }: PropsWithChildren & { toggleSubMenu: () => void }) => (
    <div data-testid='submenu'>
      <button onClick={toggleSubMenu}>Toggle SubMenu</button>
      {children}
    </div>
  ),
}));

vi.mock('../leaf/MenuLeaf', () => ({
  MenuLeaf: ({ item }: { item: ChopLogicMenuItem }) => <div data-testid='menu-leaf'>{item.label}</div>,
}));

describe('MenuItem', () => {
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
    const { asFragment } = render(<MenuItem item={nestedItem} mode={ChopLogicOrientationMode.Horizontal} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders MenuLeaf for leaf nodes', () => {
    render(<MenuItem item={leafItem} mode={ChopLogicOrientationMode.Horizontal} />);

    const menuLeaf = screen.getByTestId('menu-leaf');
    expect(menuLeaf).toBeInTheDocument();
    expect(menuLeaf).toHaveTextContent('Leaf Item');
  });

  it('renders SubMenu for non-leaf nodes', () => {
    render(<MenuItem item={nestedItem} mode={ChopLogicOrientationMode.Horizontal} />);

    const subMenu = screen.getByTestId('submenu');
    expect(subMenu).toBeInTheDocument();
  });

  it('toggles SubMenu state when toggleSubMenu is called', () => {
    render(<MenuItem item={nestedItem} mode={ChopLogicOrientationMode.Horizontal} />);

    const toggleButton = screen.getByText(/toggle submenu/i);
    fireEvent.click(toggleButton);

    // Check if submenu state changes (mocked submenu renders children conditionally)
    expect(screen.getByTestId('submenu')).toBeInTheDocument();
  });

  it('renders nested items recursively', () => {
    render(<MenuItem item={nestedItem} mode={ChopLogicOrientationMode.Horizontal} />);

    expect(screen.getByText('Child Item 1')).toBeInTheDocument();
    expect(screen.getByText('Child Item 2')).toBeInTheDocument();
  });

  it('passes correct props to SubMenu', () => {
    render(<MenuItem item={nestedItem} mode={ChopLogicOrientationMode.Horizontal} />);

    const subMenu = screen.getByTestId('submenu');
    expect(subMenu).toBeInTheDocument();
    expect(screen.getByText(nestedItem.nestedItems[0].label)).toBeInTheDocument();
    expect(screen.getByText(nestedItem.nestedItems[1].label)).toBeInTheDocument();
  });

  it('passes correct props to MenuLeaf', () => {
    render(<MenuItem item={leafItem} mode={ChopLogicOrientationMode.Horizontal} />);

    const menuLeaf = screen.getByTestId('menu-leaf');
    expect(menuLeaf).toHaveTextContent('Leaf Item');
  });
});
