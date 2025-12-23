var m=Object.defineProperty,p=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var i=(t,e,n)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,o=(t,e)=>{for(var n in e||(e={}))h.call(e,n)&&i(t,n,e[n]);if(r)for(var n of r(e))u.call(e,n)&&i(t,n,e[n]);return t},l=(t,e)=>p(t,d(e));import{j as s}from"./iframe-BD2qMxgm.js";import{useMDXComponents as a}from"./index-Brdy1V2t.js";import{M as x,b as j}from"./blocks-D4SsA9Kg.js";import{A as f}from"./Alert.stories-DOsDTlao.js";import"./preload-helper-BDBacUwf.js";import"./index-BdVZIdTJ.js";import"./index-93A79Foz.js";import"./Icon-MLh-kOYM.js";import"./get-class-name-BY88G7uf.js";import"./Button-BnHaWgV4.js";import"./Portal-BHN2Eox0.js";import"./use-click-outside-6cmNVI-U.js";import"./use-element-ids-BbUXXNQn.js";import"./use-key-press-C6A1hwFT.js";import"./use-tooltip-position-D_PdVjAa.js";import"./use-container-dimensions-DStfneKy.js";import"./Header-DF820EaT.js";import"./use-is-mounted-CA-4mbZh.js";function c(t){const e=o(o({code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre"},a()),t.components);return s.jsxs(s.Fragment,{children:[s.jsx(x,{of:f,title:"Alert"}),`
`,s.jsx(e.h1,{id:"alert",children:"Alert"}),`
`,s.jsx(e.p,{children:"A flexible alert component that displays contextual feedback messages to users. Supports multiple modes (info, success, warning, error) with automatic closing, custom icons, and customizable timing."}),`
`,s.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,s.jsx(e.pre,{children:s.jsx(e.code,{className:"language-tsx",children:`import Alert, { AlertMode } from 'chop-logic-components';

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
`,s.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,s.jsxs(e.ol,{children:[`
`,s.jsxs(e.li,{children:[s.jsx(e.em,{children:"Contextual Modes"}),": Use appropriate alert modes to convey the message importance."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.em,{children:"Auto-close Timing"}),": Set appropriate autoCloseDelay values based on message importance (shorter for info, longer for errors)."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.em,{children:"Icon Selection"}),": Choose icons that reinforce the message type and improve visual recognition."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.em,{children:"Content Clarity"}),": Provide clear, concise titles and descriptive messages."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.em,{children:"Accessibility"}),": Ensure proper color contrast and include ARIA labels for different alert types."]}),`
`,s.jsxs(e.li,{children:[s.jsx(e.em,{children:"User Control"}),": Allow users to dismiss important alerts manually when autoClose is disabled."]}),`
`]}),`
`,s.jsx(e.h2,{id:"props",children:"Props"}),`
`,s.jsx(j,{})]})}function k(t={}){const{wrapper:e}=o(o({},a()),t.components);return e?s.jsx(e,l(o({},t),{children:s.jsx(c,o({},t))})):c(t)}export{k as default};
