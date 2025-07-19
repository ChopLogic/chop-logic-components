import { ChopLogicOrientationMode } from '@enums';
import { getClassName } from '@utils';
import React from 'react';

import styles from './TabButton.module.scss';

type Props = {
  title: string;
  tabId: string;
  onTabSelect: (id: string) => void;
  tabPanelId: string;
  isSelected: boolean;
  mode: ChopLogicOrientationMode;
  isDisabled?: boolean;
};

export const TabButton: React.FC<Props> = ({ title, onTabSelect, tabId, isSelected, isDisabled = false, tabPanelId, mode }) => {
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
