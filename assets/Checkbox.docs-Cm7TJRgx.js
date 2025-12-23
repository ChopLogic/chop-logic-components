var d=Object.defineProperty,h=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var r=(s,e,i)=>e in s?d(s,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[e]=i,t=(s,e)=>{for(var i in e||(e={}))p.call(e,i)&&r(s,i,e[i]);if(o)for(var i of o(e))m.call(e,i)&&r(s,i,e[i]);return s},c=(s,e)=>h(s,x(e));import{j as n}from"./iframe-DJejKD7f.js";import{useMDXComponents as a}from"./index-C1C3GIxM.js";import{M as j,b as u}from"./blocks-BfAV1-Im.js";import{C as b}from"./Checkbox.stories-DKwq_VhJ.js";import"./preload-helper-BDBacUwf.js";import"./index-0Be67YNH.js";import"./index-D5q0hnWu.js";import"./Checkbox-BVKt9f7Z.js";import"./Label-DeqzO3mM.js";import"./Icon-CmAPyYs8.js";import"./get-class-name-BY88G7uf.js";import"./use-element-ids-oKt-zW1Z.js";import"./use-reset-form-input-R2_GGGA6.js";function l(s){const e=t(t({code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul"},a()),s.components);return n.jsxs(n.Fragment,{children:[n.jsx(j,{of:b,title:"Checkbox"}),`
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
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Label Clarity"}),": Use clear, concise labels that describe the action."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Grouping"}),": Use consistent icon positioning within groups."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Default States"}),": Set sensible defaults for defaultChecked."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Spacing"}),": Maintain consistent spacing between checkboxes."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Feedback"}),": Provide immediate visual feedback on state changes."]}),`
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
`,n.jsx(u,{})]})}function L(s={}){const{wrapper:e}=t(t({},a()),s.components);return e?n.jsx(e,c(t({},s),{children:n.jsx(l,t({},s))})):l(s)}export{L as default};
