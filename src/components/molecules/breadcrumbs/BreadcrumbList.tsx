import type { Breadcrumb } from '@types';
import type { FC } from 'react';

import BreadcrumbItem from './BreadcrumbItem';
import styles from './Breadcrumbs.module.scss';

const BreadcrumbList: FC<{ items: Breadcrumb[] }> = ({ items }) => {
  return (
    <ol className={styles.breadcrumbs_list}>
      {items.map((item, index) => (
        <BreadcrumbItem key={item.label} item={item} isLastItem={index === items.length - 1} />
      ))}
    </ol>
  );
};

export default BreadcrumbList;
