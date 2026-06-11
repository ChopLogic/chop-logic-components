import { GalleryItem } from '../../../../types';
import { FC } from '../../../../../node_modules/react';
interface GalleryImageItemProps {
    item: GalleryItem;
    index: number;
    enableFullscreen: boolean;
    onOpenViewer?: (index: number, element: HTMLElement) => void;
}
declare const GalleryImageItem: FC<GalleryImageItemProps>;
export default GalleryImageItem;
