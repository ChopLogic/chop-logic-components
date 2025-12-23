var d=Object.defineProperty,m=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var s=(i,e,t)=>e in i?d(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,r=(i,e)=>{for(var t in e||(e={}))x.call(e,t)&&s(i,t,e[t]);if(l)for(var t of l(e))h.call(e,t)&&s(i,t,e[t]);return i},o=(i,e)=>m(i,p(e));import{j as n}from"./iframe-DJejKD7f.js";import{useMDXComponents as c}from"./index-C1C3GIxM.js";import{M as u,b as j}from"./blocks-BfAV1-Im.js";import{T as b}from"./TextInput.stories-DeIULdXR.js";import"./preload-helper-BDBacUwf.js";import"./index-0Be67YNH.js";import"./index-D5q0hnWu.js";import"./ResponsiveWrapper.module-CBt-uAwD.js";import"./TextInput-CpdrICHc.js";import"./Button-AHhdSE-N.js";import"./Icon-CmAPyYs8.js";import"./get-class-name-BY88G7uf.js";import"./Portal-Da9uriEx.js";import"./use-click-outside-B4LtYmf8.js";import"./use-element-ids-oKt-zW1Z.js";import"./use-key-press-BuGfWEGP.js";import"./use-tooltip-position-s-QEDd_q.js";import"./use-container-dimensions-BqHroBwe.js";import"./ErrorMessage-CQXPHDFV.js";import"./Input-DKgbvssd.js";import"./Label-DeqzO3mM.js";import"./use-reset-form-input-R2_GGGA6.js";function a(i){const e=r(r({code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul"},c()),i.components);return n.jsxs(n.Fragment,{children:[n.jsx(u,{of:b,title:"TextInput"}),`
`,n.jsx(e.h1,{id:"textinput",children:"TextInput"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"TextInput"})," component provides a flexible, accessible text input field with validation, clear button, and password visibility toggle."]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import TextInput from 'chop-logic-components';

const LoginForm = () => {
  const [email, setEmail] = React.useState('');

  return (
    <TextInput
      name="email"
      label="Email address"
      type="email"
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
  );
};
`})}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Labeling"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Always provide a meaningful label"}),`
`,n.jsx(e.li,{children:"Use placeholder text sparingly (not as a label replacement)"}),`
`,n.jsx(e.li,{children:"Ensure proper label-input association"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Validation"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Provide clear error messages"}),`
`,n.jsx(e.li,{children:"Validate on blur as well as submit"}),`
`,n.jsx(e.li,{children:"Consider real-time validation for long forms"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Accessibility"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Ensure clear focus states for all interactive elements"}),`
`,n.jsx(e.li,{children:"Ensure Clear and Password Toggle buttons are keyboard accessible"}),`
`,n.jsx(e.li,{children:"Use ARIA attributes for dynamic content updates"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(j,{})]})}function N(i={}){const{wrapper:e}=r(r({},c()),i.components);return e?n.jsx(e,o(r({},i),{children:n.jsx(a,r({},i))})):a(i)}export{N as default};
