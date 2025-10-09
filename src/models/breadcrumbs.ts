import { IconName } from '@enums';

import { ChopLogicComponentProps } from './_common';

interface BreadcrumbItem {
  label: string;
  icon?: IconName;
  link?: string;
}

export interface BreadcrumbsProps extends ChopLogicComponentProps {
  items: BreadcrumbItem[];
}
