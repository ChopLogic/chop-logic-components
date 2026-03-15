import{n as e}from"./chunk-BneVvdWh.js";import{n as t}from"./iframe-VhwcvEo8.js";import{r as n}from"./react-BgG3AzCd.js";import{a as r,d as i,u as a}from"./blocks-SKv-7AQs.js";import{t as o}from"./mdx-react-shim-DrApaaiq.js";import{n as s,t as c}from"./Checkbox.stories-B8Hd3Jx_.js";function l(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{of:c,title:`Checkbox`}),`
`,(0,d.jsx)(t.h1,{id:`checkbox`,children:`Checkbox`}),`
`,(0,d.jsxs)(t.p,{children:[`The `,(0,d.jsx)(t.code,{children:`Checkbox`}),` component is a customizable, accessible checkbox input that supports both stateful and stateless modes. It includes label support, validation states, and flexible icon positioning.`]}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.h3,{id:`stateful-default`,children:`Stateful (Default)`}),`
`,(0,d.jsxs)(t.p,{children:[`When `,(0,d.jsx)(t.code,{children:`stateless`}),` is false or omitted, the component manages its own state internally. Perfect for simple forms where you don't need external control.`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import Checkbox from "chop-logic-components";

<Checkbox name="newsletter" label="Subscribe to newsletter" defaultChecked={false} onChange={(event) => console.log(event)} />;
`})}),`
`,(0,d.jsx)(t.h3,{id:`stateless`,children:`Stateless`}),`
`,(0,d.jsxs)(t.p,{children:[`When `,(0,d.jsx)(t.code,{children:`stateless`}),` is true, the component is fully controlled via the `,(0,d.jsx)(t.code,{children:`checked`}),` prop. You manage state externally and provide all handlers.`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import Checkbox from "chop-logic-components";

const [isSubscribed, setIsSubscribed] = useState(false);

<Checkbox name="newsletter" label="Subscribe to newsletter" stateless checked={isSubscribed} onChange={(event) => setIsSubscribed(event.target.checked)} />;
`})}),`
`,(0,d.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Label Clarity`}),`: Use clear, concise labels that describe the action.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Grouping`}),`: Use consistent icon positioning within groups.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Default States`}),`: Set sensible defaults for defaultChecked (stateful) or checked (stateless).`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Spacing`}),`: Maintain consistent spacing between checkboxes.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Feedback`}),`: Provide immediate visual feedback on state changes.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Controlled vs Uncontrolled`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Use stateful mode (default) for simple, isolated checkboxes`}),`
`,(0,d.jsx)(t.li,{children:`Use stateless mode when you need fine-grained control or integration with state management`}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Accessibility Notes`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Always provide a meaningful label prop (even when using noLabel);`}),`
`,(0,d.jsx)(t.li,{children:`Use required prop for form validation requirements;`}),`
`,(0,d.jsx)(t.li,{children:`Ensure proper color contrast for all states;`}),`
`,(0,d.jsx)(t.li,{children:`Test keyboard navigation (Space to toggle);`}),`
`,(0,d.jsxs)(t.li,{children:[`Pair groups of checkboxes with `,(0,d.jsx)(t.code,{children:`<fieldset>`}),` and `,(0,d.jsx)(t.code,{children:`<legend>`}),`.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,d.jsx)(r,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),i(),s()}))();export{u as default};