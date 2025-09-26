import { ChopLogicSVGElementProps } from '@models';

function BackIcon({ title, ...rest }: Readonly<ChopLogicSVGElementProps>) {
  return (
    <svg viewBox='0 0 512 512' fill='currentColor' height='1em' width='1em' {...rest}>
      {title && <title>{title}</title>}
      <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={48} d='M328 112L184 256l144 144' />
    </svg>
  );
}

export default BackIcon;
