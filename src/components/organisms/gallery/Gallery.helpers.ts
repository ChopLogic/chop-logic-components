import type { GalleryItem, ImageProps, ImageSource } from '@types';

export const getLargestImageSource = (sources: ImageSource[]): ImageSource | undefined => {
  if (sources.length === 0) {
    return undefined;
  }

  let largestSource: ImageSource | undefined;
  let largestWidth = 0;

  for (const source of sources) {
    const descriptor = source.descriptor?.trim();

    if (descriptor && descriptor.endsWith('w')) {
      const widthStr = descriptor.slice(0, -1);
      const width = Number.parseInt(widthStr, 10);

      if (!Number.isNaN(width) && width > largestWidth) {
        largestWidth = width;
        largestSource = source;
      }
    }
  }

  return largestSource ?? sources[sources.length - 1];
};

export const getFullscreenImageProps = (image: GalleryItem): Omit<ImageProps, 'caption'> => {
  const { caption: _caption, sources, ...restImageProps } = image;

  if (sources && sources.length > 0) {
    const largestSource = getLargestImageSource(sources);
    if (largestSource) {
      return {
        ...restImageProps,
        src: largestSource.src,
        // Clear sources to render as a simple image with the largest resolution
        sources: undefined,
      };
    }
  }

  return { ...restImageProps, sources };
};
