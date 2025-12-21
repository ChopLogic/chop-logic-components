import { Icon } from '@atoms';
import { IconName } from '@enums';
import type { AccordionItemProps } from '@models';

export function AccordionItem({ summary, children }: AccordionItemProps) {
  return (
    <details>
      <summary>
        {summary}
        <Icon name={IconName.ChevronDown} aria-label="Toggle Details" />
      </summary>
      <div>{children}</div>
    </details>
  );
}
