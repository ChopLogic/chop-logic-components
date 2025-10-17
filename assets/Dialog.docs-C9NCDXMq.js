var d=Object.defineProperty,h=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var s=(i,n,o)=>n in i?d(i,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[n]=o,r=(i,n)=>{for(var o in n||(n={}))m.call(n,o)&&s(i,o,n[o]);if(l)for(var o of l(n))x.call(n,o)&&s(i,o,n[o]);return i},t=(i,n)=>h(i,p(n));import{j as e}from"./iframe-BQgxzBO6.js";import{useMDXComponents as a}from"./index-BzM5vXoH.js";import{M as j,b as u}from"./blocks-DA9LG0YA.js";import{D as g}from"./Dialog.stories-CAzk9pkm.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D1-RhH5Y.js";import"./index-D-7EMssw.js";import"./Icon-dWZyNSFh.js";import"./get-class-name-CHDn80c0.js";import"./Button-CBLKkllL.js";import"./Portal-BRRhdc0F.js";import"./use-click-outside-FSTjnhKO.js";import"./use-element-ids-DOc4TUoN.js";import"./use-key-press-CfQ1dAkf.js";import"./use-tooltip-position-B3LSiz5Z.js";import"./use-container-dimensions-DVOvQd8M.js";import"./use-window-dimensions-BK1woJ1I.js";import"./Dialog-CnzvBM8R.js";import"./Header-CV9BDMrO.js";import"./use-is-mounted-BC4PYtB0.js";import"./use-modal-focus-trap-BFFpP8cf.js";function c(i){const n=r(r({code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul"},a()),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:g,title:"Dialog"}),`
`,e.jsx(n.h1,{id:"dialog",children:"Dialog"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Dialog"})," allows you to render a pop-up window with any content. The dialog appearance trigger can be a button or any event on the page. If there are several dialogs, they will appear on top of each other in the order they are called. When adding a dialog, you must think through the conditions for opening and closing it, so props ",e.jsx(n.code,{children:"isOpened"})," and ",e.jsx(n.code,{children:"onClose"})," are mandatory."]}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Dialog from 'chop-logic-components';

const ConfirmationDialog = ({ isOpen, onClose }) => {
  return (
    <Dialog
      isOpened={isOpen}
      onClose={onClose}
      title="Confirm Action"
    >
      <p>Are you sure you want to perform this action?</p>
      <div className="dialog-actions">
        <button onClick={onClose}>Cancel</button>
        <button onClick={handleConfirm}>Confirm</button>
      </div>
    </Dialog>
  );
};
`})}),`
`,e.jsx(n.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Focus Management"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Focus is trapped within the dialog when open"}),`
`,e.jsx(n.li,{children:"Focus returns to the triggering element when closed"}),`
`,e.jsx(n.li,{children:"Close button is keyboard accessible"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Screen Readers"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Announces dialog title when opened"}),`
`,e.jsx(n.li,{children:'Announces role="dialog" and aria-modal="true"'}),`
`,e.jsx(n.li,{children:"Provides clear close action"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Keyboard Navigation"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Escape key closes dialog"}),`
`,e.jsx(n.li,{children:"Tab cycles through focusable elements"}),`
`,e.jsx(n.li,{children:"Shift+Tab reverses focus order"}),`
`]}),`
`,e.jsx(n.h3,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Content Structure"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Keep titles concise"}),`
`,e.jsx(n.li,{children:"Organize content logically"}),`
`,e.jsx(n.li,{children:"Place primary actions on the right"}),`
`,e.jsx(n.li,{children:"Include a visible close button"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Behavior"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Close on overlay click (optional)"}),`
`,e.jsx(n.li,{children:"Prevent body scroll when open"}),`
`,e.jsx(n.li,{children:"Consider stacking order for multiple dialogs"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Performance"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Load heavy content dynamically"}),`
`,e.jsx(n.li,{children:"Consider virtualization for long content"}),`
`,e.jsx(n.li,{children:"Memoize dialog contents when appropriate"}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(u,{})]})}function L(i={}){const{wrapper:n}=r(r({},a()),i.components);return n?e.jsx(n,t(r({},i),{children:e.jsx(c,r({},i))})):c(i)}export{L as default};
