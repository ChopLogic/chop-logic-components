var h=Object.defineProperty,d=Object.defineProperties;var p=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var r=(s,e,i)=>e in s?h(s,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[e]=i,t=(s,e)=>{for(var i in e||(e={}))x.call(e,i)&&r(s,i,e[i]);if(o)for(var i of o(e))m.call(e,i)&&r(s,i,e[i]);return s},c=(s,e)=>d(s,p(e));import{j as n}from"./iframe-DldSfwU-.js";import{useMDXComponents as a}from"./index-DelgR-sQ.js";import{M as b,b as u}from"./blocks-zF-hAATi.js";import{C as j}from"./Checkbox.stories-CZvKZGJ-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DFfcEqSA.js";import"./index-xpI64LTH.js";import"./Checkbox-DrQbMiKd.js";import"./CheckboxUncheckedIcon-CpVp8Q2V.js";import"./Label-bYYRV1Qt.js";import"./use-element-ids-DZYbu-Ny.js";import"./get-class-name-CHDn80c0.js";import"./use-reset-form-input-BmkIARUa.js";function l(s){const e=t(t({code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul"},a()),s.components);return n.jsxs(n.Fragment,{children:[n.jsx(b,{of:j,title:"Checkbox"}),`
`,n.jsx(e.h1,{id:"checkbox",children:"Checkbox"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"Checkbox"})," component provides a customizable, accessible checkbox input with label support, validation states, and flexible icon positioning."]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import Checkbox from 'chop-logic-components';

const PreferencesForm = () => {
  const [newsletter, setNewsletter] = React.useState(false);

  return (
    <form>
      <Checkbox
        name="newsletter"
        label="Subscribe to newsletter"
        checked={newsletter}
        onChange={(e) => setNewsletter(e.target.checked)}
      />
    </form>
  );
};
`})}),`
`,n.jsx(e.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Always provide a meaningful label prop (even when using noLabel)"}),`
`,n.jsx(e.li,{children:"Use required prop for form validation requirements"}),`
`,n.jsx(e.li,{children:"Ensure proper color contrast for all states"}),`
`,n.jsx(e.li,{children:"Test keyboard navigation (Space to toggle)"}),`
`,n.jsxs(e.li,{children:["Pair groups of checkboxes with ",n.jsx(e.code,{children:"<fieldset>"})," and ",n.jsx(e.code,{children:"<legend>"})]}),`
`]}),`
`,n.jsx(e.h3,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Label Clarity: Use clear, concise labels that describe the action"}),`
`,n.jsx(e.li,{children:"Grouping: Use consistent icon positioning within groups"}),`
`,n.jsx(e.li,{children:"Default States: Set sensible defaults for defaultChecked"}),`
`,n.jsx(e.li,{children:"Spacing: Maintain consistent spacing between checkboxes"}),`
`,n.jsx(e.li,{children:"Feedback: Provide immediate visual feedback on state changes"}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(u,{})]})}function L(s={}){const{wrapper:e}=t(t({},a()),s.components);return e?n.jsx(e,c(t({},s),{children:n.jsx(l,t({},s))})):l(s)}export{L as default};
