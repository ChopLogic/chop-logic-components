var a=Object.defineProperty,h=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var o=(i,n,s)=>n in i?a(i,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[n]=s,r=(i,n)=>{for(var s in n||(n={}))p.call(n,s)&&o(i,s,n[s]);if(l)for(var s of l(n))x.call(n,s)&&o(i,s,n[s]);return i},t=(i,n)=>h(i,m(n));import{j as e}from"./iframe-DldSfwU-.js";import{useMDXComponents as d}from"./index-DelgR-sQ.js";import{M as j,b as u}from"./blocks-zF-hAATi.js";import{L as b}from"./Label.stories-C-KP4qx4.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DFfcEqSA.js";import"./index-xpI64LTH.js";import"./Icon-C2ayUpEw.js";import"./ArrowUpIcon-D0Ja-nwN.js";import"./CheckboxUncheckedIcon-CpVp8Q2V.js";import"./CheckMarkIcon-2AL8oS8v.js";import"./get-class-name-CHDn80c0.js";import"./Label-bYYRV1Qt.js";function c(i){const n=r(r({code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul"},d()),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:b,title:"Atoms/Label"}),`
`,e.jsx(n.h1,{id:"label",children:"Label"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Label"})," component provides an accessible label for form inputs with optional icons and required field indicators."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Label from 'chop-logic-components';
import { Icon, IconName } from 'chop-logic-components';

const FormField = () => (
  <div>
    <Label
      label="Email"
      required={true}
      inputId="email-input"
      icon={<Icon name={IconName.Mail} />}
      iconPosition="left"
    />
    <input id="email-input" type="email" />
  </div>
);
`})}),`
`,e.jsx(n.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Association"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Always associate labels with form controls using htmlFor/inputId"}),`
`,e.jsx(n.li,{children:"Ensure inputId matches the ID of the associated control"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Required Fields"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use required prop to indicate mandatory fields"}),`
`,e.jsxs(n.li,{children:["The asterisk (*) is wrapped in ",e.jsx(n.code,{children:"<abbr>"})," with ",e.jsx(n.code,{children:'title="required"'})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Screen Readers"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Hidden text (when isTextHidden=true) remains accessible"}),`
`,e.jsx(n.li,{children:"Icons should have appropriate alt text or be decorative"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Consistency"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Maintain consistent icon positioning throughout your application"}),`
`,e.jsx(n.li,{children:"Standardize required field indicators"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Placement"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Position labels close to their associated controls"}),`
`,e.jsx(n.li,{children:"Consider vertical alignment for complex forms"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(u,{})]})}function N(i={}){const{wrapper:n}=r(r({},d()),i.components);return n?e.jsx(n,t(r({},i),{children:e.jsx(c,r({},i))})):c(i)}export{N as default};
