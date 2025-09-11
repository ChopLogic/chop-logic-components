var d=Object.defineProperty,p=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var l=(i,e,r)=>e in i?d(i,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[e]=r,s=(i,e)=>{for(var r in e||(e={}))m.call(e,r)&&l(i,r,e[r]);if(t)for(var r of t(e))x.call(e,r)&&l(i,r,e[r]);return i},o=(i,e)=>p(i,h(e));import{j as n}from"./iframe-DldSfwU-.js";import{useMDXComponents as c}from"./index-DelgR-sQ.js";import{M as u,b as j}from"./blocks-zF-hAATi.js";import{T as b}from"./TextInput.stories-COvJuD_Y.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DFfcEqSA.js";import"./index-xpI64LTH.js";import"./TextInput-BXxDSJmX.js";import"./Button-Cg5zs565.js";import"./Icon-C2ayUpEw.js";import"./ArrowUpIcon-D0Ja-nwN.js";import"./CheckboxUncheckedIcon-CpVp8Q2V.js";import"./CheckMarkIcon-2AL8oS8v.js";import"./get-class-name-CHDn80c0.js";import"./Portal-cejb6-7e.js";import"./use-click-outside-CeFGhHVU.js";import"./use-element-ids-DZYbu-Ny.js";import"./use-key-press-Bs6P8e37.js";import"./use-tooltip-position-BBraNApr.js";import"./use-container-dimensions-CMWtVfY-.js";import"./use-window-dimensions-OR3ePc-x.js";import"./ErrorMessage-BftwmE3A.js";import"./Input-CRdsMTmK.js";import"./Label-bYYRV1Qt.js";import"./use-reset-form-input-BmkIARUa.js";function a(i){const e=s(s({code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul"},c()),i.components);return n.jsxs(n.Fragment,{children:[n.jsx(u,{of:b,title:"TextInput"}),`
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
`,n.jsx(e.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Keyboard Navigation"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Tab to focus the input"}),`
`,n.jsx(e.li,{children:"Clear button accessible via keyboard"}),`
`,n.jsx(e.li,{children:"Password toggle accessible via keyboard"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Screen Readers"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Announces label and required state"}),`
`,n.jsx(e.li,{children:"Announces validation errors"}),`
`,n.jsx(e.li,{children:"Describes clear button action"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Focus Management"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Clear focus states for all interactive elements"}),`
`,n.jsx(e.li,{children:"Maintains focus during interactions"}),`
`]}),`
`,n.jsx(e.h3,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Labeling"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Always provide a meaningful label"}),`
`,n.jsx(e.li,{children:"Use placeholder text sparingly (not as a label replacement)"}),`
`,n.jsx(e.li,{children:"Ensure proper label-input association"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Validation"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Provide clear error messages"}),`
`,n.jsx(e.li,{children:"Validate on blur as well as submit"}),`
`,n.jsx(e.li,{children:"Consider real-time validation for long forms"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Mobile Considerations"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Use appropriate input types for virtual keyboards"}),`
`,n.jsx(e.li,{children:"Ensure touch targets are large enough"}),`
`,n.jsx(e.li,{children:"Test with screen magnifiers"}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(j,{})]})}function z(i={}){const{wrapper:e}=s(s({},c()),i.components);return e?n.jsx(e,o(s({},i),{children:n.jsx(a,s({},i))})):a(i)}export{z as default};
