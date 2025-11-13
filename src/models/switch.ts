import type { CSSProperties } from 'react';

export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  value?: string;
  hasIndicator?: boolean;
  label: string;
  name?: string;
  disabled?: boolean;
  id?: string;
  className?: string;
  style?: CSSProperties;
}
