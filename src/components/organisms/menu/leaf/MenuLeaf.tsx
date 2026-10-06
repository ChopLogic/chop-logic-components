import { Icon } from '@components/atoms';
import { ElementSize } from '@enums';
import type { MenuItem } from '@types';
import { getClassName } from '@utils';
import { type ReactElement, useEffect, useRef, useState } from 'react';
import './MenuLeaf.css';

const MENU_LEAF_FLASH_DURATION = 150;

type Props = {
  item: MenuItem;
  closeMenu?: () => void;
};

export const MenuLeaf = ({ item, closeMenu }: Props): ReactElement => {
  const { icon, link, label, target = '_blank', onFocus, onClick, onHover } = item;
  const [isActivated, setIsActivated] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const leafClass = getClassName([
    'cl-menu-leaf',
    item.className,
    { 'cl-menu-leaf_activated': isActivated },
  ]);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const activate = () => {
    setIsActivated(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsActivated(false);
      onClick?.();
      closeMenu?.();
    }, MENU_LEAF_FLASH_DURATION);
  };

  const leafContent = link ? (
    <a href={link} target={target} rel={target === '_blank' ? 'noreferrer' : undefined}>
      {label}
    </a>
  ) : (
    <span>{label}</span>
  );

  const handleClick = () => {
    if (link) {
      closeMenu?.();
      return;
    }
    activate();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    e.stopPropagation();
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <li
      className={leafClass}
      tabIndex={0}
      role="menuitem"
      onFocus={onFocus}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseOver={onHover}
    >
      <Icon name={icon} hidden size={ElementSize.Small} />
      {leafContent}
    </li>
  );
};
