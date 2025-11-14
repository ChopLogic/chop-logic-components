var d=Object.defineProperty,h=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var l=(i,n,s)=>n in i?d(i,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[n]=s,t=(i,n)=>{for(var s in n||(n={}))u.call(n,s)&&l(i,s,n[s]);if(r)for(var s of r(n))p.call(n,s)&&l(i,s,n[s]);return i},o=(i,n)=>h(i,m(n));import{j as e}from"./iframe-31bCIIM-.js";import{useMDXComponents as a}from"./index-vnX_0a_R.js";import{M as x,b as j}from"./WithTooltip-SK46ZJ2J-OhzgVWxi.js";import{S as f}from"./NumericInput.stories-Ynqt5r17.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DOxyWH1q.js";import"./index-DT11nKtD.js";import"./ResponsiveWrapper.module-B2uI7vga.js";import"./NumericInput-pv7xly4W.js";import"./Button-CXfa96Wd.js";import"./Icon-6YXdsa9S.js";import"./get-class-name-BY88G7uf.js";import"./Portal-CMw-vLpD.js";import"./use-click-outside-CQLMYb8q.js";import"./use-element-ids-1s10h2JT.js";import"./use-key-press-CntNC4so.js";import"./use-tooltip-position-CVK-av31.js";import"./use-container-dimensions-DQi1v_pT.js";import"./ErrorMessage-BRRNjNnd.js";import"./Input-C0t7afCd.js";import"./Label-CUYPr4eH.js";import"./use-reset-form-input-BCncBi71.js";function c(i){const n=t(t({code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul"},a()),i.components);return e.jsxs(e.Fragment,{children:[e.jsx(x,{of:f,title:"NumericInput"}),`
`,e.jsx(n.h1,{id:"numericinput",children:"NumericInput"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"NumericInput"})," component provides a controlled numeric input field with spin buttons, validation, and accessibility features."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import NumericInput from 'chop-logic-components';

const QuantitySelector = () => {
  const [quantity, setQuantity] = React.useState(1);

  return (
    <NumericInput
      name="quantity"
      label="Quantity"
      min={1}
      max={10}
      step={1}
      defaultValue={1}
      onChange={(value) => setQuantity(value)}
    />
  );
};
`})}),`
`,e.jsx(n.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Keyboard Navigation"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tab to focus the input"}),`
`,e.jsx(n.li,{children:"Arrow keys to increment/decrement"}),`
`,e.jsx(n.li,{children:"Home/End to min/max values"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Screen Readers"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Announces value changes"}),`
`,e.jsx(n.li,{children:"Announces validation errors"}),`
`,e.jsx(n.li,{children:"Describes spin button actions"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Focus Management"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Maintains focus during spin button interactions"}),`
`,e.jsx(n.li,{children:"Proper focus states for all interactive elements"}),`
`]}),`
`,e.jsx(n.h3,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Validation"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Always provide errorMessage when using validation"}),`
`,e.jsx(n.li,{children:"Combine built-in min/max with custom validation when needed"}),`
`,e.jsx(n.li,{children:"Display validation errors clearly"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Value Ranges"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Set sensible defaults for min/max"}),`
`,e.jsx(n.li,{children:"Consider the expected range of values"}),`
`,e.jsx(n.li,{children:"Adjust step size appropriately for the context"}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Mobile Considerations"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ensure touch targets are large enough"}),`
`,e.jsx(n.li,{children:"Consider virtual keyboard input modes"}),`
`,e.jsx(n.li,{children:"Test with screen magnifiers"}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(j,{})]})}function z(i={}){const{wrapper:n}=t(t({},a()),i.components);return n?e.jsx(n,o(t({},i),{children:e.jsx(c,t({},i))})):c(i)}export{z as default};
