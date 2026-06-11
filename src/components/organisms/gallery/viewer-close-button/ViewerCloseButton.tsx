import { Button } from '@components/atoms';
import { ButtonView, IconName } from '@enums';
import type { FC } from 'react';

import './ViewerCloseButton.css';

export interface ViewerCloseButtonProps {
  onClose: () => void;
}

const ViewerCloseButton: FC<ViewerCloseButtonProps> = ({ onClose }) => {
  return (
    <Button
      view={ButtonView.Icon}
      icon={IconName.X}
      label="Close fullscreen view"
      onClick={onClose}
      className="cl-fullscreen-viewer__close-button"
    />
  );
};

export default ViewerCloseButton;
