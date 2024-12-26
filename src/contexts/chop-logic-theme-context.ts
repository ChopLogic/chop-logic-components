import React from 'react';

import { ChopLogicThemeContextProps } from '@/models';

export const ChopLogicThemeContext = React.createContext<ChopLogicThemeContextProps>({
  mode: 'light',
});
