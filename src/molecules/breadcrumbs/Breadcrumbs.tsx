import { Icon, Link } from '@atoms';
import { IconName } from '@enums';
import { BreadcrumbsProps } from '@models';
import { getClassName } from '@utils';
import { FC, Fragment } from 'react';

import styles from './Breadcrumbs.module.scss';

const Breadcrumbs: FC<BreadcrumbsProps> = ({ items, className, id, style, tabIndex, title, ...rest }) => {
  const breadcrumbsClass = getClassName([styles.breadcrumbs, className]);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav aria-label='Breadcrumb' className={breadcrumbsClass} id={id} style={style} tabIndex={tabIndex} title={title} {...rest}>
      <ol className={styles.breadcrumbs_list}>
        {items.map((item, index) => {
          const isLastItem = index === items.length - 1;
          const isLink = !!item.link && !isLastItem;

          return (
            <Fragment key={`${item.label}-${index}`}>
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
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
