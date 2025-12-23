var d=Object.defineProperty,p=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var r=(n,e,i)=>e in n?d(n,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[e]=i,l=(n,e)=>{for(var i in e||(e={}))h.call(e,i)&&r(n,i,e[i]);if(s)for(var i of s(e))u.call(e,i)&&r(n,i,e[i]);return n},o=(n,e)=>p(n,m(e));import{j as t}from"./iframe-BD2qMxgm.js";import{useMDXComponents as c}from"./index-Brdy1V2t.js";import{M as x,b as j}from"./blocks-D4SsA9Kg.js";import{M as f}from"./MultiSelect.stories-nYHYvN5d.js";import"./preload-helper-BDBacUwf.js";import"./index-BdVZIdTJ.js";import"./index-93A79Foz.js";import"./ResponsiveWrapper.module-CBt-uAwD.js";import"./MultiSelect-qUzm-Pbs.js";import"./Label-BpwB659L.js";import"./Icon-MLh-kOYM.js";import"./get-class-name-BY88G7uf.js";import"./use-click-outside-6cmNVI-U.js";import"./use-element-ids-BbUXXNQn.js";import"./use-key-press-C6A1hwFT.js";import"./Option.module-CTReddGl.js";import"./move-focus-on-element-by-id-CpbS-38o.js";import"./use-reset-form-input-ckiXdsA5.js";function a(n){const e=l(l({code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre"},c()),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(x,{of:f,title:"MultiSelect"}),`
`,t.jsx(e.h1,{id:"multiselect",children:"MultiSelect"}),`
`,t.jsx(e.p,{children:"A multi-selection input component that allows users to select multiple options from a dropdown list. Supports search functionality, custom options, and flexible selection management with proper accessibility features."}),`
`,t.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`import MultiSelect from 'chop-logic-components';

const PreferencesForm = () => {
  const [selected, setSelected] = React.useState([]);
  const options = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
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
`,t.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,t.jsxs(e.ol,{children:[`
`,t.jsxs(e.li,{children:[t.jsx(e.em,{children:"Clear Labeling"}),": Always provide a descriptive label that explains what options are available"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.em,{children:"Accessibility"}),": Ensure proper ARIA labels and keyboard navigation for the dropdown and selection items"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.em,{children:"Option Organization"}),": Group related options logically and consider alphabetical sorting for long lists"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.em,{children:"Selection Feedback"}),": Clearly indicate selected items and provide visual feedback when options are toggled"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.em,{children:"Search Functionality"}),": Implement search/filter for lists with more than 10 options to improve usability"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.em,{children:"Placeholder Text"}),": Use helpful placeholder text that guides users on what to select"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.em,{children:"Required Fields"}),": Mark required fields clearly and provide validation feedback"]}),`
`,t.jsxs(e.li,{children:[t.jsx(e.em,{children:"Disabled States"}),": Use disabled state appropriately when selection is not currently available"]}),`
`]}),`
`,t.jsx(e.h2,{id:"props",children:"Props"}),`
`,t.jsx(j,{})]})}function L(n={}){const{wrapper:e}=l(l({},c()),n.components);return e?t.jsx(e,o(l({},n),{children:t.jsx(a,l({},n))})):a(n)}export{L as default};
