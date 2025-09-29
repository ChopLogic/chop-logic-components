import { ChopLogicSVGElementProps } from '@models';

function QuestionIcon({ title, ...rest }: Readonly<ChopLogicSVGElementProps>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='currentColor' height='1em' width='1em' {...rest}>
      {title && <title>{title}</title>}
      <path fill='none' stroke='currentColor' strokeMiterlimit={10} strokeWidth={32} d='M256 80a176 176 0 10176 176A176 176 0 00256 80z' />
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeMiterlimit={10}
        strokeWidth={28}
        d='M200 202.29s.84-17.5 19.57-32.57C230.68 160.77 244 158.18 256 158c10.93-.14 20.69 1.67 26.53 4.45 10 4.76 29.47 16.38 29.47 41.09 0 26-17 37.81-36.37 50.8S251 281.43 251 296'
      />
      <path d='M270 348 A20 20 0 0 1 250 368 A20 20 0 0 1 230 348 A20 20 0 0 1 270 348 z' />
    </svg>
  );
}

export default QuestionIcon;
