/// <reference types="react" />
export type ChopLogicCheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    label: string;
    noLabel?: boolean;
    iconPosition?: 'left' | 'right';
};
