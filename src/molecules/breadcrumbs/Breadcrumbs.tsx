import { Icon, Link } from '@atoms';
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
      <ol className={styles.breadcrumbsList}>
        {items.map((item, index) => {
          const isLastItem = index === items.length - 1;
          const isLink = !!item.link && !isLastItem;

          return (
            <Fragment key={`${item.label}-${index}`}>
              <li className={styles.breadcrumbsItem}>
                {isLink ? (
                  <Link href={item.link!} icon={item.icon} iconPosition='left' className={styles.breadcrumbsLink}>
                    {item.label}
                  </Link>
                ) : (
                  <span className={styles.breadcrumbsCurrent} aria-current={isLastItem ? 'page' : undefined}>
                    {item.icon && <Icon name={item.icon} hidden />}
                    {item.label}
                  </span>
                )}
              </li>
              {!isLastItem && (
                <li className={styles.breadcrumbsSeparator} aria-hidden='true'>
                  /
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
