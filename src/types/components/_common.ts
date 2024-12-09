import { CSSProperties } from 'react';

export type CommonInputProps = CommonComponentProps & {
  label: string;
  name: string;
  disabled?: boolean;
  required?: boolean;
};

export type CommonComponentProps = {
  id?: string;
  className?: string;
  style?: CSSProperties;
  tabIndex?: number;
  title?: string;
};
