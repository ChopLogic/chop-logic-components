import { render, screen } from '@testing-library/react';
import type { TagProps } from '@types';
import { describe, expect, it, vi } from 'vitest';

import Tag from '../Tag';

vi.mock('@components/hocs', () => ({
  withTooltip: vi.fn((Component) => Component),
  withFigureCaption: vi.fn((Component) => Component),
}));

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
