import ChopLogicPortal from 'components/misc/portal';
import styles from './styles.module.css';
import { useMount } from 'utils/use-mount';
import createClassName from 'utils/create-class-name';
import ChopLogicModalLayout from './elements/Layout';

export type ChopLogicModalProps = {
  isOpened: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  openDelay?: number;
};

const ChopLogicModal: React.FC<ChopLogicModalProps> = ({ isOpened, onClose, className, title, openDelay }: ChopLogicModalProps) => {
  const isMounted = useMount(isOpened, openDelay);
  const isClosing = isMounted && !isOpened;

  if (!isMounted) {
    return null;
  }

  const backgroundClassNames = createClassName([styles.background, { [styles.closing]: isClosing }]);
  const windowClassNames = createClassName([styles.window, className, { [styles.closing]: isClosing }]);

  return (
    <ChopLogicPortal>
      <div className={backgroundClassNames}>
        <ChopLogicModalLayout title={title} windowClassName={windowClassNames} contentClassName={styles.content} onClose={onClose} />
      </div>
    </ChopLogicPortal>
  );
};

export default ChopLogicModal;
