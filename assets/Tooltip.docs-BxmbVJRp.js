import{j as o}from"./iframe-BBqCYjZh.js";import{useMDXComponents as i}from"./index-C3FRJCYs.js";import{M as s,C as r}from"./blocks-BtHvql7f.js";import{T as p}from"./Tooltip.stories-CgjSs3VY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CQTdgKMI.js";import"./index-DdvE6fok.js";import"./Button-Cf2LC9oy.js";import"./get-class-name-BY88G7uf.js";import"./Portal-BUkrv-kT.js";import"./use-click-outside-CxFTg1FJ.js";import"./use-element-ids-Bhu-PubW.js";import"./use-key-press-D_I7kSca.js";import"./use-tooltip-position-BZAQESMH.js";import"./use-container-dimensions-foC5I8aw.js";import"./Icon-B8Oisdq3.js";function n(t){const e={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{of:p,title:"Tooltip"}),`
`,o.jsx(e.h1,{id:"tooltip",children:"Tooltip"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"Tooltip"})," component provides contextual information when users interact with elements. It supports multiple trigger methods and positioning options, with accessible markup and flexible content."]}),`
`,o.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-tsx",children:`import { Tooltip } from "chop-logic-components";

const TooltipUsageExample = () => {
  return (
    <Tooltip tooltipContent="This is a tooltip" containerTag="span" visibleOn="hover" id="tooltip">
      <span>Hover over me</span>
    </Tooltip>
  );
};

export default TooltipUsageExample;
`})}),`
`,o.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,o.jsxs(e.ol,{children:[`
`,o.jsxs(e.li,{children:[o.jsx(e.em,{children:"Basic usage"}),": Keep tooltip text concise (1-2 sentences max). Use for supplemental information only."]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.em,{children:"Visibility"}),": Ensure tooltips don't obscure important content. Test positioning at different screen sizes."]}),`
`,o.jsxs(e.li,{children:[o.jsx(e.em,{children:"Accessibility"}),": Prefer hover for most cases, click for complex content. Consider mobile touch interactions (hover may not work)."]}),`
`]}),`
`,o.jsx(e.h2,{id:"props",children:"Props"}),`
`,o.jsx(r,{})]})}function w(t={}){const{wrapper:e}={...i(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(n,{...t})}):n(t)}export{w as default};
