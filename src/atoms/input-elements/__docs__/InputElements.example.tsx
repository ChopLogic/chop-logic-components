import React from 'react';
import { ChopLogicIconName } from '@enums';
import { ChopLogicLoaderProps } from '@models';
import { SecondaryButton, PrimaryButton, IconButton, ButtonInner, ChopLogicIcon, Input, Label } from '@atoms';
import ErrorMessage from '@atoms/input-elements/error-message/ErrorMessage';
import styles from './InputElements.module.scss';

export const InputElementsExample: React.FC<ChopLogicLoaderProps> = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.element}>
        <PrimaryButton>Click on me</PrimaryButton>
        <span className={styles.label}>Primary Button</span>
      </div>
      <div className={styles.element}>
        <SecondaryButton>Click on me</SecondaryButton>
        <span className={styles.label}>Secondary Button</span>
      </div>
      <div className={styles.element}>
        <IconButton>
          <ChopLogicIcon name={ChopLogicIconName.Graduate} />
        </IconButton>
        <span className={styles.label}>Icon Button</span>
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
