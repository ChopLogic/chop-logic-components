import type { ListNavigationItem, ListNavigationOrientation } from '@types';
import type { KeyboardEvent } from 'react';
import { moveFocusOnElementById } from './move-focus-on-element-by-id';

type HandleListKeyNavigationParams<T extends ListNavigationItem> = {
  event: KeyboardEvent<HTMLElement>;
  items: T[];
  orientation?: ListNavigationOrientation;
  onClose?: () => void;
  onSelect?: (id: string) => void;
};

function findFocusedIndex<T extends ListNavigationItem>(items: T[]): number {
  for (let i = 0; i < items.length; i++) {
    const element = document.getElementById(items[i].id);
    if (element === document.activeElement) {
      return i;
    }
  }
  return -1;
}

function getPreviousIndex(currentIndex: number, totalItems: number): number {
  if (currentIndex <= 0) {
    return totalItems - 1;
  }
  return currentIndex - 1;
}

function getNextIndex(currentIndex: number, totalItems: number): number {
  if (currentIndex >= totalItems - 1) {
    return 0;
  }
  return currentIndex + 1;
}

function isPreviousKey(key: string, orientation: ListNavigationOrientation): boolean {
  return (
    (key === 'ArrowUp' && (orientation === 'vertical' || orientation === 'both')) ||
    (key === 'ArrowLeft' && (orientation === 'horizontal' || orientation === 'both'))
  );
}

function isNextKey(key: string, orientation: ListNavigationOrientation): boolean {
  return (
    (key === 'ArrowDown' && (orientation === 'vertical' || orientation === 'both')) ||
    (key === 'ArrowRight' && (orientation === 'horizontal' || orientation === 'both'))
  );
}

/**
 * Generic keyboard navigation handler for list-based components.
 *
 * Supports:
 * - Home: Navigate to first item
 * - End: Navigate to last item
 * - ArrowUp/ArrowDown: Navigate previous/next (vertical orientation)
 * - ArrowLeft/ArrowRight: Navigate previous/next (horizontal orientation)
 * - Escape: Close the list (calls onClose callback)
 *
 * When `onSelect` is provided, selecting an item will also trigger the callback,
 * enabling "navigate-and-select" behavior (useful for tabs).
 */
export function handleListKeyNavigation<T extends ListNavigationItem>({
  event,
  items,
  orientation = 'vertical',
  onClose,
  onSelect,
}: HandleListKeyNavigationParams<T>): void {
  if (items.length === 0) {
    if (event.key === 'Escape') {
      event.preventDefault();
      onClose?.();
    }
    return;
  }

  const currentIndex = findFocusedIndex(items);
  let newIndex: number | null = null;

  switch (event.key) {
    case 'Home': {
      event.preventDefault();
      newIndex = 0;
      break;
    }

    case 'End': {
      event.preventDefault();
      newIndex = items.length - 1;
      break;
    }

    case 'Escape': {
      event.preventDefault();
      onClose?.();
      return;
    }

    case 'ArrowUp':
    case 'ArrowLeft': {
      if (isPreviousKey(event.key, orientation)) {
        event.preventDefault();
        newIndex = getPreviousIndex(currentIndex, items.length);
      }
      break;
    }

    case 'ArrowDown':
    case 'ArrowRight': {
      if (isNextKey(event.key, orientation)) {
        event.preventDefault();
        newIndex = getNextIndex(currentIndex, items.length);
      }
      break;
    }
  }

  if (newIndex !== null && newIndex >= 0 && newIndex < items.length) {
    const targetItem = items[newIndex];
    moveFocusOnElementById(targetItem.id);
    onSelect?.(targetItem.id);
  }
}
