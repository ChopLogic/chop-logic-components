import { useEffect } from 'react';

export const useAutoClose = ({
  isOpened,
  onClose,
  autoClose = true,
  autoCloseDelay = 3000,
}: {
  isOpened: boolean;
  onClose: () => void;
  autoClose?: boolean;
  autoCloseDelay?: number;
}) => {
  useEffect(() => {
    if (!isOpened || !autoClose) return;

    const timer = setTimeout(() => {
      onClose();
    }, autoCloseDelay);

    return () => clearTimeout(timer);
  }, [isOpened, autoClose, autoCloseDelay, onClose]);
};
