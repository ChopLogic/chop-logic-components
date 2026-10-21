import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-UCnVH432.js";import{i as n,r}from"./react-D0KHw-ic.js";import{d as i,u as a}from"./blocks-D1E0A0vz.js";import{n as o,t as s}from"./use-body-scroll-lock.stories-DoChvq4o.js";function c(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a,{of:o,title:`Hooks/useBodyScrollLock`}),`
`,(0,u.jsx)(t.h1,{id:`usebodyscrolllock`,children:`useBodyScrollLock`}),`
`,(0,u.jsxs)(t.p,{children:[`The `,(0,u.jsx)(t.code,{children:`useBodyScrollLock`}),` hook prevents the page body from scrolling when active. This is useful for modal dialogs, full-screen menus, or any overlay that should capture user attention and prevent background scrolling.`]}),`
`,(0,u.jsx)(t.h2,{id:`features`,children:`Features`}),`
`,(0,u.jsxs)(t.ul,{children:[`
`,(0,u.jsxs)(t.li,{children:[`Prevents body scrolling by setting `,(0,u.jsx)(t.code,{children:`overflow: hidden`}),` on the body element`]}),`
`,(0,u.jsx)(t.li,{children:`Preserves and restores scroll position when unlocked`}),`
`,(0,u.jsx)(t.li,{children:`Automatically cleans up on component unmount`}),`
`,(0,u.jsx)(t.li,{children:`Preserves any existing overflow style when restoring`}),`
`]}),`
`,(0,u.jsx)(t.h3,{id:`usage`,children:`Usage`}),`
`,(0,u.jsx)(t.pre,{children:(0,u.jsx)(t.code,{className:`language-tsx`,children:`import React, { useState } from "react";
import { useBodyScrollLock } from "chop-logic-components";

const ExampleModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useBodyScrollLock({ isLocked: isOpen });

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Modal Title</h2>
            <p>The page cannot be scrolled while this modal is open.</p>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExampleModal;
`})}),`
`,(0,u.jsx)(t.h3,{id:`params`,children:`Params`}),`
`,(0,u.jsxs)(t.table,{children:[(0,u.jsx)(t.thead,{children:(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.th,{children:`Param`}),(0,u.jsx)(t.th,{children:`Type`}),(0,u.jsx)(t.th,{children:`Description`})]})}),(0,u.jsx)(t.tbody,{children:(0,u.jsxs)(t.tr,{children:[(0,u.jsx)(t.td,{children:(0,u.jsx)(t.strong,{children:`isLocked`})}),(0,u.jsx)(t.td,{children:(0,u.jsx)(t.code,{children:`boolean`})}),(0,u.jsxs)(t.td,{children:[`When `,(0,u.jsx)(t.code,{children:`true`}),`, prevents body scrolling. When `,(0,u.jsx)(t.code,{children:`false`}),`, allows scrolling.`]})]})})]}),`
`,(0,u.jsx)(t.h3,{id:`returns`,children:`Returns`}),`
`,(0,u.jsx)(t.p,{children:(0,u.jsx)(t.code,{children:`void`})}),`
`,(0,u.jsx)(t.h3,{id:`best-practices`,children:`Best Practices`}),`
`,(0,u.jsxs)(t.ol,{children:[`
`,(0,u.jsxs)(t.li,{children:[`
`,(0,u.jsxs)(t.p,{children:[(0,u.jsx)(t.strong,{children:`Use with modals and overlays`}),`: This hook is designed for components that overlay the page content and should prevent interaction with the background.`]}),`
`]}),`
`,(0,u.jsxs)(t.li,{children:[`
`,(0,u.jsxs)(t.p,{children:[(0,u.jsx)(t.strong,{children:`Pair with focus trapping`}),`: For accessible modals, combine this hook with `,(0,u.jsx)(t.code,{children:`useModalFocusTrap`}),` to ensure both scroll and focus are properly managed.`]}),`
`]}),`
`,(0,u.jsxs)(t.li,{children:[`
`,(0,u.jsxs)(t.p,{children:[(0,u.jsx)(t.strong,{children:`Single lock at a time`}),`: Avoid having multiple components trying to lock scroll simultaneously. The hook stores the original overflow value when locking, so nested locks may not restore correctly.`]}),`
`]}),`
`,(0,u.jsxs)(t.li,{children:[`
`,(0,u.jsxs)(t.p,{children:[(0,u.jsx)(t.strong,{children:`Cleanup is automatic`}),`: The hook automatically restores scroll position and overflow style when the component unmounts, so you don't need to handle cleanup manually.`]}),`
`]}),`
`]})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;function d(){return(d=e((()=>{u=t(),r(),i(),s()})))()}d();export{l as default};