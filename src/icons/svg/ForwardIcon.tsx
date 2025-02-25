import { ChopLogicSVGElementProps } from '@models';

function ForwardIcon({ title, ...rest }: ChopLogicSVGElementProps) {
  return (
    <svg viewBox='0 0 512 512' fill='currentColor' height='1em' width='1em' role='img' {...rest}>
      {title && <title>{title}</title>}
      <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={48} d='M184 112l144 144-144 144' />
    </svg>
  );
}

export default ForwardIcon;
