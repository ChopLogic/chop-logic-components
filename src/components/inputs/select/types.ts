export type ChopLogicSelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  id: string;
  name: string;
  label: string;
  values: SelectValue[];
  onSelectChange?: (value?: SelectValue) => void;
  placeholder?: string;
};

export type SelectValue = {
  id: string;
  label: string;
};
