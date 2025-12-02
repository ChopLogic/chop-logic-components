var d=Object.defineProperty,m=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var s=(i,e,t)=>e in i?d(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,r=(i,e)=>{for(var t in e||(e={}))x.call(e,t)&&s(i,t,e[t]);if(l)for(var t of l(e))h.call(e,t)&&s(i,t,e[t]);return i},o=(i,e)=>m(i,p(e));import{j as n}from"./iframe-BtTQsrQT.js";import{useMDXComponents as c}from"./index-Ob56quG4.js";import{M as u,b as j}from"./blocks-BNpYbts6.js";import{T as b}from"./TextInput.stories-CIY6VLiO.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Df9TIXKd.js";import"./index-2Wp6kII8.js";import"./ResponsiveWrapper.module-B2uI7vga.js";import"./TextInput-CK7hAZw5.js";import"./Button-Dw_yUSTK.js";import"./Icon-Z7qWIs8D.js";import"./get-class-name-BY88G7uf.js";import"./Portal-D7yw5jBn.js";import"./use-click-outside-ajOA-CeE.js";import"./use-element-ids-B0aiT4og.js";import"./use-key-press-Cy56pnAc.js";import"./use-tooltip-position-uT-wVpg_.js";import"./use-container-dimensions-DgRoZpRR.js";import"./ErrorMessage-Bt6uj2tN.js";import"./Input-sCWAVzue.js";import"./Label-DX3cIGOQ.js";import"./use-reset-form-input-B2zVg9GE.js";function a(i){const e=r(r({code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul"},c()),i.components);return n.jsxs(n.Fragment,{children:[n.jsx(u,{of:b,title:"TextInput"}),`
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
