var d=Object.defineProperty,h=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var o=(s,e,t)=>e in s?d(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,i=(s,e)=>{for(var t in e||(e={}))m.call(e,t)&&o(s,t,e[t]);if(l)for(var t of l(e))p.call(e,t)&&o(s,t,e[t]);return s},r=(s,e)=>h(s,x(e));import{j as n}from"./iframe-CD-frcvH.js";import{useMDXComponents as a}from"./index-_ZbGk_Ih.js";import{M as u,b as j}from"./blocks-ymH_-mwP.js";import{C as b}from"./Checkbox.stories-gYdqXlpr.js";import"./preload-helper-BDBacUwf.js";import"./index-C3T1o3xO.js";import"./index-B0E5RUGE.js";import"./Checkbox-Cuozax86.js";import"./Label-ByMmsEMn.js";import"./Icon-B65JLDHH.js";import"./get-class-name-BY88G7uf.js";import"./use-element-ids-wl8PXiJz.js";import"./use-reset-form-input-BnHQOTg2.js";function c(s){const e=i(i({code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul"},a()),s.components);return n.jsxs(n.Fragment,{children:[n.jsx(u,{of:b,title:"Checkbox"}),`
`,n.jsx(e.h1,{id:"checkbox",children:"Checkbox"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"Checkbox"})," component is a customizable, accessible checkbox input that supports both stateful and stateless modes. It includes label support, validation states, and flexible icon positioning."]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.h3,{id:"stateful-default",children:"Stateful (Default)"}),`
`,n.jsxs(e.p,{children:["When ",n.jsx(e.code,{children:"stateless"})," is false or omitted, the component manages its own state internally. Perfect for simple forms where you don't need external control."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import Checkbox from 'chop-logic-components';

<Checkbox
  name="newsletter"
  label="Subscribe to newsletter"
  defaultChecked={false}
  onChange={(event) => console.log(event)}
/>;
`})}),`
`,n.jsx(e.h3,{id:"stateless",children:"Stateless"}),`
`,n.jsxs(e.p,{children:["When ",n.jsx(e.code,{children:"stateless"})," is true, the component is fully controlled via the ",n.jsx(e.code,{children:"checked"})," prop. You manage state externally and provide all handlers."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import Checkbox from 'chop-logic-components';

const [isSubscribed, setIsSubscribed] = useState(false);

<Checkbox
  name="newsletter"
  label="Subscribe to newsletter"
  stateless
  checked={isSubscribed}
  onChange={(event) => setIsSubscribed(event.target.checked)}
/>;
`})}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Label Clarity"}),": Use clear, concise labels that describe the action."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Grouping"}),": Use consistent icon positioning within groups."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Default States"}),": Set sensible defaults for defaultChecked (stateful) or checked (stateless)."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Spacing"}),": Maintain consistent spacing between checkboxes."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Feedback"}),": Provide immediate visual feedback on state changes."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Controlled vs Uncontrolled"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Use stateful mode (default) for simple, isolated checkboxes"}),`
`,n.jsx(e.li,{children:"Use stateless mode when you need fine-grained control or integration with state management"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Accessibility Notes"}),":",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Always provide a meaningful label prop (even when using noLabel);"}),`
`,n.jsx(e.li,{children:"Use required prop for form validation requirements;"}),`
`,n.jsx(e.li,{children:"Ensure proper color contrast for all states;"}),`
`,n.jsx(e.li,{children:"Test keyboard navigation (Space to toggle);"}),`
`,n.jsxs(e.li,{children:["Pair groups of checkboxes with ",n.jsx(e.code,{children:"<fieldset>"})," and ",n.jsx(e.code,{children:"<legend>"}),"."]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(j,{})]})}function N(s={}){const{wrapper:e}=i(i({},a()),s.components);return e?n.jsx(e,r(i({},s),{children:n.jsx(c,i({},s))})):c(s)}export{N as default};
