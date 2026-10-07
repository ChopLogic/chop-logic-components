import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-3rE1Ks8a.js";import{i as n,r}from"./react-RvnEQLiQ.js";import{a as i,d as a,u as o}from"./blocks-1CZAr93n.js";import{n as s,t as c}from"./Switch.stories-HmHIUTQK.js";function l(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o,{of:c,title:`Switch`}),`
`,(0,d.jsx)(t.h1,{id:`switch`,children:`Switch`}),`
`,(0,d.jsxs)(t.p,{children:[`The `,(0,d.jsx)(t.code,{children:`Switch`}),` component provides an accessible binary input control that allows users to toggle between "on" and "off" states, following WAI-ARIA switch pattern specifications.`]}),`
`,(0,d.jsxs)(t.p,{children:[`An optional `,(0,d.jsx)(t.code,{children:`icon`}),` can be shown before the label to reinforce the setting it controls. The icon is decorative and hidden from assistive technology, so the `,(0,d.jsx)(t.code,{children:`label`}),` remains the accessible name.`]}),`
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
`,(0,d.jsx)(i,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=t(),r(),a(),s()})))()}f();export{u as default};