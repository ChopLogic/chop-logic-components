var d=Object.defineProperty,p=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var t=(i,e,s)=>e in i?d(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s,r=(i,e)=>{for(var s in e||(e={}))m.call(e,s)&&t(i,s,e[s]);if(l)for(var s of l(e))x.call(e,s)&&t(i,s,e[s]);return i},o=(i,e)=>p(i,h(e));import{j as n}from"./iframe-DGLPjSHb.js";import{useMDXComponents as c}from"./index-_AjrTGOE.js";import{M as u,b as j}from"./blocks-C-t3sszW.js";import{T as b}from"./TextInput.stories-DIQMkA5_.js";import"./preload-helper-Dp1pzeXC.js";import"./index-QIYvd6mt.js";import"./index-ZpPSzr_Y.js";import"./TextInput-fE16ORz2.js";import"./Button-Bkbj21Uc.js";import"./Icon-Coy0pRmj.js";import"./get-class-name-CHDn80c0.js";import"./Portal-Dx8aOCbZ.js";import"./use-click-outside-CQdVQ-mQ.js";import"./use-element-ids-CCLjb5t5.js";import"./use-key-press-q-IucPbH.js";import"./use-tooltip-position-DJQ3uCKC.js";import"./use-container-dimensions-DHetTRBL.js";import"./use-window-dimensions-DrC5iAeS.js";import"./ErrorMessage-CA_OvI16.js";import"./Input-DX9Xd3Tc.js";import"./Label-rlm6Xgpz.js";import"./use-reset-form-input-D9nhGyE4.js";function a(i){const e=r(r({code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul"},c()),i.components);return n.jsxs(n.Fragment,{children:[n.jsx(u,{of:b,title:"TextInput"}),`
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
`,n.jsx(j,{})]})}function _(i={}){const{wrapper:e}=r(r({},c()),i.components);return e?n.jsx(e,o(r({},i),{children:n.jsx(a,r({},i))})):a(i)}export{_ as default};
