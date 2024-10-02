import { PropsWithChildren } from 'react';
import { useMount } from 'hooks/use-mount';

import ChopLogicPortal from 'components/containers/portal';

import ChopLogicModalLayout from './elements/Layout';
import { StyledDialogBackground } from './Dialog.styled';

export type ChopLogicModalProps = PropsWithChildren &
  React.HTMLAttributes<HTMLDivElement> & {
    isOpened: boolean;
    onClose: () => void;
    title: string;
  };

const ChopLogicDialog: React.FC<ChopLogicModalProps> = ({ isOpened, onClose, title, children, ...rest }) => {
  const isMounted = useMount(isOpened);
  const isClosing = isMounted && !isOpened;

  if (!isMounted) {
    return null;
  }

  return (
    <ChopLogicPortal>
      <StyledDialogBackground $isClosing={isClosing}>
        <ChopLogicModalLayout title={title} onClose={onClose} isOpened={isOpened} {...rest}>
          {children}
        </ChopLogicModalLayout>
      </StyledDialogBackground>
    </ChopLogicPortal>
  );
};

export default ChopLogicDialog;
