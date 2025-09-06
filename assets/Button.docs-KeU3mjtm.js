import{j as o}from"./iframe-CcStb-xO.js";import{useMDXComponents as e}from"./index-DRR5r8Q4.js";import{M as s,b as r}from"./blocks-B97lg12T.js";import{B as c}from"./Button.stories-Cu8gkzZI.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DgXRVvnu.js";import"./index-Dv6pZ690.js";import"./Button-BpT_NpT1.js";import"./EditableText-q3k3r0Uc.js";import"./get-class-name-CHDn80c0.js";import"./Header-BiTp834B.js";import"./Icon-wNEFAMcc.js";import"./Loader-BhAQqttu.js";import"./Portal-CahqD_2f.js";import"./use-click-outside-BOHE6JV_.js";import"./use-key-press-BYb-T9_a.js";import"./use-tooltip-position-C46xlrB6.js";import"./use-container-dimensions-CsRqbGnA.js";import"./use-window-dimensions-C6lhjM_W.js";import"./Dropdown-B9vQZ4D_.js";function t(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...e(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:c,title:"Button"}),`
`,o.jsx(n.h1,{id:"choplogicbutton",children:"ChopLogicButton"}),`
`,o.jsxs(n.p,{children:["The ",o.jsx(n.code,{children:"ChopLogicButton"})," component provides a flexible, accessible button with multiple visual styles and configurations. It supports text, icons, tooltips, and various interaction states."]}),`
`,o.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,o.jsx(n.pre,{children:o.jsx(n.code,{className:"language-tsx",children:`import ChopLogicButton, { ChopLogicButtonView, ChopLogicIconName } from 'chop-logic-components';

const ExampleForm = () => (
  <form>
    <ChopLogicButton
      view={ChopLogicButtonView.Primary}
      text="Submit"
      icon={ChopLogicIconName.Check}
      onClick={() => console.log('Clicked!')}
    />
    <ChopLogicButton
      view={ChopLogicButtonView.Icon}
      icon={ChopLogicIconName.Settings}
      label="Settings"
    />
  </form>
);
`})}),`
`,o.jsx(n.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,o.jsxs(n.ol,{children:[`
`,o.jsx(n.li,{children:"Automatic ARIA labeling"}),`
`,o.jsx(n.li,{children:"Keyboard focusable"}),`
`,o.jsx(n.li,{children:"Proper disabled state semantics"}),`
`,o.jsx(n.li,{children:"Tooltip integration"}),`
`,o.jsx(n.li,{children:"Screen reader support for icon buttons"}),`
`]}),`
`,o.jsx(n.h3,{id:"best-practices",children:"Best Practices"}),`
`,o.jsxs(n.ul,{children:[`
`,o.jsx(n.li,{children:"Always provide labels for icon-only buttons"}),`
`,o.jsx(n.li,{children:"Use primary buttons sparingly for the most important actions"}),`
`,o.jsx(n.li,{children:"Combine icons with text when space allows"}),`
`,o.jsx(n.li,{children:"Consider button hierarchy in forms and dialogs"}),`
`,o.jsx(n.li,{children:"Test keyboard navigation for all interactive elements"}),`
`,o.jsx(n.li,{children:"Use appropriate button types (submit/reset/button) in forms"}),`
`,o.jsx(n.li,{children:"Respect disabled states without removing interactive elements"}),`
`]}),`
`,o.jsx(n.h2,{id:"props",children:"Props"}),`
`,o.jsx(r,{})]})}function A(i={}){const{wrapper:n}={...e(),...i.components};return n?o.jsx(n,{...i,children:o.jsx(t,{...i})}):t(i)}export{A as default};
