import { render } from '@testing-library/react';
import type { ListNavigationItem } from '@types';
import type { KeyboardEvent } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { handleListKeyNavigation } from '../handle-list-key-navigation';

describe('handleListKeyNavigation', () => {
  let items: ListNavigationItem[];
  let onClose: () => void;
  let onSelect: (id: string) => void;

  const createKeyboardEvent = (key: string): KeyboardEvent<HTMLElement> => {
    const event = new KeyboardEvent('keydown', { key });
    return {
      ...event,
      key,
      preventDefault: vi.fn(),
    } as unknown as KeyboardEvent<HTMLElement>;
  };

  beforeEach(() => {
    items = [{ id: 'item-1' }, { id: 'item-2' }, { id: 'item-3' }];
    onClose = vi.fn();
    onSelect = vi.fn();

    render(
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <button type="button" id={item.id}>
              {item.id}
            </button>
          </li>
        ))}
      </ul>,
    );
  });

  describe('Home key', () => {
    it('should focus the first item when Home is pressed', () => {
      document.getElementById('item-2')?.focus();
      const event = createKeyboardEvent('Home');

      handleListKeyNavigation({ event, items });

      expect(document.activeElement?.id).toBe('item-1');
      expect(event.preventDefault).toHaveBeenCalled();
    });

    it('should focus the first item when Home is pressed from last item', () => {
      document.getElementById('item-3')?.focus();
      const event = createKeyboardEvent('Home');

      handleListKeyNavigation({ event, items });

      expect(document.activeElement?.id).toBe('item-1');
    });

    it('should call onSelect with first item id when Home is pressed', () => {
      document.getElementById('item-3')?.focus();
      const event = createKeyboardEvent('Home');

      handleListKeyNavigation({ event, items, onSelect });

      expect(onSelect).toHaveBeenCalledWith('item-1');
    });
  });

  describe('End key', () => {
    it('should focus the last item when End is pressed', () => {
      document.getElementById('item-1')?.focus();
      const event = createKeyboardEvent('End');

      handleListKeyNavigation({ event, items });

      expect(document.activeElement?.id).toBe('item-3');
      expect(event.preventDefault).toHaveBeenCalled();
    });

    it('should focus the last item when End is pressed from middle item', () => {
      document.getElementById('item-2')?.focus();
      const event = createKeyboardEvent('End');

      handleListKeyNavigation({ event, items });

      expect(document.activeElement?.id).toBe('item-3');
    });

    it('should call onSelect with last item id when End is pressed', () => {
      document.getElementById('item-1')?.focus();
      const event = createKeyboardEvent('End');

      handleListKeyNavigation({ event, items, onSelect });

      expect(onSelect).toHaveBeenCalledWith('item-3');
    });
  });

  describe('vertical orientation (default)', () => {
    it('should focus the next item when ArrowDown is pressed', () => {
      document.getElementById('item-1')?.focus();
      const event = createKeyboardEvent('ArrowDown');

      handleListKeyNavigation({ event, items, orientation: 'vertical' });

      expect(document.activeElement?.id).toBe('item-2');
    });

    it('should focus the previous item when ArrowUp is pressed', () => {
      document.getElementById('item-2')?.focus();
      const event = createKeyboardEvent('ArrowUp');

      handleListKeyNavigation({ event, items, orientation: 'vertical' });

      expect(document.activeElement?.id).toBe('item-1');
    });

    it('should wrap to first item when ArrowDown is pressed on last item', () => {
      document.getElementById('item-3')?.focus();
      const event = createKeyboardEvent('ArrowDown');

      handleListKeyNavigation({ event, items, orientation: 'vertical' });

      expect(document.activeElement?.id).toBe('item-1');
    });

    it('should wrap to last item when ArrowUp is pressed on first item', () => {
      document.getElementById('item-1')?.focus();
      const event = createKeyboardEvent('ArrowUp');

      handleListKeyNavigation({ event, items, orientation: 'vertical' });

      expect(document.activeElement?.id).toBe('item-3');
    });

    it('should focus the next item when Tab is pressed', () => {
      document.getElementById('item-1')?.focus();
      const event = createKeyboardEvent('Tab');

      handleListKeyNavigation({ event, items, orientation: 'vertical' });

      expect(document.activeElement?.id).toBe('item-2');
    });

    it('should NOT respond to ArrowLeft in vertical orientation', () => {
      document.getElementById('item-2')?.focus();
      const event = createKeyboardEvent('ArrowLeft');

      handleListKeyNavigation({ event, items, orientation: 'vertical' });

      expect(document.activeElement?.id).toBe('item-2');
      expect(event.preventDefault).not.toHaveBeenCalled();
    });

    it('should NOT respond to ArrowRight in vertical orientation', () => {
      document.getElementById('item-2')?.focus();
      const event = createKeyboardEvent('ArrowRight');

      handleListKeyNavigation({ event, items, orientation: 'vertical' });

      expect(document.activeElement?.id).toBe('item-2');
      expect(event.preventDefault).not.toHaveBeenCalled();
    });
  });

  describe('horizontal orientation', () => {
    it('should focus the next item when ArrowRight is pressed', () => {
      document.getElementById('item-1')?.focus();
      const event = createKeyboardEvent('ArrowRight');

      handleListKeyNavigation({ event, items, orientation: 'horizontal' });

      expect(document.activeElement?.id).toBe('item-2');
    });

    it('should focus the previous item when ArrowLeft is pressed', () => {
      document.getElementById('item-2')?.focus();
      const event = createKeyboardEvent('ArrowLeft');

      handleListKeyNavigation({ event, items, orientation: 'horizontal' });

      expect(document.activeElement?.id).toBe('item-1');
    });

    it('should wrap to first item when ArrowRight is pressed on last item', () => {
      document.getElementById('item-3')?.focus();
      const event = createKeyboardEvent('ArrowRight');

      handleListKeyNavigation({ event, items, orientation: 'horizontal' });

      expect(document.activeElement?.id).toBe('item-1');
    });

    it('should wrap to last item when ArrowLeft is pressed on first item', () => {
      document.getElementById('item-1')?.focus();
      const event = createKeyboardEvent('ArrowLeft');

      handleListKeyNavigation({ event, items, orientation: 'horizontal' });

      expect(document.activeElement?.id).toBe('item-3');
    });

    it('should NOT respond to ArrowUp in horizontal orientation', () => {
      document.getElementById('item-2')?.focus();
      const event = createKeyboardEvent('ArrowUp');

      handleListKeyNavigation({ event, items, orientation: 'horizontal' });

      expect(document.activeElement?.id).toBe('item-2');
      expect(event.preventDefault).not.toHaveBeenCalled();
    });

    it('should NOT respond to ArrowDown in horizontal orientation', () => {
      document.getElementById('item-2')?.focus();
      const event = createKeyboardEvent('ArrowDown');

      handleListKeyNavigation({ event, items, orientation: 'horizontal' });

      expect(document.activeElement?.id).toBe('item-2');
      expect(event.preventDefault).not.toHaveBeenCalled();
    });

    it('should NOT respond to Tab in horizontal orientation', () => {
      document.getElementById('item-2')?.focus();
      const event = createKeyboardEvent('Tab');

      handleListKeyNavigation({ event, items, orientation: 'horizontal' });

      expect(document.activeElement?.id).toBe('item-2');
      expect(event.preventDefault).not.toHaveBeenCalled();
    });
  });

  describe('both orientation', () => {
    it('should respond to both ArrowDown and ArrowRight', () => {
      document.getElementById('item-1')?.focus();
      const eventDown = createKeyboardEvent('ArrowDown');
      handleListKeyNavigation({ event: eventDown, items, orientation: 'both' });
      expect(document.activeElement?.id).toBe('item-2');

      document.getElementById('item-1')?.focus();
      const eventRight = createKeyboardEvent('ArrowRight');
      handleListKeyNavigation({ event: eventRight, items, orientation: 'both' });
      expect(document.activeElement?.id).toBe('item-2');
    });

    it('should respond to both ArrowUp and ArrowLeft', () => {
      document.getElementById('item-2')?.focus();
      const eventUp = createKeyboardEvent('ArrowUp');
      handleListKeyNavigation({ event: eventUp, items, orientation: 'both' });
      expect(document.activeElement?.id).toBe('item-1');

      document.getElementById('item-2')?.focus();
      const eventLeft = createKeyboardEvent('ArrowLeft');
      handleListKeyNavigation({ event: eventLeft, items, orientation: 'both' });
      expect(document.activeElement?.id).toBe('item-1');
    });
  });

  describe('Escape key', () => {
    it('should call onClose when Escape is pressed', () => {
      const event = createKeyboardEvent('Escape');

      handleListKeyNavigation({ event, items, onClose });

      expect(onClose).toHaveBeenCalledTimes(1);
      expect(event.preventDefault).toHaveBeenCalled();
    });

    it('should not throw when onClose is not provided', () => {
      const event = createKeyboardEvent('Escape');

      expect(() => {
        handleListKeyNavigation({ event, items });
      }).not.toThrow();
    });
  });

  describe('onSelect callback', () => {
    it('should call onSelect when navigating with ArrowDown', () => {
      document.getElementById('item-1')?.focus();
      const event = createKeyboardEvent('ArrowDown');

      handleListKeyNavigation({ event, items, onSelect });

      expect(onSelect).toHaveBeenCalledWith('item-2');
    });

    it('should call onSelect when navigating with ArrowUp', () => {
      document.getElementById('item-2')?.focus();
      const event = createKeyboardEvent('ArrowUp');

      handleListKeyNavigation({ event, items, onSelect });

      expect(onSelect).toHaveBeenCalledWith('item-1');
    });

    it('should not call onSelect for unhandled keys', () => {
      document.getElementById('item-1')?.focus();
      const event = createKeyboardEvent('a');

      handleListKeyNavigation({ event, items, onSelect });

      expect(onSelect).not.toHaveBeenCalled();
    });
  });

  describe('edge cases', () => {
    it('should handle empty items array', () => {
      const event = createKeyboardEvent('ArrowDown');

      expect(() => {
        handleListKeyNavigation({ event, items: [] });
      }).not.toThrow();

      expect(event.preventDefault).not.toHaveBeenCalled();
    });

    it('should handle single item', () => {
      const singleItem = [{ id: 'item-1' }];
      document.getElementById('item-1')?.focus();

      const eventDown = createKeyboardEvent('ArrowDown');
      handleListKeyNavigation({ event: eventDown, items: singleItem });
      expect(document.activeElement?.id).toBe('item-1');

      const eventUp = createKeyboardEvent('ArrowUp');
      handleListKeyNavigation({ event: eventUp, items: singleItem });
      expect(document.activeElement?.id).toBe('item-1');

      const eventHome = createKeyboardEvent('Home');
      handleListKeyNavigation({ event: eventHome, items: singleItem });
      expect(document.activeElement?.id).toBe('item-1');

      const eventEnd = createKeyboardEvent('End');
      handleListKeyNavigation({ event: eventEnd, items: singleItem });
      expect(document.activeElement?.id).toBe('item-1');
    });

    it('should handle when no item is focused', () => {
      // No item has focus
      document.body.focus();
      const event = createKeyboardEvent('ArrowDown');

      handleListKeyNavigation({ event, items });

      // Should navigate to first item (index 0) since current is -1
      expect(document.activeElement?.id).toBe('item-1');
    });

    it('should not respond to unrecognized keys', () => {
      document.getElementById('item-1')?.focus();
      const event = createKeyboardEvent('Enter');

      handleListKeyNavigation({ event, items });

      expect(document.activeElement?.id).toBe('item-1');
      expect(event.preventDefault).not.toHaveBeenCalled();
    });
  });
});
