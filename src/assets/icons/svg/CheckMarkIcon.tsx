import { ChopLogicSVGElementProps } from '@models';

function CheckMarkIcon({ title, ...rest }: Readonly<ChopLogicSVGElementProps>) {
  return (
    <svg viewBox='0 0 512 512' fill='currentColor' height='1em' width='1em' role='img' {...rest}>
      {title && <title>{title}</title>}
      <path d='M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z' />
    </svg>
  );
}

export default CheckMarkIcon;
