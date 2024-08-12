export type ChopLogicTabsProps = React.HTMLAttributes<HTMLDivElement> & {
  tabs: ChopLogicTabItem[];
  defaultTabId?: string;
  mode?: 'vertical' | 'horizontal';
  toolBar?: React.ReactElement;
};

export type ChopLogicTabItem = {
  tabContent: React.ReactElement;
  title: string;
  id: string;
};
