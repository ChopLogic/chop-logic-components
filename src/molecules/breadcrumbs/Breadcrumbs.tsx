import { BreadcrumbsProps } from '@models';
import { getClassName } from '@utils';
import { FC } from 'react';

import BreadcrumbList from './BreadcrumbList';
import styles from './Breadcrumbs.module.scss';

const Breadcrumbs: FC<BreadcrumbsProps> = ({ items, className, id, style, tabIndex, title, ...rest }) => {
  const breadcrumbsClass = getClassName([styles.breadcrumbs, className]);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav aria-label='Breadcrumb' className={breadcrumbsClass} id={id} style={style} tabIndex={tabIndex} title={title} {...rest}>
      <BreadcrumbList items={items} />
    </nav>
  );
};

export default Breadcrumbs;
