import { ReactElement } from '../../../node_modules/react';
import { ChopLogicTabsMode } from '../../enums';
import { ChopLogicComponentProps } from '../common.ts';

export interface ChopLogicTabsProps extends ChopLogicComponentProps {
    tabs: ChopLogicTabItem[];
    defaultTabId?: string;
    mode?: ChopLogicTabsMode;
}
export interface ChopLogicTabItem {
    content: ReactElement;
    title: string;
    id: string;
    disabled?: boolean;
}
