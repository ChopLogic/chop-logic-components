import { ChopLogicIconName } from '@enums';

import { ChopLogicComponentProps } from './_common';
import React, { HTMLAttributes } from 'react';

export interface ChopLogicIconProps extends ChopLogicComponentProps, HTMLAttributes<SVGSVGElement> {
  name?: ChopLogicIconName;
  testId?: string;
  title?: string;
}

export interface ChopLogicSVGElementProps extends React.SVGProps<SVGSVGElement> {
  title?: string;
}
