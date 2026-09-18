import { ListNavigationItem, ListNavigationOrientation } from '../types';
import { KeyboardEvent } from '../../node_modules/react';
type HandleListKeyNavigationParams<T extends ListNavigationItem> = {
    event: KeyboardEvent<HTMLElement>;
    items: T[];
    orientation?: ListNavigationOrientation;
    onClose?: () => void;
    onSelect?: (id: string) => void;
};
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
export declare function handleListKeyNavigation<T extends ListNavigationItem>({ event, items, orientation, onClose, onSelect, }: HandleListKeyNavigationParams<T>): void;
export {};
