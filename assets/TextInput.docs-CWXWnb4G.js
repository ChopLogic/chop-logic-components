import{n as e}from"./chunk-BneVvdWh.js";import{n as t}from"./iframe-DM9h6Jyd.js";import{r as n}from"./react-BgG3AzCd.js";import{a as r,d as i,u as a}from"./blocks-D4KZ0eBP.js";import{t as o}from"./mdx-react-shim-DrApaaiq.js";import{n as s,t as c}from"./TextInput.stories-DJ75tzTY.js";function l(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{of:c,title:`TextInput`}),`
`,(0,d.jsx)(t.h1,{id:`textinput`,children:`TextInput`}),`
`,(0,d.jsxs)(t.p,{children:[`The `,(0,d.jsx)(t.code,{children:`TextInput`}),` component is a flexible text input field that supports both stateful and stateless modes. It includes validation, clear button, and password visibility toggle features.`]}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.h3,{id:`stateful-default`,children:`Stateful (Default)`}),`
`,(0,d.jsxs)(t.p,{children:[`When `,(0,d.jsx)(t.code,{children:`stateless`}),` is false or omitted, the component manages its own state internally. Perfect for simple forms where you don't need external control.`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import TextInput from "chop-logic-components";

<TextInput name="email" label="Email address" type="email" placeholder="Enter your email" required onChange={(event) => console.log(event)} />;
`})}),`
`,(0,d.jsx)(t.h3,{id:`stateless`,children:`Stateless`}),`
`,(0,d.jsxs)(t.p,{children:[`When `,(0,d.jsx)(t.code,{children:`stateless`}),` is true, the component is fully controlled via the `,(0,d.jsx)(t.code,{children:`value`}),` prop. You manage state externally and provide all handlers.`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import TextInput from "chop-logic-components";

const [message, setMessage] = useState("");

<TextInput name="message" label="Your Message" stateless value={message} placeholder="Type your message..." onChange={(event) => setMessage(event.target.value)} onClear={() => setMessage("")} />;
`})}),`
`,(0,d.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Labeling`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Always provide a meaningful label`}),`
`,(0,d.jsx)(t.li,{children:`Use placeholder text sparingly (not as a label replacement)`}),`
`,(0,d.jsx)(t.li,{children:`Ensure proper label-input association`}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Validation`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Provide clear error messages`}),`
`,(0,d.jsx)(t.li,{children:`Validate on blur as well as submit`}),`
`,(0,d.jsx)(t.li,{children:`Consider real-time validation for long forms`}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Accessibility`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Ensure clear focus states for all interactive elements`}),`
`,(0,d.jsx)(t.li,{children:`Ensure Clear and Password Toggle buttons are keyboard accessible`}),`
`,(0,d.jsx)(t.li,{children:`Use ARIA attributes for dynamic content updates`}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Controlled vs Uncontrolled`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Use stateful mode (default) for simple, isolated inputs`}),`
`,(0,d.jsx)(t.li,{children:`Use stateless mode when you need fine-grained control or integration with state management`}),`
`]}),`
`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,d.jsx)(r,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),i(),s()}))();export{u as default};