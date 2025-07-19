import { TabContent, TabList } from '@atoms';
import { ChopLogicOrientationMode } from '@enums';
import { ChopLogicTabsProps } from '@models';
import { getClassName } from '@utils';
import React, { useState } from 'react';

import styles from './Tabs.module.scss';

const ChopLogicTabs: React.FC<ChopLogicTabsProps> = ({
  tabs,
  defaultTabId,
  mode = ChopLogicOrientationMode.Horizontal,
  className,
  ...rest
}) => {
  const tabIds = tabs.map((item) => item.id);
  const tabPanelIds = tabIds.map((id) => `tabpanel_${id}`);
  const defaultId = defaultTabId && tabIds.includes(defaultTabId) ? defaultTabId : tabIds[0];
  const [selectedTabId, setSelectedTabId] = useState(defaultId);
  const tabsClass = getClassName([styles.tabs, className, { [styles.tabs__vertical]: mode === ChopLogicOrientationMode.Vertical }]);

  const handleTabSelect = (id: string) => {
    setSelectedTabId(id);
  };

  return (
    <div {...rest} className={tabsClass}>
      <TabList
        tabs={tabs}
        selectedTabId={selectedTabId}
        tabPanelIds={tabPanelIds}
        onTabSelect={handleTabSelect}
        mode={mode}
        tabIds={tabIds}
      />
      <TabContent tabs={tabs} selectedTabId={selectedTabId} />
    </div>
  );
};

export default ChopLogicTabs;
