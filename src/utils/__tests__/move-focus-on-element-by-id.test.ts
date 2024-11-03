import { moveFocusOnElementById } from 'utils/move-focus-on-element-by-id';
import { describe, expect, it, vi } from 'vitest';

describe('moveFocusOnElementById', () => {
  it('should focus the element with the provided ID', () => {
    const elementId = 'test-element';
    const mockElement = document.createElement('div');
    mockElement.id = elementId;
    mockElement.focus = vi.fn();

    vi.spyOn(document, 'getElementById').mockReturnValue(mockElement);

    moveFocusOnElementById(elementId);

    expect(mockElement.focus).toHaveBeenCalled();
  });

  it('should not throw if element is not found', () => {
    const elementId = 'non-existent-element';
    vi.spyOn(document, 'getElementById').mockReturnValue(null);

    expect(() => moveFocusOnElementById(elementId)).not.toThrow();
  });
});
