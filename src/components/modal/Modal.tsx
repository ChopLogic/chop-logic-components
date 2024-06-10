import ChopLogicPortal from 'components/misc/portal';
import styles from './styles.module.css';
import { useMount } from 'utils/use-mount';
import createClassName from 'utils/create-class-name';
import ChopLogicModalLayout from './elements/Layout';

type ChopLogicModalProps = {
  isOpened: boolean;
  onClose: () => void;
  className?: string;
  title: string;
};

const ChopLogicModal: React.FC<ChopLogicModalProps> = ({ isOpened, onClose, className, title, ...rest }: ChopLogicModalProps) => {
  const isMounted = useMount(isOpened);
  const isClosing = isMounted && !isOpened;

  if (!isMounted) {
    return null;
  }

  const contentClassNames = createClassName([styles.content]);
  const backgroundClassNames = createClassName([styles.background, { [styles.closing]: isClosing }]);
  const windowClassNames = createClassName([styles.window, className, { [styles.closing]: isClosing }]);

  return (
    <ChopLogicPortal>
      <div className={backgroundClassNames}>
        <ChopLogicModalLayout
          title={title}
          windowClassName={windowClassNames}
          contentClassName={contentClassNames}
          onClose={onClose}
          {...rest}
        />
      </div>
    </ChopLogicPortal>
  );
};

export default ChopLogicModal;
