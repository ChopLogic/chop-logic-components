import{j as e}from"./iframe-CcStb-xO.js";import{useMDXComponents as o}from"./index-DRR5r8Q4.js";import{M as r,b as t}from"./blocks-B97lg12T.js";import{A as l}from"./Alert.stories-DcgXHRKN.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DgXRVvnu.js";import"./index-Dv6pZ690.js";import"./Alert-tdHplwZJ.js";import"./EditableText-q3k3r0Uc.js";import"./get-class-name-CHDn80c0.js";import"./Header-BiTp834B.js";import"./Icon-wNEFAMcc.js";import"./Loader-BhAQqttu.js";import"./Portal-CahqD_2f.js";import"./use-click-outside-BOHE6JV_.js";import"./use-key-press-BYb-T9_a.js";import"./use-tooltip-position-C46xlrB6.js";import"./use-container-dimensions-CsRqbGnA.js";import"./use-window-dimensions-C6lhjM_W.js";import"./Button-BpT_NpT1.js";import"./Dropdown-B9vQZ4D_.js";import"./use-is-mounted-B3mWglcN.js";import"./Checkbox-tGBE6wEh.js";import"./use-reset-form-input-BKI7i7oO.js";import"./MultiSelect-Cf-voyBX.js";import"./Select.module-DHd5GItA.js";import"./NumericInput-D8kBOieZ.js";import"./Select-BmZ8RkA4.js";import"./TextInput-B3eC91JC.js";function s(i){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l,title:"ChopLogicAlert"}),`
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
`,e.jsx(t,{})]})}function k(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{k as default};
