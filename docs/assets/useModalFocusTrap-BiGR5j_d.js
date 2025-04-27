import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-CB3_FCD4.js";import{M as i}from"./index-D130hB5o.js";import{U as r}from"./useModalFocusTrap.stories-COu4ZojT.js";import"./index-MPVjHJeJ.js";import"./iframe-7UPhmzZr.js";import"./index-BRyrJLGJ.js";import"./index-Bzm33-PM.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./Alert-bvtI3V7V.js";import"./Label-B75NJM6h.js";import"./index-zGLxtP0c.js";import"./themes-BnN1RKU4.js";import"./Checkbox-DoztlOC1.js";import"./index-_kABAdFM.js";import"./MultiSelect-IcXFxGUi.js";import"./Select.styled-Bqw1G2IM.js";import"./index-CpaRx7Lw.js";import"./index-Gh7Dkaqy.js";import"./NumericInput-Jd9ns80o.js";import"./Select-BuFIX2KM.js";import"./TextInput-Bednbm_P.js";import"./index-ChYqgHqj.js";import"./index-DpfPhAHR.js";import"./index-GgB_X92Z.js";import"./index-BtTB3eTL.js";import"./ExampleDivContainer.styled-D0iJ0lP_.js";function t(o){const n={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:r,title:"Hooks/useModalFocusTrap"}),`
`,e.jsx(n.h1,{id:"usemodalfocustrap",children:"useModalFocusTrap"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useModalFocusTrap"})," hook ensures that focus is trapped within an open modal window, preventing the focus from moving outside of the modal."]}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React, { useRef, useState } from 'react';
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
`,e.jsx(n.h3,{id:"params",children:"Params"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"modalRef"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"React.RefObject<HTMLDivElement>"})]}),`
`,e.jsx(n.li,{children:"Description: A ref to the modal element that will be used to trap the focus within."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"isOpened"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"boolean"})]}),`
`,e.jsx(n.li,{children:"Description: A boolean indicating whether the modal is opened or not."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"returns",children:"Returns"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"void"})}),`
`]})]})}function S(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{S as default};
