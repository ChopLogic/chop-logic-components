import { useEffect, useRef, useState } from 'react';

type UseRemainingTimerProps = {
  isOpened: boolean;
  isHovered: boolean;
  onClose: () => void;
  autoClose?: boolean;
  autoCloseDelay?: number;
};

export function useRemainingTimer({
  isOpened,
  isHovered,
  onClose,
  autoClose = true,
  autoCloseDelay = 3000,
}: UseRemainingTimerProps) {
  const [remainingPercentage, setRemainingPercentage] = useState(100);
  const startTimeRef = useRef<number>(0);
  const elapsedTimeRef = useRef<number>(0);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    if (!autoClose) return;

    if (!isOpened) {
      setRemainingPercentage(100);
      elapsedTimeRef.current = 0;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      return;
    }

    if (isHovered) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      return;
    }

    startTimeRef.current = Date.now() - elapsedTimeRef.current;

    const updateTimer = () => {
      const elapsed = Date.now() - startTimeRef.current;
      elapsedTimeRef.current = elapsed;

      const percentage = Math.max(0, 100 - (elapsed / autoCloseDelay) * 100);
      setRemainingPercentage(percentage);

      if (elapsed >= autoCloseDelay) {
        onClose();
        return;
      }

      animationFrameRef.current = requestAnimationFrame(updateTimer);
    };

    animationFrameRef.current = requestAnimationFrame(updateTimer);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isOpened, isHovered, onClose, autoCloseDelay, autoClose]);

  return remainingPercentage;
}
