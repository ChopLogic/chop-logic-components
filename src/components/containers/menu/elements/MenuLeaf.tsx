import React from 'react';
import { ChopLogicIcon } from '@elements';
import { ChopLogicMenuItem } from '@models';
import styles from '../Menu.module.scss';

const MenuLeaf = ({ item }: { item: ChopLogicMenuItem }): React.ReactElement => {
  const { icon, link, label, onFocus, onClick, onHover } = item;

  const leafContent = link ? (
    <a href={link} target='_blank' rel='noreferrer'>
      {label}
    </a>
  ) : (
    <span>{label}</span>
  );

  return (
    <li className={styles.menuLeaf} tabIndex={0} role='menuitem' onFocus={onFocus} onClick={onClick} onMouseOver={onHover}>
      <ChopLogicIcon name={icon} />
      {leafContent}
    </li>
  );
};

export default MenuLeaf;
