import{j as n}from"./iframe-Doc73XE3.js";import{useMDXComponents as r}from"./index-BeVWJvHh.js";import{M as t,C as l}from"./blocks-B9t17XrR.js";import{D as s}from"./Dialog.stories-7NMrT9iH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ECW4Oirl.js";import"./index-CyugzvtL.js";import"./icon-name-DofyCo9k.js";import"./Button-CDhvcQ58.js";import"./get-class-name-BY88G7uf.js";import"./Portal-ICGrjoGN.js";import"./use-click-outside-B0EspTvx.js";import"./use-element-ids--HzG7Pmw.js";import"./use-key-press-XWebfcyU.js";import"./use-tooltip-position-hOUImksK.js";import"./use-container-dimensions-BWSM9TyR.js";import"./Icon-DTjVTp_9.js";import"./Dialog-BgkM8_dd.js";import"./Header-DoHlOX-u.js";import"./use-is-mounted-BNmBF3cP.js";import"./use-modal-focus-trap-C32zytI3.js";function o(i){const e={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{of:s,title:"Dialog"}),`
`,n.jsx(e.h1,{id:"dialog",children:"Dialog"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"Dialog"})," allows you to render a responsive pop-up window with any content. The dialog appearance trigger can be a button or any event on the page. If there are several dialogs, they will appear on top of each other in the order they are called. When adding a dialog, you must think through the conditions for opening and closing it, so props ",n.jsx(e.code,{children:"isOpened"})," and ",n.jsx(e.code,{children:"onClose"})," are mandatory."]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import Dialog from "chop-logic-components";

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
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Content Structure"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Keep titles concise"}),`
`,n.jsx(e.li,{children:"Organize content logically"}),`
`,n.jsx(e.li,{children:"Place primary actions on the right"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"User Experience"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Avoid overwhelming users with too much information"}),`
`,n.jsx(e.li,{children:"Use dialogs for critical interactions"}),`
`,n.jsx(e.li,{children:"Provide clear exit options"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Performance"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Load heavy content dynamically"}),`
`,n.jsx(e.li,{children:"Consider virtualization for long content"}),`
`,n.jsx(e.li,{children:"Memoize dialog contents when appropriate"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Accessibility"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Focus is trapped within the dialog when open"}),`
`,n.jsx(e.li,{children:"Escape key closes dialog"}),`
`,n.jsx(e.li,{children:'Announces role="dialog" and aria-modal="true"'}),`
`,n.jsx(e.li,{children:"Test with screen readers"}),`
`,n.jsx(e.li,{children:"Ensure keyboard-only navigation"}),`
`,n.jsx(e.li,{children:"Use ARIA attributes appropriately"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(l,{})]})}function P(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(o,{...i})}):o(i)}export{P as default};
