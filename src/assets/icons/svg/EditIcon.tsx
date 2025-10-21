import type { ChopLogicSVGElementProps } from '@models';

function EditIcon({ title, ...rest }: Readonly<ChopLogicSVGElementProps>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" {...rest}>
      {title && <title>{title}</title>}
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3 21h18M12.222 5.828L15.05 3L20 7.95l-2.828 2.828m-4.95-4.95l-5.607 5.607a1 1 0 0 0-.293.707v4.536h4.536a1 1 0 0 0 .707-.293l5.607-5.607m-4.95-4.95l4.95 4.95"
      ></path>
    </svg>
  );
}

export default EditIcon;
