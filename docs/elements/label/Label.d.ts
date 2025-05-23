import { default as React, PropsWithChildren } from '../../../node_modules/react';

type LabelProps = {
  label: string;
  required: boolean;
  inputId: string;
  isTextHidden?: boolean;
  icon?: React.ReactElement;
  iconPosition?: 'left' | 'right';
  style?: React.CSSProperties;
};
declare const Label: React.FC<PropsWithChildren<LabelProps>>;
export default Label;
