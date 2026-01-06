import type { ChopLogicSVGElementProps } from '@types';

function ChevronRightIcon({ title, ...rest }: Readonly<ChopLogicSVGElementProps>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      aria-hidden="true"
      {...rest}
    >
      {title && <title>{title}</title>}
      <path
        fillRule="evenodd"
        d="M6.776 1.553a.5.5 0 01.671.223l3 6a.5.5 0 010 .448l-3 6a.5.5 0 11-.894-.448L9.44 8 6.553 2.224a.5.5 0 01.223-.671z"
      />
    </svg>
  );
}

export default ChevronRightIcon;
