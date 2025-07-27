import{j as n}from"./iframe--IBuYMIm.js";import{useMDXComponents as e}from"./index-B2uT0Rcg.js";import{M as s,b as r}from"./blocks-CLsIill3.js";import{B as c}from"./Button.stories-DRjQ6B-G.js";import"./index-B2hGPKdV.js";import"./index-CP8j0TIN.js";import"./Button-BqxMyPGy.js";import"./Header-C12TVa5M.js";import"./Icon-DpSy3F0u.js";import"./get-class-name-CHDn80c0.js";import"./Loader-BO--KrpG.js";import"./Portal-yNe1MKYE.js";import"./use-click-outside-BPiQ2b_j.js";import"./use-key-press-Dj0MNI-N.js";import"./use-tooltip-position-D3oMY-QF.js";import"./use-container-dimensions-CIKAS05A.js";import"./use-window-dimensions-CfT0BYEv.js";function t(i){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...e(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{of:c,title:"Button"}),`
`,n.jsx(o.h1,{id:"choplogicbutton",children:"ChopLogicButton"}),`
`,n.jsxs(o.p,{children:["The ",n.jsx(o.code,{children:"ChopLogicButton"})," component provides a flexible, accessible button with multiple visual styles and configurations. It supports text, icons, tooltips, and various interaction states."]}),`
`,n.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-tsx",children:`import ChopLogicButton, { ChopLogicButtonView, ChopLogicIconName } from 'chop-logic-components';

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
`,n.jsx(o.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,n.jsxs(o.ol,{children:[`
`,n.jsx(o.li,{children:"Automatic ARIA labeling"}),`
`,n.jsx(o.li,{children:"Keyboard focusable"}),`
`,n.jsx(o.li,{children:"Proper disabled state semantics"}),`
`,n.jsx(o.li,{children:"Tooltip integration"}),`
`,n.jsx(o.li,{children:"Screen reader support for icon buttons"}),`
`]}),`
`,n.jsx(o.h3,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsx(o.li,{children:"Always provide labels for icon-only buttons"}),`
`,n.jsx(o.li,{children:"Use primary buttons sparingly for the most important actions"}),`
`,n.jsx(o.li,{children:"Combine icons with text when space allows"}),`
`,n.jsx(o.li,{children:"Consider button hierarchy in forms and dialogs"}),`
`,n.jsx(o.li,{children:"Test keyboard navigation for all interactive elements"}),`
`,n.jsx(o.li,{children:"Use appropriate button types (submit/reset/button) in forms"}),`
`,n.jsx(o.li,{children:"Respect disabled states without removing interactive elements"}),`
`]}),`
`,n.jsx(o.h2,{id:"props",children:"Props"}),`
`,n.jsx(r,{})]})}function v(i={}){const{wrapper:o}={...e(),...i.components};return o?n.jsx(o,{...i,children:n.jsx(t,{...i})}):t(i)}export{v as default};
