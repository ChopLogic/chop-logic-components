import{j as e}from"./iframe-DP4TfwvB.js";import{useMDXComponents as l}from"./index-Cm-1IS7I.js";import{M as i,C as r}from"./blocks-BtqpkElc.js";import{T as o}from"./TextInput.stories-Cdwutm56.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CtEmNKun.js";import"./index-DiforBi_.js";/* empty css                          */import"./TextInput-CiVnWBfn.js";import"./ErrorMessage-Bcx3cAYD.js";import"./get-class-name-BY88G7uf.js";import"./Input-OJw9X-Ut.js";import"./Label-GsN7KfjG.js";import"./Icon-DgdWz_xl.js";import"./use-element-ids-BwRwfIW9.js";import"./use-reset-form-input-CGOMNfpm.js";import"./Button-BkZxBmQE.js";import"./Portal-GDtD3Swj.js";import"./use-click-outside-yBZhbwYK.js";import"./use-key-press-Qz_3YznQ.js";import"./use-tooltip-position-BNnrnIuP.js";import"./use-container-dimensions-BdWbXCjt.js";import"./icon-name-DofyCo9k.js";function t(s){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...l(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:o,title:"TextInput"}),`
`,e.jsx(n.h1,{id:"textinput",children:"TextInput"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"TextInput"})," component is a flexible text input field that supports both stateful and stateless modes. It includes validation, clear button, and password visibility toggle features."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"stateful-default",children:"Stateful (Default)"}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"stateless"})," is false or omitted, the component manages its own state internally. Perfect for simple forms where you don't need external control."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import TextInput from "chop-logic-components";

<TextInput name="email" label="Email address" type="email" placeholder="Enter your email" required onChange={(event) => console.log(event)} />;
`})}),`
`,e.jsx(n.h3,{id:"stateless",children:"Stateless"}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"stateless"})," is true, the component is fully controlled via the ",e.jsx(n.code,{children:"value"})," prop. You manage state externally and provide all handlers."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import TextInput from "chop-logic-components";

const [message, setMessage] = useState("");

<TextInput name="message" label="Your Message" stateless value={message} placeholder="Type your message..." onChange={(event) => setMessage(event.target.value)} onClear={() => setMessage("")} />;
`})}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Labeling"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Always provide a meaningful label"}),`
`,e.jsx(n.li,{children:"Use placeholder text sparingly (not as a label replacement)"}),`
`,e.jsx(n.li,{children:"Ensure proper label-input association"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Validation"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Provide clear error messages"}),`
`,e.jsx(n.li,{children:"Validate on blur as well as submit"}),`
`,e.jsx(n.li,{children:"Consider real-time validation for long forms"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Accessibility"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ensure clear focus states for all interactive elements"}),`
`,e.jsx(n.li,{children:"Ensure Clear and Password Toggle buttons are keyboard accessible"}),`
`,e.jsx(n.li,{children:"Use ARIA attributes for dynamic content updates"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Controlled vs Uncontrolled"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use stateful mode (default) for simple, isolated inputs"}),`
`,e.jsx(n.li,{children:"Use stateless mode when you need fine-grained control or integration with state management"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(r,{})]})}function D(s={}){const{wrapper:n}={...l(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{D as default};
