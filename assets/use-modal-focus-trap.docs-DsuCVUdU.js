import{j as e}from"./iframe-CcStb-xO.js";import{useMDXComponents as r}from"./index-DRR5r8Q4.js";import{M as s}from"./blocks-B97lg12T.js";import{S as i}from"./use-modal-focus-trap.stories-DYtnLios.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DgXRVvnu.js";import"./index-Dv6pZ690.js";import"./Button-BpT_NpT1.js";import"./EditableText-q3k3r0Uc.js";import"./get-class-name-CHDn80c0.js";import"./Header-BiTp834B.js";import"./Icon-wNEFAMcc.js";import"./Loader-BhAQqttu.js";import"./Portal-CahqD_2f.js";import"./use-click-outside-BOHE6JV_.js";import"./use-key-press-BYb-T9_a.js";import"./use-tooltip-position-C46xlrB6.js";import"./use-container-dimensions-CsRqbGnA.js";import"./use-window-dimensions-C6lhjM_W.js";import"./Dropdown-B9vQZ4D_.js";import"./Checkbox-tGBE6wEh.js";import"./use-reset-form-input-BKI7i7oO.js";import"./MultiSelect-Cf-voyBX.js";import"./Select.module-DHd5GItA.js";import"./NumericInput-D8kBOieZ.js";import"./Select-BmZ8RkA4.js";import"./TextInput-B3eC91JC.js";import"./Container.module-DIM0iUPi.js";import"./use-modal-focus-trap-By3LHFgu.js";function o(n){const t={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:i,title:"Hooks/useModalFocusTrap"}),`
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
`,e.jsx(t.p,{children:e.jsx(t.code,{children:"void"})})]})}function X(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{X as default};
