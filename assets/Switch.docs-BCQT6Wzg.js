var h=Object.defineProperty,d=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var c=(i,e,t)=>e in i?h(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,s=(i,e)=>{for(var t in e||(e={}))f.call(e,t)&&c(i,t,e[t]);if(o)for(var t of o(e))p.call(e,t)&&c(i,t,e[t]);return i},r=(i,e)=>d(i,m(e));import{j as n}from"./iframe-BtTQsrQT.js";import{useMDXComponents as a}from"./index-Ob56quG4.js";import{M as x,b as j}from"./blocks-BNpYbts6.js";import{S as u}from"./Switch.stories-BjLVOR_h.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Df9TIXKd.js";import"./index-2Wp6kII8.js";import"./Switch-CsrE6gMz.js";import"./get-class-name-BY88G7uf.js";import"./use-reset-form-input-B2zVg9GE.js";function l(i){const e=s(s({code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul"},a()),i.components);return n.jsxs(n.Fragment,{children:[n.jsx(x,{of:u,title:"Switch"}),`
`,n.jsx(e.h1,{id:"switch",children:"Switch"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"Switch"}),' component provides an accessible binary input control that allows users to toggle between "on" and "off" states, following WAI-ARIA switch pattern specifications.']}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import Switch from 'chop-logic-components';

const NotificationSettings = () => {
  const [notifications, setNotifications] = useState(false);

  return <Switch checked={notifications} onChange={setNotifications} label="Push notifications" />;
};
`})}),`
`,n.jsx(e.h3,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Accessibility"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:'Labels should describe the functionality, not the state (avoid labels like "Turn on/off" - use "Notifications" instead).'}),`
`,n.jsx(e.li,{children:"Labels should remain constant regardless of switch state."}),`
`,n.jsx(e.li,{children:"Use for binary choices only (no indeterminate states)."}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Interactivity"}),": Provide immediate feedback when toggled."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Performance"}),": Consider debouncing for operations with side effects."]}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(j,{})]})}function k(i={}){const{wrapper:e}=s(s({},a()),i.components);return e?n.jsx(e,r(s({},i),{children:n.jsx(l,s({},i))})):l(i)}export{k as default};
