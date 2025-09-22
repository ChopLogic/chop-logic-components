import { OrientationMode } from '@enums';
import { ChopLogicTabItem, TabsProps } from '@models';
import { getClassName } from '@utils';
import { FC, useState } from 'react';

import { TabContent } from './content/TabContent';
import { TabList } from './list/TabList';
import styles from './Tabs.module.scss';

const Tabs: FC<TabsProps> = ({
  tabs: initialTabs,
  defaultTabId,
  mode = OrientationMode.Horizontal,
  className,
  stretched,
  editable = false,
  onTabTitleChange,
  extendable = false,
  onTabAdd,
  extendedTabLabel = 'New Tab',
  extendedTabContent,
  ...rest
}) => {
  const [tabs, setTabs] = useState<ChopLogicTabItem[]>(initialTabs);
  const initialTabsCount = initialTabs.length;
  const [tabCounter, setTabCounter] = useState(initialTabsCount + 1);
  const tabIds = tabs.map((item) => item.id);
  const tabPanelIds = tabIds.map((id) => `tabpanel_${id}`);
  const defaultId = defaultTabId && tabIds.includes(defaultTabId) ? defaultTabId : tabIds[0];
  const [selectedTabId, setSelectedTabId] = useState(defaultId);
  const tabsClass = getClassName([styles.tabs, className, { [styles.tabs__vertical]: mode === OrientationMode.Vertical }]);

  const handleTabSelect = (id: string) => {
    setSelectedTabId(id);
  };

  const handleTabTitleChange = (tabId: string, newTitle: string) => {
    setTabs((prevTabs) => prevTabs.map((tab) => (tab.id === tabId ? { ...tab, title: newTitle } : tab)));
    onTabTitleChange?.(tabId, newTitle);
  };

  const handleTabAdd = () => {
    const newTabId = `added-tab-${tabCounter}`;
    const newTabTitle = extendedTabLabel || `Tab ${tabCounter}`;

    const newTab: ChopLogicTabItem = {
      id: newTabId,
      title: newTabTitle,
      content: extendedTabContent || <div></div>,
    };

    setTabs((prevTabs) => [...prevTabs, newTab]);
    setTabCounter((prev) => prev + 1);

    onTabAdd?.();
  };

  return (
    <div {...rest} className={tabsClass}>
      <TabList
        tabs={tabs}
        selectedTabId={selectedTabId}
        tabPanelIds={tabPanelIds}
        onTabSelect={handleTabSelect}
        onTabTitleChange={handleTabTitleChange}
        mode={mode}
        tabIds={tabIds}
        stretched={stretched}
        editable={editable}
        extendable={extendable}
        onTabAdd={handleTabAdd}
        extendedTabLabel={extendedTabLabel}
        initialTabsCount={initialTabsCount}
      />
      <TabContent tabs={tabs} selectedTabId={selectedTabId} extendedTabContent={extendedTabContent} extendable={extendable} />
    </div>
  );
};

export default Tabs;
