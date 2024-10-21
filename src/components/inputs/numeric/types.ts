export type NumericValidationFunction = (input?: number) => boolean;

export type ChopLogicNumericInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  errorMessage?: string;
  validator?: NumericValidationFunction;
  onClear?: () => void;
  hasSpinButtons?: boolean;
  onSpinButtonClick?: (value?: number) => void;
};
