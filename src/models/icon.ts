import type { IconName } from '@enums';
import type { HTMLAttributes, SVGProps } from 'react';

import type { ChopLogicComponentProps } from './_common';

export interface IconProps extends ChopLogicComponentProps, HTMLAttributes<SVGSVGElement> {
  name?: IconName;
  testId?: string;
  title?: string;
  hidden?: boolean;
}

export interface ChopLogicSVGElementProps extends SVGProps<SVGSVGElement> {
  title?: string;
}
