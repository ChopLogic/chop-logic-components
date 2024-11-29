import { default as React } from '../../../../../node_modules/react';
import { MultiSelectValue } from '../../../../types';

type SelectComboboxProps = {
  opened: boolean;
  disabled: boolean;
  required: boolean;
  onClick: () => void;
  comboboxId: string;
  dropdownId: string;
  values?: MultiSelectValue[];
  placeholder?: string;
  name: string;
};
declare const SelectCombobox: React.FC<SelectComboboxProps>;
export default SelectCombobox;
