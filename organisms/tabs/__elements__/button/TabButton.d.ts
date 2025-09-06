import { ChopLogicOrientationMode } from '../../../../enums';
import { FC } from '../../../../../node_modules/react';
type Props = {
    title: string;
    tabId: string;
    onTabSelect: (id: string) => void;
    tabPanelId: string;
    isSelected: boolean;
    mode: ChopLogicOrientationMode;
    isDisabled?: boolean;
};
export declare const TabButton: FC<Props>;
export {};
