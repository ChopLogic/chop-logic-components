import { Icon } from '@components/atoms';
import { IconName } from '@enums';
import type { FC } from 'react';

export const FallbackImage: FC = () => (
  <div className="cl-image__fallback">
    <Icon name={IconName.Image} className="cl-image__fallback-icon" />
    <span className="cl-image__fallback-text">Image not available</span>
  </div>
);
