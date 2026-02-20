import { Icon } from '@components/atoms';
import { ElementSize, IconName } from '@enums';
import type { AccordionItemProps } from '@types';
import type { FC } from 'react';
import './AccordionItem.css';

export const AccordionItem: FC<AccordionItemProps> = ({ summary, children }) => {
  return (
    <details className="cl-accordion-item">
      <summary className="cl-accordion-item__summary">
        {summary}
        <Icon
          name={IconName.ChevronDown}
          className="cl-accordion-item__icon"
          aria-label="Toggle Details"
          testId="accordion-icon"
          size={ElementSize.Small}
        />
      </summary>
      <div className="cl-accordion-item__content">{children}</div>
    </details>
  );
};
