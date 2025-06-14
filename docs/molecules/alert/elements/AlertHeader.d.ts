import { default as React } from '../../../../node_modules/react';
import { ChopLogicAlertMode, ChopLogicIconName } from '../../../enums';
type AlertHeaderProps = {
    onClose: () => void;
    mode: ChopLogicAlertMode;
    title?: string;
    icon?: ChopLogicIconName;
};
declare const AlertHeader: React.FC<AlertHeaderProps>;
export default AlertHeader;
