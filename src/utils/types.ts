export type CommonComponentProps = {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  tabIndex?: number;
};

export type CommonInputProps = CommonComponentProps & {
  name?: string;
  disabled?: boolean;
  required?: boolean;
};
