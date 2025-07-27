import{j as e}from"./iframe--IBuYMIm.js";import{useMDXComponents as o}from"./index-B2uT0Rcg.js";import{M as r,b as t}from"./blocks-CLsIill3.js";import{A as l}from"./Alert.stories-b1vEtJp-.js";import"./index-B2hGPKdV.js";import"./index-CP8j0TIN.js";import"./Alert-l2nOAYr_.js";import"./Header-C12TVa5M.js";import"./Icon-DpSy3F0u.js";import"./get-class-name-CHDn80c0.js";import"./Loader-BO--KrpG.js";import"./Portal-yNe1MKYE.js";import"./use-click-outside-BPiQ2b_j.js";import"./use-key-press-Dj0MNI-N.js";import"./use-tooltip-position-D3oMY-QF.js";import"./use-container-dimensions-CIKAS05A.js";import"./use-window-dimensions-CfT0BYEv.js";import"./Button-BqxMyPGy.js";import"./use-is-mounted-2drd75fE.js";import"./Checkbox-Do2bbQD4.js";import"./use-reset-form-input-D1XtAl5p.js";import"./MultiSelect-nFOyaBs1.js";import"./Select.module-DHd5GItA.js";import"./NumericInput-DZkiHKI_.js";import"./Select-CFTdNQer.js";import"./TextInput-CfNjb3Po.js";function s(i){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l,title:"ChopLogicAlert"}),`
`,e.jsx(n.h1,{id:"choplogicalert",children:"ChopLogicAlert"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ChopLogicDialog"})," component provides an accessible modal dialog with focus management, keyboard navigation, and flexible content structure."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import ChopLogicAlert, { ChopLogicAlertMode } from 'chop-logic-components';

const NotificationSystem = () => {
  const [alertOpen, setAlertOpen] = React.useState(true);

  return (
    <ChopLogicAlert
      isOpened={alertOpen}
      onClose={() => setAlertOpen(false)}
      mode={ChopLogicAlertMode.Success}
      title="Action completed"
      message="Your changes have been saved successfully."
      autoClose
    />
  );
};
`})}),`
`,e.jsx(n.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Focus Management"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Focus returns to trigger element when closed"}),`
`,e.jsx(n.li,{children:"Close button is keyboard accessible"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Screen Readers:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Announces alert content when appears"}),`
`,e.jsx(n.li,{children:"Announces severity level"}),`
`,e.jsx(n.li,{children:"Provides clear close action"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Color Contrast"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ensure sufficient contrast for all modes"}),`
`,e.jsx(n.li,{children:"Test in high contrast modes"}),`
`,e.jsx(n.li,{children:"Provide alternative indicators for color-blind users"}),`
`]}),`
`,e.jsx(n.h3,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Content Guidelines"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Keep titles short (1-5 words)"}),`
`,e.jsx(n.li,{children:"Limit messages to 1-2 sentences"}),`
`,e.jsx(n.li,{children:"Use clear, actionable language"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Timing"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use auto-close for non-critical alerts"}),`
`,e.jsx(n.li,{children:"Allow sufficient reading time (minimum 5s)"}),`
`,e.jsx(n.li,{children:"Consider pause-on-hover for auto-closing alerts"}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(t,{})]})}function T(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{T as default};
