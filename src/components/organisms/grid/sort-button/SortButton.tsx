import './SortButton.css';

import { IconButton } from '@components/atoms/button/icon-button/IconButton';
import { ElementSize, GridSortDirection, IconName } from '@enums';
import type { FC } from 'react';

export type SortButtonProps = {
  direction: GridSortDirection | null;
  columnTitle?: string;
  onClick: () => void;
};

const getIcon = (direction: GridSortDirection | null): IconName => {
  switch (direction) {
    case GridSortDirection.Asc:
      return IconName.ArrowUpCircle;
    case GridSortDirection.Desc:
      return IconName.ArrowDownCircle;
    default:
      return IconName.Circle;
  }
};

const getAriaLabel = (direction: GridSortDirection | null, columnTitle?: string): string => {
  const titlePart = columnTitle ? `by ${columnTitle} ` : '';

  switch (direction) {
    case GridSortDirection.Asc:
      return `Sort ${titlePart}descending`;
    case GridSortDirection.Desc:
      return columnTitle ? `Clear ${columnTitle} sorting` : 'Clear sorting';
    default:
      return `Sort ${titlePart}ascending`;
  }
};

export const SortButton: FC<SortButtonProps> = ({ direction, columnTitle, onClick }) => {
  const icon = getIcon(direction);
  const ariaLabel = getAriaLabel(direction, columnTitle);

  return (
    <IconButton
      icon={icon}
      label={ariaLabel}
      onClick={onClick}
      type="button"
      iconSize={ElementSize.Small}
      className="cl-grid-sort-button"
    />
  );
};
