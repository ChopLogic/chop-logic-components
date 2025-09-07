import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import ChopLogicMenu from '../Menu.tsx';

describe('ChopLogicMenu Component', () => {
  const mockItems = [
    { id: '1', label: 'Item 1' },
    { id: '2', label: 'Item 2', nestedItems: [{ id: '3', label: 'Nested Item' }] },
  ];

  it('renders a menu bar with the correct role', () => {
    render(<ChopLogicMenu items={mockItems} />);
    const menuBar = screen.getByRole('menubar');
    expect(menuBar).toBeInTheDocument();
  });

  it('renders all MenuItem components for given items', () => {
    render(<ChopLogicMenu items={mockItems} />);
    const menuItems = screen.getAllByRole('menuitem');
    expect(menuItems).toHaveLength(mockItems.length);
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('should open the sub-menu onClick the item with nested items', async () => {
    render(<ChopLogicMenu items={mockItems} />);
    expect(screen.queryByText('Nested Item')).not.toBeInTheDocument();
    await userEvent.click(screen.getByText('Item 2'));
    expect(screen.getByText('Nested Item')).toBeInTheDocument();
  });

  it('should close the sub-menu on second click', async () => {
    render(<ChopLogicMenu items={mockItems} />);
    await userEvent.click(screen.getByText('Item 2'));
    expect(screen.getByText('Nested Item')).toBeInTheDocument();
    await userEvent.click(screen.getByText('Item 2'));
    expect(screen.queryByText('Nested Item')).not.toBeInTheDocument();
  });

  it('handles an empty items array gracefully', () => {
    render(<ChopLogicMenu items={[]} />);
    const menuItems = screen.queryAllByTestId('menuitem');
    expect(menuItems).toHaveLength(0);
    const menuBar = screen.getByRole('menubar');
    expect(menuBar).toBeInTheDocument();
  });
});
