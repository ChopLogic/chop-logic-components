import { SelectValue } from '../types';

type SelectDropdownProps = {
  options: SelectValue[];
  opened: boolean;
  dropdownId: string;
  comboboxId: string;
  onClose: () => void;
  selected?: SelectValue;
  onSelect: (id: string) => void;
  onClear: () => void;
};
declare const SelectDropdown: React.FC<SelectDropdownProps>;
export default SelectDropdown;
