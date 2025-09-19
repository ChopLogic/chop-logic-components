import { Button } from '@atoms';
import { ButtonView, IconName, OrientationMode } from '@enums';
import { ChopLogicTabItem } from '@models';
import { getClassName, moveFocusOnElementById } from '@utils';
import { FC, KeyboardEvent } from 'react';

import { TabButton } from '../button/TabButton';
import styles from './TabList.module.scss';

type ChopLogicTabListProps = {
  tabs: ChopLogicTabItem[];
  tabIds: string[];
  onTabSelect: (id: string) => void;
  onTabTitleChange?: (tabId: string, newTitle: string) => void;
  selectedTabId: string;
  tabPanelIds: string[];
  mode: OrientationMode;
  stretched?: boolean;
  editable?: boolean;
  extendable?: boolean;
  onTabAdd?: () => void;
  extendedTabLabel?: string;
};

export const TabList: FC<ChopLogicTabListProps> = ({
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
  extendedTabLabel = 'New Tab',
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

  const handleAddButtonClick = () => {
    onTabAdd?.();
  };

  return (
    <div role='tablist' onKeyDown={handleListKeyDown} className={listClass}>
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
          />
        );
      })}
      {extendable && (
        <Button
          label={extendedTabLabel}
          view={ButtonView.Icon}
          icon={IconName.PlusCircle}
          onClick={handleAddButtonClick}
          className={styles.addButton}
        />
      )}
    </div>
  );
};
