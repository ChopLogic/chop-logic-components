var d=Object.defineProperty,h=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var r=(t,e,i)=>e in t?d(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,o=(t,e)=>{for(var i in e||(e={}))x.call(e,i)&&r(t,i,e[i]);if(s)for(var i of s(e))p.call(e,i)&&r(t,i,e[i]);return t},l=(t,e)=>h(t,m(e));import{j as n}from"./iframe-BBnnbBfy.js";import{useMDXComponents as c}from"./index-Cc_5Bw9t.js";import{M as j,b as u}from"./blocks-BqYnnMm3.js";import{E as f}from"./EditableText.stories-Dse6-PkA.js";import"./preload-helper-BDBacUwf.js";import"./index-SbOQj9hQ.js";import"./index-DEQMa67G.js";import"./get-class-name-BY88G7uf.js";function a(t){const e=o(o({code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre"},c()),t.components);return n.jsxs(n.Fragment,{children:[n.jsx(j,{of:f,title:"EditableText"}),`
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
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Accessibility"}),": Always provide a meaningful id and placeholder for better screen reader support."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"User Experience"}),": Use autoSelectTextOnEditMode for fields where users are likely to replace the entire content."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Multi-line Content"}),": Enable multiline for longer text content like descriptions or comments."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"State Management"}),": Handle the onChange callback to update your application state when text changes."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Edit Mode Control"}),": Use the isEditMode prop to programmatically control the editing state."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Read-Only States"}),": Use readOnly when you want to show editable-looking text that cannot be modified."]}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(u,{})]})}function k(t={}){const{wrapper:e}=o(o({},c()),t.components);return e?n.jsx(e,l(o({},t),{children:n.jsx(a,o({},t))})):a(t)}export{k as default};
