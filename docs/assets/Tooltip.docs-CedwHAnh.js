import{j as o}from"./iframe-CrArNGRw.js";import{useMDXComponents as t}from"./index-BSFtI4hN.js";import{M as s,b as r}from"./blocks-Bk_K6NSa.js";import{T as l}from"./Tooltip.stories-vzkAwUZ3.js";import"./index-B4hisE-5.js";import"./index-BU1teVQ0.js";import"./Header-B5vN0EW1.js";import"./get-class-name-CHDn80c0.js";import"./Icon-DIoQVp2Y.js";import"./Loader-BNVb9kEc.js";import"./use-click-outside-BTqyhR4p.js";import"./use-key-press-C4UT8Udw.js";import"./use-tooltip-position-m2XZZY1W.js";import"./use-container-dimensions-CPlJeG3S.js";import"./use-window-dimensions-CxUo9BCs.js";import"./Portal-Ew3E3LJ6.js";import"./Button-CxK7O7_f.js";import"./Checkbox-CzF6Y5Op.js";import"./use-reset-form-input-8DRyh_nF.js";import"./MultiSelect-CrfVaaUF.js";import"./Select.module-DHd5GItA.js";import"./NumericInput-D25HSE1Q.js";import"./Select-BqR4HHLk.js";import"./TextInput-D0TrkhU5.js";function e(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:l,title:"Tooltip"}),`
`,o.jsx(i.h1,{id:"choplogictooltip",children:"ChopLogicTooltip"}),`
`,o.jsxs(i.p,{children:["The ",o.jsx(i.code,{children:"ChopLogicTooltip"})," component provides contextual information when users interact with elements. It supports multiple trigger methods and positioning options, with accessible markup and flexible content."]}),`
`,o.jsx(i.h2,{id:"usage",children:"Usage"}),`
`,o.jsx(i.pre,{children:o.jsx(i.code,{className:"language-tsx",children:`import { ChopLogicTooltip } from 'chop-logic-components';

const TooltipUsageExample = () => {
  return (
    <ChopLogicTooltip tooltipContent='This is a tooltip' containerTag='span' visibleOn='hover' id='tooltip'>
      <span>Hover over me</span>
    </ChopLogicTooltip>
  );
};

export default TooltipUsageExample;
`})}),`
`,o.jsx(i.h3,{id:"when-to-use",children:"When to Use"}),`
`,o.jsxs(i.ul,{children:[`
`,o.jsx(i.li,{children:"To explain unfamiliar UI elements"}),`
`,o.jsx(i.li,{children:"When you need to provide additional context"}),`
`,o.jsx(i.li,{children:"For showing truncated content on hover"}),`
`,o.jsx(i.li,{children:"To display helpful information without cluttering the interface"}),`
`,o.jsx(i.li,{children:"When you need accessible tooltips that work with keyboard navigation"}),`
`]}),`
`,o.jsx(i.h3,{id:"accessibility-notes",children:"Accessibility Notes"}),`
`,o.jsxs(i.ol,{children:[`
`,o.jsxs(i.li,{children:[o.jsx(i.strong,{children:"ARIA Attributes"}),': Automatically manages aria-describedby and role="tooltip"']}),`
`,o.jsxs(i.li,{children:[o.jsx(i.strong,{children:"Keyboard Navigation"}),": Works with focus trigger for keyboard users"]}),`
`,o.jsxs(i.li,{children:[o.jsx(i.strong,{children:"Focus Management"}),": Tooltip content remains accessible to screen readers"]}),`
`,o.jsxs(i.li,{children:[o.jsx(i.strong,{children:"Dismissal"}),": Click-triggered tooltips should be dismissible via ESC key"]}),`
`,o.jsxs(i.li,{children:[o.jsx(i.strong,{children:"Contrast"}),": Ensure sufficient color contrast for tooltip text/background"]}),`
`]}),`
`,o.jsx(i.h3,{id:"best-practices",children:"Best Practices"}),`
`,o.jsxs(i.ul,{children:[`
`,o.jsx(i.li,{children:"Keep tooltip text concise (1-2 sentences max)"}),`
`,o.jsx(i.li,{children:"Use for supplemental information only"}),`
`,o.jsx(i.li,{children:"Ensure tooltips don't obscure important content"}),`
`,o.jsx(i.li,{children:"Test positioning at different screen sizes"}),`
`,o.jsx(i.li,{children:"Prefer hover for most cases, click for complex content"}),`
`,o.jsx(i.li,{children:"Avoid nesting interactive elements in hover-triggered tooltips"}),`
`,o.jsx(i.li,{children:"Consider mobile touch interactions (hover may not work)"}),`
`,o.jsx(i.li,{children:"Match tooltip appearance to your design system"}),`
`]}),`
`,o.jsx(i.h2,{id:"props",children:"Props"}),`
`,o.jsx(r,{})]})}function W(n={}){const{wrapper:i}={...t(),...n.components};return i?o.jsx(i,{...n,children:o.jsx(e,{...n})}):e(n)}export{W as default};
