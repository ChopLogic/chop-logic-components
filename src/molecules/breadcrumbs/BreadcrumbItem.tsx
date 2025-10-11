import { Icon, Link } from '@atoms';
import { IconName } from '@enums';
import { Breadcrumb } from '@models';
import { FC } from 'react';

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
          <Link href={item.link!} icon={item.icon} iconPosition='left'>
            {item.label}
          </Link>
        ) : (
          <span aria-current={isLastItem ? 'page' : undefined} className={styles.breadcrumbs_text}>
            {item.icon && <Icon name={item.icon} hidden />}
            {item.label}
          </span>
        )}
      </li>
      {!isLastItem && <Icon name={IconName.ChevronRight} hidden />}
    </>
  );
};

export default BreadcrumbItem;
