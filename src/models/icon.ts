import { IconName } from '@enums';
import { HTMLAttributes, SVGProps } from 'react';

import { ChopLogicComponentProps } from './_common';

export interface IconProps extends ChopLogicComponentProps, HTMLAttributes<SVGSVGElement> {
  name?: IconName;
  testId?: string;
  title?: string;
  hidden?: boolean;
}

export interface ChopLogicSVGElementProps extends SVGProps<SVGSVGElement> {
  title?: string;
}
