import{j as e}from"./jsx-runtime-DEdD30eg.js";import{C}from"./Button-DcAQNvjF.js";import"./Checkbox-JFxaaHM8.js";import"./MultiSelect-LXjQdkmx.js";import"./NumericInput-Bx1xTCKd.js";import"./Select-BnzA_1qj.js";import"./TextInput-Bjvl9Law.js";import"./Alert-B1b_-HT6.js";import{b as O}from"./Form-HjYFzcgi.js";import"./Grid-D5PTnHDE.js";import"./Tabs-zwz-kKGJ.js";const r=({tooltipContent:s,containerTag:b,visibleOn:t,id:y})=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:e.jsxs(O,{tooltipContent:s,containerTag:b,visibleOn:t,id:y,children:[t==="click"&&e.jsx(C,{text:"Click me"}),t==="hover"&&e.jsx("span",{children:"Hover over me"}),t==="focus"&&e.jsx("p",{children:"Focus on me"}),t==="contextmenu"&&e.jsx("strong",{children:"Right click on me"})]})});try{r.displayName="TooltipExample",r.__docgenInfo={description:"",displayName:"TooltipExample",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},tooltipContent:{defaultValue:null,description:"",name:"tooltipContent",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},containerTag:{defaultValue:null,description:"",name:"containerTag",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"div"'},{value:'"p"'},{value:'"strong"'},{value:'"em"'}]}},visibleOn:{defaultValue:null,description:"",name:"visibleOn",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'},{value:'"focus"'},{value:'"contextmenu"'}]}}}}}catch{}const V={title:"Modals/Tooltip",component:r},o={args:{tooltipContent:"This is a tooltip",containerTag:"span",visibleOn:"hover",id:"tooltip"}},i={args:{tooltipContent:"This is a tooltip",containerTag:"div",visibleOn:"click",id:"tooltip"}},n={args:{tooltipContent:"This is a tooltip",containerTag:"div",visibleOn:"focus",id:"tooltip"}},a={args:{tooltipContent:"This is a tooltip",containerTag:"div",visibleOn:"contextmenu",id:"tooltip"}};var l,p,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: 'span',
    visibleOn: 'hover',
    id: 'tooltip'
  }
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,d,m;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: 'div',
    visibleOn: 'click',
    id: 'tooltip'
  }
}`,...(m=(d=i.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var g,v,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: 'div',
    visibleOn: 'focus',
    id: 'tooltip'
  }
}`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var T,h,x;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: 'div',
    visibleOn: 'contextmenu',
    id: 'tooltip'
  }
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const _=["VisibleOnHover","VisibleOnClick","VisibleOnFocus","VisibleOnContextMenu"],L=Object.freeze(Object.defineProperty({__proto__:null,VisibleOnClick:i,VisibleOnContextMenu:a,VisibleOnFocus:n,VisibleOnHover:o,__namedExportsOrder:_,default:V},Symbol.toStringTag,{value:"Module"}));export{L as T,o as V};
