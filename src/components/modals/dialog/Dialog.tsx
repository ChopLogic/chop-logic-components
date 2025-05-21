import React from 'react';
import { ChopLogicPortal } from '@components';
import { useMount } from '@hooks';
import { ChopLogicDialogProps } from '@models';

import ChopLogicModalLayout from './elements/Layout';
import styles from './Dialog.module.scss';
import { getClassName } from '@utils';

const ChopLogicDialog: React.FC<ChopLogicDialogProps> = ({ isOpened, onClose, title, children, ...rest }) => {
  const isMounted = useMount(isOpened);
  const isClosing = isMounted && !isOpened;

  if (!isMounted) {
    return null;
  }

  return (
    <ChopLogicPortal>
      <div className={getClassName([styles.dialog, { [styles.dialog__closing]: isClosing }])}>
        <ChopLogicModalLayout title={title} onClose={onClose} isOpened={isOpened} {...rest}>
          {children}
        </ChopLogicModalLayout>
      </div>
    </ChopLogicPortal>
  );
};

export default ChopLogicDialog;
