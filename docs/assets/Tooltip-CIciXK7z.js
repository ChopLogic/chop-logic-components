import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as o}from"./index-CcnH5Kt0.js";import{ae as r,af as s}from"./index-U1HBKBoF.js";import{T as l,V as d}from"./Tooltip.stories-CpKkGI0-.js";import"./index-RYns6xqu.js";import"./iframe-7bafiVO5.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./index-D-8MO0q_.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./Button-DcAQNvjF.js";import"./Icon-45b0j04X.js";import"./ArrowUp-DL-hDc0c.js";import"./CheckboxUnchecked-BW31YmrB.js";import"./CheckMark-I1ATIzrI.js";import"./styled-components.browser.esm-2v_QRtKj.js";import"./Checkbox-JFxaaHM8.js";import"./Label-DMJxrDmn.js";import"./index-BmPDt6cU.js";import"./MultiSelect-LXjQdkmx.js";import"./index-C-Id0D3c.js";import"./index-l8NP1wY-.js";import"./move-focus-on-element-by-id-CpbS-38o.js";import"./NumericInput-Bx1xTCKd.js";import"./InputInnerButton-B1gY2cZq.js";import"./Select-BnzA_1qj.js";import"./TextInput-Bjvl9Law.js";import"./Alert-B1b_-HT6.js";import"./index-__4yWXZr.js";import"./Form-HjYFzcgi.js";import"./index-N0pUs06T.js";import"./Grid-D5PTnHDE.js";import"./Tabs-zwz-kKGJ.js";import"./index-LntHzZw0.js";import"./index-y6HsRCss.js";import"./index-H_q29W0p.js";function i(n){const t={code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l,title:"Tooltip"}),`
`,e.jsx(t.h1,{id:"tooltip",children:"Tooltip"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Tooltip"})," component displays a tooltip with customizable content when the user hovers over, clicks, or focuses on the container element."]}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(t.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`import { ChopLogicTooltip } from 'chop-logic-components';

const TooltipUsageExample = () => {
  return (
    <ChopLogicTooltip tooltipContent='This is a tooltip' containerTag='span' visibleOn='hover' id='tooltip'>
      <span>Hover over me</span>
    </ChopLogicTooltip>
  );
};

export default TooltipUsageExample;
`})}),`
`,e.jsx(t.h3,{id:"props",children:"Props"}),`
`,e.jsx(t.p,{children:e.jsx(t.em,{children:"Required props"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"tooltipContent"})," ",e.jsx(t.code,{children:"string | React.ReactElement"})," - The content to be displayed inside the tooltip."]}),`
`]}),`
`,e.jsx(t.p,{children:e.jsx(t.em,{children:"Optional props"})}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"containerTag"})," ",e.jsx(t.code,{children:"TooltipContainerTag"})," - The HTML tag to be used for the container element. Default: ",e.jsx(t.code,{children:"'span'"})]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"visibleOn"})," ",e.jsx(t.code,{children:"'hover' | 'click' | 'focus' | 'contextmenu'"})," - The event that triggers the tooltip to be displayed. Default: ",e.jsx(t.code,{children:"'hover'"})]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"children"})," ",e.jsx(t.code,{children:"React.ReactNode"})," - The content inside the container element that triggers the tooltip."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"HTMLAttributes"})," - some global HTML attributes (",e.jsx(t.strong,{children:"id"}),", ",e.jsx(t.strong,{children:"className"}),", ",e.jsx(t.strong,{children:"title"}),", ",e.jsx(t.strong,{children:"style"}),", etc.)."]}),`
`]}),`
`,e.jsx(t.p,{children:e.jsx(t.em,{children:"Common props"})}),`
`,e.jsxs(t.table,{children:[e.jsx(t.thead,{children:e.jsxs(t.tr,{children:[e.jsx(t.th,{children:"Prop"}),e.jsx(t.th,{children:"Type"}),e.jsx(t.th,{children:"Description"}),e.jsx(t.th,{children:"Default"})]})}),e.jsxs(t.tbody,{children:[e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"id"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"The id global attribute defines an identifier (ID) which must be unique in the whole document."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"className"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"The class global attribute is a list of the classes of the element."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"style"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"React.CSSProperties"})}),e.jsx(t.td,{children:"The style global attribute contains CSS styling declarations to be applied to the element."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"tabIndex"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"number"})}),e.jsx(t.td,{children:"The tabindex global attribute allows developers to make HTML elements focusable."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})})]}),e.jsxs(t.tr,{children:[e.jsx(t.td,{children:"title"}),e.jsx(t.td,{children:e.jsx(t.code,{children:"string"})}),e.jsx(t.td,{children:"The title global attribute contains text representing advisory information related to the element it belongs to."}),e.jsx(t.td,{children:e.jsx(t.code,{children:"undefined"})})]})]})]}),`
`,e.jsx(t.h3,{id:"types",children:"Types"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`type ChopLogicTooltipProps = PropsWithChildren &
  React.HTMLAttributes<HTMLElement> & {
    tooltipContent: string | React.ReactElement;
    containerTag?: TooltipContainerTag;
    visibleOn?: 'hover' | 'click' | 'focus' | 'contextmenu';
  };
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`type TooltipContainerTag = 'span' | 'div' | 'p' | 'strong' | 'em';
`})})]})}function B(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{B as default};
