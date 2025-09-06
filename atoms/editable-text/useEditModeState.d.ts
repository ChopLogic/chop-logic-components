export declare const useEditModeState: (controlledEditMode?: boolean, readOnly?: boolean) => {
    editMode: boolean;
    enterEditMode: () => void;
    exitEditMode: () => void;
    isControlled: boolean;
};
