var c=Object.defineProperty,m=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var r=(s,e,t)=>e in s?c(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,l=(s,e)=>{for(var t in e||(e={}))h.call(e,t)&&r(s,t,e[t]);if(i)for(var t of i(e))x.call(e,t)&&r(s,t,e[t]);return s},o=(s,e)=>m(s,p(e));import{j as n}from"./iframe-ByKzMmaK.js";import{useMDXComponents as d}from"./index-DeYdrbWI.js";import{M as u,b as j}from"./blocks-Cunk30eN.js";import{T as g}from"./TextInput.stories-Dgw9WsVv.js";import"./preload-helper-BDBacUwf.js";import"./index-Bb97ILPF.js";import"./index-DUc2eTa5.js";import"./ResponsiveWrapper.module-CBt-uAwD.js";import"./TextInput-y-f0QpK9.js";import"./ErrorMessage-DztSsQ3-.js";import"./get-class-name-BY88G7uf.js";import"./Input-BLKqcVQ-.js";import"./Label-DQdSVFEl.js";import"./Icon-BZD9s1Z_.js";import"./use-element-ids-CshNHWkw.js";import"./use-reset-form-input-DpBZcUfi.js";import"./Button-Bdkp_iJJ.js";import"./Portal-DBIu6jmP.js";import"./use-click-outside-DREiv8zp.js";import"./use-key-press-B_vXJT53.js";import"./use-tooltip-position-DVwfAD7L.js";import"./use-container-dimensions-BqWRrAUW.js";function a(s){const e=l(l({code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul"},d()),s.components);return n.jsxs(n.Fragment,{children:[n.jsx(u,{of:g,title:"TextInput"}),`
`,n.jsx(e.h1,{id:"textinput",children:"TextInput"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"TextInput"})," component is a flexible text input field that supports both stateful and stateless modes. It includes validation, clear button, and password visibility toggle features."]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.h3,{id:"stateful-default",children:"Stateful (Default)"}),`
`,n.jsxs(e.p,{children:["When ",n.jsx(e.code,{children:"stateless"})," is false or omitted, the component manages its own state internally. Perfect for simple forms where you don't need external control."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import TextInput from 'chop-logic-components';

<TextInput
  name="email"
  label="Email address"
  type="email"
  placeholder="Enter your email"
  required
  onChange={(event) => console.log(event)}
/>;
`})}),`
`,n.jsx(e.h3,{id:"stateless",children:"Stateless"}),`
`,n.jsxs(e.p,{children:["When ",n.jsx(e.code,{children:"stateless"})," is true, the component is fully controlled via the ",n.jsx(e.code,{children:"value"})," prop. You manage state externally and provide all handlers."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import TextInput from 'chop-logic-components';

const [message, setMessage] = useState('');

<TextInput
  name="message"
  label="Your Message"
  stateless
  value={message}
  placeholder="Type your message..."
  onChange={(event) => setMessage(event.target.value)}
  onClear={() => setMessage('')}
/>;
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
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Controlled vs Uncontrolled"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Use stateful mode (default) for simple, isolated inputs"}),`
`,n.jsx(e.li,{children:"Use stateless mode when you need fine-grained control or integration with state management"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(j,{})]})}function k(s={}){const{wrapper:e}=l(l({},d()),s.components);return e?n.jsx(e,o(l({},s),{children:n.jsx(a,l({},s))})):a(s)}export{k as default};
