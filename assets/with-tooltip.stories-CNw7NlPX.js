import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-BxXWrdMh.js";import{n as r,t as i}from"./Button-Cp9o0IfN.js";import{n as a,t as o}from"./with-tooltip-CQAXnEeV.js";var s,c,l,u;function d(){return(d=e((()=>{r(),o(),s=n(),c=({label:e})=>(0,s.jsx)(i,{text:e}),l=a(c),u=({tooltip:e,visibleOn:t=`hover`,label:n})=>(0,s.jsx)(`div`,{style:{padding:`2rem`},children:(0,s.jsx)(l,{label:n,tooltip:e,visibleOn:t})});try{u.displayName=`WithTooltipExample`,u.__docgenInfo={description:``,displayName:`WithTooltipExample`,filePath:`/home/runner/work/chop-logic-components/chop-logic-components/src/components/hocs/with-tooltip/__docs__/with-tooltip.example.tsx`,methods:[],props:{label:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/hocs/with-tooltip/__docs__/with-tooltip.example.tsx`,name:`TypeLiteral`}],description:``,name:`label`,required:!0,tags:{},type:{name:`string`}},tooltip:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/components/hocs/with-tooltip/__docs__/with-tooltip.example.tsx`,name:`TypeLiteral`}],description:``,name:`tooltip`,required:!1,tags:{},type:{name:`string`}},visibleOn:{defaultValue:{value:`hover`},declarations:[{fileName:`chop-logic-components/src/components/hocs/with-tooltip/__docs__/with-tooltip.example.tsx`,name:`TypeLiteral`}],description:``,name:`visibleOn`,required:!1,tags:{},type:{name:`enum`,raw:`"hover" | "click" | "focus" | "contextmenu"`,value:[{value:`"hover"`},{value:`"click"`},{value:`"focus"`},{value:`"contextmenu"`}]}}},tags:{}}}catch{}})))()}var f=t({Default:()=>m,VisibleOnClick:()=>g,VisibleOnContextMenu:()=>v,VisibleOnFocus:()=>_,WithoutTooltip:()=>h,__namedExportsOrder:()=>y,default:()=>p}),p,m,h,g,_,v,y;function b(){return(b=e((()=>{d(),p={component:u,title:`Utilities/withTooltip`,args:{label:`Hover me`,tooltip:`Supplemental information for this control`,visibleOn:`hover`},argTypes:{tooltip:{control:`text`,description:`When non-empty, wraps the target in Tooltip and shows this content`,table:{type:{summary:`string | undefined`},category:`HOC`}},visibleOn:{control:`radio`,options:[`hover`,`click`,`focus`,`contextmenu`],description:`How the tooltip is triggered (passed through to Tooltip)`,table:{defaultValue:{summary:`hover`},type:{summary:`'hover' | 'click' | 'focus' | 'contextmenu'`},category:`HOC`}},label:{control:`text`,description:`Example prop on the wrapped demo button`,table:{type:{summary:`string`},category:`Wrapped component`}}}},m={},h={args:{tooltip:void 0,label:`No tooltip wrapper`}},g={args:{visibleOn:`click`,label:`Click me`,tooltip:`Opened on click`}},_={args:{visibleOn:`focus`,label:`Focus me`,tooltip:`Shown when focused`}},v={args:{visibleOn:`contextmenu`,label:`Right-click me`,tooltip:`Context menu trigger`}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    tooltip: undefined,
    label: 'No tooltip wrapper'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    visibleOn: 'click',
    label: 'Click me',
    tooltip: 'Opened on click'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    visibleOn: 'focus',
    label: 'Focus me',
    tooltip: 'Shown when focused'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    visibleOn: 'contextmenu',
    label: 'Right-click me',
    tooltip: 'Context menu trigger'
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`WithoutTooltip`,`VisibleOnClick`,`VisibleOnFocus`,`VisibleOnContextMenu`]})))()}export{f as n,b as t};