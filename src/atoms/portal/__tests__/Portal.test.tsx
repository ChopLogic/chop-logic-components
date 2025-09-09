import { render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import Portal from '../Portal.tsx';

describe('Portal', () => {
  beforeEach(() => {
    // Mock document.body.appendChild and removeChild to track DOM manipulations
    vi.spyOn(document.body, 'appendChild');
    vi.spyOn(document.body, 'removeChild');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render children inside a portal', () => {
    const childText = 'Hello from the portal';

    // Render the component with some children
    render(
      <Portal>
        <div>{childText}</div>
      </Portal>,
    );

    // Verify the child element exists in the document
    expect(screen.getByText(childText)).toBeInTheDocument();

    // Check if the container was appended to document.body
    expect(document.body.appendChild).toHaveBeenCalled();
  });

  it('should remove the portal container from the body on unmount', () => {
    const childText = 'Goodbye from the portal';

    const { unmount } = render(
      <Portal>
        <div>{childText}</div>
      </Portal>,
    );

    // Trigger unmount
    unmount();

    // Check if the container was removed from the document body
    expect(document.body.removeChild).toHaveBeenCalled();
  });
});
