import{j as e}from"./jsx-runtime-OAISXtky.js";import{C as r}from"./Button-DlAqbfbK.js";import"./Checkbox-BNBt8dsz.js";import"./MultiSelect-DjqRWfJo.js";import"./NumericInput-DNTS1C8q.js";import"./Select-pzjvP-sq.js";import"./TextInput-7Wwh-_Ox.js";import{f as O}from"./Tabs-BsL0Wnaq.js";const s=({tooltipContent:l,containerTag:h,visibleOn:t,id:y})=>e.jsx("div",{children:e.jsxs(O,{tooltipContent:l,containerTag:h,visibleOn:t,id:y,children:[t==="click"&&e.jsx(r,{text:"Click me",view:"flat"}),t==="hover"&&e.jsx(r,{text:"Hover on me",view:"flat"}),t==="focus"&&e.jsx(r,{text:"Focus on me",view:"flat"}),t==="contextmenu"&&e.jsx(r,{text:"Right click on me",view:"flat"})]})});try{s.displayName="TooltipExample",s.__docgenInfo={description:"",displayName:"TooltipExample",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},tooltipContent:{defaultValue:null,description:"",name:"tooltipContent",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},containerTag:{defaultValue:null,description:"",name:"containerTag",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"div"'},{value:'"p"'},{value:'"strong"'},{value:'"em"'}]}},visibleOn:{defaultValue:null,description:"",name:"visibleOn",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'},{value:'"focus"'},{value:'"contextmenu"'}]}}}}}catch{}const V={component:s,title:"Modals/Tooltip"},o={args:{tooltipContent:"This is a tooltip",containerTag:"span",visibleOn:"hover",id:"tooltip"}},i={args:{tooltipContent:"This is a tooltip",containerTag:"div",visibleOn:"click",id:"tooltip"}},n={args:{tooltipContent:"This is a tooltip",containerTag:"div",visibleOn:"focus",id:"tooltip"}},a={args:{tooltipContent:"This is a tooltip",containerTag:"div",visibleOn:"contextmenu",id:"tooltip"}};var p,c,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: 'span',
    visibleOn: 'hover',
    id: 'tooltip'
  }
}`,...(u=(c=o.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,m,v;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: 'div',
    visibleOn: 'click',
    id: 'tooltip'
  }
}`,...(v=(m=i.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var g,f,T;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: 'div',
    visibleOn: 'focus',
    id: 'tooltip'
  }
}`,...(T=(f=n.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var x,b,C;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: 'div',
    visibleOn: 'contextmenu',
    id: 'tooltip'
  }
}`,...(C=(b=a.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};const _=["VisibleOnHover","VisibleOnClick","VisibleOnFocus","VisibleOnContextMenu"],F=Object.freeze(Object.defineProperty({__proto__:null,VisibleOnClick:i,VisibleOnContextMenu:a,VisibleOnFocus:n,VisibleOnHover:o,__namedExportsOrder:_,default:V},Symbol.toStringTag,{value:"Module"}));export{F as T};
