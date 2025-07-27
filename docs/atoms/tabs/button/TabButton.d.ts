import { ChopLogicOrientationMode } from '../../../enums';
import { default as React } from '../../../../node_modules/react';
type Props = {
    title: string;
    tabId: string;
    onTabSelect: (id: string) => void;
    tabPanelId: string;
    isSelected: boolean;
    mode: ChopLogicOrientationMode;
    isDisabled?: boolean;
};
export declare const TabButton: React.FC<Props>;
export {};
