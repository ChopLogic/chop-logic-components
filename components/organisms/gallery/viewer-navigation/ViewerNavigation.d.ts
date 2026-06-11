import { FC } from '../../../../../node_modules/react';
interface ViewerNavigationProps {
    currentIndex: number;
    totalImages: number;
    onNavigate: (index: number) => void;
}
declare const ViewerNavigation: FC<ViewerNavigationProps>;
export default ViewerNavigation;
