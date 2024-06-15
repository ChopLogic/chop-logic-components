import ChopLogicPortal from 'components/misc/portal';
import styles from './styles.module.css';
import { useMount } from 'utils/use-mount';
import createClassName from 'utils/create-class-name';
import ChopLogicModalLayout from './elements/Layout';
import { PropsWithChildren } from 'react';

export type ChopLogicModalProps = PropsWithChildren & {
  isOpened: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  openDelay?: number;
};

const ChopLogicModal: React.FC<ChopLogicModalProps> = ({
  isOpened,
  onClose,
  className,
  title,
  openDelay,
  children,
}: ChopLogicModalProps) => {
  const isMounted = useMount(isOpened, openDelay);
  const isClosing = isMounted && !isOpened;

  if (!isMounted) {
    return null;
  }

  const backgroundClassNames = createClassName([className, styles.background, { [styles.closing]: isClosing }]);

  return (
    <ChopLogicPortal>
      <div className={backgroundClassNames}>
        <ChopLogicModalLayout title={title} onClose={onClose} isOpened={isOpened}>
          {children}
        </ChopLogicModalLayout>
      </div>
    </ChopLogicPortal>
  );
};

export default ChopLogicModal;
