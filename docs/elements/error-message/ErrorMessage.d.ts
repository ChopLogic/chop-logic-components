import { default as React } from '../../../node_modules/react';
import { ChopLogicTheme } from '../../models';
type ChopLogicErrorMessageProps = {
    errorId: string;
    visible?: boolean;
    message?: string;
    testId?: string;
    style?: React.CSSProperties;
    theme: ChopLogicTheme;
};
declare const ChopLogicErrorMessage: React.FC<ChopLogicErrorMessageProps>;
export default ChopLogicErrorMessage;
