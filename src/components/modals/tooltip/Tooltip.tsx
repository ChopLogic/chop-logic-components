import styles from './styles.module.css';
import createClassName from 'utils/create-class-name';
import { PropsWithChildren, useState } from 'react';
import ChopLogicPortal from 'components/elements/portal/Portal';

export type ChopLogicTooltipProps = PropsWithChildren & React.HTMLAttributes<HTMLSpanElement>;

const ChopLogicTooltip: React.FC<ChopLogicTooltipProps> = ({ className, children, ...rest }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleContainerClick = () => {
    setIsOpened(!isOpened);
  };

  const containerClass = createClassName([className, styles.background]);

  return (
    <>
      <span className={containerClass} {...rest} onClick={handleContainerClick}>
        {children}
      </span>
      {isOpened && (
        <ChopLogicPortal>
          <div>Tooltip</div>
        </ChopLogicPortal>
      )}
    </>
  );
};

export default ChopLogicTooltip;
