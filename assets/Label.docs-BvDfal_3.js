var d=Object.defineProperty,h=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var r=(n,e,s)=>e in n?d(n,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[e]=s,o=(n,e)=>{for(var s in e||(e={}))p.call(e,s)&&r(n,s,e[s]);if(t)for(var s of t(e))x.call(e,s)&&r(n,s,e[s]);return n},l=(n,e)=>h(n,m(e));import{j as i}from"./iframe-DGLPjSHb.js";import{useMDXComponents as a}from"./index-_AjrTGOE.js";import{M as u,b as j}from"./blocks-C-t3sszW.js";import{L as b}from"./Label.stories-Djo_l7Z-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-QIYvd6mt.js";import"./index-ZpPSzr_Y.js";import"./Label-rlm6Xgpz.js";import"./Icon-Coy0pRmj.js";import"./get-class-name-CHDn80c0.js";function c(n){const e=o(o({code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre"},a()),n.components);return i.jsxs(i.Fragment,{children:[i.jsx(u,{of:b,title:"Atoms/Label"}),`
`,i.jsx(e.h1,{id:"label",children:"Label"}),`
`,i.jsxs(e.p,{children:["The ",i.jsx(e.code,{children:"Label"})," component provides an accessible label for form inputs with optional icons and required field indicators."]}),`
`,i.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-tsx",children:`import { Label, IconName } from 'chop-logic-components';

const FormField = () => (
  <div>
    <Label label='Email' required={true} inputId='email-input' icon={IconName.Mail} iconPosition='left' />
    <input id='email-input' type='email' />
  </div>
);
`})}),`
`,i.jsx(e.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,i.jsxs(e.ol,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.em,{children:"Association"}),": - Always associate labels with form controls using htmlFor/inputId - Ensure inputId matches the ID of the associated control"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.em,{children:"Required Fields"}),": - Use required prop to indicate mandatory fields - The asterisk (*) is wrapped in ",i.jsx(e.code,{children:"<abbr>"})," with ",i.jsx(e.code,{children:'title="required"'})]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.em,{children:"Screen Readers"}),": - Hidden text (when isTextHidden=true) remains accessible - Icons should have appropriate alt text or be decorative"]}),`
`]}),`
`,i.jsx(e.h3,{id:"best-practices",children:"Best Practices"}),`
`,i.jsxs(e.ol,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.em,{children:"Consistency"}),": - Maintain consistent icon positioning throughout your application - Standardize required field indicators"]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.em,{children:"Placement"}),": - Position labels close to their associated controls - Consider vertical alignment for complex forms"]}),`
`]}),`
`,i.jsx(e.h2,{id:"props",children:"Props"}),`
`,i.jsx(j,{})]})}function P(n={}){const{wrapper:e}=o(o({},a()),n.components);return e?i.jsx(e,l(o({},n),{children:i.jsx(c,o({},n))})):c(n)}export{P as default};
