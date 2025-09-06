import{j as e}from"./iframe-CcStb-xO.js";import{useMDXComponents as l}from"./index-DRR5r8Q4.js";import{M as t,b as o}from"./blocks-B97lg12T.js";import{E as r}from"./EditableText.stories-yDoedbJH.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DgXRVvnu.js";import"./index-Dv6pZ690.js";import"./EditableText-q3k3r0Uc.js";import"./get-class-name-CHDn80c0.js";function s(i){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:r,title:"EditableText"}),`
`,e.jsx(n.h1,{id:"choplogiceditabletext",children:"ChopLogicEditableText"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"EditableText"})," component allows users to seamlessly edit inline content by clicking on it. It transitions from a read-only view to an editable input field."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import ChopLogicEditableText from 'chop-logic-components';

const UserProfile = () => {
  const [name, setName] = React.useState('John Doe');

  return (
    <div>
      <h2>
        <ChopLogicEditableText
          value={name}
          onChange={setName}
          placeholder="Enter your name"
        />
      </h2>
    </div>
  );
};
`})}),`
`,e.jsx(n.h3,{id:"when-to-use",children:"When to Use"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Smooth transition between read and edit modes"}),`
`,e.jsx(n.li,{children:"Ideal for titles, names, and short descriptions"}),`
`]}),`
`,e.jsx(n.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Keyboard Support"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Enter/Space to enter edit mode"}),`
`,e.jsx(n.li,{children:"Enter to save (single-line)"}),`
`,e.jsx(n.li,{children:"Escape to cancel edits"}),`
`,e.jsx(n.li,{children:"Tab to move focus"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Screen Readers"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Announces edit mode changes"}),`
`,e.jsx(n.li,{children:"Reads placeholder text"}),`
`,e.jsx(n.li,{children:"Indicates required fields"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"Focus Management"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Auto-focuses when entering edit mode"}),`
`,e.jsx(n.li,{children:"Maintains proper focus order"}),`
`,e.jsx(n.li,{children:"Visible focus indicators"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Add validation in onChange handler"}),`
`,e.jsx(n.li,{children:"Provide visual feedback for invalid input"}),`
`,e.jsx(n.li,{children:"Memoize onChange handlers"}),`
`,e.jsx(n.li,{children:"Consider debouncing for frequent updates"}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(o,{})]})}function f(i={}){const{wrapper:n}={...l(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{f as default};
