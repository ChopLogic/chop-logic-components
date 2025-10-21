import type { ChopLogicSVGElementProps } from '@models';

function ArrowUpIcon({ title, ...rest }: Readonly<ChopLogicSVGElementProps>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...rest}
    >
      {title && <title>{title}</title>}
      <path d="M3 19h18a1.002 1.002 0 00.823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 003 19zm9-12.243L19.092 17H4.908L12 6.757z" />
    </svg>
  );
}

export default ArrowUpIcon;
