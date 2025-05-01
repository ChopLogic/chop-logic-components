import { ChopLogicSVGElementProps } from '@models';

function ChevronLeftIcon({ title, ...rest }: ChopLogicSVGElementProps) {
  return (
    <svg fill='currentColor' viewBox='0 0 16 16' height='1em' width='1em' role='img' {...rest}>
      {title && <title>{title}</title>}
      <path
        fillRule='evenodd'
        d='M9.224 1.553a.5.5 0 01.223.67L6.56 8l2.888 5.776a.5.5 0 11-.894.448l-3-6a.5.5 0 010-.448l3-6a.5.5 0 01.67-.223z'
      />
    </svg>
  );
}

export default ChevronLeftIcon;
