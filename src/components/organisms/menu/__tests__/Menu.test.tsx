import { OrientationMode } from '@enums';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import Menu from '../Menu';

const mockMatchMedia = (prefersReducedMotion: boolean) => {
  return vi.fn().mockImplementation(() => ({
    matches: prefersReducedMotion,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }));
};

describe('Menu Component', () => {
  const mockItems = [
    { id: '1', label: 'Item 1' },
    { id: '2', label: 'Item 2', nestedItems: [{ id: '3', label: 'Nested Item' }] },
  ];

  beforeEach(() => {
    window.matchMedia = mockMatchMedia(false);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders a menu bar with the correct role', () => {
    const { asFragment } = render(<Menu items={mockItems} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders all MenuItem components for given items', () => {
    render(<Menu items={mockItems} />);
    const menuItems = screen.getAllByRole('menuitem');
    expect(menuItems).toHaveLength(mockItems.length);
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('should open the sub-menu onClick the item with nested items', async () => {
    render(<Menu items={mockItems} />);
    expect(screen.queryByText('Nested Item')).not.toBeInTheDocument();
    await userEvent.click(screen.getByText('Item 2'));
    expect(screen.getByText('Nested Item')).toBeInTheDocument();
  });

  it('should close the sub-menu on second click', async () => {
    render(<Menu items={mockItems} />);
    await userEvent.click(screen.getByText('Item 2'));
    expect(screen.getByText('Nested Item')).toBeInTheDocument();
    await userEvent.click(screen.getByText('Item 2'));
    expect(screen.queryByText('Nested Item')).not.toBeInTheDocument();
  });

  it('handles an empty items array gracefully', () => {
    render(<Menu items={[]} />);
    const menuItems = screen.queryAllByTestId('menuitem');
    expect(menuItems).toHaveLength(0);
  });

  it('closes the open submenu after a nested leaf is activated in horizontal mode', async () => {
    const onClick = vi.fn();
    const items = [
      {
        id: 'parent',
        label: 'Parent',
        nestedItems: [{ id: 'child', label: 'Child Action', onClick }],
      },
    ];

    render(<Menu items={items} mode={OrientationMode.Horizontal} openedOn="click" />);

    await userEvent.click(screen.getByText('Parent'));
    const childLeaf = screen.getByText('Child Action');
    expect(childLeaf).toBeInTheDocument();

    await userEvent.click(childLeaf);

    // The leaf flashes, then fires onClick and collapses the submenu.
    await waitFor(() => {
      expect(onClick).toHaveBeenCalledOnce();
    });
    await waitFor(() => {
      expect(screen.queryByText('Child Action')).not.toBeInTheDocument();
    });
  });
});
