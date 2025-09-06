import { FC } from '../../../../../node_modules/react';
type ErrorMessageProps = {
    errorId: string;
    visible?: boolean;
    message?: string;
    testId?: string;
    className?: string;
};
export declare const ErrorMessage: FC<ErrorMessageProps>;
export {};
