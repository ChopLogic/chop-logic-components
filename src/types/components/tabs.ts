import { ReactElement } from 'react';

import { ChopLogicTheme } from '@/types';

import { CommonComponentProps } from './_common';

export type ChopLogicTabsProps = CommonComponentProps & {
  tabs: ChopLogicTabItem[];
  defaultTabId?: string;
  mode?: ChopLogicTabsMode;
};

export type ChopLogicTabListProps = {
  tabs: ChopLogicTabItem[];
  tabIds: string[];
  onTabSelect: (id: string) => void;
  selectedTabId: string;
  tabPanelIds: string[];
  mode: ChopLogicTabsMode;
  theme: ChopLogicTheme;
};

export type ChopLogicTabItem = {
  content: ReactElement;
  title: string;
  id: string;
  disabled?: boolean;
};

export type ChopLogicTabsMode = 'vertical' | 'horizontal';
