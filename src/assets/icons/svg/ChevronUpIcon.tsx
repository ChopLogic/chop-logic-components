import { ChopLogicSVGElementProps } from '@models';

function ChevronUpIcon({ title, ...rest }: Readonly<ChopLogicSVGElementProps>) {
  return (
    <svg fill='currentColor' viewBox='0 0 16 16' height='1em' width='1em' {...rest}>
      {title && <title>{title}</title>}
      <path fillRule='evenodd' d='M7.776 5.553a.5.5 0 01.448 0l6 3a.5.5 0 11-.448.894L8 6.56 2.224 9.447a.5.5 0 11-.448-.894l6-3z' />
    </svg>
  );
}

export default ChevronUpIcon;
