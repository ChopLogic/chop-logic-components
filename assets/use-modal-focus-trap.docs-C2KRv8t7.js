var c=Object.defineProperty,h=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var d=(n,e,o)=>e in n?c(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,s=(n,e)=>{for(var o in e||(e={}))m.call(e,o)&&d(n,o,e[o]);if(r)for(var o of r(e))u.call(e,o)&&d(n,o,e[o]);return n},i=(n,e)=>h(n,p(e));import{j as t}from"./iframe-BtTQsrQT.js";import{useMDXComponents as a}from"./index-Ob56quG4.js";import{M as x}from"./blocks-BNpYbts6.js";import{S as j}from"./use-modal-focus-trap.stories-Ba0CKa-Z.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Df9TIXKd.js";import"./index-2Wp6kII8.js";import"./Button-Dw_yUSTK.js";import"./Icon-Z7qWIs8D.js";import"./get-class-name-BY88G7uf.js";import"./Portal-D7yw5jBn.js";import"./use-click-outside-ajOA-CeE.js";import"./use-element-ids-B0aiT4og.js";import"./use-key-press-Cy56pnAc.js";import"./use-tooltip-position-uT-wVpg_.js";import"./use-container-dimensions-DgRoZpRR.js";import"./Container.module-rjw_d_sC.js";import"./use-modal-focus-trap-BKJlvtp1.js";function l(n){const e=s(s({code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr"},a()),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(x,{of:j,title:"Hooks/useModalFocusTrap"}),`
`,t.jsx(e.h1,{id:"usemodalfocustrap",children:"useModalFocusTrap"}),`
`,t.jsxs(e.p,{children:["The ",t.jsx(e.code,{children:"useModalFocusTrap"})," hook ensures that focus is trapped within an open modal window, preventing the focus from moving outside of the modal."]}),`
`,t.jsx(e.h3,{id:"usage",children:"Usage"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import React, { useRef, useState } from 'react';
import { useModalFocusTrap } from 'chop-logic-components';

const ExampleModal = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isOpened, setIsOpened] = useState(false);

  useModalFocusTrap({ modalRef, isOpened });

  return (
    <div>
      <button onClick={() => setIsOpened(true)}>Open Modal</button>
      {isOpened && (
        <div ref={modalRef} tabIndex={-1}>
          <button onClick={() => setIsOpened(false)}>Close Modal</button>
          <input type="text" placeholder="Focusable Input" />
        </div>
      )}
    </div>
  );
};

export default ExampleModal;
`})}),`
`,t.jsx(e.h3,{id:"params",children:"Params"}),`
`,t.jsxs(e.table,{children:[t.jsx(e.thead,{children:t.jsxs(e.tr,{children:[t.jsx(e.th,{children:"Param"}),t.jsx(e.th,{children:"Type"}),t.jsx(e.th,{children:"Description"})]})}),t.jsxs(e.tbody,{children:[t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.strong,{children:"modalRef"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"React.RefObject<HTMLElement>"})}),t.jsx(e.td,{children:"A ref to the modal element that will be used to trap the focus within."})]}),t.jsxs(e.tr,{children:[t.jsx(e.td,{children:t.jsx(e.strong,{children:"isOpened"})}),t.jsx(e.td,{children:t.jsx(e.code,{children:"boolean"})}),t.jsx(e.td,{children:"A boolean indicating whether the modal is opened or not."})]})]})]}),`
`,t.jsx(e.h3,{id:"returns",children:"Returns"}),`
`,t.jsx(e.p,{children:t.jsx(e.code,{children:"void"})})]})}function X(n={}){const{wrapper:e}=s(s({},a()),n.components);return e?t.jsx(e,i(s({},n),{children:t.jsx(l,s({},n))})):l(n)}export{X as default};
