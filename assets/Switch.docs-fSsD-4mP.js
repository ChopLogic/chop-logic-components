import{j as e}from"./iframe-Doc73XE3.js";import{useMDXComponents as s}from"./index-BeVWJvHh.js";import{M as o,C as c}from"./blocks-B9t17XrR.js";import{S as r}from"./Switch.stories-BMHAa6yR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ECW4Oirl.js";import"./index-CyugzvtL.js";import"./Switch-29fPxr3v.js";import"./get-class-name-BY88G7uf.js";import"./use-reset-form-input-Dmd2Mx0b.js";function t(i){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:r,title:"Switch"}),`
`,e.jsx(n.h1,{id:"switch",children:"Switch"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Switch"}),' component provides an accessible binary input control that allows users to toggle between "on" and "off" states, following WAI-ARIA switch pattern specifications.']}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Switch from "chop-logic-components";

const NotificationSettings = () => {
  const [notifications, setNotifications] = useState(false);

  return <Switch checked={notifications} onChange={setNotifications} label="Push notifications" />;
};
`})}),`
`,e.jsx(n.h3,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Accessibility"}),":",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:'Labels should describe the functionality, not the state (avoid labels like "Turn on/off" - use "Notifications" instead).'}),`
`,e.jsx(n.li,{children:"Labels should remain constant regardless of switch state."}),`
`,e.jsx(n.li,{children:"Use for binary choices only (no indeterminate states)."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Interactivity"}),": Provide immediate feedback when toggled."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Performance"}),": Consider debouncing for operations with side effects."]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(c,{})]})}function g(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{g as default};
