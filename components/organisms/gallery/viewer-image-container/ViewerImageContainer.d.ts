import { GalleryItem, ImageProps } from '../../../../types';
import { FC } from '../../../../../node_modules/react';
interface ViewerImageContainerProps {
    fullscreenImageProps: Omit<ImageProps, 'caption'>;
    caption?: GalleryItem['caption'];
}
declare const ViewerImageContainer: FC<ViewerImageContainerProps>;
export default ViewerImageContainer;
