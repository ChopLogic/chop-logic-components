import { RefObject } from '../../../../../node_modules/react';
interface FullscreenViewerState {
    isViewerOpen: boolean;
    currentImageIndex: number;
    triggerRef: RefObject<HTMLElement | null>;
    openViewer: (index: number, element: HTMLElement) => void;
    closeViewer: () => void;
    handleNavigate: (index: number) => void;
}
export declare const useFullscreenViewer: () => FullscreenViewerState;
export {};
