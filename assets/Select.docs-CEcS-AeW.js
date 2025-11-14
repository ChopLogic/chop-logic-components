var a=Object.defineProperty,h=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var r=(i,n,s)=>n in i?a(i,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[n]=s,o=(i,n)=>{for(var s in n||(n={}))x.call(n,s)&&r(i,s,n[s]);if(l)for(var s of l(n))m.call(n,s)&&r(i,s,n[s]);return i},t=(i,n)=>h(i,p(n));import{j as e}from"./iframe-31bCIIM-.js";import{useMDXComponents as d}from"./index-vnX_0a_R.js";import{M as j,b as u}from"./WithTooltip-SK46ZJ2J-OhzgVWxi.js";import{S as b}from"./Select.stories-CzX3LGz5.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DOxyWH1q.js";import"./index-DT11nKtD.js";import"./ResponsiveWrapper.module-B2uI7vga.js";import"./Select-CXHKa2UQ.js";import"./Label-CUYPr4eH.js";import"./Icon-6YXdsa9S.js";import"./get-class-name-BY88G7uf.js";import"./use-click-outside-CQLMYb8q.js";import"./use-element-ids-1s10h2JT.js";import"./use-key-press-CntNC4so.js";import"./Option.module-BDqhWEs6.js";import"./move-focus-on-element-by-id-CpbS-38o.js";import"./use-reset-form-input-BCncBi71.js";function c(i){const n=o(o({code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul"},d()),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(j,{of:b,title:"Select"}),`
`,e.jsx(n.h1,{id:"select",children:"Select"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Select"})," component provides an accessible, customizable dropdown select input with keyboard navigation and flexible options management."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import Select from 'chop-logic-components';

const CountrySelector = () => {
  const [country, setCountry] = React.useState('');
  const countries = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'mx', label: 'Mexico' },
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
