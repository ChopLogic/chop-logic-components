type BodyScrollLockParams = {
    isLocked: boolean;
};
export declare const _resetScrollLockState: () => void;
export declare const acquireLock: () => void;
export declare const releaseLock: () => void;
export declare const useBodyScrollLock: ({ isLocked }: BodyScrollLockParams) => void;
export {};
