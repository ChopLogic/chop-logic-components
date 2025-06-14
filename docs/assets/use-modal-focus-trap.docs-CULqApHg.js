import{j as e}from"./iframe-C3nnaSfA.js";import{useMDXComponents as i}from"./index-CLU9rmCe.js";import{M as r}from"./blocks-ByoFTpja.js";import{S as s}from"./use-modal-focus-trap.stories-B1BSMD-H.js";import"./index-DvEBFsL5.js";import"./index-CEakiLVs.js";import"./Button-DNPweYWQ.js";import"./Input-BHIenv_q.js";import"./use-click-outside-D7yaXWQH.js";import"./use-key-press-C9iHSrXH.js";import"./use-tooltip-position-BG-dpZMc.js";import"./use-container-dimensions-D1IAgZBx.js";import"./use-window-dimensions-BO7pOUZS.js";import"./get-class-name-CHDn80c0.js";import"./Icon-BBWlz8VR.js";import"./Loader-C-BUGyvV.js";import"./Portal-DRzz8wUD.js";import"./Container.module-B-gpr46f.js";import"./use-modal-focus-trap-CeMb6sc0.js";import"./Alert-DSv9-R1P.js";import"./Checkbox-DROs7y0z.js";import"./use-reset-form-input-BoFkPjiQ.js";import"./MultiSelect-C4Z7PTl3.js";import"./Select.module-4lHQ571_.js";import"./NumericInput-B7i0SsAs.js";import"./Select-QXfLJeq0.js";import"./TextInput-C-GqJlLx.js";function t(o){const n={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:s,title:"Hooks/useModalFocusTrap"}),`
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
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"modalRef"})}),`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"React.RefObject<HTMLDivElement>"})]}),`
`,e.jsx(n.li,{children:"Description: A ref to the modal element that will be used to trap the focus within."}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"isOpened"})}),`
`,e.jsxs(n.li,{children:["Type: ",e.jsx(n.code,{children:"boolean"})]}),`
`,e.jsx(n.li,{children:"Description: A boolean indicating whether the modal is opened or not."}),`
`]}),`
`,e.jsx(n.h3,{id:"returns",children:"Returns"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"void"})}),`
`]})]})}function H(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{H as default};
