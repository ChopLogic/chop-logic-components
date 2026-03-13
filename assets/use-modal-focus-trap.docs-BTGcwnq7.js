import{n as e}from"./chunk-BneVvdWh.js";import{n as t}from"./iframe-BApIZdni.js";import{r as n}from"./react-BgG3AzCd.js";import{d as r,u as i}from"./blocks-kE0B7DI6.js";import{t as a}from"./mdx-react-shim-DrApaaiq.js";import{n as o,t as s}from"./use-modal-focus-trap.stories-ChXJYAje.js";function c(e){let t={code:`code`,h1:`h1`,h3:`h3`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{of:o,title:`Hooks/useModalFocusTrap`}),`
`,(0,u.jsx)(t.h1,{id:`usemodalfocustrap`,children:`useModalFocusTrap`}),`
`,(0,u.jsxs)(t.p,{children:[`The `,(0,u.jsx)(t.code,{children:`useModalFocusTrap`}),` hook ensures that focus is trapped within an open modal window, preventing the focus from moving outside of the modal.`]}),`
`,(0,u.jsx)(t.h3,{id:`usage`,children:`Usage`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-tsx`,children:`import React, { useRef, useState } from "react";
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
`,(0,u.jsx)(t.h3,{id:`params`,children:`Params`}),`
`,(0,u.jsxs)(t.table,{children:[(0,u.jsx)(t.thead,{children:(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.th,{children:`Param`}),(0,u.jsx)(t.th,{children:`Type`}),(0,u.jsx)(t.th,{children:`Description`})]})}),(0,u.jsxs)(t.tbody,{children:[(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.strong,{children:`modalRef`})}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`React.RefObject<HTMLElement>`})}),(0,u.jsx)(t.td,{children:`A ref to the modal element that will be used to trap the focus within.`})]}),(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.strong,{children:`isOpened`})}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`boolean`})}),(0,u.jsx)(t.td,{children:`A boolean indicating whether the modal is opened or not.`})]})]})]}),`
`,(0,u.jsx)(t.h3,{id:`returns`,children:`Returns`}),`
`,(0,u.jsx)(t.p,{children:(0,u.jsx)(t.code,{children:`void`})})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;e((()=>{u=t(),a(),r(),s()}))();export{l as default};