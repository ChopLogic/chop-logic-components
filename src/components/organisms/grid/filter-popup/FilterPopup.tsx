import './FilterPopup.css';

import { Portal } from '@components/atoms';
import { PrimaryButton } from '@components/atoms/button/primary-button/PrimaryButton';
import { SecondaryButton } from '@components/atoms/button/secondary-button/SecondaryButton';
import { Checkbox, TextInput } from '@components/molecules';
import { GridFilterType } from '@enums';
import { useAnchorPosition, useClickOutside, useKeyPress, useModalFocusTrap } from '@hooks';
import type { GridFilterCondition } from '@types';
import {
  type ChangeEvent,
  type FC,
  type RefObject,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';

import { FILTER_TYPE_LABELS, FILTER_TYPES } from './FilterPopup.helpers';

export type FilterPopupProps = {
  columnTitle?: string;
  popupId: string;
  hasActiveConditions: boolean;
  columnConditions?: GridFilterCondition[];
  buttonRef?: RefObject<HTMLButtonElement | null>;
  onApply: (condition: GridFilterCondition) => void;
  onClear: () => void;
  onClose: () => void;
};

const DEFAULT_TYPE = GridFilterType.StartsWith;

// Prefill the form from the last previously applied condition so users can see
// and edit what they entered before, instead of starting from a blank form.
const getInitialCondition = (
  columnConditions?: GridFilterCondition[],
): Pick<GridFilterCondition, 'type' | 'value' | 'caseSensitive'> => {
  const lastCondition = columnConditions?.at(-1);

  return {
    type: lastCondition?.type ?? DEFAULT_TYPE,
    value: lastCondition?.value ?? '',
    caseSensitive: lastCondition?.caseSensitive ?? false,
  };
};

export const FilterPopup: FC<FilterPopupProps> = ({
  columnTitle,
  popupId,
  hasActiveConditions,
  columnConditions,
  buttonRef,
  onApply,
  onClear,
  onClose,
}) => {
  const initialCondition = getInitialCondition(columnConditions);
  const [type, setType] = useState<GridFilterType>(initialCondition.type);
  const [value, setValue] = useState<string>(initialCondition.value);
  const [caseSensitive, setCaseSensitive] = useState<boolean>(initialCondition.caseSensitive);
  const [error, setError] = useState<string | null>(null);

  const popupRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const uniqueId = useId();

  const { top, left } = useAnchorPosition({
    anchorRef: buttonRef ?? { current: null },
    floatingRef: popupRef,
    isOpened: true,
  });

  // Hide until position is calculated to prevent flash at (0, 0)
  const isPositioned = top !== 0 || left !== 0;

  const ariaLabel = columnTitle ? `Filter ${columnTitle}` : 'Filter column';
  const typeGroupName = `filter-type-${popupId}-${uniqueId}`;
  const textInputId = `filter-value-${popupId}-${uniqueId}`;
  const caseSensitiveId = `filter-case-${popupId}-${uniqueId}`;

  // Focus the first control on open
  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, []);

  useClickOutside({
    ref: popupRef,
    onClickOutsideHandler: onClose,
    dependentRef: buttonRef,
  });

  useKeyPress({
    keyCode: 'Escape',
    ref: popupRef,
    onKeyPress: onClose,
  });

  useModalFocusTrap({
    modalRef: popupRef,
    isOpened: true,
  });

  const handleTypeChange = (selectedType: GridFilterType) => {
    setType(selectedType);
    setError(null);
  };

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (error && e.target.value.trim().length > 0) {
      setError(null);
    }
  };

  const handleCaseSensitiveChange = () => {
    setCaseSensitive((prev) => !prev);
  };

  const handleApply = () => {
    if (value.trim().length === 0) {
      setError('Filter value is required');
      return;
    }

    onApply({
      type,
      value,
      caseSensitive,
    });
  };

  const handleClear = () => {
    onClear();
  };

  return (
    <Portal>
      <div
        ref={popupRef}
        id={popupId}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        className="cl-grid-filter-popup"
        style={{ top, left, opacity: isPositioned ? 1 : 0 }}
      >
        <div className="cl-grid-filter-popup__types" role="radiogroup" aria-label="Filter type">
          {FILTER_TYPES.map((filterType, index) => (
            <label key={filterType} className="cl-grid-filter-popup__type-option">
              <input
                ref={index === 0 ? firstInputRef : undefined}
                type="radio"
                name={typeGroupName}
                value={filterType}
                checked={type === filterType}
                onChange={() => handleTypeChange(filterType)}
                aria-label={FILTER_TYPE_LABELS[filterType]}
              />
              <span className="cl-grid-filter-popup__type-label">
                {FILTER_TYPE_LABELS[filterType]}
              </span>
            </label>
          ))}
        </div>

        <div className="cl-grid-filter-popup__field">
          <TextInput
            stateless
            id={textInputId}
            name="filter-value"
            label="Filter value"
            value={value}
            onChange={handleValueChange}
            maxLength={1000}
            placeholder="Enter filter value..."
            clearable={false}
          />
        </div>

        {error && (
          <div className="cl-grid-filter-popup__error" role="alert">
            {error}
          </div>
        )}

        <div className="cl-grid-filter-popup__toggle">
          <Checkbox
            stateless
            id={caseSensitiveId}
            name="case-sensitive"
            label="Case sensitive"
            checked={caseSensitive}
            onChange={handleCaseSensitiveChange}
          />
        </div>

        <div className="cl-grid-filter-popup__actions">
          <PrimaryButton text="Apply" onClick={handleApply} aria-label="Apply filter" />
          <SecondaryButton
            text="Clear"
            onClick={handleClear}
            disabled={!hasActiveConditions}
            aria-label="Clear filter"
          />
        </div>
      </div>
    </Portal>
  );
};
