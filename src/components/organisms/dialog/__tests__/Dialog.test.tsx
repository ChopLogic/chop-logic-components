import { DialogVariant } from '@enums';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import Dialog from '../Dialog';

describe('Dialog', () => {
  const testProps = {
    id: 'dialog-id',
    title: 'Test dialog title',
    className: 'dialog-class',
    onClose: vi.fn(),
  };

  let originalOverflow: string;

  beforeEach(() => {
    originalOverflow = document.body.style.overflow;
    document.body.style.overflow = '';
    vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
  });

  afterEach(() => {
    document.body.style.overflow = originalOverflow;
    vi.restoreAllMocks();
  });

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

  it('should set overflow clip on body when dialog is opened', async () => {
    render(
      <Dialog {...testProps} isOpened={true}>
        <div>Dialog content</div>
      </Dialog>,
    );

    await waitFor(() => {
      expect(document.body.style.overflow).toBe('clip');
    });
  });

  it('should restore body overflow when dialog is closed', async () => {
    const { rerender } = render(
      <Dialog {...testProps} isOpened={true}>
        <div>Dialog content</div>
      </Dialog>,
    );

    await waitFor(() => {
      expect(document.body.style.overflow).toBe('clip');
    });

    rerender(
      <Dialog {...testProps} isOpened={false}>
        <div>Dialog content</div>
      </Dialog>,
    );

    await waitFor(() => {
      expect(document.body.style.overflow).toBe('');
    });
  });

  describe('Variants', () => {
    it('should render default variant without variant modifier class', async () => {
      render(
        <Dialog {...testProps} isOpened={true}>
          <div>Dialog content</div>
        </Dialog>,
      );

      await waitFor(() => {
        const layout = document.querySelector('.cl-dialog__layout');
        expect(layout).toBeInTheDocument();
        expect(layout).not.toHaveClass('cl-dialog__layout_variant_default');
        expect(layout).not.toHaveClass('cl-dialog__layout_variant_drawer-right');
        expect(layout).not.toHaveClass('cl-dialog__layout_variant_drawer-left');
      });
    });

    it('should render default variant when explicitly set without variant modifier class', async () => {
      render(
        <Dialog {...testProps} isOpened={true} variant={DialogVariant.Default}>
          <div>Dialog content</div>
        </Dialog>,
      );

      await waitFor(() => {
        const layout = document.querySelector('.cl-dialog__layout');
        expect(layout).toBeInTheDocument();
        expect(layout).not.toHaveClass('cl-dialog__layout_variant_default');
      });
    });

    it('should apply drawer-right variant class', async () => {
      render(
        <Dialog {...testProps} isOpened={true} variant={DialogVariant.DrawerRight}>
          <div>Dialog content</div>
        </Dialog>,
      );

      await waitFor(() => {
        const layout = document.querySelector('.cl-dialog__layout');
        expect(layout).toHaveClass('cl-dialog__layout_variant_drawer-right');
      });
    });

    it('should apply drawer-left variant class', async () => {
      render(
        <Dialog {...testProps} isOpened={true} variant={DialogVariant.DrawerLeft}>
          <div>Dialog content</div>
        </Dialog>,
      );

      await waitFor(() => {
        const layout = document.querySelector('.cl-dialog__layout');
        expect(layout).toHaveClass('cl-dialog__layout_variant_drawer-left');
      });
    });

    it('should position close button on the right for default variant', async () => {
      render(
        <Dialog {...testProps} isOpened={true}>
          <div>Dialog content</div>
        </Dialog>,
      );

      await waitFor(() => {
        const button = document.querySelector('.cl-dialog__button');
        expect(button).toBeInTheDocument();
        expect(button).not.toHaveClass('cl-dialog__button_left');
      });
    });

    it('should position close button on the right for drawer-right variant', async () => {
      render(
        <Dialog {...testProps} isOpened={true} variant={DialogVariant.DrawerRight}>
          <div>Dialog content</div>
        </Dialog>,
      );

      await waitFor(() => {
        const button = document.querySelector('.cl-dialog__button');
        expect(button).toBeInTheDocument();
        expect(button).not.toHaveClass('cl-dialog__button_left');
      });
    });
  });
});
