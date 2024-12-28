import { default as React } from '../../../../../node_modules/react';
import { ChopLogicTabsMode } from '../../../../enums';
import { ChopLogicTheme } from '../../../../models';

type ChopLogicTabButtonProps = {
    title: string;
    tabId: string;
    onTabSelect: (id: string) => void;
    tabPanelId: string;
    isSelected: boolean;
    mode: ChopLogicTabsMode;
    isDisabled?: boolean;
    theme: ChopLogicTheme;
};
declare const ChopLogicTabButton: React.FC<ChopLogicTabButtonProps>;
export default ChopLogicTabButton;
