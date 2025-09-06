import { MouseEvent } from '../../node_modules/react';
import { ChopLogicComponentProps } from './_common';
export interface EditableTextProps extends ChopLogicComponentProps {
    value: string;
    autoSelectTextOnEditMode?: boolean;
    isEditMode?: boolean;
    multiline?: boolean;
    onChange?: (value: string) => void;
    onClick?: (event: MouseEvent) => void;
    placeholder?: string;
    readOnly?: boolean;
}
