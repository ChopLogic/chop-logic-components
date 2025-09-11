var m=Object.defineProperty,p=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var r=(i,n,e)=>n in i?m(i,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[n]=e,o=(i,n)=>{for(var e in n||(n={}))h.call(n,e)&&r(i,e,n[e]);if(s)for(var e of s(n))u.call(n,e)&&r(i,e,n[e]);return i},l=(i,n)=>p(i,d(n));import{j as t}from"./iframe-DldSfwU-.js";import{useMDXComponents as a}from"./index-DelgR-sQ.js";import{M as x,b as j}from"./blocks-zF-hAATi.js";import{B as b}from"./Button.stories-CsfLFDOh.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DFfcEqSA.js";import"./index-xpI64LTH.js";import"./Button-Cg5zs565.js";import"./Icon-C2ayUpEw.js";import"./ArrowUpIcon-D0Ja-nwN.js";import"./CheckboxUncheckedIcon-CpVp8Q2V.js";import"./CheckMarkIcon-2AL8oS8v.js";import"./get-class-name-CHDn80c0.js";import"./Portal-cejb6-7e.js";import"./use-click-outside-CeFGhHVU.js";import"./use-element-ids-DZYbu-Ny.js";import"./use-key-press-Bs6P8e37.js";import"./use-tooltip-position-BBraNApr.js";import"./use-container-dimensions-CMWtVfY-.js";import"./use-window-dimensions-OR3ePc-x.js";function c(i){const n=o(o({code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul"},a()),i.components);return t.jsxs(t.Fragment,{children:[t.jsx(x,{of:b,title:"Button"}),`
`,t.jsx(n.h1,{id:"button",children:"Button"}),`
`,t.jsxs(n.p,{children:["The ",t.jsx(n.code,{children:"Button"})," component provides a flexible, accessible button with multiple visual styles and configurations. It supports text, icons, tooltips, and various interaction states."]}),`
`,t.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-tsx",children:`import Button, { ButtonView, IconName } from 'chop-logic-components';

const ExampleForm = () => (
  <form>
    <Button
      view={ButtonView.Primary}
      text="Submit"
      icon={IconName.Check}
      onClick={() => console.log('Clicked!')}
    />
    <Button
      view={ButtonView.Icon}
      icon={IconName.Settings}
      label="Settings"
    />
  </form>
);
`})}),`
`,t.jsx(n.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,t.jsxs(n.ol,{children:[`
`,t.jsx(n.li,{children:"Automatic ARIA labeling"}),`
`,t.jsx(n.li,{children:"Keyboard focusable"}),`
`,t.jsx(n.li,{children:"Proper disabled state semantics"}),`
`,t.jsx(n.li,{children:"Tooltip integration"}),`
`,t.jsx(n.li,{children:"Screen reader support for icon buttons"}),`
`]}),`
`,t.jsx(n.h3,{id:"best-practices",children:"Best Practices"}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsx(n.li,{children:"Always provide labels for icon-only buttons"}),`
`,t.jsx(n.li,{children:"Use primary buttons sparingly for the most important actions"}),`
`,t.jsx(n.li,{children:"Combine icons with text when space allows"}),`
`,t.jsx(n.li,{children:"Consider button hierarchy in forms and dialogs"}),`
`,t.jsx(n.li,{children:"Test keyboard navigation for all interactive elements"}),`
`,t.jsx(n.li,{children:"Use appropriate button types (submit/reset/button) in forms"}),`
`,t.jsx(n.li,{children:"Respect disabled states without removing interactive elements"}),`
`]}),`
`,t.jsx(n.h2,{id:"props",children:"Props"}),`
`,t.jsx(j,{})]})}function F(i={}){const{wrapper:n}=o(o({},a()),i.components);return n?t.jsx(n,l(o({},i),{children:t.jsx(c,o({},i))})):c(i)}export{F as default};
