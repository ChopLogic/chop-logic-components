var a=Object.defineProperty,h=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var o=(s,e,i)=>e in s?a(s,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[e]=i,r=(s,e)=>{for(var i in e||(e={}))p.call(e,i)&&o(s,i,e[i]);if(t)for(var i of t(e))x.call(e,i)&&o(s,i,e[i]);return s},l=(s,e)=>h(s,m(e));import{j as n}from"./iframe-7UvCaPuN.js";import{useMDXComponents as d}from"./index-DPb6rMrK.js";import{M as u,b as j}from"./blocks-BWlQjjkw.js";import{A as f}from"./Alert.stories-CFzjusTp.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CPLllSZx.js";import"./index-v4pKKiLL.js";import"./Icon-N1nzqMG0.js";import"./ArrowUpIcon-OF-xRODv.js";import"./CheckboxUncheckedIcon-Bf1ZHiwb.js";import"./CheckMarkIcon-CSLR1mm-.js";import"./get-class-name-CHDn80c0.js";import"./Button-Cq0KCBd2.js";import"./Portal-DHBqON0u.js";import"./use-click-outside-DzJRbCA0.js";import"./use-element-ids-D_Vfufc9.js";import"./use-key-press-qUeVx0Z9.js";import"./use-tooltip-position-DuPrSIO9.js";import"./use-container-dimensions-AWdhRgIR.js";import"./use-window-dimensions-DaS2WVlI.js";import"./Header-DZrulzId.js";import"./use-is-mounted-DtyhbG0g.js";function c(s){const e=r(r({code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul"},d()),s.components);return n.jsxs(n.Fragment,{children:[n.jsx(u,{of:f,title:"Alert"}),`
`,n.jsx(e.h1,{id:"alert",children:"Alert"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"Alert"})," component provides a customizable popup for warnings and messages with auto-close function after timeout."]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import Alert, { AlertMode } from 'chop-logic-components';

const NotificationSystem = () => {
  const [alertOpen, setAlertOpen] = React.useState(true);

  return (
    <Alert
      isOpened={alertOpen}
      onClose={() => setAlertOpen(false)}
      mode={AlertMode.Success}
      title="Action completed"
      message="Your changes have been saved successfully."
      autoClose
    />
  );
};
`})}),`
`,n.jsx(e.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Focus Management"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Focus returns to trigger element when closed"}),`
`,n.jsx(e.li,{children:"Close button is keyboard accessible"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.em,{children:"Screen Readers:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Announces alert content when appears"}),`
`,n.jsx(e.li,{children:"Announces severity level"}),`
`,n.jsx(e.li,{children:"Provides clear close action"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Color Contrast"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Ensure sufficient contrast for all modes"}),`
`,n.jsx(e.li,{children:"Test in high contrast modes"}),`
`,n.jsx(e.li,{children:"Provide alternative indicators for color-blind users"}),`
`]}),`
`,n.jsx(e.h3,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Content Guidelines"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Keep titles short (1-5 words)"}),`
`,n.jsx(e.li,{children:"Limit messages to 1-2 sentences"}),`
`,n.jsx(e.li,{children:"Use clear, actionable language"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Timing"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Use auto-close for non-critical alerts"}),`
`,n.jsx(e.li,{children:"Allow sufficient reading time (minimum 5s)"}),`
`,n.jsx(e.li,{children:"Consider pause-on-hover for auto-closing alerts"}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(j,{})]})}function B(s={}){const{wrapper:e}=r(r({},d()),s.components);return e?n.jsx(e,l(r({},s),{children:n.jsx(c,r({},s))})):c(s)}export{B as default};
