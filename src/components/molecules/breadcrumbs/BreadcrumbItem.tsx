import { Icon, Link } from '@components/atoms';
import type { Breadcrumb } from '@types';
import type { FC } from 'react';

import styles from './Breadcrumbs.module.scss';

const BreadcrumbItem: FC<{
  item: Breadcrumb;
  isLastItem: boolean;
}> = ({ item, isLastItem }) => {
  const isLink = !!item.link && !isLastItem;

  return (
    <>
      <li className={styles.breadcrumbs_item}>
        {isLink ? (
          <Link href={item?.link ?? ''} icon={item.icon} iconPosition="left">
            {item.label}
          </Link>
        ) : (
          <span aria-current={isLastItem ? 'page' : undefined} className={styles.breadcrumbs_text}>
            {item.icon && <Icon name={item.icon} hidden />}
            {item.label}
          </span>
        )}
      </li>
      {!isLastItem && (
        <span
          aria-hidden="true"
          data-testid="breadcrumb-separator"
          className={styles.breadcrumbs_separator}
        >
          /
        </span>
      )}
    </>
  );
};

export default BreadcrumbItem;
