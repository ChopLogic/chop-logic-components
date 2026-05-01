type UseRemainingTimerProps = {
    isOpened: boolean;
    isHovered: boolean;
    onClose: () => void;
    autoClose?: boolean;
    autoCloseDelay?: number;
};
export declare function useRemainingTimer({ isOpened, isHovered, onClose, autoClose, autoCloseDelay, }: UseRemainingTimerProps): number;
export {};
