import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import Dialog from '../Dialog.tsx';

describe('Dialog', () => {
  const testProps = {
    id: 'dialog-id',
    title: 'Test dialog title',
    className: 'dialog-class',
    onClose: vi.fn(),
  };

  it('should render the dialog correctly after a delay', async () => {
    render(
      <Dialog {...testProps} isOpened>
        <div>Dialog content</div>
      </Dialog>,
    );
    const window = await screen.findByRole('dialog');
    expect(window).toBeInTheDocument();
  });

  it('should render the dialog if isOpened is false', () => {
    render(
      <Dialog {...testProps} isOpened={false}>
        <div>Dialog content</div>
      </Dialog>,
    );
    const window = screen.queryByRole('dialog');
    expect(window).not.toBeInTheDocument();
  });

  it('should render the dialog title', async () => {
    render(
      <Dialog {...testProps} isOpened={true}>
        <div>Dialog content</div>
      </Dialog>,
    );

    await waitFor(() => {
      expect(screen.getByRole('heading')).toHaveTextContent(testProps.title);
    });
  });

  it('should display the close button', async () => {
    render(
      <Dialog {...testProps} isOpened={true}>
        <div>Dialog content</div>
      </Dialog>,
    );

    await waitFor(() => {
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });

  it('should call onClose handler', async () => {
    render(
      <Dialog {...testProps} isOpened={true}>
        <div>Dialog content</div>
      </Dialog>,
    );

    await userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(testProps.onClose).toHaveBeenCalledOnce();
    });
  });
});
