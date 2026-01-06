import type { MultiSelectValue } from '@types';
import type { FC } from 'react';

type Props = {
  values?: MultiSelectValue[];
  placeholder?: string;
};

export const MultiSelectComboboxSelectedValues: FC<Props> = ({ values, placeholder }) => {
  const selectedLabels = !values
    ? []
    : values.filter((value) => value.selected).map((value) => value.label);

  const allItemsSelected = selectedLabels.length !== 0 && selectedLabels.length === values?.length;
  const singleItemSelected = selectedLabels.length === 1;
  const multipleItemsSelected = selectedLabels.length > 1;

  if (allItemsSelected) {
    return <span>All items selected</span>;
  }

  if (singleItemSelected) {
    return <span>{selectedLabels[0]}</span>;
  }

  if (multipleItemsSelected) {
    return <span>{`${selectedLabels.length} items selected`}</span>;
  }

  return <span>{placeholder}</span>;
};
