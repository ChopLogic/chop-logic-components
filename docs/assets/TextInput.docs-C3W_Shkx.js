import{j as e}from"./iframe--IBuYMIm.js";import{useMDXComponents as r}from"./index-B2uT0Rcg.js";import{M as l,b as t}from"./blocks-CLsIill3.js";import{T as o}from"./TextInput.stories-jtswBxvV.js";import"./index-B2hGPKdV.js";import"./index-CP8j0TIN.js";import"./TextInput-CfNjb3Po.js";import"./Header-C12TVa5M.js";import"./Icon-DpSy3F0u.js";import"./get-class-name-CHDn80c0.js";import"./Loader-BO--KrpG.js";import"./Portal-yNe1MKYE.js";import"./use-click-outside-BPiQ2b_j.js";import"./use-key-press-Dj0MNI-N.js";import"./use-tooltip-position-D3oMY-QF.js";import"./use-container-dimensions-CIKAS05A.js";import"./use-window-dimensions-CfT0BYEv.js";import"./Button-BqxMyPGy.js";import"./Checkbox-Do2bbQD4.js";import"./use-reset-form-input-D1XtAl5p.js";import"./MultiSelect-nFOyaBs1.js";import"./Select.module-DHd5GItA.js";import"./NumericInput-DZkiHKI_.js";import"./Select-CFTdNQer.js";function s(i){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:o,title:"ChopLogicTextInput"}),`
`,e.jsx(n.h1,{id:"choplogictextinput",children:"ChopLogicTextInput"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ChopLogicTextInput"})," component provides a flexible, accessible text input field with validation, clear button, and password visibility toggle."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import ChopLogicTextInput from 'chop-logic-components';

const LoginForm = () => {
  const [email, setEmail] = React.useState('');

  return (
    <ChopLogicTextInput
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
`,e.jsx(n.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Keyboard Navigation"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tab to focus the input"}),`
`,e.jsx(n.li,{children:"Clear button accessible via keyboard"}),`
`,e.jsx(n.li,{children:"Password toggle accessible via keyboard"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Screen Readers"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Announces label and required state"}),`
`,e.jsx(n.li,{children:"Announces validation errors"}),`
`,e.jsx(n.li,{children:"Describes clear button action"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Focus Management"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Clear focus states for all interactive elements"}),`
`,e.jsx(n.li,{children:"Maintains focus during interactions"}),`
`]}),`
`,e.jsx(n.h3,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Labeling"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Always provide a meaningful label"}),`
`,e.jsx(n.li,{children:"Use placeholder text sparingly (not as a label replacement)"}),`
`,e.jsx(n.li,{children:"Ensure proper label-input association"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Validation"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Provide clear error messages"}),`
`,e.jsx(n.li,{children:"Validate on blur as well as submit"}),`
`,e.jsx(n.li,{children:"Consider real-time validation for long forms"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Mobile Considerations"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use appropriate input types for virtual keyboards"}),`
`,e.jsx(n.li,{children:"Ensure touch targets are large enough"}),`
`,e.jsx(n.li,{children:"Test with screen magnifiers"}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(t,{})]})}function k(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{k as default};
