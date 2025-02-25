import { ChopLogicSVGElementProps } from '@models';

function CheckboxCheckedIcon({ title, ...rest }: ChopLogicSVGElementProps) {
  return (
    <svg viewBox='0 0 16 16' fill='currentColor' height='1em' width='1em' role='img' {...rest}>
      {title && <title>{title}</title>}
      <path
        fill='currentColor'
        d='M14 0H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM7 12.414L3.293 8.707l1.414-1.414L7 9.586l4.793-4.793 1.414 1.414L7 12.414z'
      />
    </svg>
  );
}

export default CheckboxCheckedIcon;
