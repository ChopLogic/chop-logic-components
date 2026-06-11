import { GalleryItem } from '../../../../types';
import { FC } from '../../../../../node_modules/react';
interface FullscreenViewerProps {
    images: GalleryItem[];
    currentIndex: number;
    isOpen: boolean;
    onClose: () => void;
    onNavigate: (index: number) => void;
}
declare const FullscreenViewer: FC<FullscreenViewerProps>;
export default FullscreenViewer;
