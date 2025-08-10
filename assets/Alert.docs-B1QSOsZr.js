import{j as e}from"./iframe-CpS3OA71.js";import{useMDXComponents as o}from"./index-CFFJi-da.js";import{M as r,b as t}from"./blocks-DsNOP7-Z.js";import{A as l}from"./Alert.stories-wr7pcFQk.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DI3QCFR2.js";import"./index-BvP6XlTP.js";import"./Alert-BfYeklhf.js";import"./Header-19ibYWlv.js";import"./Icon-CL3_h14b.js";import"./get-class-name-CHDn80c0.js";import"./Loader-DspC04OJ.js";import"./Portal-B0CI4Q9X.js";import"./use-click-outside-B4IFcKdH.js";import"./use-key-press-DN_NzfdA.js";import"./use-tooltip-position-bGxlgnwH.js";import"./use-container-dimensions-Caekhqnj.js";import"./use-window-dimensions-BvAb_mA6.js";import"./Button-WGiVFoYy.js";import"./use-is-mounted-BDVYKU_G.js";import"./Checkbox-D9aEDDoB.js";import"./use-reset-form-input-DTTskSWE.js";import"./MultiSelect-D5DRSXqv.js";import"./Select.module-DHd5GItA.js";import"./NumericInput-s1UZKiJ4.js";import"./Select-D_fyW-Hv.js";import"./TextInput-lP0tmycg.js";function s(i){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l,title:"ChopLogicAlert"}),`
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
