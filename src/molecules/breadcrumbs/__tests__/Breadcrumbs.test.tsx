import { IconName } from '@enums';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import Breadcrumbs from '../Breadcrumbs';

vi.mock('@atoms', () => ({
  Link: vi.fn(({ href, children, icon, iconPosition }) => (
    <a data-testid='breadcrumb-link' href={href} data-icon={icon} data-icon-position={iconPosition}>
      {children}
    </a>
  )),
  Icon: vi.fn(({ name, hidden }) => (
    <span data-testid='breadcrumb-icon' data-icon-name={name} data-hidden={hidden} aria-hidden={hidden}>
      {name} icon
    </span>
  )),
}));

describe('Breadcrumbs', () => {
  const mockItems = [
    { label: 'Home', icon: IconName.Home, link: '/' },
    { label: 'Products', icon: IconName.Projects, link: '/products' },
    { label: 'Electronics', icon: IconName.Settings, link: '/products/electronics' },
    { label: 'Smartphones', icon: IconName.Phone },
  ];

  it('matches the snapshot', () => {
    const { asFragment } = render(<Breadcrumbs items={mockItems} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders null when items array is empty', () => {
    const { container } = render(<Breadcrumbs items={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders null when items is undefined', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { container } = render(<Breadcrumbs items={undefined as any} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders breadcrumbs with correct semantic structure', () => {
    render(<Breadcrumbs items={mockItems} />);

    const nav = screen.getByRole('navigation', { name: 'Breadcrumb' });
    expect(nav).toBeInTheDocument();

    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(4);
  });

  it('renders links for all items except the last one', () => {
    render(<Breadcrumbs items={mockItems} />);

    const links = screen.getAllByTestId('breadcrumb-link');
    expect(links).toHaveLength(3);

    // Last item should not be a link
    const lastItem = screen.getByText('Smartphones');
    expect(lastItem).not.toHaveAttribute('href');
  });

  it('applies aria-current="page" to the last item', () => {
    render(<Breadcrumbs items={mockItems} />);

    const lastItem = screen.getByText('Smartphones');
    expect(lastItem).toHaveAttribute('aria-current', 'page');
  });

  it('does not apply aria-current to non-last items', () => {
    render(<Breadcrumbs items={mockItems} />);

    const homeItem = screen.getByText('Home');
    const productsItem = screen.getByText('Products');
    const electronicsItem = screen.getByText('Electronics');

    expect(homeItem).not.toHaveAttribute('aria-current');
    expect(productsItem).not.toHaveAttribute('aria-current');
    expect(electronicsItem).not.toHaveAttribute('aria-current');
  });

  it('renders separator icons between breadcrumb items', () => {
    render(<Breadcrumbs items={mockItems} />);

    const separatorIcons = screen
      .getAllByTestId('breadcrumb-icon')
      .filter((icon) => icon.getAttribute('data-icon-name') === IconName.ChevronRight);

    expect(separatorIcons).toHaveLength(3); // 3 separators for 4 items
  });

  it('hides icons from screen readers', () => {
    render(<Breadcrumbs items={mockItems} />);

    const icons = screen.getAllByTestId('breadcrumb-icon');
    icons.forEach((icon) => {
      expect(icon).toHaveAttribute('aria-hidden', 'true');
      expect(icon).toHaveAttribute('data-hidden', 'true');
    });
  });

  it('passes correct href to link components', () => {
    render(<Breadcrumbs items={mockItems} />);

    const links = screen.getAllByTestId('breadcrumb-link');
    expect(links[0]).toHaveAttribute('href', '/');
    expect(links[1]).toHaveAttribute('href', '/products');
    expect(links[2]).toHaveAttribute('href', '/products/electronics');
  });

  it('passes correct icon and position to link components', () => {
    render(<Breadcrumbs items={mockItems} />);

    const links = screen.getAllByTestId('breadcrumb-link');
    expect(links[0]).toHaveAttribute('data-icon', IconName.Home);
    expect(links[0]).toHaveAttribute('data-icon-position', 'left');
    expect(links[1]).toHaveAttribute('data-icon', IconName.Projects);
    expect(links[1]).toHaveAttribute('data-icon-position', 'left');
  });

  it('handles items without icons', () => {
    const itemsWithoutIcons = [{ label: 'Home', link: '/' }, { label: 'About', link: '/about' }, { label: 'Contact' }];

    render(<Breadcrumbs items={itemsWithoutIcons} />);

    // Should still render separators
    const separatorIcons = screen
      .getAllByTestId('breadcrumb-icon')
      .filter((icon) => icon.getAttribute('data-icon-name') === IconName.ChevronRight);
    expect(separatorIcons).toHaveLength(2);
  });

  it('applies custom className', () => {
    const { container } = render(<Breadcrumbs items={mockItems} className='custom-breadcrumbs' />);

    const nav = container.querySelector('nav');
    expect(nav).toHaveClass('custom-breadcrumbs');
  });

  it('passes through additional HTML attributes', () => {
    const { container } = render(<Breadcrumbs items={mockItems} id='main-breadcrumbs' title='Navigation breadcrumbs' tabIndex={0} />);

    const nav = container.querySelector('nav');
    expect(nav).toHaveAttribute('id', 'main-breadcrumbs');
    expect(nav).toHaveAttribute('title', 'Navigation breadcrumbs');
    expect(nav).toHaveAttribute('tabindex', '0');
  });

  it('handles single breadcrumb item', () => {
    const singleItem = [{ label: 'Home', icon: IconName.Home }];

    render(<Breadcrumbs items={singleItem} />);

    // Should render the item without separator
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Home')).toHaveAttribute('aria-current', 'page');

    // No separator icons for single item
    const separatorIcons = screen
      .queryAllByTestId('breadcrumb-icon')
      .filter((icon) => icon.getAttribute('data-icon-name') === IconName.ChevronRight);
    expect(separatorIcons).toHaveLength(0);
  });

  it('handles two breadcrumb items', () => {
    const twoItems = [{ label: 'Home', link: '/' }, { label: 'Current' }];

    render(<Breadcrumbs items={twoItems} />);

    // Should have one link and one current page
    const links = screen.getAllByTestId('breadcrumb-link');
    expect(links).toHaveLength(1);
    expect(screen.getByText('Current')).toHaveAttribute('aria-current', 'page');

    // One separator
    const separatorIcons = screen
      .getAllByTestId('breadcrumb-icon')
      .filter((icon) => icon.getAttribute('data-icon-name') === IconName.ChevronRight);
    expect(separatorIcons).toHaveLength(1);
  });

  it('renders items in correct order', () => {
    render(<Breadcrumbs items={mockItems} />);

    const listItems = screen.getAllByRole('listitem');
    const texts = listItems.map((item) => item.textContent);

    expect(texts[0]).toContain('Home');
    expect(texts[1]).toContain('Products');
    expect(texts[2]).toContain('Electronics');
    expect(texts[3]).toContain('Smartphones');
  });
});
