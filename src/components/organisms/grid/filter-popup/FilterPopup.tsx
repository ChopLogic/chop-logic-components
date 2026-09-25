import './FilterPopup.css';

import { Portal, RadioGroup } from '@components/atoms';
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

import { FILTER_TYPE_OPTIONS } from './FilterPopup.helpers';

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

  // Focus the first radio option on open. RadioGroup manages its own inner
  // refs, so we query the first radio input within the popup container.
  useEffect(() => {
    const firstRadio = popupRef.current?.querySelector<HTMLInputElement>('input[type="radio"]');
    firstRadio?.focus();
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
        <RadioGroup
          stateless
          name={typeGroupName}
          label="Filter type"
          options={FILTER_TYPE_OPTIONS}
          value={type}
          onChange={(value) => handleTypeChange(value as GridFilterType)}
          className="cl-grid-filter-popup__types"
        />

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

        {error && (
          <div className="cl-grid-filter-popup__error" role="alert">
            {error}
          </div>
        )}

        <Checkbox
          stateless
          id={caseSensitiveId}
          name="case-sensitive"
          label="Case sensitive"
          checked={caseSensitive}
          onChange={handleCaseSensitiveChange}
          className="cl-grid-filter-popup__checkbox"
        />

        <div className="cl-grid-filter-popup__actions">
          <SecondaryButton
            text="Clear"
            onClick={handleClear}
            disabled={!hasActiveConditions}
            aria-label="Clear filter"
          />
          <PrimaryButton text="Apply" onClick={handleApply} aria-label="Apply filter" />
        </div>
      </div>
    </Portal>
  );
};
