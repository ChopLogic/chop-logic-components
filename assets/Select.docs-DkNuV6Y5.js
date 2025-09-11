var a=Object.defineProperty,h=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var r=(i,n,s)=>n in i?a(i,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[n]=s,o=(i,n)=>{for(var s in n||(n={}))x.call(n,s)&&r(i,s,n[s]);if(l)for(var s of l(n))m.call(n,s)&&r(i,s,n[s]);return i},t=(i,n)=>h(i,p(n));import{j as e}from"./iframe-DldSfwU-.js";import{useMDXComponents as d}from"./index-DelgR-sQ.js";import{M as j,b as u}from"./blocks-zF-hAATi.js";import{S as b}from"./Select.stories-lxQi2so_.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DFfcEqSA.js";import"./index-xpI64LTH.js";import"./Select-C4TW8EtV.js";import"./Label-bYYRV1Qt.js";import"./use-click-outside-CeFGhHVU.js";import"./use-element-ids-DZYbu-Ny.js";import"./use-key-press-Bs6P8e37.js";import"./get-class-name-CHDn80c0.js";import"./ArrowUpIcon-D0Ja-nwN.js";import"./Option.module-CzGdr06F.js";import"./move-focus-on-element-by-id-CpbS-38o.js";import"./CheckMarkIcon-2AL8oS8v.js";import"./use-reset-form-input-BmkIARUa.js";function c(i){const n=o(o({code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul"},d()),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:b,title:"Select"}),`
`,e.jsx(n.h1,{id:"select",children:"Select"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Select"})," component provides an accessible, customizable dropdown select input with keyboard navigation and flexible options management."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Select from 'chop-logic-components';

const CountrySelector = () => {
  const [country, setCountry] = React.useState('');
  const countries = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'mx', label: 'Mexico' }
  ];

  return (
    <Select
      name="country"
      label="Select country"
      options={countries}
      onChange={(value) => setCountry(value)}
    />
  );
};
`})}),`
`,e.jsx(n.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Keyboard Navigation"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tab to focus the control"}),`
`,e.jsx(n.li,{children:"Arrow keys to navigate options"}),`
`,e.jsx(n.li,{children:"Enter to select"}),`
`,e.jsx(n.li,{children:"Escape to close dropdown"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Screen Readers"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Announces selected option"}),`
`,e.jsx(n.li,{children:"Announces when dropdown opens/closes"}),`
`,e.jsx(n.li,{children:"Describes available options"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Focus Management"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Trap focus within dropdown when open"}),`
`,e.jsx(n.li,{children:"Return focus to trigger when closed"}),`
`,e.jsx(n.li,{children:"Maintain focus state during interactions"}),`
`]}),`
`,e.jsx(n.h3,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Option Organization"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Sort options logically (alphabetically, numerically, etc.)"}),`
`,e.jsx(n.li,{children:"Group related options when appropriate"}),`
`,e.jsx(n.li,{children:"Limit to ~50 options (consider search for more)"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Selection Clarity"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use clear, descriptive labels"}),`
`,e.jsx(n.li,{children:"Consider icons for visual reinforcement"}),`
`,e.jsx(n.li,{children:"Show selected value prominently"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Performance"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Virtualize long option lists"}),`
`,e.jsx(n.li,{children:"Memoize options when possible"}),`
`,e.jsx(n.li,{children:"Avoid complex components in dropdown items"}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(u,{})]})}function F(i={}){const{wrapper:n}=o(o({},d()),i.components);return n?e.jsx(n,t(o({},i),{children:e.jsx(c,o({},i))})):c(i)}export{F as default};
