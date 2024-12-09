import{j as e}from"./jsx-runtime-OAISXtky.js";import{C as b}from"./Button-BaR6FR-0.js";import"./Checkbox-Czr_VCiy.js";import"./MultiSelect-ByFgA7bZ.js";import"./NumericInput-NGS4m8B5.js";import"./Select-i1EVr_el.js";import"./TextInput-Cn-RaTLB.js";import{f as O}from"./Tabs-BXf0_0X9.js";const r=({tooltipContent:s,containerTag:y,visibleOn:t,id:C})=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:e.jsxs(O,{tooltipContent:s,containerTag:y,visibleOn:t,id:C,children:[t==="click"&&e.jsx(b,{text:"Click me"}),t==="hover"&&e.jsx("span",{children:"Hover over me"}),t==="focus"&&e.jsx("p",{children:"Focus on me"}),t==="contextmenu"&&e.jsx("strong",{children:"Right click on me"})]})});try{r.displayName="TooltipExample",r.__docgenInfo={description:"",displayName:"TooltipExample",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},tooltipContent:{defaultValue:null,description:"",name:"tooltipContent",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},containerTag:{defaultValue:null,description:"",name:"containerTag",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"div"'},{value:'"p"'},{value:'"strong"'},{value:'"em"'}]}},visibleOn:{defaultValue:null,description:"",name:"visibleOn",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'},{value:'"focus"'},{value:'"contextmenu"'}]}}}}}catch{}const V={component:r,title:"Modals/Tooltip"},o={args:{tooltipContent:"This is a tooltip",containerTag:"span",visibleOn:"hover",id:"tooltip"}},n={args:{tooltipContent:"This is a tooltip",containerTag:"div",visibleOn:"click",id:"tooltip"}},i={args:{tooltipContent:"This is a tooltip",containerTag:"div",visibleOn:"focus",id:"tooltip"}},a={args:{tooltipContent:"This is a tooltip",containerTag:"div",visibleOn:"contextmenu",id:"tooltip"}};var l,p,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: 'span',
    visibleOn: 'hover',
    id: 'tooltip'
  }
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,d,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: 'div',
    visibleOn: 'click',
    id: 'tooltip'
  }
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var g,v,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: 'div',
    visibleOn: 'focus',
    id: 'tooltip'
  }
}`,...(f=(v=i.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var T,h,x;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: 'div',
    visibleOn: 'contextmenu',
    id: 'tooltip'
  }
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const _=["VisibleOnHover","VisibleOnClick","VisibleOnFocus","VisibleOnContextMenu"],F=Object.freeze(Object.defineProperty({__proto__:null,VisibleOnClick:n,VisibleOnContextMenu:a,VisibleOnFocus:i,VisibleOnHover:o,__namedExportsOrder:_,default:V},Symbol.toStringTag,{value:"Module"}));export{F as T,o as V};
