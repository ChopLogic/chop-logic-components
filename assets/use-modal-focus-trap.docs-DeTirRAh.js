var c=Object.defineProperty,p=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var d=(n,e,o)=>e in n?c(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,r=(n,e)=>{for(var o in e||(e={}))m.call(e,o)&&d(n,o,e[o]);if(s)for(var o of s(e))u.call(e,o)&&d(n,o,e[o]);return n},i=(n,e)=>p(n,h(e));import{j as t}from"./iframe-DldSfwU-.js";import{useMDXComponents as a}from"./index-DelgR-sQ.js";import{M as x}from"./blocks-zF-hAATi.js";import{S as j}from"./use-modal-focus-trap.stories-tX-MB2XX.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DFfcEqSA.js";import"./index-xpI64LTH.js";import"./Button-Cg5zs565.js";import"./Icon-C2ayUpEw.js";import"./ArrowUpIcon-D0Ja-nwN.js";import"./CheckboxUncheckedIcon-CpVp8Q2V.js";import"./CheckMarkIcon-2AL8oS8v.js";import"./get-class-name-CHDn80c0.js";import"./Portal-cejb6-7e.js";import"./use-click-outside-CeFGhHVU.js";import"./use-element-ids-DZYbu-Ny.js";import"./use-key-press-Bs6P8e37.js";import"./use-tooltip-position-BBraNApr.js";import"./use-container-dimensions-CMWtVfY-.js";import"./use-window-dimensions-OR3ePc-x.js";import"./Container.module-DIM0iUPi.js";import"./use-modal-focus-trap-DE_ZqbnO.js";function l(n){const e=r(r({code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr"},a()),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(x,{of:j,title:"Hooks/useModalFocusTrap"}),`
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
          <input type='text' placeholder='Focusable Input' />
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
`,t.jsx(e.p,{children:t.jsx(e.code,{children:"void"})})]})}function N(n={}){const{wrapper:e}=r(r({},a()),n.components);return e?t.jsx(e,i(r({},n),{children:t.jsx(l,r({},n))})):l(n)}export{N as default};
