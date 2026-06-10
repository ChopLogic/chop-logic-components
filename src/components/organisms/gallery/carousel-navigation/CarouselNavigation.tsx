import { Button } from '@components/atoms';
import { ButtonView, IconName } from '@enums';
import type { FC } from 'react';

import './CarouselNavigation.css';

interface CarouselNavigationProps {
  showPrev: boolean;
  showNext: boolean;
  onScrollBackward: () => void;
  onScrollForward: () => void;
}

const CarouselNavigation: FC<CarouselNavigationProps> = ({
  showPrev,
  showNext,
  onScrollBackward,
  onScrollForward,
}) => {
  return (
    <>
      <Button
        view={ButtonView.Icon}
        icon={IconName.ChevronLeft}
        label="Previous images"
        className="cl-gallery__button cl-gallery__button_prev"
        onClick={onScrollBackward}
        style={{ visibility: showPrev ? 'visible' : 'hidden' }}
        aria-hidden={!showPrev}
      />
      <Button
        view={ButtonView.Icon}
        icon={IconName.ChevronRight}
        label="Next images"
        className="cl-gallery__button cl-gallery__button_next"
        onClick={onScrollForward}
        style={{ visibility: showNext ? 'visible' : 'hidden' }}
        aria-hidden={!showNext}
      />
    </>
  );
};

export default CarouselNavigation;
