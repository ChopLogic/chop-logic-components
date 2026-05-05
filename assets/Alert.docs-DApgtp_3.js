import{n as e}from"./chunk-DnJy8xQt.js";import{n as t}from"./iframe-y9k1Z_t0.js";import{r as n}from"./react-fJPLJOvc.js";import{a as r,d as i,u as a}from"./blocks-E9PD1hbZ.js";import{t as o}from"./mdx-react-shim-BZHZOuC3.js";import{n as s,t as c}from"./Alert.stories-Cmgt52T3.js";function l(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{of:c,title:`Alert`}),`
`,(0,d.jsx)(t.h1,{id:`alert`,children:`Alert`}),`
`,(0,d.jsx)(t.p,{children:`A flexible alert component that displays contextual feedback messages to users. Supports multiple modes (info, success, warning, error) with automatic closing, custom icons, and customizable timing.`}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import Alert, { AlertMode } from "chop-logic-components";

const NotificationSystem = () => {
  const [alertOpen, setAlertOpen] = React.useState(true);

  return <Alert isOpened={alertOpen} onClose={() => setAlertOpen(false)} mode={AlertMode.Success} title="Action completed" message="Your changes have been saved successfully." autoClose />;
};
`})}),`
`,(0,d.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Contextual Modes`}),`: Use appropriate alert modes to convey the message importance.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Auto-close Timing`}),`: Set appropriate autoCloseDelay values based on message importance (shorter for info, longer for errors).`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Icon Selection`}),`: Choose icons that reinforce the message type and improve visual recognition.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Content Clarity`}),`: Provide clear, concise titles and descriptive messages.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Accessibility`}),`: Ensure proper color contrast and include ARIA labels for different alert types.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`User Control`}),`: Allow users to dismiss important alerts manually when autoClose is disabled.`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,d.jsx)(r,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),i(),s()}))();export{u as default};