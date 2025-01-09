import{k as V,c as l,i as r,l as s}from"./Tabs-Anboopoc.js";import{j as e}from"./jsx-runtime-OAISXtky.js";import"./Checkbox-BzT2O6aB.js";import"./MultiSelect-D5p60gzq.js";import"./NumericInput-BKnw8dQv.js";import"./Select-Ci-b9_qX.js";import"./TextInput-CHl93dE4.js";const _=({tooltipContent:p,containerTag:y,visibleOn:t,id:O})=>e.jsx("div",{children:e.jsxs(V,{tooltipContent:p,containerTag:y,visibleOn:t,id:O,children:[t==="click"&&e.jsx(l,{text:"Click me",view:r.Flat}),t==="hover"&&e.jsx(l,{text:"Hover on me",view:r.Flat}),t==="focus"&&e.jsx(l,{text:"Focus on me",view:r.Flat}),t==="contextmenu"&&e.jsx(l,{text:"Right click on me",view:r.Flat})]})});try{Tooltipexample.displayName="Tooltipexample",Tooltipexample.__docgenInfo={description:"",displayName:"Tooltipexample",props:{tooltipContent:{defaultValue:null,description:"",name:"tooltipContent",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},containerTag:{defaultValue:null,description:"",name:"containerTag",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"div"'},{value:'"p"'},{value:'"strong"'},{value:'"em"'}]}},visibleOn:{defaultValue:null,description:"",name:"visibleOn",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'},{value:'"focus"'},{value:'"contextmenu"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const S={component:_,title:"Modals/Tooltip"},o={args:{tooltipContent:"This is a tooltip",containerTag:s.Span,visibleOn:"hover",id:"tooltip"}},i={args:{tooltipContent:"This is a tooltip",containerTag:s.Div,visibleOn:"click",id:"tooltip"}},n={args:{tooltipContent:"This is a tooltip",containerTag:s.Div,visibleOn:"focus",id:"tooltip"}},a={args:{tooltipContent:"This is a tooltip",containerTag:s.Div,visibleOn:"contextmenu",id:"tooltip"}};var c,u,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: ChopLogicTooltipContainer.Span,
    visibleOn: 'hover',
    id: 'tooltip'
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var d,g,v;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: ChopLogicTooltipContainer.Div,
    visibleOn: 'click',
    id: 'tooltip'
  }
}`,...(v=(g=i.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var T,C,x;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: ChopLogicTooltipContainer.Div,
    visibleOn: 'focus',
    id: 'tooltip'
  }
}`,...(x=(C=n.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var f,h,b;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: ChopLogicTooltipContainer.Div,
    visibleOn: 'contextmenu',
    id: 'tooltip'
  }
}`,...(b=(h=a.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const j=["VisibleOnHover","VisibleOnClick","VisibleOnFocus","VisibleOnContextMenu"],M=Object.freeze(Object.defineProperty({__proto__:null,VisibleOnClick:i,VisibleOnContextMenu:a,VisibleOnFocus:n,VisibleOnHover:o,__namedExportsOrder:j,default:S},Symbol.toStringTag,{value:"Module"}));export{M as T};
