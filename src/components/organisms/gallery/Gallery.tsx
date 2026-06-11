import type { GalleryProps } from '@types';
import { getClassName } from '@utils';
import { type CSSProperties, type FC, useRef } from 'react';

import CarouselNavigation from './carousel-navigation/CarouselNavigation';
import FullscreenViewer from './full-screen-viewer/FullscreenViewer';
import './Gallery.css';
import GalleryImageItem from './gallery-image-item/GalleryImageItem';
import { useCarouselScroll } from './hooks/use-carousel-scroll';
import { useFullscreenViewer } from './hooks/use-fullscreen-viewer';

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

  const { isViewerOpen, currentImageIndex, openViewer, closeViewer, handleNavigate } =
    useFullscreenViewer();

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
        tabIndex={layout === 'carousel' ? 0 : undefined}
      >
        {images.map((item, index) => (
          <GalleryImageItem
            key={item.src}
            item={item}
            index={index}
            enableFullscreen={enableFullscreen}
            onOpenViewer={openViewer}
          />
        ))}
      </div>
      {layout === 'carousel' && (
        <CarouselNavigation
          showPrev={showPrev}
          showNext={showNext}
          onScrollBackward={scrollBackward}
          onScrollForward={scrollForward}
        />
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
