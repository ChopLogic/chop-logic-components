import{j as e}from"./iframe-DP4TfwvB.js";import{useMDXComponents as i}from"./index-Cm-1IS7I.js";import{M as l,C as o}from"./blocks-BtqpkElc.js";import{C as r}from"./Checkbox.stories-DqW7C_Rn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CtEmNKun.js";import"./index-DiforBi_.js";import"./Checkbox-BuKwiBIs.js";import"./Label-GsN7KfjG.js";import"./Icon-DgdWz_xl.js";import"./get-class-name-BY88G7uf.js";import"./icon-name-DofyCo9k.js";import"./use-element-ids-BwRwfIW9.js";import"./use-reset-form-input-CGOMNfpm.js";function t(s){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:r,title:"Checkbox"}),`
`,e.jsx(n.h1,{id:"checkbox",children:"Checkbox"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Checkbox"})," component is a customizable, accessible checkbox input that supports both stateful and stateless modes. It includes label support, validation states, and flexible icon positioning."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"stateful-default",children:"Stateful (Default)"}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"stateless"})," is false or omitted, the component manages its own state internally. Perfect for simple forms where you don't need external control."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Checkbox from "chop-logic-components";

<Checkbox name="newsletter" label="Subscribe to newsletter" defaultChecked={false} onChange={(event) => console.log(event)} />;
`})}),`
`,e.jsx(n.h3,{id:"stateless",children:"Stateless"}),`
`,e.jsxs(n.p,{children:["When ",e.jsx(n.code,{children:"stateless"})," is true, the component is fully controlled via the ",e.jsx(n.code,{children:"checked"})," prop. You manage state externally and provide all handlers."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Checkbox from "chop-logic-components";

const [isSubscribed, setIsSubscribed] = useState(false);

<Checkbox name="newsletter" label="Subscribe to newsletter" stateless checked={isSubscribed} onChange={(event) => setIsSubscribed(event.target.checked)} />;
`})}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Label Clarity"}),": Use clear, concise labels that describe the action."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Grouping"}),": Use consistent icon positioning within groups."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Default States"}),": Set sensible defaults for defaultChecked (stateful) or checked (stateless)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Spacing"}),": Maintain consistent spacing between checkboxes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Feedback"}),": Provide immediate visual feedback on state changes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Controlled vs Uncontrolled"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use stateful mode (default) for simple, isolated checkboxes"}),`
`,e.jsx(n.li,{children:"Use stateless mode when you need fine-grained control or integration with state management"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Accessibility Notes"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Always provide a meaningful label prop (even when using noLabel);"}),`
`,e.jsx(n.li,{children:"Use required prop for form validation requirements;"}),`
`,e.jsx(n.li,{children:"Ensure proper color contrast for all states;"}),`
`,e.jsx(n.li,{children:"Test keyboard navigation (Space to toggle);"}),`
`,e.jsxs(n.li,{children:["Pair groups of checkboxes with ",e.jsx(n.code,{children:"<fieldset>"})," and ",e.jsx(n.code,{children:"<legend>"}),"."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(o,{})]})}function v(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{v as default};
