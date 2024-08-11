import React from 'react';

function PasteIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox='0 0 24 24' fill='currentColor' height='1em' width='1em' {...props}>
      <path d='M20 11V5c0-1.103-.897-2-2-2h-3a1 1 0 00-1-1H8a1 1 0 00-1 1H4c-1.103 0-2 .897-2 2v13c0 1.103.897 2 2 2h7c0 1.103.897 2 2 2h7c1.103 0 2-.897 2-2v-7c0-1.103-.897-2-2-2zm-9 2v5H4V5h3v2h8V5h3v6h-5c-1.103 0-2 .897-2 2zm2 7v-7h7l.001 7H13z' />
    </svg>
  );
}

export default PasteIcon;
