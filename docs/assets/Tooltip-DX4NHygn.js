import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{useMDXComponents as i}from"./index-BrnU7xv7.js";import{ae as r,af as s}from"./index---6MgSDT.js";import{T as l,V as p}from"./Tooltip.stories-PLJv1Zti.js";import"./index-DJO9vBfz.js";import"./iframe-WobaMXE5.js";import"../sb-preview/runtime.js";import"./index-URyNLXnw.js";import"./index-CvTBScqg.js";import"./index-DrFu-skq.js";import"./Button-D-fuWFS8.js";import"./Icon-Bscejonv.js";import"./ArrowUp-D8N8y9PM.js";import"./CheckboxUnchecked-BN-0aOOA.js";import"./CheckMark-DH8gl-7Y.js";import"./styled-components.browser.esm-BAmCwVtG.js";import"./Checkbox-D-9x5qN4.js";import"./Label-C3WErDxN.js";import"./index-C6NryZZH.js";import"./MultiSelect-DtrJ6l6D.js";import"./index-BWBqZFZK.js";import"./index-DYr8M9Az.js";import"./move-focus-on-element-by-id-CpbS-38o.js";import"./NumericInput-DgAxqivs.js";import"./InputInnerButton-IecO_TkS.js";import"./Select-fz0dFz33.js";import"./TextInput-CqaYWJKQ.js";import"./Alert-CjdFzxds.js";import"./index-C6_MqhCY.js";import"./Form-pEum1aJA.js";import"./index-Bl1A3jYt.js";import"./Grid-CMfk9Gvl.js";import"./Tabs-xdIbAcDa.js";import"./index-D0HHuAcc.js";import"./index-LBdVPU7m.js";import"./index-ZHRslnvw.js";function n(o){const t={code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l,title:"Tooltip"}),`
`,e.jsx(t.h1,{id:"tooltip",children:"Tooltip"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Tooltip"})," component displays a tooltip with customizable content when the user hovers over, clicks, or focuses on the container element."]}),`
`,e.jsx(t.h4,{id:"example",children:"Example"}),`
`,e.jsx(s,{of:p}),`
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
`,e.jsx(t.h3,{id:"types",children:"Types"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`type ChopLogicTooltipProps = PropsWithChildren &
  React.HTMLAttributes<HTMLElement> & {
    tooltipContent: string | React.ReactElement;
    containerTag?: TooltipContainerTag;
    visibleOn?: 'hover' | 'click' | 'focus' | 'contextmenu';
  };
`})}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-ts",children:`type TooltipContainerTag = 'span' | 'div' | 'p' | 'strong' | 'em';
`})})]})}function G(o={}){const{wrapper:t}={...i(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{G as default};
