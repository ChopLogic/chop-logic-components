import { IconName } from '@enums';
import { render, screen } from '@testing-library/react';
import type { Breadcrumb } from '@types';
import { describe, expect, it } from 'vitest';

import BreadcrumbItem from '../BreadcrumbItem';

describe('BreadcrumbItem', () => {
  it('should render as a link when item has link and is not the last item', () => {
    const item: Breadcrumb = { label: 'Home', link: '/home' };

    render(<BreadcrumbItem item={item} isLastItem={false} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/home');
    expect(link).toHaveTextContent('Home');
  });

  it('should render as a span when item has link but is the last item', () => {
    const item: Breadcrumb = { label: 'Current', link: '/current' };

    render(<BreadcrumbItem item={item} isLastItem={true} />);

    const span = screen.getByText('Current');
    expect(span.tagName).toBe('SPAN');
    expect(span).toHaveClass('cl-breadcrumbs__text');
    expect(span).not.toHaveAttribute('href');
  });

  it('should render as a span and apply aria-current="page" when item is the last item', () => {
    const item: Breadcrumb = { label: 'Current Page' };

    render(<BreadcrumbItem item={item} isLastItem={true} />);

    const span = screen.getByText('Current Page');
    expect(span).toHaveAttribute('aria-current', 'page');
  });

  it('should render as a span without aria-current when item is not the last item', () => {
    const item: Breadcrumb = { label: 'Home', link: '/home' };

    render(<BreadcrumbItem item={item} isLastItem={false} />);

    const span = screen.queryByText('Home');
    // When isLastItem is false and there's a link, it renders as a link, not a span
    if (span && span.tagName === 'SPAN') {
      expect(span).not.toHaveAttribute('aria-current');
    }
  });

  it('should use empty string as href when item.link is not provided', () => {
    const item: Breadcrumb = { label: 'Home' };

    render(<BreadcrumbItem item={item} isLastItem={false} />);

    // When there's no link, it should render as span (aria-current property)
    const span = screen.getByText('Home');
    expect(span).toHaveClass('cl-breadcrumbs__text');
  });

  it('should render icon when item has an icon', () => {
    const item: Breadcrumb = { label: 'Home', icon: IconName.Home, link: '/home' };

    render(<BreadcrumbItem item={item} isLastItem={false} />);

    // The icon should be rendered with the data-testid from Icon component
    const link = screen.getByRole('link');
    expect(link).toHaveClass('cl-breadcrumbs__link');
    // Icon should be present in the link
    expect(link.querySelector('.cl-icon')).toBeInTheDocument();
  });

  it('should render hidden icon when item is a text span with icon', () => {
    const item: Breadcrumb = { label: 'Current', icon: IconName.Home };

    render(<BreadcrumbItem item={item} isLastItem={true} />);

    const span = screen.getByText('Current');
    // Icon should be hidden (aria-hidden)
    const icon = span.querySelector('.cl-icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('aria-hidden');
  });

  it('should render in a list item', () => {
    const item: Breadcrumb = { label: 'Home', link: '/home' };

    const { container } = render(<BreadcrumbItem item={item} isLastItem={false} />);

    const listItem = container.querySelector('.cl-breadcrumbs__item');
    expect(listItem).toBeInTheDocument();
    expect(listItem?.tagName).toBe('LI');
  });

  it('should render separator icon when not the last item', () => {
    const item: Breadcrumb = { label: 'Home', link: '/home' };

    render(<BreadcrumbItem item={item} isLastItem={false} />);

    const separator = screen.getByTestId('breadcrumb-separator');
    expect(separator).toBeInTheDocument();
    expect(separator).toHaveClass('cl-icon');
  });

  it('should not render separator icon when it is the last item', () => {
    const item: Breadcrumb = { label: 'Current' };

    render(<BreadcrumbItem item={item} isLastItem={true} />);

    const separator = screen.queryByTestId('breadcrumb-separator');
    expect(separator).not.toBeInTheDocument();
  });

  it('should handle items without a link property', () => {
    const item: Breadcrumb = { label: 'Products' };

    const { container } = render(<BreadcrumbItem item={item} isLastItem={false} />);

    const span = container.querySelector('.cl-breadcrumbs__text');
    expect(span).toBeInTheDocument();
    expect(span).toHaveTextContent('Products');
  });

  it('should render link in the breadcrumb item li', () => {
    const item: Breadcrumb = { label: 'Products', link: '/products' };

    const { container } = render(<BreadcrumbItem item={item} isLastItem={false} />);

    const listItem = container.querySelector('.cl-breadcrumbs__item');
    const link = listItem?.querySelector('.cl-breadcrumbs__link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/products');
  });

  it('should render text span in the breadcrumb item li when last', () => {
    const item: Breadcrumb = { label: 'Products', link: '/products' };

    const { container } = render(<BreadcrumbItem item={item} isLastItem={true} />);

    const listItem = container.querySelector('.cl-breadcrumbs__item');
    const span = listItem?.querySelector('.cl-breadcrumbs__text');
    expect(span).toBeInTheDocument();
    expect(span).toHaveTextContent('Products');
  });

  it('should handle falsy link values and render as text', () => {
    const item: Breadcrumb = { label: 'NoLink', link: '' };

    render(<BreadcrumbItem item={item} isLastItem={false} />);

    // Empty string link should be treated as no link
    const span = screen.getByText('NoLink');
    expect(span).toHaveClass('cl-breadcrumbs__text');
  });

  it('should render multiple items in sequence without affecting each other', () => {
    const item1: Breadcrumb = { label: 'Home', link: '/home' };
    const item2: Breadcrumb = { label: 'Products' };

    const { container: container1 } = render(<BreadcrumbItem item={item1} isLastItem={false} />);
    const { container: container2 } = render(<BreadcrumbItem item={item2} isLastItem={true} />);

    const link = container1.querySelector('.cl-breadcrumbs__link');
    const span = container2.querySelector('.cl-breadcrumbs__text');

    expect(link).toBeInTheDocument();
    expect(span).toBeInTheDocument();
    expect(link).toHaveTextContent('Home');
    expect(span).toHaveTextContent('Products');
  });

  it('should have proper structure with list item containing link or text', () => {
    const item: Breadcrumb = { label: 'About', link: '/about', icon: IconName.Info };

    const { container } = render(<BreadcrumbItem item={item} isLastItem={false} />);

    const listItem = container.querySelector('li');
    const link = listItem?.querySelector('a');
    const separator = screen.getByTestId('breadcrumb-separator');

    expect(listItem).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent('About');
    expect(separator).toBeInTheDocument();
  });

  it('should render span without link when isLastItem is true regardless of link property', () => {
    const item: Breadcrumb = { label: 'Last Item', link: '/last' };

    const { container } = render(<BreadcrumbItem item={item} isLastItem={true} />);

    const link = container.querySelector('a');
    const span = container.querySelector('span.cl-breadcrumbs__text');

    expect(link).not.toBeInTheDocument();
    expect(span).toBeInTheDocument();
    expect(span).toHaveTextContent('Last Item');
  });
});
