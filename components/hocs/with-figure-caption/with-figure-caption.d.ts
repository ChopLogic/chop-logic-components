import { ComponentType, FC } from '../../../../node_modules/react';
type WithFigureCaptionProps = {
    caption?: string;
};
export declare function withFigureCaption<P extends object>(Component: ComponentType<P>): FC<P & WithFigureCaptionProps>;
export {};
