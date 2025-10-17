var c=Object.defineProperty,h=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var d=(n,e,o)=>e in n?c(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,s=(n,e)=>{for(var o in e||(e={}))m.call(e,o)&&d(n,o,e[o]);if(r)for(var o of r(e))u.call(e,o)&&d(n,o,e[o]);return n},i=(n,e)=>h(n,p(e));import{j as t}from"./iframe-BQgxzBO6.js";import{useMDXComponents as a}from"./index-BzM5vXoH.js";import{M as x}from"./blocks-DA9LG0YA.js";import{S as j}from"./use-modal-focus-trap.stories-CMktsJ3t.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D1-RhH5Y.js";import"./index-D-7EMssw.js";import"./Button-CBLKkllL.js";import"./Icon-dWZyNSFh.js";import"./get-class-name-CHDn80c0.js";import"./Portal-BRRhdc0F.js";import"./use-click-outside-FSTjnhKO.js";import"./use-element-ids-DOc4TUoN.js";import"./use-key-press-CfQ1dAkf.js";import"./use-tooltip-position-B3LSiz5Z.js";import"./use-container-dimensions-DVOvQd8M.js";import"./use-window-dimensions-BK1woJ1I.js";import"./Container.module-DIM0iUPi.js";import"./use-modal-focus-trap-BFFpP8cf.js";function l(n){const e=s(s({code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr"},a()),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(x,{of:j,title:"Hooks/useModalFocusTrap"}),`
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
`,t.jsx(e.p,{children:t.jsx(e.code,{children:"void"})})]})}function A(n={}){const{wrapper:e}=s(s({},a()),n.components);return e?t.jsx(e,i(s({},n),{children:t.jsx(l,s({},n))})):l(n)}export{A as default};
