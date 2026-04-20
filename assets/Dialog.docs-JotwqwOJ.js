import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-4HHWW5MW.js";import{r as n}from"./react-D-dq-x49.js";import{a as r,d as i,u as a}from"./blocks-B4li4WkW.js";import{t as o}from"./mdx-react-shim-DUEj6aPQ.js";import{n as s,t as c}from"./Dialog.stories-pfxLEl5x.js";function l(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{of:c,title:`Dialog`}),`
`,(0,d.jsx)(t.h1,{id:`dialog`,children:`Dialog`}),`
`,(0,d.jsxs)(t.p,{children:[`The `,(0,d.jsx)(t.code,{children:`Dialog`}),` allows you to render a responsive pop-up window with any content. The dialog appearance trigger can be a button or any event on the page. If there are several dialogs, they will appear on top of each other in the order they are called. When adding a dialog, you must think through the conditions for opening and closing it, so props `,(0,d.jsx)(t.code,{children:`isOpened`}),` and `,(0,d.jsx)(t.code,{children:`onClose`}),` are mandatory.`]}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import Dialog from "chop-logic-components";

const ConfirmationDialog = ({ isOpen, onClose }) => {
  return (
    <Dialog isOpened={isOpen} onClose={onClose} title="Confirm Action">
      <p>Are you sure you want to perform this action?</p>
      <div className="dialog-actions">
        <button onClick={onClose}>Cancel</button>
        <button onClick={handleConfirm}>Confirm</button>
      </div>
    </Dialog>
  );
};
`})}),`
`,(0,d.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Content Structure`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Keep titles concise`}),`
`,(0,d.jsx)(t.li,{children:`Organize content logically`}),`
`,(0,d.jsx)(t.li,{children:`Place primary actions on the right`}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`User Experience`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Avoid overwhelming users with too much information`}),`
`,(0,d.jsx)(t.li,{children:`Use dialogs for critical interactions`}),`
`,(0,d.jsx)(t.li,{children:`Provide clear exit options`}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Performance`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Load heavy content dynamically`}),`
`,(0,d.jsx)(t.li,{children:`Consider virtualization for long content`}),`
`,(0,d.jsx)(t.li,{children:`Memoize dialog contents when appropriate`}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Accessibility`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Focus is trapped within the dialog when open`}),`
`,(0,d.jsx)(t.li,{children:`Escape key closes dialog`}),`
`,(0,d.jsx)(t.li,{children:`Announces role="dialog" and aria-modal="true"`}),`
`,(0,d.jsx)(t.li,{children:`Test with screen readers`}),`
`,(0,d.jsx)(t.li,{children:`Ensure keyboard-only navigation`}),`
`,(0,d.jsx)(t.li,{children:`Use ARIA attributes appropriately`}),`
`]}),`
`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,d.jsx)(r,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),i(),s()}))();export{u as default};