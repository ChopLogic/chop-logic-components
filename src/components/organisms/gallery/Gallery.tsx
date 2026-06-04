import { Button, Image } from '@components/atoms';
import { ButtonView, IconName } from '@enums';
import type { GalleryProps } from '@types';
import { getClassName } from '@utils';
import { type CSSProperties, type FC, useRef } from 'react';

import './Gallery.css';
import { useCarouselScroll } from './useCarouselScroll';

const Gallery: FC<GalleryProps> = ({
  images = [],
  layout = 'grid',
  columns = 3,
  rows,
  gap,
  label,
  className,
  title,
  ...rest
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
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
        {images.map((item) => (
          <div key={item.src} className="cl-gallery__item">
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
    </section>
  );
};

export default Gallery;
