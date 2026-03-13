import{n as e}from"./chunk-BneVvdWh.js";import{n as t}from"./iframe-BApIZdni.js";import{r as n}from"./react-BgG3AzCd.js";import{a as r,d as i,u as a}from"./blocks-kE0B7DI6.js";import{t as o}from"./mdx-react-shim-DrApaaiq.js";import{n as s,t as c}from"./Switch.stories-N3F47Kc-.js";function l(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{of:c,title:`Switch`}),`
`,(0,d.jsx)(t.h1,{id:`switch`,children:`Switch`}),`
`,(0,d.jsxs)(t.p,{children:[`The `,(0,d.jsx)(t.code,{children:`Switch`}),` component provides an accessible binary input control that allows users to toggle between "on" and "off" states, following WAI-ARIA switch pattern specifications.`]}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import Switch from "chop-logic-components";

const NotificationSettings = () => {
  const [notifications, setNotifications] = useState(false);

  return <Switch checked={notifications} onChange={setNotifications} label="Push notifications" />;
};
`})}),`
`,(0,d.jsx)(t.h3,{id:`best-practices`,children:`Best Practices`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Accessibility`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Labels should describe the functionality, not the state (avoid labels like "Turn on/off" - use "Notifications" instead).`}),`
`,(0,d.jsx)(t.li,{children:`Labels should remain constant regardless of switch state.`}),`
`,(0,d.jsx)(t.li,{children:`Use for binary choices only (no indeterminate states).`}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Interactivity`}),`: Provide immediate feedback when toggled.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Performance`}),`: Consider debouncing for operations with side effects.`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,d.jsx)(r,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),i(),s()}))();export{u as default};