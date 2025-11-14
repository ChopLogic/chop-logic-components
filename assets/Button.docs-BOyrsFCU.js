var m=Object.defineProperty,p=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var r=(e,n,i)=>n in e?m(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,o=(e,n)=>{for(var i in n||(n={}))h.call(n,i)&&r(e,i,n[i]);if(s)for(var i of s(n))u.call(n,i)&&r(e,i,n[i]);return e},l=(e,n)=>p(e,d(n));import{j as t}from"./iframe-31bCIIM-.js";import{useMDXComponents as a}from"./index-vnX_0a_R.js";import{M as x,b as j}from"./WithTooltip-SK46ZJ2J-OhzgVWxi.js";import{B as b}from"./Button.stories-DvFsmhUq.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DOxyWH1q.js";import"./index-DT11nKtD.js";import"./Button-CXfa96Wd.js";import"./Icon-6YXdsa9S.js";import"./get-class-name-BY88G7uf.js";import"./Portal-CMw-vLpD.js";import"./use-click-outside-CQLMYb8q.js";import"./use-element-ids-1s10h2JT.js";import"./use-key-press-CntNC4so.js";import"./use-tooltip-position-CVK-av31.js";import"./use-container-dimensions-DQi1v_pT.js";function c(e){const n=o(o({code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul"},a()),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(x,{of:b,title:"Button"}),`
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
    <Button view={ButtonView.Icon} icon={IconName.Settings} label="Settings" />
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
`,t.jsx(j,{})]})}function U(e={}){const{wrapper:n}=o(o({},a()),e.components);return n?t.jsx(n,l(o({},e),{children:t.jsx(c,o({},e))})):c(e)}export{U as default};
