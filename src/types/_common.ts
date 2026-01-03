import type { CSSProperties } from 'react';

export interface ChopLogicComponentProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  tabIndex?: number;
  title?: string;
}

export interface ChopLogicInputProps extends ChopLogicComponentProps {
  label: string;
  name: string;
  disabled?: boolean;
  required?: boolean;
}

export type SelectValue = {
  id: string;
  label: string;
} & { [key in string]: unknown };

export type MultiSelectValue = SelectValue & {
  selected: boolean;
};

export type NumericInputValidator = (input?: number) => boolean;

export type TextInputValidator = (input: string) => boolean;

export type ChopLogicRegExpWithFlags = {
  regexp: string;
  flags?: string;
};

export type Dimensions = { width: number; height: number };
