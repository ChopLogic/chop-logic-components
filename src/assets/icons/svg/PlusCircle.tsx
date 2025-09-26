import { ChopLogicSVGElementProps } from '@models';

function PlusCircleIcon({ title, ...rest }: Readonly<ChopLogicSVGElementProps>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='1em' height='1em' {...rest}>
      {title && <title>{title}</title>}
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M12 6.722v10.556M17.278 12H6.722M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19'
      ></path>
    </svg>
  );
}

export default PlusCircleIcon;
