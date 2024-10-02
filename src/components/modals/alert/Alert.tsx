import { useMount } from 'hooks/use-mount';

import ChopLogicPortal from 'components/containers/portal';
import { CLIcon } from 'components/misc/icon/Icon';

import ChopLogicAlertHeader from './elements/Header';
import { StyledAlertContent, StyledAlertWrapper } from './Alert.styled';

export type ChopLogicAlertMode = 'success' | 'error' | 'warning' | 'info' | 'help';

export type ChopLogicAlertProps = React.HTMLAttributes<HTMLDivElement> & {
  isOpened: boolean;
  onClose: () => void;
  message: string;
  title?: string;
  mode?: ChopLogicAlertMode;
  icon?: CLIcon;
};

const ChopLogicAlert: React.FC<ChopLogicAlertProps> = ({ isOpened, onClose, title, message, mode = 'info', icon, ...rest }) => {
  const isMounted = useMount(isOpened);
  const isClosing = isMounted && !isOpened;

  if (!isMounted) return null;

  return (
    <ChopLogicPortal>
      <StyledAlertWrapper $isClosing={isClosing} {...rest}>
        <StyledAlertContent>
          <ChopLogicAlertHeader title={title} onClose={onClose} mode={mode} icon={icon} />
          <p>{message}</p>
        </StyledAlertContent>
      </StyledAlertWrapper>
    </ChopLogicPortal>
  );
};

export default ChopLogicAlert;
