import type { FC } from 'react';

import './ViewerCounter.css';

interface ViewerCounterProps {
  currentIndex: number;
  totalImages: number;
}

const ViewerCounter: FC<ViewerCounterProps> = ({ currentIndex, totalImages }) => {
  if (totalImages <= 1) {
    return null;
  }

  return (
    <span className="cl-fullscreen-viewer__counter" aria-live="polite">
      {currentIndex + 1} / {totalImages}
    </span>
  );
};

export default ViewerCounter;
