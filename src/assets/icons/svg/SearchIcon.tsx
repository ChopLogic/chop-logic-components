import { ChopLogicSVGElementProps } from '@models';

function SearchIcon({ title, ...rest }: Readonly<ChopLogicSVGElementProps>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='1em' height='1em' {...rest}>
      {title && <title>{title}</title>}
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M15.553 15.553a7.06 7.06 0 1 0-9.985-9.985a7.06 7.06 0 0 0 9.985 9.985m0 0L20 20'
      ></path>
    </svg>
  );
}

export default SearchIcon;
