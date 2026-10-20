import { Button } from '@components/atoms';
import { ButtonView, DialogVariant, IconName } from '@enums';
import type { DialogProps } from '@types';
import { type FC, useState } from 'react';

import Dialog from '../Dialog';

export const DialogExample: FC<DialogProps> = ({ onClose, title, variant, ...rest }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = () => setIsOpened(true);
  const handleClose = () => {
    setIsOpened(false);
    if (onClose) onClose();
  };

  const modalContent = (
    <div>
      <p style={{ marginBottom: '20px' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, neque soluta ullam
        repudiandae facere dolore modi reiciendis doloribus tempore. Magnam veniam ducimus
        consectetur quasi vitae perferendis voluptatum quisquam numquam tempora. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Sunt, neque soluta ullam repudiandae facere dolore
        modi reiciendis doloribus tempore. Magnam veniam ducimus consectetur quasi vitae perferendis
        voluptatum quisquam numquam tempora.
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button text="Action" view={ButtonView.Secondary} />
        <Button text="Close dialog" view={ButtonView.Secondary} onClick={handleClose} />
      </div>
    </div>
  );

  return (
    <div>
      <Button text="Open dialog" onClick={handleOpen} view={ButtonView.Secondary} />
      <Dialog {...rest} isOpened={isOpened} onClose={handleClose} title={title} variant={variant}>
        {modalContent}
      </Dialog>
    </div>
  );
};

export const StackedDialogsExample: FC = () => {
  const [isDialog1Open, setIsDialog1Open] = useState(false);
  const [isDialog2Open, setIsDialog2Open] = useState(false);
  const [isDialog3Open, setIsDialog3Open] = useState(false);

  return (
    <div>
      <div style={{ marginBottom: '300vh', padding: '20px' }}>
        <p style={{ marginBottom: '20px' }}>
          This page has extra height to demonstrate scroll locking. Open multiple dialogs and close
          them in any order. The page scroll should only be restored when ALL dialogs are closed.
        </p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <Button
            text="Open Dialog 1"
            onClick={() => setIsDialog1Open(true)}
            view={ButtonView.Secondary}
          />
          <Button
            text="Open Dialog 2"
            onClick={() => setIsDialog2Open(true)}
            view={ButtonView.Secondary}
          />
          <Button
            text="Open Dialog 3 (Drawer)"
            onClick={() => setIsDialog3Open(true)}
            view={ButtonView.Secondary}
          />
        </div>
      </div>

      <Dialog
        isOpened={isDialog1Open}
        onClose={() => setIsDialog1Open(false)}
        title="Dialog 1"
        icon={IconName.Info}
      >
        <p style={{ marginBottom: '20px' }}>
          This is the first dialog. You can open another dialog while this one is open.
        </p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <Button
            text="Open Dialog 2"
            onClick={() => setIsDialog2Open(true)}
            view={ButtonView.Secondary}
          />
          <Button
            text="Close this dialog"
            onClick={() => setIsDialog1Open(false)}
            view={ButtonView.Secondary}
          />
        </div>
      </Dialog>

      <Dialog
        isOpened={isDialog2Open}
        onClose={() => setIsDialog2Open(false)}
        title="Dialog 2"
        icon={IconName.AlertCircle}
        variant={DialogVariant.DrawerLeft}
      >
        <p style={{ marginBottom: '20px' }}>
          This is the second dialog. Try closing Dialog 1 while this is open - the page should
          remain scroll-locked.
        </p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <Button
            text="Open Dialog 3 (Drawer)"
            onClick={() => setIsDialog3Open(true)}
            view={ButtonView.Secondary}
          />
          <Button
            text="Close this dialog"
            onClick={() => setIsDialog2Open(false)}
            view={ButtonView.Secondary}
          />
        </div>
      </Dialog>

      <Dialog
        isOpened={isDialog3Open}
        onClose={() => setIsDialog3Open(false)}
        title="Dialog 3 (Drawer)"
        icon={IconName.Menu}
        variant={DialogVariant.DrawerRight}
      >
        <p style={{ marginBottom: '20px' }}>
          This is a drawer-style dialog. All dialogs coordinate their scroll locks.
        </p>
        <Button
          text="Close this drawer"
          onClick={() => setIsDialog3Open(false)}
          view={ButtonView.Secondary}
        />
      </Dialog>
    </div>
  );
};
