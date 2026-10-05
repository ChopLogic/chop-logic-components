import { Icon } from '@components/atoms';
import { ElementSize } from '@enums';
import type { MenuItem } from '@types';
import { getClassName } from '@utils';
import type { ReactElement } from 'react';
import './MenuLeaf.css';

export const MenuLeaf = ({ item }: { item: MenuItem }): ReactElement => {
  const { icon, link, label, onFocus, onClick, onHover } = item;
  const leafClass = getClassName(['cl-menu-leaf', item.className]);

  const leafContent = link ? (
    <a href={link} target="_blank" rel="noreferrer">
      {label}
    </a>
  ) : (
    <span>{label}</span>
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    e.stopPropagation();
    if (e.key === 'Enter') {
      onClick?.();
    }
  };

  return (
    <li
      className={leafClass}
      tabIndex={0}
      role="menuitem"
      onFocus={onFocus}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      onMouseOver={onHover}
    >
      <Icon name={icon} hidden size={ElementSize.Small} />
      {leafContent}
    </li>
  );
};
