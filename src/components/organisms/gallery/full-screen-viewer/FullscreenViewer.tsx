import { Portal } from '@components/atoms';
import { useIsMounted, useKeyPress, useModalFocusTrap } from '@hooks';
import type { GalleryItem } from '@types';
import { getClassName } from '@utils';
import { type FC, useEffect, useMemo, useRef } from 'react';

import './FullscreenViewer.css';
import { getFullscreenImageProps } from '../Gallery.helpers';
import ViewerCloseButton from '../viewer-close-button/ViewerCloseButton';
import ViewerOverlay from '../viewer-overlay/ViewerOverlay';

interface FullscreenViewerProps {
  images: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const FullscreenViewer: FC<FullscreenViewerProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const viewerRef = useRef<HTMLDivElement>(null);
  const isMounted = useIsMounted(isOpen, 300);
  const isClosing = isMounted && !isOpen;

  useModalFocusTrap({ modalRef: viewerRef, isOpened: isOpen });
  useKeyPress({ keyCode: 'Escape', ref: viewerRef, onKeyPress: onClose });

  useEffect(() => {
    const handleArrowKeys = (e: KeyboardEvent) => {
      if (e.code === 'ArrowLeft' && currentIndex > 0) {
        onNavigate(currentIndex - 1);
      } else if (e.code === 'ArrowRight' && currentIndex < images.length - 1) {
        onNavigate(currentIndex + 1);
      }
    };

    document.addEventListener('keydown', handleArrowKeys);
    return () => document.removeEventListener('keydown', handleArrowKeys);
  }, [currentIndex, images.length, onNavigate]);

  const currentImage = images[currentIndex];

  const fullscreenImageProps = useMemo(() => {
    if (!currentImage) {
      return null;
    }
    return getFullscreenImageProps(currentImage);
  }, [currentImage]);

  if (!isMounted || !currentImage || !fullscreenImageProps) {
    return null;
  }

  const viewerClass = getClassName([
    'cl-fullscreen-viewer',
    { 'cl-fullscreen-viewer_closing': isClosing },
  ]);

  return (
    <Portal>
      <div
        ref={viewerRef}
        className={viewerClass}
        role="dialog"
        aria-modal="true"
        aria-label="Fullscreen image viewer"
      >
        <ViewerCloseButton onClose={onClose} />
        <ViewerOverlay
          fullscreenImageProps={fullscreenImageProps}
          caption={currentImage.caption}
          currentIndex={currentIndex}
          totalImages={images.length}
          onClose={onClose}
          onNavigate={onNavigate}
        />
      </div>
    </Portal>
  );
};

export default FullscreenViewer;
