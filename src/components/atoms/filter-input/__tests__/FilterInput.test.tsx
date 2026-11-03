import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as fc from 'fast-check';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import FilterInput from '../FilterInput';

vi.mock('@components/hocs', () => ({
  withTooltip: vi.fn((Component) => Component),
  withFigureCaption: vi.fn((Component) => Component),
}));

describe('FilterInput', () => {
  const defaultProps = {
    value: '',
    onChange: vi.fn(),
    onClear: vi.fn(),
    placeholder: 'Filter options...',
    listboxId: 'test-listbox-id',
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('rendering', () => {
    it('renders input with correct placeholder', () => {
      render(<FilterInput {...defaultProps} placeholder="Search items..." />);

      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('placeholder', 'Search items...');
    });

    it('renders input with type="text"', () => {
      render(<FilterInput {...defaultProps} />);

      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('type', 'text');
    });

    it('renders with correct value', () => {
      render(<FilterInput {...defaultProps} value="test query" />);

      const input = screen.getByRole('textbox');
      expect(input).toHaveValue('test query');
    });

    it('applies custom className', () => {
      const { container } = render(<FilterInput {...defaultProps} className="custom-class" />);

      const root = container.firstChild;
      expect(root).toHaveClass('cl-filter-input');
      expect(root).toHaveClass('custom-class');
    });

    it('applies BEM root class cl-filter-input', () => {
      const { container } = render(<FilterInput {...defaultProps} />);

      expect(container.firstChild).toHaveClass('cl-filter-input');
    });

    it('applies BEM field class cl-filter-input__field', () => {
      render(<FilterInput {...defaultProps} />);

      const input = screen.getByRole('textbox');
      expect(input).toHaveClass('cl-filter-input__field');
    });
  });

  describe('onChange behavior', () => {
    it('calls onChange when typing', async () => {
      const onChange = vi.fn();
      render(<FilterInput {...defaultProps} onChange={onChange} />);

      const input = screen.getByRole('textbox');
      await userEvent.type(input, 'a');

      expect(onChange).toHaveBeenCalledWith('a');
    });

    it('calls onChange with full typed value', async () => {
      const onChange = vi.fn();
      render(<FilterInput {...defaultProps} onChange={onChange} />);

      const input = screen.getByRole('textbox');
      await userEvent.type(input, 'test');

      expect(onChange).toHaveBeenCalledTimes(4);
      expect(onChange).toHaveBeenLastCalledWith('t');
    });

    it('calls onChange when value is cleared via typing', () => {
      const onChange = vi.fn();
      render(<FilterInput {...defaultProps} value="a" onChange={onChange} />);

      const input = screen.getByRole('textbox');
      fireEvent.change(input, { target: { value: '' } });

      expect(onChange).toHaveBeenCalledWith('');
    });
  });

  describe('clear button visibility', () => {
    it('shows clear button when value is non-empty', () => {
      render(<FilterInput {...defaultProps} value="test" />);

      const clearButton = screen.getByRole('button', { name: 'Clear filter' });
      expect(clearButton).toBeInTheDocument();
    });

    it('hides clear button when value is empty', () => {
      render(<FilterInput {...defaultProps} value="" />);

      expect(screen.queryByRole('button', { name: 'Clear filter' })).not.toBeInTheDocument();
    });

    it('hides clear button when value is whitespace only', () => {
      render(<FilterInput {...defaultProps} value="   " />);

      expect(screen.queryByRole('button', { name: 'Clear filter' })).not.toBeInTheDocument();
    });

    it('hides clear button when value is tab character only', () => {
      // Using a string with actual tab character
      render(<FilterInput {...defaultProps} value={'	'} />);

      expect(screen.queryByRole('button', { name: 'Clear filter' })).not.toBeInTheDocument();
    });

    it('shows clear button when value has leading whitespace but contains non-whitespace', () => {
      render(<FilterInput {...defaultProps} value="  a  " />);

      const clearButton = screen.getByRole('button', { name: 'Clear filter' });
      expect(clearButton).toBeInTheDocument();
    });

    it('applies BEM clear button class cl-filter-input__clear', () => {
      render(<FilterInput {...defaultProps} value="test" />);

      const clearButton = screen.getByRole('button', { name: 'Clear filter' });
      expect(clearButton).toHaveClass('cl-filter-input__clear');
    });
  });

  describe('clear button behavior', () => {
    it('calls onClear when clear button is clicked', async () => {
      const onClear = vi.fn();
      render(<FilterInput {...defaultProps} value="test" onClear={onClear} />);

      const clearButton = screen.getByRole('button', { name: 'Clear filter' });
      await userEvent.click(clearButton);

      expect(onClear).toHaveBeenCalledTimes(1);
    });

    it('maintains focus on input when clear button is clicked', async () => {
      render(<FilterInput {...defaultProps} value="test" />);

      const clearButton = screen.getByRole('button', { name: 'Clear filter' });
      await userEvent.click(clearButton);

      const input = screen.getByRole('textbox');
      expect(input).toHaveFocus();
    });

    it('clear button activates on Enter keypress', async () => {
      const onClear = vi.fn();
      render(<FilterInput {...defaultProps} value="test" onClear={onClear} />);

      const clearButton = screen.getByRole('button', { name: 'Clear filter' });
      clearButton.focus();
      await userEvent.keyboard('{Enter}');

      expect(onClear).toHaveBeenCalledTimes(1);
    });

    it('clear button activates on Space keypress', async () => {
      const onClear = vi.fn();
      render(<FilterInput {...defaultProps} value="test" onClear={onClear} />);

      const clearButton = screen.getByRole('button', { name: 'Clear filter' });
      clearButton.focus();
      await userEvent.keyboard(' ');

      expect(onClear).toHaveBeenCalledTimes(1);
    });
  });

  describe('accessibility', () => {
    it('has correct aria-label on input', () => {
      render(<FilterInput {...defaultProps} />);

      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('aria-label', 'Filter options');
    });

    it('has correct aria-controls attribute pointing to listbox', () => {
      render(<FilterInput {...defaultProps} listboxId="my-listbox-123" />);

      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('aria-controls', 'my-listbox-123');
    });

    it('has tabIndex={0} on input', () => {
      render(<FilterInput {...defaultProps} />);

      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('tabIndex', '0');
    });

    it('clear button has accessible label', () => {
      render(<FilterInput {...defaultProps} value="test" />);

      const clearButton = screen.getByRole('button', { name: 'Clear filter' });
      expect(clearButton).toBeInTheDocument();
    });
  });

  describe('focus behavior', () => {
    it('input can receive focus', () => {
      render(<FilterInput {...defaultProps} />);

      const input = screen.getByRole('textbox');
      input.focus();

      expect(input).toHaveFocus();
    });

    it('input can be tabbed to', async () => {
      render(
        <div>
          <button type="button">Before</button>
          <FilterInput {...defaultProps} />
        </div>,
      );

      const beforeButton = screen.getByRole('button', { name: 'Before' });
      beforeButton.focus();

      await userEvent.tab();

      const input = screen.getByRole('textbox');
      expect(input).toHaveFocus();
    });
  });

  describe('keyboard behavior', () => {
    it('stops propagation of Home key to allow text caret movement', () => {
      const parentKeyDownHandler = vi.fn();
      render(
        <div onKeyDown={parentKeyDownHandler}>
          <FilterInput {...defaultProps} value="test value" />
        </div>,
      );

      const input = screen.getByRole('textbox');
      fireEvent.keyDown(input, { key: 'Home' });

      expect(parentKeyDownHandler).not.toHaveBeenCalled();
    });

    it('stops propagation of End key to allow text caret movement', () => {
      const parentKeyDownHandler = vi.fn();
      render(
        <div onKeyDown={parentKeyDownHandler}>
          <FilterInput {...defaultProps} value="test value" />
        </div>,
      );

      const input = screen.getByRole('textbox');
      fireEvent.keyDown(input, { key: 'End' });

      expect(parentKeyDownHandler).not.toHaveBeenCalled();
    });

    it('prevents default on Enter key to avoid form submission', () => {
      render(
        <form>
          <FilterInput {...defaultProps} />
        </form>,
      );

      const input = screen.getByRole('textbox');
      const event = fireEvent.keyDown(input, { key: 'Enter' });

      // fireEvent returns false if preventDefault was called
      expect(event).toBe(false);
    });

    it('does not prevent Enter during IME composition', () => {
      render(<FilterInput {...defaultProps} />);

      const input = screen.getByRole('textbox');

      // Create a keyboard event with isComposing set to true
      const event = new KeyboardEvent('keydown', {
        key: 'Enter',
        bubbles: true,
        cancelable: true,
      });
      // Override isComposing since it's read-only in the constructor
      Object.defineProperty(event, 'isComposing', { value: true });

      const wasNotPrevented = input.dispatchEvent(event);

      // dispatchEvent returns true if preventDefault was NOT called
      expect(wasNotPrevented).toBe(true);
    });

    it('allows Arrow keys to propagate for dropdown navigation', () => {
      const parentKeyDownHandler = vi.fn();
      render(
        <div onKeyDown={parentKeyDownHandler}>
          <FilterInput {...defaultProps} />
        </div>,
      );

      const input = screen.getByRole('textbox');
      fireEvent.keyDown(input, { key: 'ArrowDown' });
      fireEvent.keyDown(input, { key: 'ArrowUp' });

      expect(parentKeyDownHandler).toHaveBeenCalledTimes(2);
    });

    it('allows Escape key to propagate for closing dropdown', () => {
      const parentKeyDownHandler = vi.fn();
      render(
        <div onKeyDown={parentKeyDownHandler}>
          <FilterInput {...defaultProps} />
        </div>,
      );

      const input = screen.getByRole('textbox');
      fireEvent.keyDown(input, { key: 'Escape' });

      expect(parentKeyDownHandler).toHaveBeenCalledTimes(1);
    });
  });
});

// Property-Based Tests using fast-check
/**
 * Arbitrary for generating filter query strings including empty, whitespace-only, and non-whitespace values.
 */
const filterValueArb = fc.string({ minLength: 0, maxLength: 100 });

/**
 * Arbitrary for generating whitespace-only strings.
 */
const whitespaceOnlyArb = fc.oneof(
  fc.constant(''),
  fc.constant(' '),
  fc.constant('  '),
  fc.constant('   '),
  fc.constant('\t'),
  fc.constant('\n'),
  fc.constant('  \t  '),
  fc.constant('\n\t\n'),
  fc
    .array(fc.constantFrom(' ', '\t', '\n', '\r'), { minLength: 1, maxLength: 20 })
    .map((arr) => arr.join('')),
);

/**
 * Arbitrary for generating non-empty strings with at least one non-whitespace character.
 */
const nonWhitespaceValueArb = fc
  .tuple(
    fc.string({ minLength: 0, maxLength: 20 }),
    fc.string({ minLength: 1, maxLength: 20 }).filter((s) => s.trim().length > 0),
    fc.string({ minLength: 0, maxLength: 20 }),
  )
  .map(([prefix, middle, suffix]) => prefix + middle + suffix);

describe('FilterInput - Property-Based Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  /**
   * **Validates: Requirements 3.4, 3.5, 5.1, 5.2**
   *
   * Property 5: Clear Button Visibility Invariant
   * _For any_ filter query value, the clear button is visible if and only if
   * the trimmed query contains at least one non-whitespace character.
   */
  describe('Property 5: Clear Button Visibility Invariant', () => {
    it('clear button visible iff trimmed query has non-whitespace', () => {
      fc.assert(
        fc.property(filterValueArb, (value) => {
          const { container } = render(
            <FilterInput
              value={value}
              onChange={vi.fn()}
              onClear={vi.fn()}
              placeholder="Filter..."
              listboxId="test-listbox"
            />,
          );

          const hasNonWhitespace = value.trim().length > 0;
          const clearButton = screen.queryByRole('button', { name: 'Clear filter' });

          if (hasNonWhitespace) {
            expect(clearButton).toBeInTheDocument();
          } else {
            expect(clearButton).not.toBeInTheDocument();
          }

          // Cleanup for next iteration
          container.remove();
        }),
        { numRuns: 100 },
      );
    });

    it('clear button always hidden for whitespace-only values', () => {
      fc.assert(
        fc.property(whitespaceOnlyArb, (whitespaceValue) => {
          const { container } = render(
            <FilterInput
              value={whitespaceValue}
              onChange={vi.fn()}
              onClear={vi.fn()}
              placeholder="Filter..."
              listboxId="test-listbox"
            />,
          );

          const clearButton = screen.queryByRole('button', { name: 'Clear filter' });
          expect(clearButton).not.toBeInTheDocument();

          // Cleanup for next iteration
          container.remove();
        }),
        { numRuns: 100 },
      );
    });

    it('clear button always visible for values with non-whitespace', () => {
      fc.assert(
        fc.property(nonWhitespaceValueArb, (nonWhitespaceValue) => {
          const { container } = render(
            <FilterInput
              value={nonWhitespaceValue}
              onChange={vi.fn()}
              onClear={vi.fn()}
              placeholder="Filter..."
              listboxId="test-listbox"
            />,
          );

          const clearButton = screen.queryByRole('button', { name: 'Clear filter' });
          expect(clearButton).toBeInTheDocument();

          // Cleanup for next iteration
          container.remove();
        }),
        { numRuns: 100 },
      );
    });
  });
});
