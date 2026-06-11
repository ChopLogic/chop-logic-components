import { FC } from '../../../../../node_modules/react';
interface CarouselNavigationProps {
    showPrev: boolean;
    showNext: boolean;
    onScrollBackward: () => void;
    onScrollForward: () => void;
}
declare const CarouselNavigation: FC<CarouselNavigationProps>;
export default CarouselNavigation;
