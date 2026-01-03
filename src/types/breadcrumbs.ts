import type { IconName } from '@enums';

import type { ChopLogicComponentProps } from './_common';

export interface Breadcrumb {
  label: string;
  icon?: IconName;
  link?: string;
}

export interface BreadcrumbsProps extends ChopLogicComponentProps {
  items: Breadcrumb[];
}
