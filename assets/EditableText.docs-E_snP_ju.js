var a=Object.defineProperty,h=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var r=(i,e,s)=>e in i?a(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s,l=(i,e)=>{for(var s in e||(e={}))j.call(e,s)&&r(i,s,e[s]);if(t)for(var s of t(e))m.call(e,s)&&r(i,s,e[s]);return i},o=(i,e)=>h(i,x(e));import{j as n}from"./iframe-Dwcaj2QA.js";import{useMDXComponents as c}from"./index-CI7Eu6Yl.js";import{M as p,b as u}from"./WithTooltip-SK46ZJ2J-CYLl_01T.js";import{E as f}from"./EditableText.stories-DqVNWjQ5.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BRh9Y6jq.js";import"./index-CP_tCMHU.js";import"./get-class-name-BY88G7uf.js";function d(i){const e=l(l({code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul"},c()),i.components);return n.jsxs(n.Fragment,{children:[n.jsx(p,{of:f,title:"EditableText"}),`
`,n.jsx(e.h1,{id:"editabletext",children:"EditableText"}),`
`,n.jsxs(e.p,{children:["The ",n.jsx(e.code,{children:"EditableText"})," component allows users to seamlessly edit inline content by clicking on it. It transitions from a read-only view to an editable input field."]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import EditableText from 'chop-logic-components';

const UserProfile = () => {
  const [name, setName] = React.useState('John Doe');

  return (
    <div>
      <h2>
        <EditableText value={name} onChange={setName} placeholder="Enter your name" />
      </h2>
    </div>
  );
};
`})}),`
`,n.jsx(e.h3,{id:"when-to-use",children:"When to Use"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Smooth transition between read and edit modes"}),`
`,n.jsx(e.li,{children:"Ideal for titles, names, and short descriptions"}),`
`]}),`
`,n.jsx(e.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.em,{children:"Keyboard Support"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Enter/Space to enter edit mode"}),`
`,n.jsx(e.li,{children:"Enter to save (single-line)"}),`
`,n.jsx(e.li,{children:"Escape to cancel edits"}),`
`,n.jsx(e.li,{children:"Tab to move focus"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.em,{children:"Screen Readers"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Announces edit mode changes"}),`
`,n.jsx(e.li,{children:"Reads placeholder text"}),`
`,n.jsx(e.li,{children:"Indicates required fields"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.em,{children:"Focus Management"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Auto-focuses when entering edit mode"}),`
`,n.jsx(e.li,{children:"Maintains proper focus order"}),`
`,n.jsx(e.li,{children:"Visible focus indicators"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Add validation in onChange handler"}),`
`,n.jsx(e.li,{children:"Provide visual feedback for invalid input"}),`
`,n.jsx(e.li,{children:"Memoize onChange handlers"}),`
`,n.jsx(e.li,{children:"Consider debouncing for frequent updates"}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(u,{})]})}function S(i={}){const{wrapper:e}=l(l({},c()),i.components);return e?n.jsx(e,o(l({},i),{children:n.jsx(d,l({},i))})):d(i)}export{S as default};
