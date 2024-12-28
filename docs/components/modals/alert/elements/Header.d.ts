import { default as React } from '../../../../../node_modules/react';
import { ChopLogicAlertMode, ChopLogicIconName } from '../../../../enums';
import { ChopLogicTheme } from '../../../../models';

type ChopLogicAlertHeaderProps = {
    onClose: () => void;
    theme: ChopLogicTheme;
    mode: ChopLogicAlertMode;
    title?: string;
    icon?: ChopLogicIconName;
};
declare const ChopLogicAlertHeader: React.FC<ChopLogicAlertHeaderProps>;
export default ChopLogicAlertHeader;
