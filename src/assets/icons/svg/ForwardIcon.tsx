import type { ChopLogicSVGElementProps } from '@types';

function ForwardIcon({ title, ...rest }: Readonly<ChopLogicSVGElementProps>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em"
      aria-hidden="true"
      {...rest}
    >
      {title && <title>{title}</title>}
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={48}
        d="M184 112l144 144-144 144"
      />
    </svg>
  );
}

export default ForwardIcon;
