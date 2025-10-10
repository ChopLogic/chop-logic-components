import { IconName } from '@enums';

import { ChopLogicComponentProps } from './_common';

export interface Breadcrumb {
  label: string;
  icon?: IconName;
  link?: string;
}

export interface BreadcrumbsProps extends ChopLogicComponentProps {
  items: Breadcrumb[];
}
