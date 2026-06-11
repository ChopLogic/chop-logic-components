import { Button } from '@components/atoms';
import { ButtonView, IconName } from '@enums';
import { getClassName } from '@utils';
import type { FC } from 'react';

import './ViewerNavigation.css';

interface ViewerNavigationProps {
  currentIndex: number;
  totalImages: number;
  onNavigate: (index: number) => void;
}

const ViewerNavigation: FC<ViewerNavigationProps> = ({ currentIndex, totalImages, onNavigate }) => {
  const showPreviousButton = currentIndex > 0;
  const showNextButton = currentIndex < totalImages - 1;

  const handlePrevious = () => {
    onNavigate(currentIndex - 1);
  };

  const handleNext = () => {
    onNavigate(currentIndex + 1);
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
    <>
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
    </>
  );
};

export default ViewerNavigation;
