import { useMount } from 'hooks/use-mount';

import ChopLogicPortal from 'components/containers/portal';

import ChopLogicAlertHeader from './elements/Header';
import { StyledAlertContent, StyledAlertWrapper } from './Alert.styled';
import { ChopLogicAlertProps } from './types';

const ChopLogicAlert: React.FC<ChopLogicAlertProps> = ({ isOpened, onClose, title, message, mode = 'info', icon, ...rest }) => {
  const isMounted = useMount(isOpened);
  const isClosing = isMounted && !isOpened;

  if (!isMounted) return null;

  return (
    <ChopLogicPortal>
      <StyledAlertWrapper $isClosing={isClosing}>
        <StyledAlertContent {...rest}>
          <ChopLogicAlertHeader title={title} onClose={onClose} mode={mode} icon={icon} />
          <p>{message}</p>
        </StyledAlertContent>
      </StyledAlertWrapper>
    </ChopLogicPortal>
  );
};

export default ChopLogicAlert;
