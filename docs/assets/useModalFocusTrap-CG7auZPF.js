import{j as e}from"./jsx-runtime-OAISXtky.js";import{useMDXComponents as i}from"./index-DOvxcyG1.js";import{ae as r}from"./index-zkfsCg0O.js";import{U as s}from"./useModalFocusTrap.stories-DQ2_tnZL.js";import"./index-qVDZzPEr.js";import"./iframe-DhY3_iQn.js";import"../sb-preview/runtime.js";import"./index-DzcqJxd1.js";import"./index-D-8MO0q_.js";import"./index-D2o5vtt7.js";import"./index-DrFu-skq.js";import"./Tabs-CZLv0X1q.js";import"./Label-CLTPwdxI.js";import"./index-BT98D5zi.js";import"./themes-BnN1RKU4.js";import"./Checkbox-DgGf2ViF.js";import"./CheckboxCheckedIcon-B0tMICzp.js";import"./CheckboxUncheckedIcon-Di1hGFhe.js";import"./index-bc0GsKql.js";import"./MultiSelect-oZebdWXV.js";import"./Select.styled-BJZBRQF3.js";import"./index-Bg4JDWSn.js";import"./index-BeH7sH-W.js";import"./ArrowDownIcon-CKvzOX2F.js";import"./ArrowUpIcon-B10qXdoa.js";import"./NumericInput-340RyIj6.js";import"./Select-CgDztdXW.js";import"./CheckMarkIcon-BtcQ9zhB.js";import"./TextInput-k1kqE6W_.js";import"./index-7QOc-elU.js";import"./index-hbHCpJbS.js";import"./index-DOKHOwXh.js";import"./index-D9uBcq_H.js";import"./ErrorIcon-D8B-aMuv.js";import"./HelpIcon-2xCcuWCH.js";import"./InfoIcon-DokxbF3b.js";import"./WarningIcon-CeD2ynrn.js";import"./ExampleDivContainer.styled-Dl50VLFd.js";function t(o){const n={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:s,title:"Hooks/useModalFocusTrap"}),`
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
`]})]})}function G(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{G as default};
