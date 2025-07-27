import { ChopLogicIconName } from '@enums';
import React, { HTMLAttributes } from 'react';

import { ChopLogicComponentProps } from './_common';

export interface ChopLogicIconProps extends ChopLogicComponentProps, HTMLAttributes<SVGSVGElement> {
  name?: ChopLogicIconName;
  testId?: string;
  title?: string;
}

export interface ChopLogicSVGElementProps extends React.SVGProps<SVGSVGElement> {
  title?: string;
}
