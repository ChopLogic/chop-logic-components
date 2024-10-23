import { ChangeEventHandler } from '../../../../node_modules/react';

import { NumericValidationFunction } from './types';

export declare function useChopLogicNumericInputController({
  name,
  defaultValue,
  onChange,
  onSpinButtonClick,
  min,
  max,
  step,
  required,
  validator,
}: {
  name: string;
  defaultValue?: string | number | readonly string[];
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onSpinButtonClick?: (value?: number) => void;
  min?: string | number;
  max?: string | number;
  step: number;
  required: boolean;
  validator?: NumericValidationFunction;
}): {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
  valid: boolean;
  minValue: number;
  maxValue: number;
  increment: () => void;
  decrement: () => void;
};
