import type { ThemeMode } from '@enums';

import type { FormInputParams, FormValues } from './form';

export interface ThemeContextProps {
  mode?: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}

export interface FormContextProps {
  onChangeFormInput?: (params: FormInputParams) => void;
  initialValues?: FormValues;
  resetSignal?: number;
}
