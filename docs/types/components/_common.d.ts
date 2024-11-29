import { CSSProperties } from '../../../node_modules/react';

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
  theme?: 'dark' | 'light';
};
