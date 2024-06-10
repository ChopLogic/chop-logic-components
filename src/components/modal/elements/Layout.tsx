import React from 'react';

type ModalLayoutProps = {
  windowClassName: string;
  contentClassName: string;
  title: string;
  onClose: () => void;
  id?: string;
  content?: React.ReactElement;
};

const ChopLogicModalLayout = ({ windowClassName, contentClassName, title, id, onClose, content }: ModalLayoutProps): React.ReactElement => {
  return (
    <div className={windowClassName} role='dialog' aria-modal='true' id={id}>
      <header className='modal-window__header' id='modal-window-heading'>
        {title}
        <button onClick={onClose}>X</button>
      </header>
      <div className={contentClassName} role='region' aria-labelledby='modal-window-heading'>
        {content}
      </div>
    </div>
  );
};

export default ChopLogicModalLayout;
