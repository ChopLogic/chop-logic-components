import React from 'react';

import { ChopLogicThemeMode } from '@/enums';
import { ChopLogicThemeContextProps } from '@/models';

export const ChopLogicThemeContext = React.createContext<ChopLogicThemeContextProps>({
  mode: ChopLogicThemeMode.Light,
});
