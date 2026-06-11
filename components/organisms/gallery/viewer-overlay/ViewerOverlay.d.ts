import { GalleryItem, ImageProps } from '../../../../types';
import { FC } from '../../../../../node_modules/react';
export interface ViewerOverlayProps {
    fullscreenImageProps: Omit<ImageProps, 'caption'>;
    caption?: GalleryItem['caption'];
    currentIndex: number;
    totalImages: number;
    onClose: () => void;
    onNavigate: (index: number) => void;
}
declare const ViewerOverlay: FC<ViewerOverlayProps>;
export default ViewerOverlay;
