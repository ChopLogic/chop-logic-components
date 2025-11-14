var a=Object.defineProperty,h=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var l=(s,e,i)=>e in s?a(s,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[e]=i,r=(s,e)=>{for(var i in e||(e={}))p.call(e,i)&&l(s,i,e[i]);if(t)for(var i of t(e))x.call(e,i)&&l(s,i,e[i]);return s},o=(s,e)=>h(s,m(e));import{j as n}from"./iframe-31bCIIM-.js";import{useMDXComponents as d}from"./index-vnX_0a_R.js";import{M as u,b as j}from"./WithTooltip-SK46ZJ2J-OhzgVWxi.js";import{A as f}from"./Alert.stories-Cn6H41t1.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DOxyWH1q.js";import"./index-DT11nKtD.js";import"./Button-CXfa96Wd.js";import"./Icon-6YXdsa9S.js";import"./get-class-name-BY88G7uf.js";import"./Portal-CMw-vLpD.js";import"./use-click-outside-CQLMYb8q.js";import"./use-element-ids-1s10h2JT.js";import"./use-key-press-CntNC4so.js";import"./use-tooltip-position-CVK-av31.js";import"./use-container-dimensions-DQi1v_pT.js";import"./Header-D1ODPAKb.js";import"./use-is-mounted-C1bU6zYh.js";function c(s){const e=r(r({code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul"},d()),s.components);return n.jsxs(n.Fragment,{children:[n.jsx(u,{of:f,title:"Alert"}),`
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
`,n.jsx(j,{})]})}function L(s={}){const{wrapper:e}=r(r({},d()),s.components);return e?n.jsx(e,o(r({},s),{children:n.jsx(c,r({},s))})):c(s)}export{L as default};
