import{j as e}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as i}from"./index-DXRrZdNQ.js";import{M as r}from"./index-Hm0oqfFC.js";import{U as s}from"./useModalFocusTrap.stories-DOkcgnwy.js";import"./index-B_nTefMF.js";import"./iframe-D7y9cp_r.js";import"./index-rrMuti2j.js";import"./index-DUhdrOyO.js";import"./index-Brs1icLk.js";import"./index-ogSvIofg.js";import"./Alert-DMyXkc2m.js";import"./Label-iILYjsvu.js";import"./index-zvdF3J3f.js";import"./themes-BnN1RKU4.js";import"./Checkbox-CjX9AVlT.js";import"./CheckboxCheckedIcon-BAzr5VRs.js";import"./CheckboxUncheckedIcon-CMpqfROB.js";import"./index-CKFmP5XW.js";import"./MultiSelect-BO55OBsP.js";import"./Select.styled-1lhBA4mq.js";import"./index-BP0Kj9GW.js";import"./index-X6NplXQr.js";import"./ArrowDownIcon-9UPYAteJ.js";import"./ArrowUpIcon-D-lXvPOI.js";import"./NumericInput-psG3T8RU.js";import"./Select-pOqn0OqM.js";import"./CheckMarkIcon-w6yvoLUx.js";import"./TextInput-CJ7BedVC.js";import"./index-Da_tQ3Xi.js";import"./ErrorIcon-C44N34Yw.js";import"./HelpIcon-DgpPKFlH.js";import"./InfoIcon-B4hFJLBr.js";import"./WarningIcon-DiWNQ3Lw.js";import"./index-DplEX_gw.js";import"./index-DfsBjX5Y.js";import"./index-7IJ2GIBa.js";import"./ExampleDivContainer.styled-CBfZBFON.js";function t(o){const n={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:s,title:"Hooks/useModalFocusTrap"}),`
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
`]})]})}function B(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{B as default};
