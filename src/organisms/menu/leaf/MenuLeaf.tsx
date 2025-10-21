import { Icon } from '@atoms';
import type { MenuItem } from '@models';
import type { ReactElement } from 'react';

import styles from './MenuLeaf.module.scss';

export const MenuLeaf = ({ item }: { item: MenuItem }): ReactElement => {
  const { icon, link, label, onFocus, onClick, onHover } = item;

  const leafContent = link ? (
    <a href={link} target="_blank" rel="noreferrer">
      {label}
    </a>
  ) : (
    <span>{label}</span>
  );

  return (
    <li
      className={styles.menuLeaf}
      tabIndex={0}
      role="menuitem"
      onFocus={onFocus}
      onClick={onClick}
      onMouseOver={onHover}
    >
      <Icon name={icon} hidden />
      {leafContent}
    </li>
  );
};
