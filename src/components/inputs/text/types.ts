export type ChopLogicTextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  name: string;
  label: string;
  valid?: boolean;
  errorMessage?: string;
};
