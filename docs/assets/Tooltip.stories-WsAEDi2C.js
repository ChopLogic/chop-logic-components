import{j as e}from"./jsx-runtime-OAISXtky.js";import{h as V,b as s,f as r}from"./Tabs-Dmv-oed2.js";import"./Checkbox-BzPJCwzl.js";import"./MultiSelect-DVNbT4tl.js";import"./NumericInput-RE2o1Ib6.js";import"./Select-Bmvqe1J3.js";import"./TextInput-CMB_hk5N.js";const l=({tooltipContent:p,containerTag:y,visibleOn:t,id:O})=>e.jsx("div",{children:e.jsxs(V,{tooltipContent:p,containerTag:y,visibleOn:t,id:O,children:[t==="click"&&e.jsx(s,{text:"Click me",view:r.Flat}),t==="hover"&&e.jsx(s,{text:"Hover on me",view:r.Flat}),t==="focus"&&e.jsx(s,{text:"Focus on me",view:r.Flat}),t==="contextmenu"&&e.jsx(s,{text:"Right click on me",view:r.Flat})]})});try{l.displayName="TooltipExample",l.__docgenInfo={description:"",displayName:"TooltipExample",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},tooltipContent:{defaultValue:null,description:"",name:"tooltipContent",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},containerTag:{defaultValue:null,description:"",name:"containerTag",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"div"'},{value:'"p"'},{value:'"strong"'},{value:'"em"'}]}},visibleOn:{defaultValue:null,description:"",name:"visibleOn",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'},{value:'"focus"'},{value:'"contextmenu"'}]}}}}}catch{}const _={component:l,title:"Modals/Tooltip"},o={args:{tooltipContent:"This is a tooltip",containerTag:"span",visibleOn:"hover",id:"tooltip"}},i={args:{tooltipContent:"This is a tooltip",containerTag:"div",visibleOn:"click",id:"tooltip"}},n={args:{tooltipContent:"This is a tooltip",containerTag:"div",visibleOn:"focus",id:"tooltip"}},a={args:{tooltipContent:"This is a tooltip",containerTag:"div",visibleOn:"contextmenu",id:"tooltip"}};var c,u,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: 'span',
    visibleOn: 'hover',
    id: 'tooltip'
  }
}`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,v,g;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: 'div',
    visibleOn: 'click',
    id: 'tooltip'
  }
}`,...(g=(v=i.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var f,T,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: 'div',
    visibleOn: 'focus',
    id: 'tooltip'
  }
}`,...(x=(T=n.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var b,h,C;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: 'div',
    visibleOn: 'contextmenu',
    id: 'tooltip'
  }
}`,...(C=(h=a.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const j=["VisibleOnHover","VisibleOnClick","VisibleOnFocus","VisibleOnContextMenu"],N=Object.freeze(Object.defineProperty({__proto__:null,VisibleOnClick:i,VisibleOnContextMenu:a,VisibleOnFocus:n,VisibleOnHover:o,__namedExportsOrder:j,default:_},Symbol.toStringTag,{value:"Module"}));export{N as T};
