import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-C1GDlPvu.js";import{i as n,r}from"./react-CmPZMBqh.js";import{a as i,d as a,u as o}from"./blocks-13lF6dBG.js";import{n as s,t as c}from"./Dialog.stories-Cakwr-JT.js";function l(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o,{of:c,title:`Dialog`}),`
`,(0,d.jsx)(t.h1,{id:`dialog`,children:`Dialog`}),`
`,(0,d.jsxs)(t.p,{children:[`The `,(0,d.jsx)(t.code,{children:`Dialog`}),` allows you to render a responsive pop-up window with any content. The dialog appearance trigger can be a button or any event on the page. If there are several dialogs, they will appear on top of each other in the order they are called. When adding a dialog, you must think through the conditions for opening and closing it, so props `,(0,d.jsx)(t.code,{children:`isOpened`}),` and `,(0,d.jsx)(t.code,{children:`onClose`}),` are mandatory.`]}),`
`,(0,d.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,d.jsxs)(t.p,{children:[`The Dialog supports three display variants controlled by the `,(0,d.jsx)(t.code,{children:`variant`}),` prop:`]}),`
`,(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:`Variant`}),(0,d.jsx)(t.th,{children:`Desktop/Tablet (≥640px)`}),(0,d.jsx)(t.th,{children:`Mobile (<640px)`})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`Default`})}),(0,d.jsx)(t.td,{children:`Centered, content-based size`}),(0,d.jsx)(t.td,{children:`Slides up from bottom, 90% height, full width`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`DrawerRight`})}),(0,d.jsx)(t.td,{children:`Slides from right, 25% width, full height`}),(0,d.jsx)(t.td,{children:`Slides from right, 90% width, full height`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`DrawerLeft`})}),(0,d.jsx)(t.td,{children:`Slides from left, 25% width, full height`}),(0,d.jsx)(t.td,{children:`Slides from left, 90% width, full height`})]})]})]}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.h3,{id:`default-dialog`,children:`Default Dialog`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { Dialog } from "chop-logic-components";

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
`,(0,d.jsx)(t.h3,{id:`drawer-variants`,children:`Drawer Variants`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { Dialog, DialogVariant } from "chop-logic-components";

// Right drawer - slides in from the right edge
const RightDrawer = ({ isOpen, onClose }) => {
  return (
    <Dialog isOpened={isOpen} onClose={onClose} title="Settings" variant={DialogVariant.DrawerRight}>
      <p>Settings panel content...</p>
    </Dialog>
  );
};

// Left drawer - slides in from the left edge
const LeftDrawer = ({ isOpen, onClose }) => {
  return (
    <Dialog isOpened={isOpen} onClose={onClose} title="Navigation" variant={DialogVariant.DrawerLeft}>
      <nav>Navigation menu...</nav>
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
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Variant Selection`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`Use `,(0,d.jsx)(t.code,{children:`Default`}),` for confirmations, alerts, and focused tasks`]}),`
`,(0,d.jsxs)(t.li,{children:[`Use `,(0,d.jsx)(t.code,{children:`DrawerRight`}),` for settings panels, detail views, and property editors`]}),`
`,(0,d.jsxs)(t.li,{children:[`Use `,(0,d.jsx)(t.code,{children:`DrawerLeft`}),` for navigation menus and sidebars`]}),`
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
`,(0,d.jsx)(i,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=t(),r(),a(),s()})))()}f();export{u as default};