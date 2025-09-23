import { Button } from '@atoms';
import { ButtonView, IconName, OrientationMode } from '@enums';
import { ChopLogicTabItem } from '@models';
import { getClassName, moveFocusOnElementById } from '@utils';
import { FC, KeyboardEvent, useEffect } from 'react';

import { TabButton } from '../button/TabButton';
import styles from './TabList.module.scss';

type Props = {
  tabs: ChopLogicTabItem[];
  tabIds: string[];
  onTabSelect: (id: string) => void;
  initialTabsCount: number;
  selectedTabId: string;
  tabPanelIds: string[];
  mode: OrientationMode;
  onTabTitleChange?: (tabId: string, newTitle: string) => void;
  stretched?: boolean;
  editable?: boolean;
  extendable?: boolean;
  onTabAdd?: () => void;
  onTabDelete?: (id: string) => void;
};

export const TabList: FC<Props> = ({
  tabs,
  onTabSelect,
  onTabTitleChange,
  selectedTabId,
  tabPanelIds,
  mode,
  tabIds,
  stretched,
  editable = false,
  extendable = false,
  onTabAdd,
  onTabDelete,
  initialTabsCount,
}) => {
  const listClass = getClassName([styles.tabList, { [styles.tabList__vertical]: mode === OrientationMode.Vertical }]);

  const handleListKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const currentFocusedTabIndex = tabIds.findIndex((id) => id === selectedTabId);

    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowUp': {
        e.preventDefault();
        if (e.key === 'ArrowUp' && mode === OrientationMode.Horizontal) break;
        if (e.key === 'ArrowLeft' && mode === OrientationMode.Vertical) break;

        const previousTabIndex = currentFocusedTabIndex - 1 >= 0 ? currentFocusedTabIndex - 1 : tabIds.length - 1;
        const previousTabId = tabIds[previousTabIndex];
        if (previousTabId) {
          moveFocusOnElementById(previousTabId);
          onTabSelect(previousTabId);
        }
        break;
      }
      case 'ArrowRight':
      case 'ArrowDown': {
        e.preventDefault();
        if (e.key === 'ArrowDown' && mode === OrientationMode.Horizontal) break;
        if (e.key === 'ArrowRight' && mode === OrientationMode.Vertical) break;

        const nextTabIndex = currentFocusedTabIndex === tabIds.length - 1 ? 0 : currentFocusedTabIndex + 1;
        const nextTabId = tabIds[nextTabIndex];
        if (nextTabId) {
          moveFocusOnElementById(nextTabId);
          onTabSelect(nextTabId);
        }
        break;
      }
      default:
        break;
    }
  };

  useEffect(() => {
    // Auto-select newly added tab
    if (tabs.length > initialTabsCount) {
      onTabSelect(tabs[tabs.length - 1].id);
    }
  }, [tabs.length]);

  return (
    <div role='tablist' data-testid='tab-list' onKeyDown={handleListKeyDown} className={listClass}>
      {tabs.map(({ id, title, disabled }, index) => {
        return (
          <TabButton
            key={id}
            title={title}
            onTabSelect={onTabSelect}
            onTabTitleChange={onTabTitleChange ? (newTitle) => onTabTitleChange(id, newTitle) : undefined}
            tabId={id}
            isSelected={id === selectedTabId}
            isDisabled={disabled}
            tabPanelId={tabPanelIds[index]}
            mode={mode}
            stretched={stretched}
            editable={editable}
            extendable={extendable}
            onTabDelete={onTabDelete}
          />
        );
      })}
      {extendable && (
        <Button
          label='Add Tab'
          tooltip='Add Tab'
          view={ButtonView.Icon}
          icon={IconName.PlusCircle}
          onClick={onTabAdd}
          className={styles.tabList_addButton}
        />
      )}
    </div>
  );
};
