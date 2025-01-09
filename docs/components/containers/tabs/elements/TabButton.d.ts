import { default as React } from '../../../../../node_modules/react';
import { ChopLogicOrientationMode } from '../../../../enums';
import { ChopLogicTheme } from '../../../../models';

type ChopLogicTabButtonProps = {
    title: string;
    tabId: string;
    onTabSelect: (id: string) => void;
    tabPanelId: string;
    isSelected: boolean;
    mode: ChopLogicOrientationMode;
    isDisabled?: boolean;
    theme: ChopLogicTheme;
};
declare const ChopLogicTabButton: React.FC<ChopLogicTabButtonProps>;
export default ChopLogicTabButton;
