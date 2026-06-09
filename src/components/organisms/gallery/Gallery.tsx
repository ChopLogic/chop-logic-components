import { Button, Image } from '@components/atoms';
import { ButtonView, IconName } from '@enums';
import type { GalleryProps } from '@types';
import { getClassName } from '@utils';
import { type CSSProperties, type FC, useCallback, useRef, useState } from 'react';

import FullscreenViewer from './FullscreenViewer';
import './Gallery.css';
import { useCarouselScroll } from './use-carousel-scroll';

const Gallery: FC<GalleryProps> = ({
  images = [],
  layout = 'grid',
  columns = 3,
  rows,
  gap,
  label,
  className,
  title,
  enableFullscreen = false,
  ...rest
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Fullscreen viewer state management
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const triggerRef = useRef<HTMLElement | null>(null);

  const openViewer = useCallback((index: number, element: HTMLElement) => {
    triggerRef.current = element;
    setCurrentImageIndex(index);
    setIsViewerOpen(true);
  }, []);

  const closeViewer = useCallback(() => {
    setIsViewerOpen(false);
    // Focus restoration happens after animation completes
    setTimeout(() => {
      triggerRef.current?.focus();
      triggerRef.current = null;
    }, 300);
  }, []);

  // Navigation handler for FullscreenViewer (used in task 6.4)
  const handleNavigate = useCallback((index: number) => {
    setCurrentImageIndex(index);
  }, []);

  // Keyboard handler for image activation (Enter/Space)
  const handleImageKeyDown = (e: React.KeyboardEvent<HTMLDivElement>, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openViewer(index, e.currentTarget);
    }
  };

  const { showPrev, showNext, scrollForward, scrollBackward } = useCarouselScroll(
    containerRef,
    layout,
  );

  const galleryClass = getClassName(['cl-gallery', className]);
  const containerClass = getClassName([
    'cl-gallery__container',
    { 'cl-gallery__container_grid': layout === 'grid' },
    { 'cl-gallery__container_masonry': layout === 'masonry' },
    { 'cl-gallery__container_carousel': layout === 'carousel' },
  ]);

  const containerStyle: CSSProperties = {
    '--gallery-columns': columns,
    '--gallery-rows': rows,
    '--gallery-gap': gap,
  } as CSSProperties;

  return (
    <section
      className={galleryClass}
      aria-label={label ?? title ?? 'Image gallery'}
      title={title}
      {...rest}
    >
      <div
        ref={containerRef}
        className={containerClass}
        style={containerStyle}
        {...(layout === 'carousel' ? { 'aria-roledescription': 'carousel' } : {})}
      >
        {images.map((item, index) => (
          <div
            key={item.src}
            className="cl-gallery__item"
            tabIndex={enableFullscreen ? 0 : undefined}
            role={enableFullscreen ? 'button' : undefined}
            aria-haspopup={enableFullscreen ? 'dialog' : undefined}
            onClick={enableFullscreen ? (e) => openViewer(index, e.currentTarget) : undefined}
            onKeyDown={enableFullscreen ? (e) => handleImageKeyDown(e, index) : undefined}
          >
            <Image {...item} />
          </div>
        ))}
      </div>
      {layout === 'carousel' && (
        <>
          <Button
            view={ButtonView.Icon}
            icon={IconName.ChevronLeft}
            label="Previous images"
            className="cl-gallery__button cl-gallery__button_prev"
            onClick={scrollBackward}
            style={{ visibility: showPrev ? 'visible' : 'hidden' }}
            aria-hidden={!showPrev}
          />
          <Button
            view={ButtonView.Icon}
            icon={IconName.ChevronRight}
            label="Next images"
            className="cl-gallery__button cl-gallery__button_next"
            onClick={scrollForward}
            style={{ visibility: showNext ? 'visible' : 'hidden' }}
            aria-hidden={!showNext}
          />
        </>
      )}
      {enableFullscreen && (
        <FullscreenViewer
          images={images}
          currentIndex={currentImageIndex}
          isOpen={isViewerOpen}
          onClose={closeViewer}
          onNavigate={handleNavigate}
        />
      )}
    </section>
  );
};

export default Gallery;
