import { ComponentType, FC } from '../../../../node_modules/react';
export type WithErrorBoundaryProps = {
    errorMessage?: string;
    onError?: () => void;
};
export declare function withErrorBoundary<P extends object>(ComponentToWrap: ComponentType<P>): FC<P & WithErrorBoundaryProps>;
