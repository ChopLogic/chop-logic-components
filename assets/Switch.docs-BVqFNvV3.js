var d=Object.defineProperty,h=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var r=(i,e,s)=>e in i?d(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s,t=(i,e)=>{for(var s in e||(e={}))p.call(e,s)&&r(i,s,e[s]);if(o)for(var s of o(e))x.call(e,s)&&r(i,s,e[s]);return i},c=(i,e)=>h(i,m(e));import{j as n}from"./iframe-Dwcaj2QA.js";import{useMDXComponents as a}from"./index-CI7Eu6Yl.js";import{M as f,b as u}from"./WithTooltip-SK46ZJ2J-CYLl_01T.js";import{S as j}from"./Switch.stories-C9Jg42kB.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BRh9Y6jq.js";import"./index-CP_tCMHU.js";import"./get-class-name-BY88G7uf.js";function l(i){const e=t(t({code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul"},a()),i.components);return n.jsxs(n.Fragment,{children:[n.jsx(f,{of:j,title:"Switch"}),`
`,n.jsx(e.h1,{id:"switch",children:"Switch"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"Switch"}),' component provides an accessible binary input control that allows users to toggle between "on" and "off" states, following WAI-ARIA switch pattern specifications.']}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import Switch from 'chop-logic-components';

const NotificationSettings = () => {
  const [notifications, setNotifications] = useState(false);

  return <Switch checked={notifications} onChange={setNotifications} label="Push notifications" />;
};
`})}),`
`,n.jsx(e.h3,{id:"features",children:"Features"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"WAI-ARIA Compliant"}),": Follows switch role pattern with proper ARIA attributes"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Keyboard Accessible"}),": Space and Enter keys toggle the switch"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Screen Reader Support"}),": Proper announcements for state changes"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Form Integration"}),": Hidden input for form submission compatibility"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Accessibility"}),": High contrast and reduced motion support"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Visual Feedback"}),": Clear visual states for on/off and disabled"]}),`
`]}),`
`,n.jsx(e.h3,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:'Labels should describe the functionality, not the state (avoid labels like "Turn on/off" - use "Notifications" instead)'}),`
`,n.jsx(e.li,{children:"Labels should remain constant regardless of switch state"}),`
`,n.jsx(e.li,{children:"Use for binary choices only (no indeterminate states)"}),`
`,n.jsx(e.li,{children:"Provide immediate feedback when toggled"}),`
`,n.jsx(e.li,{children:"Consider debouncing for operations with side effects"}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(u,{})]})}function k(i={}){const{wrapper:e}=t(t({},a()),i.components);return e?n.jsx(e,c(t({},i),{children:n.jsx(l,t({},i))})):l(i)}export{k as default};
