import{j as e}from"./iframe-CrArNGRw.js";import{useMDXComponents as r}from"./index-BSFtI4hN.js";import{M as s}from"./blocks-Bk_K6NSa.js";import{S as i}from"./use-modal-focus-trap.stories-dwX6BYLI.js";import"./index-B4hisE-5.js";import"./index-BU1teVQ0.js";import"./Button-CxK7O7_f.js";import"./Header-B5vN0EW1.js";import"./get-class-name-CHDn80c0.js";import"./Icon-DIoQVp2Y.js";import"./Loader-BNVb9kEc.js";import"./use-click-outside-BTqyhR4p.js";import"./use-key-press-C4UT8Udw.js";import"./use-tooltip-position-m2XZZY1W.js";import"./use-container-dimensions-CPlJeG3S.js";import"./use-window-dimensions-CxUo9BCs.js";import"./Portal-Ew3E3LJ6.js";import"./Container.module-B8PmPZGi.js";import"./use-modal-focus-trap-svDFm5AZ.js";import"./Checkbox-CzF6Y5Op.js";import"./use-reset-form-input-8DRyh_nF.js";import"./MultiSelect-CrfVaaUF.js";import"./Select.module-DHd5GItA.js";import"./NumericInput-D25HSE1Q.js";import"./Select-BqR4HHLk.js";import"./TextInput-D0TrkhU5.js";function o(n){const t={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:i,title:"Hooks/useModalFocusTrap"}),`
`,e.jsx(t.h1,{id:"usemodalfocustrap",children:"useModalFocusTrap"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"useModalFocusTrap"})," hook ensures that focus is trapped within an open modal window, preventing the focus from moving outside of the modal."]}),`
`,e.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import React, { useRef, useState } from 'react';
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
`,e.jsx(t.h3,{id:"params",children:"Params"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Param"}),e.jsx(t.th,{children:"Type"}),e.jsx(t.th,{children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"modalRef"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"React.RefObject<HTMLElement>"})}),e.jsx(t.td,{children:"A ref to the modal element that will be used to trap the focus within."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"isOpened"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{children:"A boolean indicating whether the modal is opened or not."})]})]})]}),`
`,e.jsx(t.h3,{id:"returns",children:"Returns"}),`
`,e.jsx(t.p,{children:e.jsx(t.code,{children:"void"})})]})}function S(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{S as default};
