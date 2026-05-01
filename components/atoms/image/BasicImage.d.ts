import { FC } from '../../../../node_modules/react';
type Props = {
    src: string;
    alt: string;
    sizes?: string;
    width?: number | string;
    height?: number | string;
    loading?: 'lazy' | 'eager';
    decoding?: 'sync' | 'async' | 'auto';
    onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
};
export declare const BasicImage: FC<Props>;
export {};
