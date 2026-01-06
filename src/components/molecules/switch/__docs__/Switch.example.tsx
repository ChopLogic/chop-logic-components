import type { SwitchProps } from '@types';
import { useState } from 'react';

import Switch from '../Switch';

export const SwitchExample = (args: SwitchProps) => {
  const [checked, setChecked] = useState(args.checked);
  return <Switch {...args} checked={checked} onChange={setChecked} />;
};
