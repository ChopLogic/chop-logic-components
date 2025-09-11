var d=Object.defineProperty,p=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var r=(t,e,s)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,o=(t,e)=>{for(var s in e||(e={}))h.call(e,s)&&r(t,s,e[s]);if(i)for(var s of i(e))u.call(e,s)&&r(t,s,e[s]);return t},l=(t,e)=>p(t,m(e));import{j as n}from"./iframe-DldSfwU-.js";import{useMDXComponents as a}from"./index-DelgR-sQ.js";import{M as x,b as j}from"./blocks-zF-hAATi.js";import{M as f}from"./MultiSelect.stories-BTimfFZB.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DFfcEqSA.js";import"./index-xpI64LTH.js";import"./MultiSelect-Cl87mKUV.js";import"./Label-bYYRV1Qt.js";import"./use-click-outside-CeFGhHVU.js";import"./use-element-ids-DZYbu-Ny.js";import"./use-key-press-Bs6P8e37.js";import"./get-class-name-CHDn80c0.js";import"./Option.module-CzGdr06F.js";import"./move-focus-on-element-by-id-CpbS-38o.js";import"./ArrowUpIcon-D0Ja-nwN.js";import"./use-reset-form-input-BmkIARUa.js";import"./CheckboxUncheckedIcon-CpVp8Q2V.js";function c(t){const e=o(o({code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul"},a()),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(x,{of:f,title:"MultiSelect"}),`
`,n.jsx(e.h1,{id:"multiselect",children:"MultiSelect"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"MultiSelect"})," component provides an accessible, customizable multi-selection dropdown with keyboard navigation, search filtering, and flexible options management."]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import MultiSelect from 'chop-logic-components';

const PreferencesForm = () => {
  const [selected, setSelected] = React.useState([]);
  const options = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' }
  ];

  return (
    <MultiSelect
      name="frameworks"
      label="Select preferred frameworks"
      options={options}
      onChange={(values) => setSelected(values)}
    />
  );
};
`})}),`
`,n.jsx(e.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Keyboard Navigation"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Tab to focus the control"}),`
`,n.jsx(e.li,{children:"Arrow keys to navigate options"}),`
`,n.jsx(e.li,{children:"Enter to select/deselect"}),`
`,n.jsx(e.li,{children:"Escape to close dropdown"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Screen Readers"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Proper ARIA attributes for selected state"}),`
`,n.jsx(e.li,{children:"Announcement of options count"}),`
`,n.jsx(e.li,{children:"Clear status messages"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Focus Management"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Trap focus within dropdown when open"}),`
`,n.jsx(e.li,{children:"Return focus to trigger when closed"}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(j,{})]})}function z(t={}){const{wrapper:e}=o(o({},a()),t.components);return e?n.jsx(e,l(o({},t),{children:n.jsx(c,o({},t))})):c(t)}export{z as default};
