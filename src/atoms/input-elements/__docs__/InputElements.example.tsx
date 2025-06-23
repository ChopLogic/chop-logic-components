import React from 'react';
import { ChopLogicIconName } from '@enums';
import { ChopLogicLoaderProps } from '@models';
import { Button2D, PrimaryButton, ButtonIcon, ButtonInner, ChopLogicIcon } from '@atoms';
import styles from './InputElements.module.scss';
import ErrorMessage from '@atoms/input-elements/error-message/ErrorMessage.tsx';
import Input from '@atoms/input-elements/input/Input.tsx';
import Label from '@atoms/input-elements/label/Label.tsx';

export const InputElementsExample: React.FC<ChopLogicLoaderProps> = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.element}>
        <PrimaryButton>Click on me</PrimaryButton>
        <span className={styles.label}>Primary Button</span>
      </div>
      <div className={styles.element}>
        <Button2D>Click on me</Button2D>
        <span className={styles.label}>Button2D</span>
      </div>
      <div className={styles.element}>
        <ButtonIcon>
          <ChopLogicIcon name={ChopLogicIconName.Graduate} />
        </ButtonIcon>
        <span className={styles.label}>ButtonIcon</span>
      </div>
      <div className={styles.element}>
        <ButtonInner icon={ChopLogicIconName.Remove} label='ButtonInner' />
        <span className={styles.label}>ButtonInner</span>
      </div>
      <div className={styles.element}>
        <ErrorMessage message='Something went wrong!' errorId='test-error-id' visible={true} />
        <span className={styles.label}>ErrorMessage</span>
      </div>
      <div className={styles.element}>
        <Input style={{ width: '100%' }} />
        <span className={styles.label}>Input</span>
      </div>
      <div className={styles.element}>
        <Label label='Input Label' required={true} inputId='test-input-id' />
        <span className={styles.label}>Label</span>
      </div>
    </div>
  );
};
