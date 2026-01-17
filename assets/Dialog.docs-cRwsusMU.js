var d=Object.defineProperty,h=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var l=(i,n,o)=>n in i?d(i,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[n]=o,r=(i,n)=>{for(var o in n||(n={}))m.call(n,o)&&l(i,o,n[o]);if(t)for(var o of t(n))x.call(n,o)&&l(i,o,n[o]);return i},s=(i,n)=>h(i,p(n));import{j as e}from"./iframe-ByKzMmaK.js";import{useMDXComponents as a}from"./index-DeYdrbWI.js";import{M as j,b as u}from"./blocks-Cunk30eN.js";import{D as g}from"./Dialog.stories-D3YZPpmK.js";import"./preload-helper-BDBacUwf.js";import"./index-Bb97ILPF.js";import"./index-DUc2eTa5.js";import"./Icon-BZD9s1Z_.js";import"./get-class-name-BY88G7uf.js";import"./Button-Bdkp_iJJ.js";import"./Portal-DBIu6jmP.js";import"./use-click-outside-DREiv8zp.js";import"./use-element-ids-CshNHWkw.js";import"./use-key-press-B_vXJT53.js";import"./use-tooltip-position-DVwfAD7L.js";import"./use-container-dimensions-BqWRrAUW.js";import"./Dialog-DgOhRgE8.js";import"./Header-CkmjCWZI.js";import"./use-is-mounted-Dwmxtqmx.js";import"./use-modal-focus-trap-BZHUkIpX.js";function c(i){const n=r(r({code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul"},a()),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:g,title:"Dialog"}),`
`,e.jsx(n.h1,{id:"dialog",children:"Dialog"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Dialog"})," allows you to render a responsive pop-up window with any content. The dialog appearance trigger can be a button or any event on the page. If there are several dialogs, they will appear on top of each other in the order they are called. When adding a dialog, you must think through the conditions for opening and closing it, so props ",e.jsx(n.code,{children:"isOpened"})," and ",e.jsx(n.code,{children:"onClose"})," are mandatory."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Dialog from 'chop-logic-components';

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
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Content Structure"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Keep titles concise"}),`
`,e.jsx(n.li,{children:"Organize content logically"}),`
`,e.jsx(n.li,{children:"Place primary actions on the right"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"User Experience"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Avoid overwhelming users with too much information"}),`
`,e.jsx(n.li,{children:"Use dialogs for critical interactions"}),`
`,e.jsx(n.li,{children:"Provide clear exit options"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Performance"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Load heavy content dynamically"}),`
`,e.jsx(n.li,{children:"Consider virtualization for long content"}),`
`,e.jsx(n.li,{children:"Memoize dialog contents when appropriate"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Accessibility"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Focus is trapped within the dialog when open"}),`
`,e.jsx(n.li,{children:"Escape key closes dialog"}),`
`,e.jsx(n.li,{children:'Announces role="dialog" and aria-modal="true"'}),`
`,e.jsx(n.li,{children:"Test with screen readers"}),`
`,e.jsx(n.li,{children:"Ensure keyboard-only navigation"}),`
`,e.jsx(n.li,{children:"Use ARIA attributes appropriately"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(u,{})]})}function R(i={}){const{wrapper:n}=r(r({},a()),i.components);return n?e.jsx(n,s(r({},i),{children:e.jsx(c,r({},i))})):c(i)}export{R as default};
