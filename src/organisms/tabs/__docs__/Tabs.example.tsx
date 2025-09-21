import { ChopLogicTabItem, TabsProps } from '@models';
import { Tabs } from '@organisms';
import { useState } from 'react';

export const TabsExample: React.FC<TabsProps> = (props) => {
  const [tabs, setTabs] = useState<ChopLogicTabItem[]>(props.tabs);
  const [tabCounter, setTabCounter] = useState(tabs.length + 1);

  const handleTabTitleChange = (tabId: string, newTitle: string) => {
    setTabs((prevTabs) => prevTabs.map((tab) => (tab.id === tabId ? { ...tab, title: newTitle } : tab)));
    props.onTabTitleChange?.(tabId, newTitle);
  };

  const handleTabAdd = () => {
    const newTabId = `tab${tabCounter}`;
    const newTabTitle = props.extendedTabLabel || `Tab ${tabCounter}`;

    const newTab: ChopLogicTabItem = {
      id: newTabId,
      title: newTabTitle,
      content: props.extendedTabContent || <div>Content for {newTabTitle}</div>,
    };

    setTabs((prevTabs) => [...prevTabs, newTab]);
    setTabCounter((prev) => prev + 1);

    props.onTabAdd?.();
  };

  return <Tabs {...props} tabs={tabs} onTabTitleChange={handleTabTitleChange} onTabAdd={props.extendable ? handleTabAdd : undefined} />;
};
