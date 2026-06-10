import { type RefObject, useCallback, useRef, useState } from 'react';

interface FullscreenViewerState {
  isViewerOpen: boolean;
  currentImageIndex: number;
  triggerRef: RefObject<HTMLElement | null>;
  openViewer: (index: number, element: HTMLElement) => void;
  closeViewer: () => void;
  handleNavigate: (index: number) => void;
}

export const useFullscreenViewer = (): FullscreenViewerState => {
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

  const handleNavigate = useCallback((index: number) => {
    setCurrentImageIndex(index);
  }, []);

  return {
    isViewerOpen,
    currentImageIndex,
    triggerRef,
    openViewer,
    closeViewer,
    handleNavigate,
  };
};
