var d=Object.defineProperty,m=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var r=(n,e,o)=>e in n?d(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,s=(n,e)=>{for(var o in e||(e={}))p.call(e,o)&&r(n,o,e[o]);if(t)for(var o of t(e))x.call(e,o)&&r(n,o,e[o]);return n},l=(n,e)=>m(n,h(e));import{j as i}from"./iframe-CD-frcvH.js";import{useMDXComponents as a}from"./index-_ZbGk_Ih.js";import{M as u,b as j}from"./blocks-ymH_-mwP.js";import{L as f}from"./Label.stories-BU1WvDaO.js";import"./preload-helper-BDBacUwf.js";import"./index-C3T1o3xO.js";import"./index-B0E5RUGE.js";import"./Label-ByMmsEMn.js";import"./Icon-B65JLDHH.js";import"./get-class-name-BY88G7uf.js";function c(n){const e=s(s({code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre"},a()),n.components);return i.jsxs(i.Fragment,{children:[i.jsx(u,{of:f,title:"Atoms/Label"}),`
`,i.jsx(e.h1,{id:"label",children:"Label"}),`
`,i.jsxs(e.p,{children:["The ",i.jsx(e.code,{children:"Label"})," component provides an accessible label for form inputs with optional icons and required field indicators."]}),`
`,i.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,i.jsx(e.pre,{children:i.jsx(e.code,{className:"language-tsx",children:`import { Label, IconName } from 'chop-logic-components';

const FormField = () => (
  <div>
    <Label
      label="Email"
      required={true}
      inputId="email-input"
      icon={IconName.Mail}
      iconPosition="left"
    />
    <input id="email-input" type="email" />
  </div>
);
`})}),`
`,i.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,i.jsxs(e.ol,{children:[`
`,i.jsxs(e.li,{children:[i.jsx(e.em,{children:"Association"}),": Always associate labels with form controls using htmlFor/inputId. Ensure inputId matches the ID of the associated control."]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.em,{children:"Required Fields"}),": Use required prop to indicate mandatory fields. The asterisk (*) is wrapped in ",i.jsx(e.code,{children:"<abbr>"})," with ",i.jsx(e.code,{children:'title="required"'}),"."]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.em,{children:"Screen Readers"}),": Hidden text (when isTextHidden=true) remains accessible. Icons should have appropriate alt text or be decorative."]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.em,{children:"Consistency"}),": Maintain consistent icon positioning throughout your application. Standardize required field indicators."]}),`
`,i.jsxs(e.li,{children:[i.jsx(e.em,{children:"Placement"}),": Position labels close to their associated controls. Consider vertical alignment for complex forms."]}),`
`]}),`
`,i.jsx(e.h2,{id:"props",children:"Props"}),`
`,i.jsx(j,{})]})}function P(n={}){const{wrapper:e}=s(s({},a()),n.components);return e?i.jsx(e,l(s({},n),{children:i.jsx(c,s({},n))})):c(n)}export{P as default};
