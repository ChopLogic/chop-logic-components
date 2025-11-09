import { withFigureCaption } from '@hocs';
import type { ImageProps } from '@models';
import { getClassName } from '@utils';
import { type FC, useState } from 'react';
import { BasicImage } from './BasicImage';
import { FallbackImage } from './FallBackImage';
import styles from './Image.module.scss';
import { ResponsivePicture } from './ResponsivePicture';

const ImageContainer: FC<ImageProps> = ({
  alt,
  sources = [],
  className,
  decorative = false,
  onError,
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);
  const wrapperClass = getClassName([styles.image, className]);
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
    <div className={wrapperClass}>
      <BasicImage alt={finalAlt} onError={handleError} {...rest} />
    </div>
  );
};

const Image = withFigureCaption(ImageContainer);

export default Image;
