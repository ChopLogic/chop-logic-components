import { Icon, Link } from '@components/atoms';
import { ElementSize, IconName } from '@enums';
import type { Breadcrumb } from '@types';
import type { FC } from 'react';

const BreadcrumbItem: FC<{
  item: Breadcrumb;
  isLastItem: boolean;
}> = ({ item, isLastItem }) => {
  const isLink = !!item.link && !isLastItem;

  return (
    <>
      <li className="cl-breadcrumbs__item">
        {isLink ? (
          <Link href={item?.link ?? ''} icon={item.icon} iconPosition="left">
            {item.label}
          </Link>
        ) : (
          <span aria-current={isLastItem ? 'page' : undefined} className="cl-breadcrumbs__text">
            {item.icon && <Icon name={item.icon} hidden />}
            {item.label}
          </span>
        )}
      </li>
      {!isLastItem && (
        <Icon name={IconName.ChevronRight} size={ElementSize.Small} testId="breadcrumb-separator" />
      )}
    </>
  );
};

export default BreadcrumbItem;
