import { useMount } from 'hooks/use-mount';
import createClassName from 'utils/create-class-name';
import ChopLogicPortal from 'components/elements/portal/Portal';
import 'styles';
import './Alert.styles.css';
import { ChopLogicAlertProps } from './types';
import { Icon } from 'enums/icon';
import ChopLogicButton from 'components/controls/button/Button';

const ChopLogicAlert: React.FC<ChopLogicAlertProps> = ({ isOpened, onClose, className, title, message, ...rest }) => {
  const isMounted = useMount(isOpened);
  const isClosing = isMounted && !isOpened;

  if (!isMounted) return null;

  const alertClass = createClassName([className, 'cl-alert', { 'cl-alert_closing': isClosing }]);

  return (
    <ChopLogicPortal>
      <div className={alertClass} {...rest}>
        <div className='cl-alert__content'>
          <header className='cl-alert__header'>
            <h3 className='cl-alert__title'>
              {title}
              <ChopLogicButton
                icon={Icon.Cancel}
                view='icon'
                aria-label='Close alert popup'
                onClick={onClose}
                className='cl-alert__close-button'
              />
            </h3>
          </header>
          <p className='cl-alert__message'>{message}</p>
        </div>
      </div>
    </ChopLogicPortal>
  );
};

export default ChopLogicAlert;
