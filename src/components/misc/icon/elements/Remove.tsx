import React from 'react';

function RemoveIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 64 64' fill='currentColor' height='1em' width='1em' {...props}>
      <path
        fill='none'
        stroke='currentColor'
        strokeMiterlimit={10}
        strokeWidth={2}
        d='M18.947 17.153l26.098 25.903M19.045 43.153l25.902-26.097'
      />
    </svg>
  );
}

export default RemoveIcon;
