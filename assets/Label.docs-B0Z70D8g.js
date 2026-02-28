import{j as e}from"./iframe-DP4TfwvB.js";import{useMDXComponents as s}from"./index-Cm-1IS7I.js";import{M as t,C as r}from"./blocks-BtqpkElc.js";import{L as l}from"./Label.stories-BcfHe-HC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CtEmNKun.js";import"./index-DiforBi_.js";import"./Label-GsN7KfjG.js";import"./Icon-DgdWz_xl.js";import"./get-class-name-BY88G7uf.js";import"./icon-name-DofyCo9k.js";function o(n){const i={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:l,title:"Atoms/Label"}),`
`,e.jsx(i.h1,{id:"label",children:"Label"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"Label"})," component provides an accessible label for form inputs with optional icons and required field indicators."]}),`
`,e.jsx(i.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { Label, IconName } from "chop-logic-components";

const FormField = () => (
  <div>
    <Label label="Email" required={true} inputId="email-input" icon={IconName.Mail} iconPosition="left" />
    <input id="email-input" type="email" />
  </div>
);
`})}),`
`,e.jsx(i.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.em,{children:"Association"}),": Always associate labels with form controls using htmlFor/inputId. Ensure inputId matches the ID of the associated control."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.em,{children:"Required Fields"}),": Use required prop to indicate mandatory fields. The asterisk (*) is wrapped in ",e.jsx(i.code,{children:"<abbr>"})," with ",e.jsx(i.code,{children:'title="required"'}),"."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.em,{children:"Screen Readers"}),": Hidden text (when isTextHidden=true) remains accessible. Icons should have appropriate alt text or be decorative."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.em,{children:"Consistency"}),": Maintain consistent icon positioning throughout your application. Standardize required field indicators."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.em,{children:"Placement"}),": Position labels close to their associated controls. Consider vertical alignment for complex forms."]}),`
`]}),`
`,e.jsx(i.h2,{id:"props",children:"Props"}),`
`,e.jsx(r,{})]})}function g(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(o,{...n})}):o(n)}export{g as default};
