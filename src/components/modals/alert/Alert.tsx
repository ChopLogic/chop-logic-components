import { useMount } from 'hooks/use-mount';
import createClassName from 'utils/create-class-name';

import ChopLogicPortal from 'components/misc/portal';

import ChopLogicAlertHeader from './elements/Header';
import { StyledAlertContent, StyledAlertWrapper } from './Alert.styled';
import { ChopLogicAlertProps } from './types';

const ChopLogicAlert: React.FC<ChopLogicAlertProps> = ({ isOpened, onClose, title, message, mode = 'info', ...rest }) => {
  const isMounted = useMount(isOpened);
  const isClosing = isMounted && !isOpened;

  if (!isMounted) return null;

  const contentClass = createClassName([
    'cl-alert__content',
    {
      'cl-alert__content_error': mode === 'error',
      'cl-alert__content_success': mode === 'success',
    },
  ]);

  return (
    <ChopLogicPortal>
      <StyledAlertWrapper $isClosing={isClosing} {...rest}>
        <StyledAlertContent className={contentClass}>
          <ChopLogicAlertHeader title={title} onClose={onClose} mode={mode} />
          <p>{message}</p>
        </StyledAlertContent>
      </StyledAlertWrapper>
    </ChopLogicPortal>
  );
};

export default ChopLogicAlert;
