import type { ImageProps } from '@types';
import { type FC, useState } from 'react';
import { withFigureCaption } from '../../hocs';
import { BasicImage } from './BasicImage';
import { FallbackImage } from './FallBackImage';
import './Image.css';
import { ResponsivePicture } from './ResponsivePicture';

const ImageContainer: FC<ImageProps> = ({
  alt,
  sources = [],
  decorative = false,
  onError,
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);
  const hasResponsiveSources = sources.length > 0;
  const finalAlt = decorative ? '' : alt;

  const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setHasError(true);
    onError?.(event);
  };

  if (hasError) {
    return <FallbackImage />;
  }

  return hasResponsiveSources ? (
    <ResponsivePicture alt={finalAlt} sources={sources} onError={handleError} {...rest} />
  ) : (
    <div className="cl-image">
      <BasicImage alt={finalAlt} onError={handleError} {...rest} />
    </div>
  );
};

const Image = withFigureCaption(ImageContainer);

export default Image;
