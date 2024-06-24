import styles from './styles.module.css';
import { useMount } from 'hooks/use-mount';
import createClassName from 'utils/create-class-name';
import { PropsWithChildren } from 'react';
import ChopLogicPortal from 'components/elements/portal/Portal';

export type ChopLogicTooltipProps = PropsWithChildren &
  React.HTMLAttributes<HTMLDivElement> & {
    isOpened: boolean;
    onClose: () => void;
  };

const ChopLogicTooltip: React.FC<ChopLogicTooltipProps> = ({ isOpened, className, children, ...rest }) => {
  const isMounted = useMount(isOpened);
  const isClosing = isMounted && !isOpened;

  if (!isMounted) {
    return null;
  }

  const backgroundClassNames = createClassName([className, styles.background, { [styles.background_closing]: isClosing }]);

  return (
    <ChopLogicPortal>
      <div className={backgroundClassNames} {...rest}>
        {children}
      </div>
    </ChopLogicPortal>
  );
};

export default ChopLogicTooltip;
