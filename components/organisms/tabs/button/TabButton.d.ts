import { OrientationMode } from '../../../../enums';
import { FC } from '../../../../../node_modules/react';
type Props = {
    title: string;
    tabId: string;
    onTabSelect: (id: string) => void;
    tabPanelId: string;
    isSelected: boolean;
    mode: OrientationMode;
    isDisabled?: boolean;
    stretched?: boolean;
    editable?: boolean;
    onTabTitleChange?: (newTitle: string) => void;
    onTabDelete?: (id: string) => void;
    extendable?: boolean;
};
export declare const TabButton: FC<Props>;
export {};
