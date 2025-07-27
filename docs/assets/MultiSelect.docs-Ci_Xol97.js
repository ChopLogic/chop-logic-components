import{j as e}from"./iframe--IBuYMIm.js";import{useMDXComponents as i}from"./index-B2uT0Rcg.js";import{M as s,b as r}from"./blocks-CLsIill3.js";import{M as l}from"./MultiSelect.stories-dCjB4uQ_.js";import"./index-B2hGPKdV.js";import"./index-CP8j0TIN.js";import"./MultiSelect-nFOyaBs1.js";import"./Header-C12TVa5M.js";import"./Icon-DpSy3F0u.js";import"./get-class-name-CHDn80c0.js";import"./Loader-BO--KrpG.js";import"./Portal-yNe1MKYE.js";import"./use-click-outside-BPiQ2b_j.js";import"./use-key-press-Dj0MNI-N.js";import"./use-tooltip-position-D3oMY-QF.js";import"./use-container-dimensions-CIKAS05A.js";import"./use-window-dimensions-CfT0BYEv.js";import"./Select.module-DHd5GItA.js";import"./use-reset-form-input-D1XtAl5p.js";function t(o){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:l,title:"ChopLogicMultiSelect"}),`
`,e.jsx(n.h1,{id:"choplogicmultiselect",children:"ChopLogicMultiSelect"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ChopLogicMultiSelect"})," component provides an accessible, customizable multi-selection dropdown with keyboard navigation, search filtering, and flexible options management."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import ChopLogicMultiSelect from 'chop-logic-components';

const PreferencesForm = () => {
  const [selected, setSelected] = React.useState([]);
  const options = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' }
  ];

  return (
    <ChopLogicMultiSelect
      name="frameworks"
      label="Select preferred frameworks"
      options={options}
      onChange={(values) => setSelected(values)}
    />
  );
};
`})}),`
`,e.jsx(n.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Keyboard Navigation"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tab to focus the control"}),`
`,e.jsx(n.li,{children:"Arrow keys to navigate options"}),`
`,e.jsx(n.li,{children:"Enter to select/deselect"}),`
`,e.jsx(n.li,{children:"Escape to close dropdown"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Screen Readers"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Proper ARIA attributes for selected state"}),`
`,e.jsx(n.li,{children:"Announcement of options count"}),`
`,e.jsx(n.li,{children:"Clear status messages"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Focus Management"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Trap focus within dropdown when open"}),`
`,e.jsx(n.li,{children:"Return focus to trigger when closed"}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(r,{})]})}function L(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{L as default};
