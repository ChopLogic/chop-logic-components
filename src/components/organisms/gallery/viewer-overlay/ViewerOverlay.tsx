import type { GalleryItem, ImageProps } from '@types';
import type { FC } from 'react';

import ViewerCounter from '../viewer-counter/ViewerCounter';
import ViewerImageContainer from '../viewer-image-container/ViewerImageContainer';
import ViewerNavigation from '../viewer-navigation/ViewerNavigation';
import './ViewerOverlay.css';

export interface ViewerOverlayProps {
  fullscreenImageProps: Omit<ImageProps, 'caption'>;
  caption?: GalleryItem['caption'];
  currentIndex: number;
  totalImages: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const ViewerOverlay: FC<ViewerOverlayProps> = ({
  fullscreenImageProps,
  caption,
  currentIndex,
  totalImages,
  onClose,
  onNavigate,
}) => {
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleOverlayKeyDown = (e: React.KeyboardEvent) => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target === e.currentTarget) {
      e.preventDefault();
      onClose();
    }
  };

  return (
    <div
      className="cl-fullscreen-viewer__overlay"
      onClick={handleOverlayClick}
      onKeyDown={handleOverlayKeyDown}
      data-testid="viewer-overlay"
    >
      <ViewerImageContainer fullscreenImageProps={fullscreenImageProps} caption={caption} />
      <ViewerCounter currentIndex={currentIndex} totalImages={totalImages} />
      <ViewerNavigation
        currentIndex={currentIndex}
        totalImages={totalImages}
        onNavigate={onNavigate}
      />
    </div>
  );
};

export default ViewerOverlay;
