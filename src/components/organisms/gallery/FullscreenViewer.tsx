import { Button, Image, Portal } from '@components/atoms';
import { ButtonView, IconName } from '@enums';
import { useIsMounted, useKeyPress, useModalFocusTrap } from '@hooks';
import type { GalleryItem } from '@types';
import { getClassName } from '@utils';
import { type FC, useEffect, useMemo, useRef } from 'react';

import './FullscreenViewer.css';
import { getFullscreenImageProps } from './Gallery.helpers';

export interface FullscreenViewerProps {
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

  const showCounter = images.length > 1;
  const showPreviousButton = currentIndex > 0;
  const showNextButton = currentIndex < images.length - 1;

  const handlePrevious = () => {
    onNavigate(currentIndex - 1);
  };

  const handleNext = () => {
    onNavigate(currentIndex + 1);
  };

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

  const prevButtonClass = getClassName([
    'cl-fullscreen-viewer__nav-button',
    'cl-fullscreen-viewer__nav-button_prev',
  ]);

  const nextButtonClass = getClassName([
    'cl-fullscreen-viewer__nav-button',
    'cl-fullscreen-viewer__nav-button_next',
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
        <Button
          view={ButtonView.Icon}
          icon={IconName.X}
          label="Close fullscreen view"
          onClick={onClose}
          className="cl-fullscreen-viewer__close-button"
        />
        <div
          className="cl-fullscreen-viewer__overlay"
          onClick={handleOverlayClick}
          onKeyDown={handleOverlayKeyDown}
          role="presentation"
        >
          <div className="cl-fullscreen-viewer__image-container">
            <Image {...fullscreenImageProps} caption={currentImage.caption} loading="eager" />
          </div>
          {showCounter && (
            <span className="cl-fullscreen-viewer__counter" aria-live="polite">
              {currentIndex + 1} / {images.length}
            </span>
          )}
          {showPreviousButton && (
            <Button
              view={ButtonView.Icon}
              icon={IconName.ChevronLeft}
              label="Previous image"
              onClick={handlePrevious}
              className={prevButtonClass}
            />
          )}
          {showNextButton && (
            <Button
              view={ButtonView.Icon}
              icon={IconName.ChevronRight}
              label="Next image"
              onClick={handleNext}
              className={nextButtonClass}
            />
          )}
        </div>
      </div>
    </Portal>
  );
};

export default FullscreenViewer;
