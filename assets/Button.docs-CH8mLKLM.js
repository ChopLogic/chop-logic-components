var m=Object.defineProperty,p=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var r=(e,n,i)=>n in e?m(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,o=(e,n)=>{for(var i in n||(n={}))h.call(n,i)&&r(e,i,n[i]);if(s)for(var i of s(n))u.call(n,i)&&r(e,i,n[i]);return e},l=(e,n)=>p(e,d(n));import{j as t}from"./iframe-hahURQ28.js";import{useMDXComponents as a}from"./index-eCueArxk.js";import{M as x,b as j}from"./blocks-DP9Zug9A.js";import{B as b}from"./Button.stories-DgebEQJ9.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cj3JMFjo.js";import"./index-B7gScCbj.js";import"./Button-3ebUih5n.js";import"./Icon-CYZu_F5m.js";import"./get-class-name-CHDn80c0.js";import"./Portal-BCvGIHbM.js";import"./use-click-outside-DwqNkqzJ.js";import"./use-element-ids-DEp1f2qo.js";import"./use-key-press-BNGOKtdQ.js";import"./use-tooltip-position-BrTf23xx.js";import"./use-container-dimensions-C0aFU8IW.js";import"./use-window-dimensions-CKk6BZV7.js";function c(e){const n=o(o({code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul"},a()),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(x,{of:b,title:"Button"}),`
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
`,t.jsx(j,{})]})}function V(e={}){const{wrapper:n}=o(o({},a()),e.components);return n?t.jsx(n,l(o({},e),{children:t.jsx(c,o({},e))})):c(e)}export{V as default};
