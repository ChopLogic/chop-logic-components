import{j as e}from"./iframe-Doc73XE3.js";import{useMDXComponents as r}from"./index-BeVWJvHh.js";import{M as n,C as i}from"./blocks-B9t17XrR.js";import{A as l}from"./Alert.stories-aaZS1Xp5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ECW4Oirl.js";import"./index-CyugzvtL.js";import"./icon-name-DofyCo9k.js";import"./Button-CDhvcQ58.js";import"./get-class-name-BY88G7uf.js";import"./Portal-ICGrjoGN.js";import"./use-click-outside-B0EspTvx.js";import"./use-element-ids--HzG7Pmw.js";import"./use-key-press-XWebfcyU.js";import"./use-tooltip-position-hOUImksK.js";import"./use-container-dimensions-BWSM9TyR.js";import"./Icon-DTjVTp_9.js";import"./Header-DoHlOX-u.js";import"./use-is-hovered-BRGXc0aa.js";import"./use-is-mounted-BNmBF3cP.js";import"./use-remaining-timer-BJkhR8O0.js";function o(s){const t={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n,{of:l,title:"Alert"}),`
`,e.jsx(t.h1,{id:"alert",children:"Alert"}),`
`,e.jsx(t.p,{children:"A flexible alert component that displays contextual feedback messages to users. Supports multiple modes (info, success, warning, error) with automatic closing, custom icons, and customizable timing."}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import Alert, { AlertMode } from "chop-logic-components";

const NotificationSystem = () => {
  const [alertOpen, setAlertOpen] = React.useState(true);

  return <Alert isOpened={alertOpen} onClose={() => setAlertOpen(false)} mode={AlertMode.Success} title="Action completed" message="Your changes have been saved successfully." autoClose />;
};
`})}),`
`,e.jsx(t.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.em,{children:"Contextual Modes"}),": Use appropriate alert modes to convey the message importance."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.em,{children:"Auto-close Timing"}),": Set appropriate autoCloseDelay values based on message importance (shorter for info, longer for errors)."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.em,{children:"Icon Selection"}),": Choose icons that reinforce the message type and improve visual recognition."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.em,{children:"Content Clarity"}),": Provide clear, concise titles and descriptive messages."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.em,{children:"Accessibility"}),": Ensure proper color contrast and include ARIA labels for different alert types."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.em,{children:"User Control"}),": Allow users to dismiss important alerts manually when autoClose is disabled."]}),`
`]}),`
`,e.jsx(t.h2,{id:"props",children:"Props"}),`
`,e.jsx(i,{})]})}function P(s={}){const{wrapper:t}={...r(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(o,{...s})}):o(s)}export{P as default};
