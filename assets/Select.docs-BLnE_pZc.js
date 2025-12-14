var p=Object.defineProperty,m=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var s=(t,e,o)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,i=(t,e)=>{for(var o in e||(e={}))h.call(e,o)&&s(t,o,e[o]);if(r)for(var o of r(e))u.call(e,o)&&s(t,o,e[o]);return t},l=(t,e)=>m(t,d(e));import{j as n}from"./iframe-BBnnbBfy.js";import{useMDXComponents as a}from"./index-Cc_5Bw9t.js";import{M as x,b as j}from"./blocks-BqYnnMm3.js";import{S as b}from"./Select.stories-BMmZR0Jl.js";import"./preload-helper-BDBacUwf.js";import"./index-SbOQj9hQ.js";import"./index-DEQMa67G.js";import"./ResponsiveWrapper.module-B2uI7vga.js";import"./Select-CPTUY-dX.js";import"./Label-B6LNTjBB.js";import"./Icon-D3WKOnh1.js";import"./get-class-name-BY88G7uf.js";import"./use-click-outside-DjUKgA7z.js";import"./use-element-ids-C6GSgMsY.js";import"./use-key-press-DVz4EUJw.js";import"./Option.module-BDqhWEs6.js";import"./move-focus-on-element-by-id-CpbS-38o.js";import"./use-reset-form-input-B7TsAlka.js";function c(t){const e=i(i({code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre"},a()),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(x,{of:b,title:"Select"}),`
`,n.jsx(e.h1,{id:"select",children:"Select"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"Select"})," component provides an accessible, customizable dropdown select input with keyboard navigation and flexible options management."]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import Select from 'chop-logic-components';

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
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Option Organization"}),": Sort options logically (alphabetically, numerically, etc.) and group related options when appropriate."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Selection Clarity"}),": Use clear, descriptive labels."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Performance"}),": Virtualize long option lists and memoize options when possible."]}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(j,{})]})}function F(t={}){const{wrapper:e}=i(i({},a()),t.components);return e?n.jsx(e,l(i({},t),{children:n.jsx(c,i({},t))})):c(t)}export{F as default};
