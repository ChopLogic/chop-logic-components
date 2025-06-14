import{C as _,a as l}from"./Input-BHIenv_q.js";import{j as e}from"./iframe-C3nnaSfA.js";import{C as r,a as s}from"./Button-DNPweYWQ.js";import"./Alert-DSv9-R1P.js";import"./Checkbox-DROs7y0z.js";import"./MultiSelect-C4Z7PTl3.js";import"./NumericInput-B7i0SsAs.js";import"./Select-QXfLJeq0.js";import"./TextInput-C-GqJlLx.js";const p=({tooltipContent:c,containerTag:O,visibleOn:t,id:V})=>e.jsx("div",{children:e.jsxs(_,{tooltipContent:c,containerTag:O,visibleOn:t,id:V,children:[t==="click"&&e.jsx(r,{text:"Click me",view:s.Flat}),t==="hover"&&e.jsx(r,{text:"Hover on me",view:s.Flat}),t==="focus"&&e.jsx(r,{text:"Focus on me",view:s.Flat}),t==="contextmenu"&&e.jsx(r,{text:"Right click on me",view:s.Flat})]})});try{p.displayName="TooltipExample",p.__docgenInfo={description:"",displayName:"TooltipExample",props:{tooltipContent:{defaultValue:null,description:"",name:"tooltipContent",required:!0,type:{name:"string | ReactElement<unknown, string | JSXElementConstructor<any>>"}},containerTag:{defaultValue:null,description:"",name:"containerTag",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"div"'},{value:'"p"'},{value:'"strong"'},{value:'"em"'}]}},visibleOn:{defaultValue:null,description:"",name:"visibleOn",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'},{value:'"focus"'},{value:'"contextmenu"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const S={component:p,title:"Atoms/Tooltip"},o={args:{tooltipContent:"This is a tooltip",containerTag:l.Span,visibleOn:"hover",id:"tooltip"}},i={args:{tooltipContent:"This is a tooltip",containerTag:l.Div,visibleOn:"click",id:"tooltip"}},n={args:{tooltipContent:"This is a tooltip",containerTag:l.Div,visibleOn:"focus",id:"tooltip"}},a={args:{tooltipContent:"This is a tooltip",containerTag:l.Div,visibleOn:"contextmenu",id:"tooltip"}};var u,m,d;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: ChopLogicTooltipContainer.Span,
    visibleOn: 'hover',
    id: 'tooltip'
  }
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,v,C;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: ChopLogicTooltipContainer.Div,
    visibleOn: 'click',
    id: 'tooltip'
  }
}`,...(C=(v=i.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var T,f,x;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: ChopLogicTooltipContainer.Div,
    visibleOn: 'focus',
    id: 'tooltip'
  }
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var h,b,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: ChopLogicTooltipContainer.Div,
    visibleOn: 'contextmenu',
    id: 'tooltip'
  }
}`,...(y=(b=a.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const j=["VisibleOnHover","VisibleOnClick","VisibleOnFocus","VisibleOnContextMenu"],I=Object.freeze(Object.defineProperty({__proto__:null,VisibleOnClick:i,VisibleOnContextMenu:a,VisibleOnFocus:n,VisibleOnHover:o,__namedExportsOrder:j,default:S},Symbol.toStringTag,{value:"Module"}));export{I as T};
