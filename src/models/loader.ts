import { ChopLogicLoaderView } from '@enums';
import { HTMLAttributes } from 'react';

import { ChopLogicComponentProps } from './_common';

export interface ChopLogicLoaderProps extends ChopLogicComponentProps, HTMLAttributes<HTMLSpanElement> {
  view?: ChopLogicLoaderView;
}
