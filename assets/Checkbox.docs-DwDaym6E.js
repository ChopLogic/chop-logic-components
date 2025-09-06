import{j as e}from"./iframe-CcStb-xO.js";import{useMDXComponents as t}from"./index-DRR5r8Q4.js";import{M as s,b as r}from"./blocks-B97lg12T.js";import{C as c}from"./Checkbox.stories-C50F-iVz.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DgXRVvnu.js";import"./index-Dv6pZ690.js";import"./Checkbox-tGBE6wEh.js";import"./Icon-wNEFAMcc.js";import"./get-class-name-CHDn80c0.js";import"./EditableText-q3k3r0Uc.js";import"./Header-BiTp834B.js";import"./Loader-BhAQqttu.js";import"./Portal-CahqD_2f.js";import"./use-click-outside-BOHE6JV_.js";import"./use-key-press-BYb-T9_a.js";import"./use-tooltip-position-C46xlrB6.js";import"./use-container-dimensions-CsRqbGnA.js";import"./use-window-dimensions-C6lhjM_W.js";import"./use-reset-form-input-BKI7i7oO.js";function o(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c,title:"ChopLogicCheckbox"}),`
`,e.jsx(n.h1,{id:"choplogiccheckbox",children:"ChopLogicCheckbox"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ChopLogicCheckbox"})," component provides a customizable, accessible checkbox input with label support, validation states, and flexible icon positioning."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import ChopLogicCheckbox from 'chop-logic-components';

const PreferencesForm = () => {
  const [newsletter, setNewsletter] = React.useState(false);

  return (
    <form>
      <ChopLogicCheckbox
        name="newsletter"
        label="Subscribe to newsletter"
        checked={newsletter}
        onChange={(e) => setNewsletter(e.target.checked)}
      />
    </form>
  );
};
`})}),`
`,e.jsx(n.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Always provide a meaningful label prop (even when using noLabel)"}),`
`,e.jsx(n.li,{children:"Use required prop for form validation requirements"}),`
`,e.jsx(n.li,{children:"Ensure proper color contrast for all states"}),`
`,e.jsx(n.li,{children:"Test keyboard navigation (Space to toggle)"}),`
`,e.jsxs(n.li,{children:["Pair groups of checkboxes with ",e.jsx(n.code,{children:"<fieldset>"})," and ",e.jsx(n.code,{children:"<legend>"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Label Clarity: Use clear, concise labels that describe the action"}),`
`,e.jsx(n.li,{children:"Grouping: Use consistent icon positioning within groups"}),`
`,e.jsx(n.li,{children:"Default States: Set sensible defaults for defaultChecked"}),`
`,e.jsx(n.li,{children:"Spacing: Maintain consistent spacing between checkboxes"}),`
`,e.jsx(n.li,{children:"Feedback: Provide immediate visual feedback on state changes"}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(r,{})]})}function P(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{P as default};
