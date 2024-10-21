export type ChopLogicTabsProps = React.HTMLAttributes<HTMLDivElement> & {
  tabs: ChopLogicTabItem[];
  defaultTabId?: string;
  mode?: ChopLogicTabsMode;
};

export type ChopLogicTabItem = {
  content: React.ReactElement;
  title: string;
  id: string;
  disabled?: boolean;
};

export type ChopLogicTabsMode = 'vertical' | 'horizontal';
