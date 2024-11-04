export type CommonComponentProps = {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  tabIndex?: number;
  title?: string;
  theme?: 'dark' | 'light';
};

export type CommonInputProps = CommonComponentProps & {
  label: string;
  name: string;
  disabled?: boolean;
  required?: boolean;
};
