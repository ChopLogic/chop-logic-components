import type { ImageProps } from '@types';
import { type FC, useState } from 'react';
import { withFigureCaption } from '../../hocs';
import { BasicImage } from './BasicImage';
import { FallbackImage } from './FallBackImage';
import './Image.css';
import { getClassName } from '@utils';
import { ResponsivePicture } from './ResponsivePicture';

const ImageContainer: FC<ImageProps> = ({
  alt,
  sources = [],
  decorative = false,
  onError,
  className,
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);
  const hasResponsiveSources = sources.length > 0;
  const finalAlt = decorative ? '' : alt;
  const imageClass = getClassName(['cl-image', className]);

  const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setHasError(true);
    onError?.(event);
  };

  if (hasError) {
    return <FallbackImage />;
  }

  return (
    <div className={imageClass}>
      {hasResponsiveSources ? (
        <ResponsivePicture alt={finalAlt} sources={sources} onError={handleError} {...rest} />
      ) : (
        <BasicImage alt={finalAlt} onError={handleError} {...rest} />
      )}
    </div>
  );
};

const Image = withFigureCaption(ImageContainer);

export default Image;
