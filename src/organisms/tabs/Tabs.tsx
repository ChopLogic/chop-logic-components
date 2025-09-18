import { OrientationMode } from '@enums';
import { TabsProps } from '@models';
import { getClassName } from '@utils';
import { FC, useState } from 'react';

import { TabContent } from './content/TabContent';
import { TabList } from './list/TabList';
import styles from './Tabs.module.scss';

const Tabs: FC<TabsProps> = ({
  tabs,
  defaultTabId,
  mode = OrientationMode.Horizontal,
  className,
  stretched,
  editable = false,
  onTabTitleChange,
  extendable = false,
  ...rest
}) => {
  const tabIds = tabs.map((item) => item.id);
  const tabPanelIds = tabIds.map((id) => `tabpanel_${id}`);
  const defaultId = defaultTabId && tabIds.includes(defaultTabId) ? defaultTabId : tabIds[0];
  const [selectedTabId, setSelectedTabId] = useState(defaultId);
  const tabsClass = getClassName([styles.tabs, className, { [styles.tabs__vertical]: mode === OrientationMode.Vertical }]);

  const handleTabSelect = (id: string) => {
    setSelectedTabId(id);
  };

  const handleTabTitleChange = (tabId: string, newTitle: string) => {
    onTabTitleChange?.(tabId, newTitle);
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
      />
      <TabContent tabs={tabs} selectedTabId={selectedTabId} />
    </div>
  );
};

export default Tabs;
