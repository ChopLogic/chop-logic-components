import { Icon } from '@atoms';
import { IconName } from '@enums';
import type { AccordionItemProps } from '@models';
import styles from './AccordionItem.module.scss';

export function AccordionItem({ summary, children }: AccordionItemProps) {
  return (
    <details className={styles.details}>
      <summary className={styles.details_summary}>
        {summary}
        <Icon
          name={IconName.ChevronDown}
          className={styles.details_icon}
          aria-label="Toggle Details"
        />
      </summary>
      <div className={styles.details_content}>{children}</div>
    </details>
  );
}
