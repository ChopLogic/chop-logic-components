import { ChopLogicSVGElementProps } from '@models';

function ErrorIcon({ title, ...rest }: ChopLogicSVGElementProps) {
  return (
    <svg viewBox='0 0 24 24' fill='currentColor' height='1em' width='1em' role='img' {...rest}>
      {title && <title>{title}</title>}
      <path d='M11 7h2v7h-2zm0 8h2v2h-2z' />
      <path d='M21.707 7.293l-5-5A.996.996 0 0016 2H8a.996.996 0 00-.707.293l-5 5A.996.996 0 002 8v8c0 .266.105.52.293.707l5 5A.996.996 0 008 22h8c.266 0 .52-.105.707-.293l5-5A.996.996 0 0022 16V8a.996.996 0 00-.293-.707zM20 15.586L15.586 20H8.414L4 15.586V8.414L8.414 4h7.172L20 8.414v7.172z' />
    </svg>
  );
}

export default ErrorIcon;
