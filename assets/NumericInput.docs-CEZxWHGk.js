import{j as n}from"./iframe-CcStb-xO.js";import{useMDXComponents as t}from"./index-DRR5r8Q4.js";import{M as r,b as o}from"./blocks-B97lg12T.js";import{S as l}from"./NumericInput.stories-CH3-CAi6.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DgXRVvnu.js";import"./index-Dv6pZ690.js";import"./NumericInput-D8kBOieZ.js";import"./EditableText-q3k3r0Uc.js";import"./get-class-name-CHDn80c0.js";import"./Header-BiTp834B.js";import"./Icon-wNEFAMcc.js";import"./Loader-BhAQqttu.js";import"./Portal-CahqD_2f.js";import"./use-click-outside-BOHE6JV_.js";import"./use-key-press-BYb-T9_a.js";import"./use-tooltip-position-C46xlrB6.js";import"./use-container-dimensions-CsRqbGnA.js";import"./use-window-dimensions-C6lhjM_W.js";import"./Button-BpT_NpT1.js";import"./Dropdown-B9vQZ4D_.js";import"./use-reset-form-input-BKI7i7oO.js";function s(i){const e={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:l,title:"ChopLogicNumericInput"}),`
`,n.jsx(e.h1,{id:"choplogicnumericinput",children:"ChopLogicNumericInput"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"ChopLogicNumericInput"})," component provides a controlled numeric input field with spin buttons, validation, and accessibility features."]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import ChopLogicNumericInput from 'chop-logic-components';

const QuantitySelector = () => {
  const [quantity, setQuantity] = React.useState(1);

  return (
    <ChopLogicNumericInput
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
`,n.jsx(e.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Keyboard Navigation"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Tab to focus the input"}),`
`,n.jsx(e.li,{children:"Arrow keys to increment/decrement"}),`
`,n.jsx(e.li,{children:"Home/End to min/max values"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Screen Readers"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Announces value changes"}),`
`,n.jsx(e.li,{children:"Announces validation errors"}),`
`,n.jsx(e.li,{children:"Describes spin button actions"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Focus Management"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Maintains focus during spin button interactions"}),`
`,n.jsx(e.li,{children:"Proper focus states for all interactive elements"}),`
`]}),`
`,n.jsx(e.h3,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Validation"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Always provide errorMessage when using validation"}),`
`,n.jsx(e.li,{children:"Combine built-in min/max with custom validation when needed"}),`
`,n.jsx(e.li,{children:"Display validation errors clearly"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Value Ranges"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Set sensible defaults for min/max"}),`
`,n.jsx(e.li,{children:"Consider the expected range of values"}),`
`,n.jsx(e.li,{children:"Adjust step size appropriately for the context"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.em,{children:"Mobile Considerations"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Ensure touch targets are large enough"}),`
`,n.jsx(e.li,{children:"Consider virtual keyboard input modes"}),`
`,n.jsx(e.li,{children:"Test with screen magnifiers"}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(o,{})]})}function I(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{I as default};
