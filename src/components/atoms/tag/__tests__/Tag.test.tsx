import { render, screen } from '@testing-library/react';
import type { TagProps } from '@types';
import { describe, expect, it } from 'vitest';

import Tag from '../Tag';

const renderTag = (props: TagProps) => {
  return render(<Tag {...props} />);
};

describe('Tag', () => {
  it('renders name in span with cl-tag class', () => {
    renderTag({ name: 'React' });

    const tag = screen.getByText('React');
    expect(tag.tagName).toBe('SPAN');
    expect(tag).toHaveClass('cl-tag');
  });

  it('wraps in Tooltip when description is provided', () => {
    renderTag({ name: 'TypeScript', description: 'A typed superset of JavaScript' });

    const tag = screen.getByText('TypeScript');
    const tooltipWrapper = tag.parentElement;
    expect(tooltipWrapper).toHaveAttribute('aria-describedby');
  });

  it('does not wrap in Tooltip when no description', () => {
    renderTag({ name: 'CSS' });

    const tag = screen.getByText('CSS');
    expect(tag).not.toHaveAttribute('aria-describedby');
    expect(tag.parentElement).not.toHaveAttribute('aria-describedby');
  });

  it('applies --cl-tag-color inline style when color is provided', () => {
    renderTag({ name: 'Design', color: '#ff5500' });

    const tag = screen.getByText('Design');
    expect(tag.style.getPropertyValue('--cl-tag-color')).toBe('#ff5500');
  });

  it('composes className via getClassName', () => {
    renderTag({ name: 'Custom', className: 'extra-class' });

    const tag = screen.getByText('Custom');
    expect(tag).toHaveClass('cl-tag');
    expect(tag).toHaveClass('extra-class');
  });

  it('renders empty span when name is empty string', () => {
    const { container } = renderTag({ name: '' });

    const span = container.querySelector('span.cl-tag');
    expect(span).toBeInTheDocument();
    expect(span).toHaveTextContent('');
  });

  it('spreads rest props onto the root element', () => {
    renderTag({ name: 'Test', id: 'tag-1', title: 'Tag title', tabIndex: 0 });

    const tag = screen.getByText('Test');
    expect(tag).toHaveAttribute('id', 'tag-1');
    expect(tag).toHaveAttribute('title', 'Tag title');
    expect(tag).toHaveAttribute('tabindex', '0');
  });
});
