import { GalleryItem, ImageProps, ImageSource } from '../../../types';
export declare const getLargestImageSource: (sources: ImageSource[]) => ImageSource | undefined;
export declare const getFullscreenImageProps: (image: GalleryItem) => Omit<ImageProps, "caption">;
