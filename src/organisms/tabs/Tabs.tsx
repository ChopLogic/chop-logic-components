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
  className,
  mode = OrientationMode.Horizontal,
  stretched = false,
  editable = false,
  extendable = false,
  extendedTabLabel = 'New Tab',
  extendedTabContent,
  onTabTitleChange,
  onTabAdd,
  onTabSelect,
  onTabDelete,
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
    onTabSelect?.(id);
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

  const handleTabDelete = (tabId: string) => {
    setTabs((prevTabs) => prevTabs.filter((tab) => tab.id !== tabId));

    if (selectedTabId === tabId) {
      const tabIndex = tabIds.indexOf(tabId);
      const newSelectedTabId = tabIndex > 0 ? tabIds[tabIndex - 1] : tabIds.length > 1 ? tabIds[1] : undefined;
      if (newSelectedTabId) {
        handleTabSelect(newSelectedTabId);
      }
    }
    onTabDelete?.(tabId);
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
        initialTabsCount={initialTabsCount}
        onTabDelete={handleTabDelete}
      />
      <TabContent tabs={tabs} selectedTabId={selectedTabId} extendedTabContent={extendedTabContent} extendable={extendable} />
    </div>
  );
};

export default Tabs;
