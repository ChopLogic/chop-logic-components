import { Button } from '@atoms';
import { ButtonView, IconName, OrientationMode } from '@enums';
import type { ChopLogicTabItem } from '@models';
import { getClassName, moveFocusOnElementById } from '@utils';
import type { FC, KeyboardEvent } from 'react';

import { TabButton } from '../button/TabButton';
import styles from './TabList.module.scss';

type Props = {
  tabs: ChopLogicTabItem[];
  tabIds: string[];
  onTabSelect: (id: string) => void;
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
}) => {
  const listClass = getClassName([
    styles.tabList,
    { [styles.tabList__vertical]: mode === OrientationMode.Vertical },
  ]);

  const handleListKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const currentFocusedTabIndex = tabIds.indexOf(selectedTabId);

    // Early return for non-navigation keys
    if (!['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'].includes(e.key)) {
      return;
    }

    e.preventDefault();

    // Check if key should be ignored based on mode
    if (
      (e.key === 'ArrowUp' && mode === OrientationMode.Horizontal) ||
      (e.key === 'ArrowLeft' && mode === OrientationMode.Vertical)
    ) {
      return;
    }

    const isPrevious = e.key === 'ArrowLeft' || e.key === 'ArrowUp';
    const newIndex = isPrevious
      ? getPreviousIndex(currentFocusedTabIndex, tabIds.length)
      : getNextIndex(currentFocusedTabIndex, tabIds.length);

    const newTabId = tabIds[newIndex];
    if (newTabId) {
      moveFocusOnElementById(newTabId);
      onTabSelect(newTabId);
    }
  };

  const getPreviousIndex = (currentIndex: number, totalTabs: number): number => {
    return currentIndex - 1 >= 0 ? currentIndex - 1 : totalTabs - 1;
  };

  const getNextIndex = (currentIndex: number, totalTabs: number): number => {
    return currentIndex === totalTabs - 1 ? 0 : currentIndex + 1;
  };

  return (
    <div role="tablist" data-testid="tab-list" onKeyDown={handleListKeyDown} className={listClass}>
      {tabs.map(({ id, title, disabled }, index) => {
        return (
          <TabButton
            key={id}
            title={title}
            onTabSelect={onTabSelect}
            onTabTitleChange={
              onTabTitleChange ? (newTitle) => onTabTitleChange(id, newTitle) : undefined
            }
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
          label="Add Tab"
          tooltip="Add Tab"
          view={ButtonView.Icon}
          icon={IconName.PlusCircle}
          onClick={onTabAdd}
          className={styles.tabList_addButton}
        />
      )}
    </div>
  );
};
