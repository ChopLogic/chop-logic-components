import { Image } from '@components/atoms';
import type { GalleryItem, ImageProps } from '@types';
import type { FC } from 'react';

import './ViewerImageContainer.css';

interface ViewerImageContainerProps {
  fullscreenImageProps: Omit<ImageProps, 'caption'>;
  caption?: GalleryItem['caption'];
}

const ViewerImageContainer: FC<ViewerImageContainerProps> = ({ fullscreenImageProps, caption }) => {
  return (
    <div className="cl-fullscreen-viewer__image-container">
      <Image {...fullscreenImageProps} caption={caption} loading="eager" />
    </div>
  );
};

export default ViewerImageContainer;
