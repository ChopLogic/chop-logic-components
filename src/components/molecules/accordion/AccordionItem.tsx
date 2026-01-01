import { Icon } from '@components/atoms';
import { IconName } from '@enums';
import type { AccordionItemProps } from '@models';
import type { FC } from 'react';
import styles from './AccordionItem.module.scss';

export const AccordionItem: FC<AccordionItemProps> = ({ summary, children }) => {
  return (
    <details className={styles.details}>
      <summary className={styles.details_summary}>
        {summary}
        <Icon
          name={IconName.ChevronDown}
          className={styles.details_icon}
          aria-label="Toggle Details"
          testId="accordion-icon"
        />
      </summary>
      <div className={styles.details_content}>{children}</div>
    </details>
  );
};
