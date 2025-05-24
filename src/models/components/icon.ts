import { ChopLogicIconName } from '@enums';

import { ChopLogicComponentProps } from '../common';
import React from 'react';

export interface ChopLogicIconProps extends ChopLogicComponentProps {
  name?: ChopLogicIconName;
  testId?: string;
  title?: string;
}

export interface ChopLogicSVGElementProps extends React.SVGProps<SVGSVGElement> {
  title?: string;
}
