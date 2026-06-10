import { Image } from '@components/atoms';
import type { GalleryItem } from '@types';
import { getClassName } from '@utils';
import type { FC } from 'react';

import './GalleryImageItem.css';

interface GalleryImageItemProps {
  item: GalleryItem;
  index: number;
  enableFullscreen: boolean;
  onOpenViewer?: (index: number, element: HTMLElement) => void;
}

const GalleryImageItem: FC<GalleryImageItemProps> = ({
  item,
  index,
  enableFullscreen,
  onOpenViewer,
}) => {
  const itemClass = getClassName([
    'cl-gallery__item',
    { 'cl-gallery__item_fullscreen': enableFullscreen },
  ]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (enableFullscreen && onOpenViewer) {
      onOpenViewer(index, e.currentTarget);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (enableFullscreen && onOpenViewer && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onOpenViewer(index, e.currentTarget);
    }
  };

  return (
    <div
      className={itemClass}
      tabIndex={enableFullscreen ? 0 : undefined}
      role={enableFullscreen ? 'button' : undefined}
      aria-haspopup={enableFullscreen ? 'dialog' : undefined}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <Image {...item} />
    </div>
  );
};

export default GalleryImageItem;
