import { useMount } from 'hooks/use-mount';
import createClassName from 'utils/create-class-name';

import ChopLogicPortal from 'components/misc/portal';

import ChopLogicModalLayout from './elements/Layout';
import { ChopLogicModalProps } from './types';

import './Dialog.scss';

const ChopLogicDialog: React.FC<ChopLogicModalProps> = ({ isOpened, onClose, className, title, children, ...rest }) => {
  const isMounted = useMount(isOpened);
  const isClosing = isMounted && !isOpened;

  if (!isMounted) {
    return null;
  }

  const backgroundClassNames = createClassName([className, 'cl-dialog__background', { 'cl-dialog__background_closing': isClosing }]);

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

export default ChopLogicDialog;
