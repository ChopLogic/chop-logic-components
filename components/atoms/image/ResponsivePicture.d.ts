import { ImageSource } from '../../../types';
import { FC } from '../../../../node_modules/react';
type Props = {
    sources: ImageSource[];
    src: string;
    alt: string;
    sizes?: string;
    width?: number | string;
    height?: number | string;
    loading?: 'lazy' | 'eager';
    decoding?: 'sync' | 'async' | 'auto';
    onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
};
export declare const ResponsivePicture: FC<Props>;
export {};
