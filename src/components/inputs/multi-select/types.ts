export type MultiSelectValue = {
  id: string;
  label: string;
  selected: boolean;
};

export type ChopLogicMultiSelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  id: string;
  name: string;
  label: string;
  values: MultiSelectValue[];
  onSelectChange?: (values?: MultiSelectValue[]) => void;
  placeholder?: string;
};

export type MultiSelectDropdownProps = {
  values: MultiSelectValue[];
  isOpened: boolean;
  dropdownId: string;
  onClose: () => void;
  onSelect: (id: string) => void;
};
