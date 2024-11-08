import { ReactElement } from 'react';
import { CommonComponentProps } from 'utils/types';

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
