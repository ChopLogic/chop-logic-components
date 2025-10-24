import type { LoaderView } from '@enums';
import type { HTMLAttributes } from 'react';

import type { ChopLogicComponentProps } from './_common';

export interface LoaderProps extends ChopLogicComponentProps, HTMLAttributes<HTMLSpanElement> {
  view?: LoaderView;
}
