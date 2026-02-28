import{j as e}from"./iframe-DP4TfwvB.js";import{useMDXComponents as o}from"./index-Cm-1IS7I.js";import{M as s,C as r}from"./blocks-BtqpkElc.js";import{E as l}from"./EditableText.stories-BzorYQBV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CtEmNKun.js";import"./index-DiforBi_.js";import"./get-class-name-BY88G7uf.js";function i(t){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:l,title:"EditableText"}),`
`,e.jsx(n.h1,{id:"editabletext",children:"EditableText"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"EditableText"})," component allows users to seamlessly edit inline content by clicking on it. It transitions from a read-only view to an editable input field."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import EditableText from "chop-logic-components";

const UserProfile = () => {
  const [name, setName] = React.useState("John Doe");

  return (
    <div>
      <h2>
        <EditableText value={name} onChange={setName} placeholder="Enter your name" />
      </h2>
    </div>
  );
};
`})}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Accessibility"}),": Always provide a meaningful id and placeholder for better screen reader support."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"User Experience"}),": Use autoSelectTextOnEditMode for fields where users are likely to replace the entire content."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Multi-line Content"}),": Enable multiline for longer text content like descriptions or comments."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"State Management"}),": Handle the onChange callback to update your application state when text changes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Edit Mode Control"}),": Use the isEditMode prop to programmatically control the editing state."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Read-Only States"}),": Use readOnly when you want to show editable-looking text that cannot be modified."]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(r,{})]})}function u(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{u as default};
