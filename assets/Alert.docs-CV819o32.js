var m=Object.defineProperty,p=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var i=(s,e,n)=>e in s?m(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n,o=(s,e)=>{for(var n in e||(e={}))h.call(e,n)&&i(s,n,e[n]);if(r)for(var n of r(e))u.call(e,n)&&i(s,n,e[n]);return s},l=(s,e)=>p(s,d(e));import{j as t}from"./iframe-ByKzMmaK.js";import{useMDXComponents as a}from"./index-DeYdrbWI.js";import{M as x,b as j}from"./blocks-Cunk30eN.js";import{A as f}from"./Alert.stories-B-TCmrMw.js";import"./preload-helper-BDBacUwf.js";import"./index-Bb97ILPF.js";import"./index-DUc2eTa5.js";import"./Icon-BZD9s1Z_.js";import"./get-class-name-BY88G7uf.js";import"./Button-Bdkp_iJJ.js";import"./Portal-DBIu6jmP.js";import"./use-click-outside-DREiv8zp.js";import"./use-element-ids-CshNHWkw.js";import"./use-key-press-B_vXJT53.js";import"./use-tooltip-position-DVwfAD7L.js";import"./use-container-dimensions-BqWRrAUW.js";import"./Header-CkmjCWZI.js";import"./use-is-hovered-DtDTtl-s.js";import"./use-is-mounted-Dwmxtqmx.js";import"./use-remaining-timer-BqbDtiMO.js";function c(s){const e=o(o({code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre"},a()),s.components);return t.jsxs(t.Fragment,{children:[t.jsx(x,{of:f,title:"Alert"}),`
`,t.jsx(e.h1,{id:"alert",children:"Alert"}),`
`,t.jsx(e.p,{children:"A flexible alert component that displays contextual feedback messages to users. Supports multiple modes (info, success, warning, error) with automatic closing, custom icons, and customizable timing."}),`
`,t.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import Alert, { AlertMode } from 'chop-logic-components';

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
`,t.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,t.jsxs(e.ol,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.em,{children:"Contextual Modes"}),": Use appropriate alert modes to convey the message importance."]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.em,{children:"Auto-close Timing"}),": Set appropriate autoCloseDelay values based on message importance (shorter for info, longer for errors)."]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.em,{children:"Icon Selection"}),": Choose icons that reinforce the message type and improve visual recognition."]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.em,{children:"Content Clarity"}),": Provide clear, concise titles and descriptive messages."]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.em,{children:"Accessibility"}),": Ensure proper color contrast and include ARIA labels for different alert types."]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.em,{children:"User Control"}),": Allow users to dismiss important alerts manually when autoClose is disabled."]}),`
`]}),`
`,t.jsx(e.h2,{id:"props",children:"Props"}),`
`,t.jsx(j,{})]})}function B(s={}){const{wrapper:e}=o(o({},a()),s.components);return e?t.jsx(e,l(o({},s),{children:t.jsx(c,o({},s))})):c(s)}export{B as default};
