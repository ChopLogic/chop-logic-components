import { ChopLogicComponentProps } from '../../../types';
import { FC, RefObject } from '../../../../node_modules/react';
interface EditViewProps extends ChopLogicComponentProps {
    multiline: boolean;
    value: string;
    placeholder: string;
    onChange: (value: string) => void;
    onBlur: () => void;
    onKeyDown: (event: React.KeyboardEvent) => void;
    className: string;
    inputRef: RefObject<HTMLTextAreaElement | HTMLInputElement | null>;
}
export declare const EditView: FC<EditViewProps>;
export {};
