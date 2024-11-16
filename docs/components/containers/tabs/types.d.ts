import { ReactElement } from '../../../../node_modules/react';
import { CommonComponentProps } from '../../../../../../../../../src/utils/types';

export type ChopLogicTabsProps = CommonComponentProps & {
    tabs: ChopLogicTabItem[];
    defaultTabId?: string;
    mode?: ChopLogicTabsMode;
};
export type ChopLogicTabItem = {
    content: ReactElement;
    title: string;
    id: string;
    disabled?: boolean;
};
export type ChopLogicTabsMode = 'vertical' | 'horizontal';
