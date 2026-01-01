import { render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import Portal from '../Portal';

describe('Portal', () => {
  beforeEach(() => {
    // Mock document.body.appendChild to track DOM manipulations
    vi.spyOn(document.body, 'appendChild');
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
    const childText = <div data-testid="test-container">Test text</div>;

    const { unmount } = render(
      <Portal>
        <div>{childText}</div>
      </Portal>,
    );
    expect(screen.getByTestId('test-container')).toBeInTheDocument();

    // Trigger unmount
    unmount();

    // Check if the container was removed from the document body
    expect(screen.queryByTestId('test-container')).not.toBeInTheDocument();
  });
});
