import { ChopLogicIconName } from '@enums';

import { ChopLogicComponentProps } from '../common.ts';

export interface ChopLogicIconProps extends ChopLogicComponentProps {
  name?: ChopLogicIconName;
  testId?: string;
}
