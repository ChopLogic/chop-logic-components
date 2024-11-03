import { default as React } from '../../../../../node_modules/react';

type ChopLogicErrorMessageProps = {
    errorId: string;
    visible?: boolean;
    message?: string;
    testId?: string;
    style?: React.CSSProperties;
};
declare const ChopLogicErrorMessage: React.FC<ChopLogicErrorMessageProps>;
export default ChopLogicErrorMessage;
