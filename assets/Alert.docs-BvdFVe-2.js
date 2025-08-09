import{j as e}from"./iframe-CBEd8IQ4.js";import{useMDXComponents as o}from"./index-C9KoPMn0.js";import{M as r,b as t}from"./blocks-QN0Lq6G6.js";import{A as l}from"./Alert.stories-CYxltR_c.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dc5cMB9D.js";import"./index-CKZPfEin.js";import"./Alert-9Dq2KxLl.js";import"./Header-CSxk79h1.js";import"./Icon-BhaWZDu4.js";import"./get-class-name-CHDn80c0.js";import"./Loader-CbQUfs1L.js";import"./Portal-BvJ0_6BA.js";import"./use-click-outside-CCfvGGcE.js";import"./use-key-press-BipOIjs9.js";import"./use-tooltip-position-Bo0oDeW_.js";import"./use-container-dimensions-CK3iJYmt.js";import"./use-window-dimensions-CXgdx2fM.js";import"./Button-Beo9UBTU.js";import"./use-is-mounted-DaLmmxHE.js";import"./Checkbox-B3oaHqII.js";import"./use-reset-form-input-KFMp1UJi.js";import"./MultiSelect-BSeV9oRK.js";import"./Select.module-DHd5GItA.js";import"./NumericInput-BK_dM8sf.js";import"./Select-tyqI0LNu.js";import"./TextInput-Ym5_0I8V.js";function s(i){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l,title:"ChopLogicAlert"}),`
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
`,e.jsx(t,{})]})}function U(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{U as default};
