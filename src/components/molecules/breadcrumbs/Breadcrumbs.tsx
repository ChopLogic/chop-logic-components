import type { BreadcrumbsProps } from '@types';
import { getClassName } from '@utils';
import type { FC } from 'react';

import './Breadcrumbs.css';
import BreadcrumbList from './BreadcrumbList';

const Breadcrumbs: FC<BreadcrumbsProps> = ({
  items,
  className,
  id,
  style,
  tabIndex,
  title,
  ...rest
}) => {
  const breadcrumbsClass = getClassName(['cl-breadcrumbs', className]);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={breadcrumbsClass}
      id={id}
      style={style}
      tabIndex={tabIndex}
      title={title}
      {...rest}
    >
      <BreadcrumbList items={items} />
    </nav>
  );
};

export default Breadcrumbs;
