import { OrientationMode } from '@enums';
import { ChopLogicTabsProps } from '@models';
import { getClassName } from '@utils';
import { FC, useState } from 'react';

import { TabContent, TabList } from './__elements__';
import styles from './Tabs.module.scss';

const ChopLogicTabs: FC<ChopLogicTabsProps> = ({ tabs, defaultTabId, mode = OrientationMode.Horizontal, className, ...rest }) => {
  const tabIds = tabs.map((item) => item.id);
  const tabPanelIds = tabIds.map((id) => `tabpanel_${id}`);
  const defaultId = defaultTabId && tabIds.includes(defaultTabId) ? defaultTabId : tabIds[0];
  const [selectedTabId, setSelectedTabId] = useState(defaultId);
  const tabsClass = getClassName([styles.tabs, className, { [styles.tabs__vertical]: mode === OrientationMode.Vertical }]);

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
