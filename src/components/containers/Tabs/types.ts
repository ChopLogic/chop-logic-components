export type ChopLogicTabsProps = React.HTMLAttributes<HTMLDivElement> & {
  tabs: ChopLogicTabItem[];
  defaultTabId?: string;
  mode?: 'vertical' | 'horizontal';
};

export type ChopLogicTabItem = {
  content: React.ReactElement;
  title: string;
  id: string;
  disabled?: boolean;
};
