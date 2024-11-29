import { default as React, PropsWithChildren } from '../../../node_modules/react';

type ChopLogicLabelProps = {
  label: string;
  required: boolean;
  inputId: string;
  isTextHidden?: boolean;
  icon?: React.ReactElement;
  iconPosition?: 'left' | 'right';
  style?: React.CSSProperties;
};
declare const ChopLogicLabel: React.FC<PropsWithChildren<ChopLogicLabelProps>>;
export default ChopLogicLabel;
