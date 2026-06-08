import { Button, Image, Portal } from '@components/atoms';
import { ButtonView, IconName } from '@enums';
import { useIsMounted, useKeyPress, useModalFocusTrap } from '@hooks';
import type { GalleryItem } from '@types';
import { getClassName } from '@utils';
import { type FC, useEffect, useRef } from 'react';

import './FullscreenViewer.css';

export interface FullscreenViewerProps {
  /** Array of gallery images */
  images: GalleryItem[];
  /** Index of currently displayed image */
  currentIndex: number;
  /** Whether the viewer is currently open */
  isOpen: boolean;
  /** Callback to close the viewer */
  onClose: () => void;
  /** Callback to navigate to a specific image index */
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

  // Focus trap for accessibility (Req 6.1)
  useModalFocusTrap({ modalRef: viewerRef, isOpened: isOpen });

  // Escape key to close (Req 6.2)
  useKeyPress({ keyCode: 'Escape', ref: viewerRef, onKeyPress: onClose });

  // Arrow key navigation (Req 6.3, 6.4)
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

  if (!isMounted) {
    return null;
  }

  const currentImage = images[currentIndex];

  if (!currentImage) {
    return null;
  }

  // Extract caption from image props, remaining props go to Image component
  const { caption, ...imageProps } = currentImage;

  const viewerClass = getClassName([
    'cl-fullscreen-viewer',
    { 'cl-fullscreen-viewer_closing': isClosing },
  ]);

  // Only show counter when there's more than one image
  const showCounter = images.length > 1;

  // Navigation visibility based on current index bounds
  const showPreviousButton = currentIndex > 0;
  const showNextButton = currentIndex < images.length - 1;

  // Navigation handlers
  const handlePrevious = () => {
    onNavigate(currentIndex - 1);
  };

  const handleNext = () => {
    onNavigate(currentIndex + 1);
  };

  // Overlay click handler - only close if clicking directly on overlay, not children
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Overlay keyboard handler for accessibility
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
            <Image {...imageProps} loading="eager" />
            {caption && (
              <figcaption className="cl-fullscreen-viewer__caption">{caption}</figcaption>
            )}
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
