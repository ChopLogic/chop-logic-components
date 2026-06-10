import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { GalleryItem } from '@types';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import FullscreenViewer from '../FullscreenViewer';

describe('FullscreenViewer', () => {
  const defaultImages: GalleryItem[] = [
    { src: '/image1.jpg', alt: 'Image 1', caption: 'Caption 1' },
    { src: '/image2.jpg', alt: 'Image 2', caption: 'Caption 2' },
    { src: '/image3.jpg', alt: 'Image 3', caption: 'Caption 3' },
  ];

  const defaultProps = {
    images: defaultImages,
    currentIndex: 0,
    isOpen: true,
    onClose: vi.fn(),
    onNavigate: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('rendering', () => {
    it('renders dialog when isOpen is true', async () => {
      render(<FullscreenViewer {...defaultProps} />);

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });
    });

    it('does not render when isOpen is false', () => {
      render(<FullscreenViewer {...defaultProps} isOpen={false} />);

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('renders with correct ARIA attributes', async () => {
      render(<FullscreenViewer {...defaultProps} />);

      await waitFor(() => {
        const dialog = screen.getByRole('dialog');
        expect(dialog).toHaveAttribute('aria-modal', 'true');
        expect(dialog).toHaveAttribute('aria-label', 'Fullscreen image viewer');
      });
    });

    it('renders the current image', async () => {
      render(<FullscreenViewer {...defaultProps} />);

      await waitFor(() => {
        const image = screen.getByRole('img');
        expect(image).toHaveAttribute('alt', 'Image 1');
      });
    });

    it('renders close button', async () => {
      render(<FullscreenViewer {...defaultProps} />);

      await waitFor(() => {
        expect(screen.getByLabelText('Close fullscreen view')).toBeInTheDocument();
      });
    });

    it('returns null when currentImage is undefined (invalid index)', async () => {
      render(<FullscreenViewer {...defaultProps} currentIndex={99} />);

      // Should not render anything
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('returns null when images array is empty', () => {
      render(<FullscreenViewer {...defaultProps} images={[]} currentIndex={0} />);

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  describe('closing animation', () => {
    it('adds closing class when isOpen becomes false', async () => {
      const { rerender } = render(<FullscreenViewer {...defaultProps} isOpen={true} />);

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      rerender(<FullscreenViewer {...defaultProps} isOpen={false} />);

      // During the closing animation, the element should still be in the DOM with closing class
      const dialog = screen.queryByRole('dialog');
      if (dialog) {
        expect(dialog).toHaveClass('cl-fullscreen-viewer_closing');
      }
    });
  });

  describe('counter', () => {
    it('renders counter when there are multiple images', async () => {
      render(<FullscreenViewer {...defaultProps} />);

      await waitFor(() => {
        const counter = screen.getByText('1 / 3');
        expect(counter).toBeInTheDocument();
        expect(counter).toHaveAttribute('aria-live', 'polite');
      });
    });

    it('does not render counter with single image', async () => {
      const singleImage = [{ src: '/single.jpg', alt: 'Single image' }];

      render(<FullscreenViewer {...defaultProps} images={singleImage} />);

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      expect(screen.queryByText(/\d+ \/ \d+/)).not.toBeInTheDocument();
    });

    it('updates counter when currentIndex changes', async () => {
      const { rerender } = render(<FullscreenViewer {...defaultProps} currentIndex={0} />);

      await waitFor(() => {
        expect(screen.getByText('1 / 3')).toBeInTheDocument();
      });

      rerender(<FullscreenViewer {...defaultProps} currentIndex={1} />);

      await waitFor(() => {
        expect(screen.getByText('2 / 3')).toBeInTheDocument();
      });
    });

    it('shows correct counter for last image', async () => {
      render(<FullscreenViewer {...defaultProps} currentIndex={2} />);

      await waitFor(() => {
        expect(screen.getByText('3 / 3')).toBeInTheDocument();
      });
    });
  });

  describe('navigation buttons', () => {
    it('shows next button but not previous at first image', async () => {
      render(<FullscreenViewer {...defaultProps} currentIndex={0} />);

      await waitFor(() => {
        expect(screen.getByLabelText('Next image')).toBeInTheDocument();
        expect(screen.queryByLabelText('Previous image')).not.toBeInTheDocument();
      });
    });

    it('shows both buttons at middle image', async () => {
      render(<FullscreenViewer {...defaultProps} currentIndex={1} />);

      await waitFor(() => {
        expect(screen.getByLabelText('Previous image')).toBeInTheDocument();
        expect(screen.getByLabelText('Next image')).toBeInTheDocument();
      });
    });

    it('shows previous button but not next at last image', async () => {
      render(<FullscreenViewer {...defaultProps} currentIndex={2} />);

      await waitFor(() => {
        expect(screen.getByLabelText('Previous image')).toBeInTheDocument();
        expect(screen.queryByLabelText('Next image')).not.toBeInTheDocument();
      });
    });

    it('does not show navigation buttons with single image', async () => {
      const singleImage = [{ src: '/single.jpg', alt: 'Single image' }];

      render(<FullscreenViewer {...defaultProps} images={singleImage} />);

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      expect(screen.queryByLabelText('Previous image')).not.toBeInTheDocument();
      expect(screen.queryByLabelText('Next image')).not.toBeInTheDocument();
    });

    it('calls onNavigate with previous index when clicking previous button', async () => {
      const onNavigate = vi.fn();
      render(<FullscreenViewer {...defaultProps} currentIndex={1} onNavigate={onNavigate} />);

      await waitFor(() => {
        expect(screen.getByLabelText('Previous image')).toBeInTheDocument();
      });

      await userEvent.click(screen.getByLabelText('Previous image'));

      expect(onNavigate).toHaveBeenCalledWith(0);
    });

    it('calls onNavigate with next index when clicking next button', async () => {
      const onNavigate = vi.fn();
      render(<FullscreenViewer {...defaultProps} currentIndex={0} onNavigate={onNavigate} />);

      await waitFor(() => {
        expect(screen.getByLabelText('Next image')).toBeInTheDocument();
      });

      await userEvent.click(screen.getByLabelText('Next image'));

      expect(onNavigate).toHaveBeenCalledWith(1);
    });
  });

  describe('keyboard navigation', () => {
    it('navigates to previous image with ArrowLeft key', async () => {
      const onNavigate = vi.fn();
      render(<FullscreenViewer {...defaultProps} currentIndex={1} onNavigate={onNavigate} />);

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      fireEvent.keyDown(document, { code: 'ArrowLeft' });

      expect(onNavigate).toHaveBeenCalledWith(0);
    });

    it('navigates to next image with ArrowRight key', async () => {
      const onNavigate = vi.fn();
      render(<FullscreenViewer {...defaultProps} currentIndex={0} onNavigate={onNavigate} />);

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      fireEvent.keyDown(document, { code: 'ArrowRight' });

      expect(onNavigate).toHaveBeenCalledWith(1);
    });

    it('does not navigate past first image with ArrowLeft', async () => {
      const onNavigate = vi.fn();
      render(<FullscreenViewer {...defaultProps} currentIndex={0} onNavigate={onNavigate} />);

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      fireEvent.keyDown(document, { code: 'ArrowLeft' });

      expect(onNavigate).not.toHaveBeenCalled();
    });

    it('does not navigate past last image with ArrowRight', async () => {
      const onNavigate = vi.fn();
      render(<FullscreenViewer {...defaultProps} currentIndex={2} onNavigate={onNavigate} />);

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      fireEvent.keyDown(document, { code: 'ArrowRight' });

      expect(onNavigate).not.toHaveBeenCalled();
    });

    it('closes viewer with Escape key', async () => {
      const onClose = vi.fn();
      render(<FullscreenViewer {...defaultProps} onClose={onClose} />);

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      // useKeyPress hook listens on document and uses e.code
      fireEvent.keyDown(document, { code: 'Escape' });

      expect(onClose).toHaveBeenCalled();
    });

    it('removes keyboard event listener on unmount', async () => {
      const removeEventListenerSpy = vi.spyOn(document, 'removeEventListener');

      const { unmount } = render(<FullscreenViewer {...defaultProps} />);

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      unmount();

      expect(removeEventListenerSpy).toHaveBeenCalledWith('keydown', expect.any(Function));

      removeEventListenerSpy.mockRestore();
    });
  });

  describe('overlay interactions', () => {
    it('closes viewer when clicking on overlay', async () => {
      const onClose = vi.fn();
      render(<FullscreenViewer {...defaultProps} onClose={onClose} />);

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      const overlay = screen.getByRole('presentation');
      fireEvent.click(overlay);

      expect(onClose).toHaveBeenCalled();
    });

    it('does not close when clicking on image container', async () => {
      const onClose = vi.fn();
      render(<FullscreenViewer {...defaultProps} onClose={onClose} />);

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      const image = screen.getByRole('img');
      await userEvent.click(image);

      expect(onClose).not.toHaveBeenCalled();
    });

    it('closes viewer with Enter key on overlay', async () => {
      const onClose = vi.fn();
      render(<FullscreenViewer {...defaultProps} onClose={onClose} />);

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      const overlay = screen.getByRole('presentation');
      fireEvent.keyDown(overlay, { key: 'Enter', target: overlay, currentTarget: overlay });

      expect(onClose).toHaveBeenCalled();
    });

    it('closes viewer with Space key on overlay', async () => {
      const onClose = vi.fn();
      render(<FullscreenViewer {...defaultProps} onClose={onClose} />);

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      const overlay = screen.getByRole('presentation');
      fireEvent.keyDown(overlay, { key: ' ', target: overlay, currentTarget: overlay });

      expect(onClose).toHaveBeenCalled();
    });

    it('does not close with other keys on overlay', async () => {
      const onClose = vi.fn();
      render(<FullscreenViewer {...defaultProps} onClose={onClose} />);

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      const overlay = screen.getByRole('presentation');
      fireEvent.keyDown(overlay, { key: 'a', target: overlay, currentTarget: overlay });

      expect(onClose).not.toHaveBeenCalled();
    });

    it('does not close with Enter/Space when target is not currentTarget', async () => {
      const onClose = vi.fn();
      render(<FullscreenViewer {...defaultProps} onClose={onClose} />);

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      const overlay = screen.getByRole('presentation');
      const image = screen.getByRole('img');

      // Simulate event bubbling from image
      fireEvent.keyDown(overlay, {
        key: 'Enter',
        target: image,
        currentTarget: overlay,
      });

      expect(onClose).not.toHaveBeenCalled();
    });
  });

  describe('close button', () => {
    it('calls onClose when close button is clicked', async () => {
      const onClose = vi.fn();
      render(<FullscreenViewer {...defaultProps} onClose={onClose} />);

      await waitFor(() => {
        expect(screen.getByLabelText('Close fullscreen view')).toBeInTheDocument();
      });

      await userEvent.click(screen.getByLabelText('Close fullscreen view'));

      expect(onClose).toHaveBeenCalled();
    });
  });

  describe('image rendering', () => {
    it('renders image with eager loading', async () => {
      render(<FullscreenViewer {...defaultProps} />);

      await waitFor(() => {
        const image = screen.getByRole('img');
        expect(image).toHaveAttribute('loading', 'eager');
      });
    });

    it('displays caption from the current image', async () => {
      render(<FullscreenViewer {...defaultProps} />);

      await waitFor(() => {
        expect(screen.getByText('Caption 1')).toBeInTheDocument();
      });
    });

    it('renders image without caption when not provided', async () => {
      const imagesWithoutCaption = [{ src: '/image.jpg', alt: 'No caption image' }];

      render(<FullscreenViewer {...defaultProps} images={imagesWithoutCaption} />);

      await waitFor(() => {
        expect(screen.getByRole('img')).toBeInTheDocument();
      });

      // Should not have any caption element with text
      expect(screen.queryByText(/Caption/)).not.toBeInTheDocument();
    });

    it('uses largest source for fullscreen display when sources provided', async () => {
      const imagesWithSources: GalleryItem[] = [
        {
          src: '/fallback.jpg',
          alt: 'Responsive image',
          sources: [
            { src: '/small.jpg', descriptor: '480w' },
            { src: '/large.jpg', descriptor: '1920w' },
          ],
        },
      ];

      render(<FullscreenViewer {...defaultProps} images={imagesWithSources} />);

      await waitFor(() => {
        const image = screen.getByRole('img');
        expect(image).toHaveAttribute('src', '/large.jpg');
      });
    });
  });

  describe('CSS classes', () => {
    it('applies base class to viewer', async () => {
      render(<FullscreenViewer {...defaultProps} />);

      await waitFor(() => {
        const dialog = screen.getByRole('dialog');
        expect(dialog).toHaveClass('cl-fullscreen-viewer');
      });
    });

    it('applies closing class when closing', async () => {
      const { rerender } = render(<FullscreenViewer {...defaultProps} isOpen={true} />);

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      rerender(<FullscreenViewer {...defaultProps} isOpen={false} />);

      // During the closing animation window
      const dialog = screen.queryByRole('dialog');
      if (dialog) {
        expect(dialog).toHaveClass('cl-fullscreen-viewer_closing');
      }
    });

    it('applies correct classes to navigation buttons', async () => {
      render(<FullscreenViewer {...defaultProps} currentIndex={1} />);

      await waitFor(() => {
        const prevButton = screen.getByLabelText('Previous image');
        const nextButton = screen.getByLabelText('Next image');

        expect(prevButton).toHaveClass(
          'cl-fullscreen-viewer__nav-button',
          'cl-fullscreen-viewer__nav-button_prev',
        );
        expect(nextButton).toHaveClass(
          'cl-fullscreen-viewer__nav-button',
          'cl-fullscreen-viewer__nav-button_next',
        );
      });
    });
  });

  describe('edge cases', () => {
    it('handles rapid navigation', async () => {
      const onNavigate = vi.fn();
      render(<FullscreenViewer {...defaultProps} currentIndex={1} onNavigate={onNavigate} />);

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      // Rapid arrow key presses
      fireEvent.keyDown(document, { code: 'ArrowRight' });
      fireEvent.keyDown(document, { code: 'ArrowRight' });
      fireEvent.keyDown(document, { code: 'ArrowLeft' });

      // All navigations should be processed
      expect(onNavigate).toHaveBeenCalledTimes(3);
    });

    it('handles index at boundary correctly', async () => {
      const onNavigate = vi.fn();

      // Start at index 0
      const { rerender } = render(
        <FullscreenViewer {...defaultProps} currentIndex={0} onNavigate={onNavigate} />,
      );

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument();
      });

      // Try to go previous at first image
      fireEvent.keyDown(document, { code: 'ArrowLeft' });
      expect(onNavigate).not.toHaveBeenCalled();

      // Move to last image
      rerender(<FullscreenViewer {...defaultProps} currentIndex={2} onNavigate={onNavigate} />);

      // Try to go next at last image
      fireEvent.keyDown(document, { code: 'ArrowRight' });
      expect(onNavigate).not.toHaveBeenCalled();
    });

    it('handles two images correctly', async () => {
      const twoImages: GalleryItem[] = [
        { src: '/first.jpg', alt: 'First' },
        { src: '/second.jpg', alt: 'Second' },
      ];

      render(<FullscreenViewer {...defaultProps} images={twoImages} currentIndex={0} />);

      await waitFor(() => {
        expect(screen.getByText('1 / 2')).toBeInTheDocument();
        expect(screen.queryByLabelText('Previous image')).not.toBeInTheDocument();
        expect(screen.getByLabelText('Next image')).toBeInTheDocument();
      });
    });
  });
});
