import ChopLogicPortal from 'components/misc/portal';
import styles from './styles.module.css';
import { useMount } from 'utils/use-mount';
import createClassName from 'utils/create-class-name';
import ChopLogicModalLayout from './elements/Layout';
import { PropsWithChildren } from 'react';

export type ChopLogicModalProps = PropsWithChildren &
  React.HTMLAttributes<HTMLDivElement> & {
    isOpened: boolean;
    onClose: () => void;
    title: string;
  };

const ChopLogicModal: React.FC<ChopLogicModalProps> = ({ isOpened, onClose, className, title, children, ...rest }: ChopLogicModalProps) => {
  const isMounted = useMount(isOpened, 300);
  const isClosing = isMounted && !isOpened;

  if (!isMounted) {
    return null;
  }

  const backgroundClassNames = createClassName([className, styles.background, { [styles.background_closing]: isClosing }]);

  return (
    <ChopLogicPortal>
      <div className={backgroundClassNames}>
        <ChopLogicModalLayout title={title} onClose={onClose} isOpened={isOpened} {...rest}>
          {children}
        </ChopLogicModalLayout>
      </div>
    </ChopLogicPortal>
  );
};

export default ChopLogicModal;
