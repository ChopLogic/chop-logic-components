import './FilterButton.css';

import { Icon } from '@components/atoms';
import { ElementSize, IconName } from '@enums';
import { getClassName } from '@utils';
import { forwardRef } from 'react';

export type FilterButtonProps = {
  columnTitle?: string;
  isActive: boolean;
  isOpen: boolean;
  onClick: () => void;
};

const getAriaLabel = (columnTitle?: string): string => {
  return columnTitle ? `Filter by ${columnTitle}` : 'Filter column';
};

export const FilterButton = forwardRef<HTMLButtonElement, FilterButtonProps>(
  ({ columnTitle, isActive, isOpen, onClick }, ref) => {
    const ariaLabel = getAriaLabel(columnTitle);
    const buttonClass = getClassName([
      'cl-grid-filter-button',
      { 'cl-grid-filter-button_active': isActive },
    ]);

    return (
      <button
        ref={ref}
        type="button"
        aria-label={ariaLabel}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        className={buttonClass}
        onClick={onClick}
      >
        <Icon
          name={IconName.Filter}
          size={ElementSize.Small}
          hidden={true}
          className="cl-grid-filter-button__icon"
        />
      </button>
    );
  },
);

FilterButton.displayName = 'FilterButton';
