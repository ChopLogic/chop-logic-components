import React from 'react';
import { ChopLogicOrientationMode } from '@enums';
import { getClassName } from '@utils';
import styles from '../Tabs.module.scss';

type ChopLogicTabButtonProps = {
  title: string;
  tabId: string;
  onTabSelect: (id: string) => void;
  tabPanelId: string;
  isSelected: boolean;
  mode: ChopLogicOrientationMode;
  isDisabled?: boolean;
};

const ChopLogicTabButton: React.FC<ChopLogicTabButtonProps> = ({
  title,
  onTabSelect,
  tabId,
  isSelected,
  isDisabled = false,
  tabPanelId,
  mode,
}) => {
  const buttonClass = getClassName([
    styles.tabButton,
    {
      [styles.tabButton__disabled]: isDisabled,
      [styles.tabButton__vertical]: mode === ChopLogicOrientationMode.Vertical,
      [styles.tabButton__selected]: isSelected,
    },
  ]);

  return (
    <button
      role='tab'
      id={tabId}
      onClick={() => onTabSelect(tabId)}
      aria-selected={isSelected}
      aria-controls={tabPanelId}
      className={buttonClass}
    >
      {title}
    </button>
  );
};

export default ChopLogicTabButton;
