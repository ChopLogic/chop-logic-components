import { render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import ChopLogicPortal from '..';

describe('ChopLogicPortal', () => {
  beforeEach(() => {
    // Mock document.body.appendChild and removeChild to track DOM manipulations
    vi.spyOn(document.body, 'appendChild');
    vi.spyOn(document.body, 'removeChild');
  });

  afterEach(() => {
    // Clear mocks after each test
    vi.restoreAllMocks();
  });

  it('should render children inside a portal', () => {
    const childText = 'Hello from the portal';

    // Render the component with some children
    render(
      <ChopLogicPortal>
        <div>{childText}</div>
      </ChopLogicPortal>,
    );

    // Verify the child element exists in the document
    expect(screen.getByText(childText)).toBeInTheDocument();

    // Check if the container was appended to document.body
    expect(document.body.appendChild).toHaveBeenCalled();
  });

  it('should remove the portal container from the body on unmount', () => {
    const childText = 'Goodbye from the portal';

    const { unmount } = render(
      <ChopLogicPortal>
        <div>{childText}</div>
      </ChopLogicPortal>,
    );

    // Trigger unmount
    unmount();

    // Check if the container was removed from the document body
    expect(document.body.removeChild).toHaveBeenCalled();
  });
});
