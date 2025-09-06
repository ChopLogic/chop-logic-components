import{j as e}from"./iframe-CcStb-xO.js";import{useMDXComponents as i}from"./index-DRR5r8Q4.js";import{M as s,b as r}from"./blocks-B97lg12T.js";import{M as l}from"./MultiSelect.stories-Bl_dQrbN.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DgXRVvnu.js";import"./index-Dv6pZ690.js";import"./MultiSelect-Cf-voyBX.js";import"./EditableText-q3k3r0Uc.js";import"./get-class-name-CHDn80c0.js";import"./Header-BiTp834B.js";import"./Icon-wNEFAMcc.js";import"./Loader-BhAQqttu.js";import"./Portal-CahqD_2f.js";import"./use-click-outside-BOHE6JV_.js";import"./use-key-press-BYb-T9_a.js";import"./use-tooltip-position-C46xlrB6.js";import"./use-container-dimensions-CsRqbGnA.js";import"./use-window-dimensions-C6lhjM_W.js";import"./Dropdown-B9vQZ4D_.js";import"./Select.module-DHd5GItA.js";import"./use-reset-form-input-BKI7i7oO.js";function t(o){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:l,title:"ChopLogicMultiSelect"}),`
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
`,e.jsx(r,{})]})}function D(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{D as default};
