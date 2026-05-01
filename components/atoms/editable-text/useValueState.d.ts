export declare const useValueState: (value: string, onChange?: (value: string) => void) => {
    internalValue: string;
    updateValue: (newValue: string) => void;
    commitValue: () => void;
    resetValue: () => void;
};
