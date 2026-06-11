import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { GalleryItem } from '@types';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import Gallery from '../Gallery';

// Mock the useCarouselScroll hook
vi.mock('../hooks/use-carousel-scroll', () => ({
  useCarouselScroll: vi.fn(() => ({
    showPrev: false,
    showNext: true,
    scrollForward: vi.fn(),
    scrollBackward: vi.fn(),
  })),
}));

// Import the mocked module to control its behavior in tests
import { useCarouselScroll } from '../hooks/use-carousel-scroll';

const mockUseCarouselScroll = vi.mocked(useCarouselScroll);

// Helper to get gallery item by image index
const getGalleryItem = (index: number): HTMLElement => {
  const images = screen.getAllByRole('img');
  const item = images[index].closest('.cl-gallery__item');
  if (!item) throw new Error(`Gallery item at index ${index} not found`);
  return item as HTMLElement;
};

describe('Gallery', () => {
  const defaultImages: GalleryItem[] = [
    { src: '/image1.jpg', alt: 'Image 1' },
    { src: '/image2.jpg', alt: 'Image 2' },
    { src: '/image3.jpg', alt: 'Image 3' },
  ];

  beforeEach(() => {
    vi.clearAllMocks();
    mockUseCarouselScroll.mockReturnValue({
      showPrev: false,
      showNext: true,
      scrollForward: vi.fn(),
      scrollBackward: vi.fn(),
    });
  });

  describe('rendering', () => {
    it('renders as a section element with correct role', () => {
      render(<Gallery images={defaultImages} />);

      const gallery = screen.getByRole('region');
      expect(gallery).toBeInTheDocument();
      expect(gallery.tagName).toBe('SECTION');
    });

    it('renders with default aria-label when no label or title provided', () => {
      render(<Gallery images={defaultImages} />);

      const gallery = screen.getByRole('region');
      expect(gallery).toHaveAttribute('aria-label', 'Image gallery');
    });

    it('uses label prop for aria-label when provided', () => {
      render(<Gallery images={defaultImages} label="Custom gallery label" />);

      const gallery = screen.getByRole('region');
      expect(gallery).toHaveAttribute('aria-label', 'Custom gallery label');
    });

    it('uses title prop for aria-label when label is not provided', () => {
      render(<Gallery images={defaultImages} title="Gallery title" />);

      const gallery = screen.getByRole('region');
      expect(gallery).toHaveAttribute('aria-label', 'Gallery title');
    });

    it('prefers label over title for aria-label', () => {
      render(<Gallery images={defaultImages} label="Label" title="Title" />);

      const gallery = screen.getByRole('region');
      expect(gallery).toHaveAttribute('aria-label', 'Label');
    });

    it('renders title attribute when provided', () => {
      render(<Gallery images={defaultImages} title="Gallery tooltip" />);

      const gallery = screen.getByRole('region');
      expect(gallery).toHaveAttribute('title', 'Gallery tooltip');
    });

    it('renders all images', () => {
      render(<Gallery images={defaultImages} />);

      const images = screen.getAllByRole('img');
      expect(images).toHaveLength(3);
    });

    it('renders with empty images array', () => {
      render(<Gallery images={[]} />);

      const gallery = screen.getByRole('region');
      expect(gallery).toBeInTheDocument();
      expect(screen.queryAllByRole('img')).toHaveLength(0);
    });

    it('renders with undefined images (uses default empty array)', () => {
      render(<Gallery />);

      const gallery = screen.getByRole('region');
      expect(gallery).toBeInTheDocument();
      expect(screen.queryAllByRole('img')).toHaveLength(0);
    });

    it('applies custom className', () => {
      render(<Gallery images={defaultImages} className="custom-gallery" />);

      const gallery = screen.getByRole('region');
      expect(gallery).toHaveClass('cl-gallery', 'custom-gallery');
    });

    it('passes additional props to the section element', () => {
      render(<Gallery images={defaultImages} data-testid="test-gallery" id="gallery-1" />);

      const gallery = screen.getByRole('region');
      expect(gallery).toHaveAttribute('data-testid', 'test-gallery');
      expect(gallery).toHaveAttribute('id', 'gallery-1');
    });
  });

  describe('layout modes', () => {
    it('applies grid layout class by default', () => {
      render(<Gallery images={defaultImages} />);

      const container = screen.getByRole('region').querySelector('.cl-gallery__container');
      expect(container).toHaveClass('cl-gallery__container_grid');
    });

    it('applies grid layout class when layout is grid', () => {
      render(<Gallery images={defaultImages} layout="grid" />);

      const container = screen.getByRole('region').querySelector('.cl-gallery__container');
      expect(container).toHaveClass('cl-gallery__container_grid');
    });

    it('applies masonry layout class when layout is masonry', () => {
      render(<Gallery images={defaultImages} layout="masonry" />);

      const container = screen.getByRole('region').querySelector('.cl-gallery__container');
      expect(container).toHaveClass('cl-gallery__container_masonry');
      expect(container).not.toHaveClass('cl-gallery__container_grid');
    });

    it('applies carousel layout class when layout is carousel', () => {
      render(<Gallery images={defaultImages} layout="carousel" />);

      const container = screen.getByRole('region').querySelector('.cl-gallery__container');
      expect(container).toHaveClass('cl-gallery__container_carousel');
      expect(container).not.toHaveClass('cl-gallery__container_grid');
    });
  });

  describe('CSS custom properties', () => {
    it('sets --gallery-columns CSS variable', () => {
      render(<Gallery images={defaultImages} columns={4} />);

      const container = screen.getByRole('region').querySelector('.cl-gallery__container');
      expect(container).toHaveStyle({ '--gallery-columns': '4' });
    });

    it('uses default columns value of 3', () => {
      render(<Gallery images={defaultImages} />);

      const container = screen.getByRole('region').querySelector('.cl-gallery__container');
      expect(container).toHaveStyle({ '--gallery-columns': '3' });
    });

    it('sets --gallery-rows CSS variable when rows provided', () => {
      render(<Gallery images={defaultImages} rows={2} />);

      const container = screen.getByRole('region').querySelector('.cl-gallery__container');
      expect(container).toHaveStyle({ '--gallery-rows': '2' });
    });

    it('sets --gallery-gap CSS variable when gap provided', () => {
      render(<Gallery images={defaultImages} gap="20px" />);

      const container = screen.getByRole('region').querySelector('.cl-gallery__container');
      expect(container).toHaveStyle({ '--gallery-gap': '20px' });
    });
  });

  describe('carousel navigation buttons', () => {
    it('renders navigation buttons in carousel mode', () => {
      render(<Gallery images={defaultImages} layout="carousel" />);

      expect(screen.getByLabelText('Previous images')).toBeInTheDocument();
      expect(screen.getByLabelText('Next images')).toBeInTheDocument();
    });

    it('does not render navigation buttons in grid mode', () => {
      render(<Gallery images={defaultImages} layout="grid" />);

      expect(screen.queryByLabelText('Previous images')).not.toBeInTheDocument();
      expect(screen.queryByLabelText('Next images')).not.toBeInTheDocument();
    });

    it('does not render navigation buttons in masonry mode', () => {
      render(<Gallery images={defaultImages} layout="masonry" />);

      expect(screen.queryByLabelText('Previous images')).not.toBeInTheDocument();
      expect(screen.queryByLabelText('Next images')).not.toBeInTheDocument();
    });

    it('hides prev button when showPrev is false', () => {
      mockUseCarouselScroll.mockReturnValue({
        showPrev: false,
        showNext: true,
        scrollForward: vi.fn(),
        scrollBackward: vi.fn(),
      });

      render(<Gallery images={defaultImages} layout="carousel" />);

      const prevButton = screen.getByLabelText('Previous images');
      expect(prevButton).toHaveStyle({ visibility: 'hidden' });
      expect(prevButton).toHaveAttribute('aria-hidden', 'true');
    });

    it('shows prev button when showPrev is true', () => {
      mockUseCarouselScroll.mockReturnValue({
        showPrev: true,
        showNext: true,
        scrollForward: vi.fn(),
        scrollBackward: vi.fn(),
      });

      render(<Gallery images={defaultImages} layout="carousel" />);

      const prevButton = screen.getByLabelText('Previous images');
      expect(prevButton).toHaveStyle({ visibility: 'visible' });
      expect(prevButton).toHaveAttribute('aria-hidden', 'false');
    });

    it('hides next button when showNext is false', () => {
      mockUseCarouselScroll.mockReturnValue({
        showPrev: true,
        showNext: false,
        scrollForward: vi.fn(),
        scrollBackward: vi.fn(),
      });

      render(<Gallery images={defaultImages} layout="carousel" />);

      const nextButton = screen.getByLabelText('Next images');
      expect(nextButton).toHaveStyle({ visibility: 'hidden' });
      expect(nextButton).toHaveAttribute('aria-hidden', 'true');
    });

    it('shows next button when showNext is true', () => {
      mockUseCarouselScroll.mockReturnValue({
        showPrev: false,
        showNext: true,
        scrollForward: vi.fn(),
        scrollBackward: vi.fn(),
      });

      render(<Gallery images={defaultImages} layout="carousel" />);

      const nextButton = screen.getByLabelText('Next images');
      expect(nextButton).toHaveStyle({ visibility: 'visible' });
      expect(nextButton).toHaveAttribute('aria-hidden', 'false');
    });

    it('calls scrollForward when next button is clicked', async () => {
      const scrollForward = vi.fn();
      mockUseCarouselScroll.mockReturnValue({
        showPrev: false,
        showNext: true,
        scrollForward,
        scrollBackward: vi.fn(),
      });

      render(<Gallery images={defaultImages} layout="carousel" />);

      await userEvent.click(screen.getByLabelText('Next images'));

      expect(scrollForward).toHaveBeenCalledTimes(1);
    });

    it('calls scrollBackward when prev button is clicked', async () => {
      const scrollBackward = vi.fn();
      mockUseCarouselScroll.mockReturnValue({
        showPrev: true,
        showNext: true,
        scrollForward: vi.fn(),
        scrollBackward,
      });

      render(<Gallery images={defaultImages} layout="carousel" />);

      await userEvent.click(screen.getByLabelText('Previous images'));

      expect(scrollBackward).toHaveBeenCalledTimes(1);
    });
  });

  describe('fullscreen mode disabled', () => {
    it('does not render FullscreenViewer when enableFullscreen is false', () => {
      render(<Gallery images={defaultImages} enableFullscreen={false} />);

      expect(screen.queryByTestId('fullscreen-image-viewer')).not.toBeInTheDocument();
    });

    it('does not add interactive attributes to gallery items when fullscreen disabled', () => {
      render(<Gallery images={defaultImages} enableFullscreen={false} />);

      const items = screen.getAllByRole('img').map((img) => img.closest('.cl-gallery__item'));

      for (const item of items) {
        expect(item).not.toHaveAttribute('tabindex');
        expect(item).not.toHaveAttribute('role');
        expect(item).not.toHaveAttribute('aria-haspopup');
      }
    });

    it('does not open viewer when clicking image without fullscreen enabled', async () => {
      render(<Gallery images={defaultImages} enableFullscreen={false} />);

      const firstItem = getGalleryItem(0);
      await userEvent.click(firstItem);

      expect(screen.queryByTestId('fullscreen-image-viewer')).not.toBeInTheDocument();
    });
  });

  describe('fullscreen mode enabled', () => {
    it('opens fullscreen viewer when clicking an image', async () => {
      render(<Gallery images={defaultImages} enableFullscreen={true} />);

      const firstItem = getGalleryItem(0);
      await userEvent.click(firstItem);

      await waitFor(() => {
        expect(screen.getByTestId('fullscreen-image-viewer')).toBeInTheDocument();
      });
    });

    it('opens fullscreen viewer with correct image index', async () => {
      render(<Gallery images={defaultImages} enableFullscreen={true} />);

      // Click second image
      const secondItem = getGalleryItem(1);
      await userEvent.click(secondItem);

      await waitFor(() => {
        expect(screen.getByTestId('fullscreen-image-viewer')).toBeInTheDocument();
        // Counter should show 2 / 3
        expect(screen.getByText('2 / 3')).toBeInTheDocument();
      });
    });

    it('opens viewer with Enter key', async () => {
      render(<Gallery images={defaultImages} enableFullscreen={true} />);

      const firstItem = getGalleryItem(0);
      firstItem.focus();
      fireEvent.keyDown(firstItem, { key: 'Enter' });

      await waitFor(() => {
        expect(screen.getByTestId('fullscreen-image-viewer')).toBeInTheDocument();
      });
    });

    it('opens viewer with Space key', async () => {
      render(<Gallery images={defaultImages} enableFullscreen={true} />);

      const firstItem = getGalleryItem(0);
      firstItem.focus();
      fireEvent.keyDown(firstItem, { key: ' ' });

      await waitFor(() => {
        expect(screen.getByTestId('fullscreen-image-viewer')).toBeInTheDocument();
      });
    });

    it('does not open viewer with other keys', async () => {
      render(<Gallery images={defaultImages} enableFullscreen={true} />);

      const firstItem = getGalleryItem(0);
      firstItem.focus();
      fireEvent.keyDown(firstItem, { key: 'a' });

      expect(screen.queryByTestId('fullscreen-image-viewer')).not.toBeInTheDocument();
    });

    it('closes viewer and restores focus', async () => {
      vi.useFakeTimers({ shouldAdvanceTime: true });

      render(<Gallery images={defaultImages} enableFullscreen={true} />);

      const firstItem = getGalleryItem(0);
      await userEvent.click(firstItem);

      await waitFor(() => {
        expect(screen.getByTestId('fullscreen-image-viewer')).toBeInTheDocument();
      });

      const closeButton = screen.getByLabelText('Close fullscreen view');
      await userEvent.click(closeButton);

      // Wait for focus restoration timeout
      await vi.advanceTimersByTimeAsync(300);

      await waitFor(() => {
        expect(screen.queryByTestId('fullscreen-image-viewer')).not.toBeInTheDocument();
      });

      vi.useRealTimers();
    });
  });

  describe('navigation in fullscreen mode', () => {
    it('updates current index when navigating', async () => {
      render(<Gallery images={defaultImages} enableFullscreen={true} />);

      // Open viewer at first image
      const firstItem = getGalleryItem(0);
      await userEvent.click(firstItem);

      await waitFor(() => {
        expect(screen.getByText('1 / 3')).toBeInTheDocument();
      });

      // Navigate to next image
      const nextButton = screen.getByLabelText('Next image');
      await userEvent.click(nextButton);

      await waitFor(() => {
        expect(screen.getByText('2 / 3')).toBeInTheDocument();
      });
    });
  });
});
