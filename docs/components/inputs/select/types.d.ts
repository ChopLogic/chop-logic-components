/// <reference types="react" />
export type ChopLogicSelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  name: string;
  label: string;
  options: SelectValue[];
  onChange?: (value?: SelectValue) => void;
  placeholder?: string;
};
export type SelectValue = {
  id: string;
  label: string;
} & {
  [key in string]: unknown;
};
export type SelectOptionProps = {
  value: SelectValue;
  isSelected: boolean;
  onSelect: (id: string) => void;
  onClear: () => void;
};
