import { moveFocusOnElementById } from 'utils/move-focus-on-element-by-id';
import { describe, expect, it, vi } from 'vitest';

describe('moveFocusOnElementById', () => {
  it('should focus the element with the provided ID', () => {
    // Create a mock element and mock focus function
    const elementId = 'test-element';
    const mockElement = document.createElement('div');
    mockElement.id = elementId;
    mockElement.focus = vi.fn(); // Mock the focus function

    // Mock getElementById to return the mock element
    vi.spyOn(document, 'getElementById').mockReturnValue(mockElement);

    moveFocusOnElementById(elementId);

    expect(mockElement.focus).toHaveBeenCalled();
  });

  it('should not throw if element is not found', () => {
    const elementId = 'non-existent-element';

    // Mock getElementById to return null
    vi.spyOn(document, 'getElementById').mockReturnValue(null);

    // Call the function
    expect(() => moveFocusOnElementById(elementId)).not.toThrow();
  });
});
