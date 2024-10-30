import { MultiSelectValue } from '../types';

type SelectOptionProps = {
  value: MultiSelectValue;
  onSelect: (id: string) => void;
};
declare const SelectOption: React.FC<SelectOptionProps>;
export default SelectOption;
