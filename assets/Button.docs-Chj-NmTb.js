var m=Object.defineProperty,p=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var r=(e,n,i)=>n in e?m(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,o=(e,n)=>{for(var i in n||(n={}))h.call(n,i)&&r(e,i,n[i]);if(s)for(var i of s(n))u.call(n,i)&&r(e,i,n[i]);return e},l=(e,n)=>p(e,d(n));import{j as t}from"./iframe-DGLPjSHb.js";import{useMDXComponents as a}from"./index-_AjrTGOE.js";import{M as x,b as j}from"./blocks-C-t3sszW.js";import{B as b}from"./Button.stories-CW1t_JmM.js";import"./preload-helper-Dp1pzeXC.js";import"./index-QIYvd6mt.js";import"./index-ZpPSzr_Y.js";import"./Button-Bkbj21Uc.js";import"./Icon-Coy0pRmj.js";import"./get-class-name-CHDn80c0.js";import"./Portal-Dx8aOCbZ.js";import"./use-click-outside-CQdVQ-mQ.js";import"./use-element-ids-CCLjb5t5.js";import"./use-key-press-q-IucPbH.js";import"./use-tooltip-position-DJQ3uCKC.js";import"./use-container-dimensions-DHetTRBL.js";import"./use-window-dimensions-DrC5iAeS.js";function c(e){const n=o(o({code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul"},a()),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(x,{of:b,title:"Button"}),`
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
