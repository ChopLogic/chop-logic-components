import{j as e}from"./iframe-BE0m_rxZ.js";import{useMDXComponents as s}from"./index-DN6OSM-t.js";import{M as r}from"./blocks-PHoQ31L0.js";import{S as d}from"./use-modal-focus-trap.stories-BoRdPiFp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-VMfd0C6x.js";import"./index-BvXq4JMu.js";/* empty css                  */import"./Button-Dr_tTr2y.js";import"./get-class-name-BY88G7uf.js";import"./Portal-BtVHOS3f.js";import"./use-click-outside-BwpNYTT7.js";import"./use-element-ids-Ckr366yW.js";import"./use-key-press-Clc6TnDG.js";import"./use-tooltip-position-O-ml2ORG.js";import"./use-container-dimensions-Bessy-1Z.js";import"./Icon-B4lOYJs1.js";import"./use-modal-focus-trap-DZXuE8h-.js";function o(n){const t={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d,title:"Hooks/useModalFocusTrap"}),`
`,e.jsx(t.h1,{id:"usemodalfocustrap",children:"useModalFocusTrap"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"useModalFocusTrap"})," hook ensures that focus is trapped within an open modal window, preventing the focus from moving outside of the modal."]}),`
`,e.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import React, { useRef, useState } from "react";
import { useModalFocusTrap } from "chop-logic-components";

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
`,e.jsx(t.h3,{id:"params",children:"Params"}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Param"}),e.jsx(t.th,{children:"Type"}),e.jsx(t.th,{children:"Description"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"modalRef"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"React.RefObject<HTMLElement>"})}),e.jsx(t.td,{children:"A ref to the modal element that will be used to trap the focus within."})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:e.jsx(t.strong,{children:"isOpened"})}),e.jsx(t.td,{children:e.jsx(t.code,{children:"boolean"})}),e.jsx(t.td,{children:"A boolean indicating whether the modal is opened or not."})]})]})]}),`
`,e.jsx(t.h3,{id:"returns",children:"Returns"}),`
`,e.jsx(t.p,{children:e.jsx(t.code,{children:"void"})})]})}function w(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{w as default};
