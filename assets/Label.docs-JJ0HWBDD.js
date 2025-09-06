import{j as i}from"./iframe-CcStb-xO.js";import{useMDXComponents as s}from"./index-DRR5r8Q4.js";import{M as r,b as l}from"./blocks-B97lg12T.js";import{L as t}from"./Label.stories-CIOg5djl.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DgXRVvnu.js";import"./index-Dv6pZ690.js";import"./EditableText-q3k3r0Uc.js";import"./get-class-name-CHDn80c0.js";import"./Header-BiTp834B.js";import"./Icon-wNEFAMcc.js";import"./Loader-BhAQqttu.js";import"./Portal-CahqD_2f.js";import"./use-click-outside-BOHE6JV_.js";import"./use-key-press-BYb-T9_a.js";import"./use-tooltip-position-C46xlrB6.js";import"./use-container-dimensions-CsRqbGnA.js";import"./use-window-dimensions-C6lhjM_W.js";function o(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...s(),...e.components};return i.jsxs(i.Fragment,{children:[i.jsx(r,{of:t,title:"Atoms/Label"}),`
`,i.jsx(n.h1,{id:"choplogiclabel",children:"ChopLogicLabel"}),`
`,i.jsxs(n.p,{children:["The ",i.jsx(n.code,{children:"ChopLogicLabel"})," component provides an accessible label for form inputs with optional icons and required field indicators."]}),`
`,i.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,i.jsx(n.pre,{children:i.jsx(n.code,{className:"language-tsx",children:`import ChopLogicLabel from 'chop-logic-components';
import { ChopLogicIcon, ChopLogicIconName } from 'chop-logic-components';

const FormField = () => (
  <div>
    <ChopLogicLabel
      label="Email"
      required={true}
      inputId="email-input"
      icon={<ChopLogicIcon name={ChopLogicIconName.Mail} />}
      iconPosition="left"
    />
    <input id="email-input" type="email" />
  </div>
);
`})}),`
`,i.jsx(n.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,i.jsxs(n.ol,{children:[`
`,i.jsxs(n.li,{children:[i.jsx(n.em,{children:"Association"}),":",`
`,i.jsxs(n.ul,{children:[`
`,i.jsx(n.li,{children:"Always associate labels with form controls using htmlFor/inputId"}),`
`,i.jsx(n.li,{children:"Ensure inputId matches the ID of the associated control"}),`
`]}),`
`]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.em,{children:"Required Fields"}),":",`
`,i.jsxs(n.ul,{children:[`
`,i.jsx(n.li,{children:"Use required prop to indicate mandatory fields"}),`
`,i.jsxs(n.li,{children:["The asterisk (*) is wrapped in ",i.jsx(n.code,{children:"<abbr>"})," with ",i.jsx(n.code,{children:'title="required"'})]}),`
`]}),`
`]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.em,{children:"Screen Readers"}),":",`
`,i.jsxs(n.ul,{children:[`
`,i.jsx(n.li,{children:"Hidden text (when isTextHidden=true) remains accessible"}),`
`,i.jsx(n.li,{children:"Icons should have appropriate alt text or be decorative"}),`
`]}),`
`]}),`
`]}),`
`,i.jsx(n.h3,{id:"best-practices",children:"Best Practices"}),`
`,i.jsxs(n.ol,{children:[`
`,i.jsxs(n.li,{children:[i.jsx(n.em,{children:"Consistency"}),":",`
`,i.jsxs(n.ul,{children:[`
`,i.jsx(n.li,{children:"Maintain consistent icon positioning throughout your application"}),`
`,i.jsx(n.li,{children:"Standardize required field indicators"}),`
`]}),`
`]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.em,{children:"Placement"}),":",`
`,i.jsxs(n.ul,{children:[`
`,i.jsx(n.li,{children:"Position labels close to their associated controls"}),`
`,i.jsx(n.li,{children:"Consider vertical alignment for complex forms"}),`
`]}),`
`]}),`
`]}),`
`,i.jsx(n.h2,{id:"props",children:"Props"}),`
`,i.jsx(l,{})]})}function q(e={}){const{wrapper:n}={...s(),...e.components};return n?i.jsx(n,{...e,children:i.jsx(o,{...e})}):o(e)}export{q as default};
