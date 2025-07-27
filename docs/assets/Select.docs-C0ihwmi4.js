import{j as n}from"./iframe--IBuYMIm.js";import{useMDXComponents as s}from"./index-B2uT0Rcg.js";import{M as l,b as r}from"./blocks-CLsIill3.js";import{S as t}from"./Select.stories-CT5TgoAH.js";import"./index-B2hGPKdV.js";import"./index-CP8j0TIN.js";import"./Select-CFTdNQer.js";import"./Header-C12TVa5M.js";import"./Icon-DpSy3F0u.js";import"./get-class-name-CHDn80c0.js";import"./Loader-BO--KrpG.js";import"./Portal-yNe1MKYE.js";import"./use-click-outside-BPiQ2b_j.js";import"./use-key-press-Dj0MNI-N.js";import"./use-tooltip-position-D3oMY-QF.js";import"./use-container-dimensions-CIKAS05A.js";import"./use-window-dimensions-CfT0BYEv.js";import"./use-reset-form-input-D1XtAl5p.js";import"./Select.module-DHd5GItA.js";function o(i){const e={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:t,title:"ChopLogicSelect"}),`
`,n.jsx(e.h1,{id:"choplogicselect",children:"ChopLogicSelect"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"ChopLogicSelect"})," component provides an accessible, customizable dropdown select input with keyboard navigation and flexible options management."]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import ChopLogicSelect from 'chop-logic-components';

const CountrySelector = () => {
  const [country, setCountry] = React.useState('');
  const countries = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'mx', label: 'Mexico' }
  ];

  return (
    <ChopLogicSelect
      name="country"
      label="Select country"
      options={countries}
      onChange={(value) => setCountry(value)}
    />
  );
};
`})}),`
`,n.jsx(e.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Keyboard Navigation"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Tab to focus the control"}),`
`,n.jsx(e.li,{children:"Arrow keys to navigate options"}),`
`,n.jsx(e.li,{children:"Enter to select"}),`
`,n.jsx(e.li,{children:"Escape to close dropdown"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Screen Readers"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Announces selected option"}),`
`,n.jsx(e.li,{children:"Announces when dropdown opens/closes"}),`
`,n.jsx(e.li,{children:"Describes available options"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Focus Management"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Trap focus within dropdown when open"}),`
`,n.jsx(e.li,{children:"Return focus to trigger when closed"}),`
`,n.jsx(e.li,{children:"Maintain focus state during interactions"}),`
`]}),`
`,n.jsx(e.h3,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Option Organization"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Sort options logically (alphabetically, numerically, etc.)"}),`
`,n.jsx(e.li,{children:"Group related options when appropriate"}),`
`,n.jsx(e.li,{children:"Limit to ~50 options (consider search for more)"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Selection Clarity"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Use clear, descriptive labels"}),`
`,n.jsx(e.li,{children:"Consider icons for visual reinforcement"}),`
`,n.jsx(e.li,{children:"Show selected value prominently"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Performance"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Virtualize long option lists"}),`
`,n.jsx(e.li,{children:"Memoize options when possible"}),`
`,n.jsx(e.li,{children:"Avoid complex components in dropdown items"}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(r,{})]})}function A(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(o,{...i})}):o(i)}export{A as default};
