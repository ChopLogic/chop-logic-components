import{j as e}from"./jsx-runtime-OAISXtky.js";import{i as O,b as s,g as r}from"./Tabs-CQJk7qWa.js";import"./Checkbox-DK7hl7tq.js";import"./MultiSelect-BnHR-qBd.js";import"./NumericInput-CSsCWHDr.js";import"./Select-DSDv4EBn.js";import"./TextInput-Dp9DHq_U.js";const V=({tooltipContent:l,containerTag:h,visibleOn:t,id:y})=>e.jsx("div",{children:e.jsxs(O,{tooltipContent:l,containerTag:h,visibleOn:t,id:y,children:[t==="click"&&e.jsx(s,{text:"Click me",view:r.Flat}),t==="hover"&&e.jsx(s,{text:"Hover on me",view:r.Flat}),t==="focus"&&e.jsx(s,{text:"Focus on me",view:r.Flat}),t==="contextmenu"&&e.jsx(s,{text:"Right click on me",view:r.Flat})]})});try{Tooltipexample.displayName="Tooltipexample",Tooltipexample.__docgenInfo={description:"",displayName:"Tooltipexample",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},tooltipContent:{defaultValue:null,description:"",name:"tooltipContent",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},containerTag:{defaultValue:null,description:"",name:"containerTag",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"div"'},{value:'"p"'},{value:'"strong"'},{value:'"em"'}]}},visibleOn:{defaultValue:null,description:"",name:"visibleOn",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'},{value:'"focus"'},{value:'"contextmenu"'}]}}}}}catch{}const _={component:V,title:"Modals/Tooltip"},o={args:{tooltipContent:"This is a tooltip",containerTag:"span",visibleOn:"hover",id:"tooltip"}},i={args:{tooltipContent:"This is a tooltip",containerTag:"div",visibleOn:"click",id:"tooltip"}},n={args:{tooltipContent:"This is a tooltip",containerTag:"div",visibleOn:"focus",id:"tooltip"}},a={args:{tooltipContent:"This is a tooltip",containerTag:"div",visibleOn:"contextmenu",id:"tooltip"}};var p,c,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: 'span',
    visibleOn: 'hover',
    id: 'tooltip'
  }
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,m,g;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: 'div',
    visibleOn: 'click',
    id: 'tooltip'
  }
}`,...(g=(m=i.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var v,T,x;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: 'div',
    visibleOn: 'focus',
    id: 'tooltip'
  }
}`,...(x=(T=n.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var f,b,C;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: 'div',
    visibleOn: 'contextmenu',
    id: 'tooltip'
  }
}`,...(C=(b=a.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const j=["VisibleOnHover","VisibleOnClick","VisibleOnFocus","VisibleOnContextMenu"],N=Object.freeze(Object.defineProperty({__proto__:null,VisibleOnClick:i,VisibleOnContextMenu:a,VisibleOnFocus:n,VisibleOnHover:o,__namedExportsOrder:j,default:_},Symbol.toStringTag,{value:"Module"}));export{N as T};
