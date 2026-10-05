import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import Dialog from '../Dialog';

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

  it('should apply the contentClassName to the content wrapper', async () => {
    render(
      <Dialog {...testProps} isOpened={true} contentClassName="custom-content">
        <div>Dialog content</div>
      </Dialog>,
    );

    await waitFor(() => {
      expect(document.querySelector('.cl-dialog__content')).toHaveClass('custom-content');
    });
  });

  it('should apply the headerClassName to the header element', async () => {
    render(
      <Dialog {...testProps} isOpened={true} headerClassName="custom-header">
        <div>Dialog content</div>
      </Dialog>,
    );

    await waitFor(() => {
      expect(document.querySelector('header')).toHaveClass('custom-header');
    });
  });

  it('should apply the bodyClassName to the body wrapper', async () => {
    render(
      <Dialog {...testProps} isOpened={true} bodyClassName="custom-body">
        <div>Dialog content</div>
      </Dialog>,
    );

    await waitFor(() => {
      expect(screen.getByText('Dialog content').parentElement).toHaveClass('custom-body');
    });
  });
});
