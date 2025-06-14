import { ReactElement } from '../../node_modules/react';
import { ChopLogicOrientationMode } from '../enums';
import { ChopLogicComponentProps } from './_common';
export interface ChopLogicTabsProps extends ChopLogicComponentProps {
    tabs: ChopLogicTabItem[];
    defaultTabId?: string;
    mode?: ChopLogicOrientationMode;
}
export interface ChopLogicTabItem {
    content: ReactElement;
    title: string;
    id: string;
    disabled?: boolean;
}
