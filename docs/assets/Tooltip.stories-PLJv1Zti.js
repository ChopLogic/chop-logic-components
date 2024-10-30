import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{C as O}from"./Button-D-fuWFS8.js";import"./Checkbox-D-9x5qN4.js";import"./MultiSelect-DtrJ6l6D.js";import"./NumericInput-DgAxqivs.js";import"./Select-fz0dFz33.js";import"./TextInput-CqaYWJKQ.js";import"./Alert-CjdFzxds.js";import{b as y}from"./Form-pEum1aJA.js";import"./Grid-CMfk9Gvl.js";import"./Tabs-xdIbAcDa.js";const s=({tooltipContent:a,containerTag:b,visibleOn:o,id:f})=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:e.jsxs(y,{tooltipContent:a,containerTag:b,visibleOn:o,id:f,children:[o==="click"&&e.jsx(O,{text:"Click me"}),o==="hover"&&e.jsx("span",{children:"Hover over me"}),o==="focus"&&e.jsx("p",{children:"Focus on me"}),o==="contextmenu"&&e.jsx("strong",{children:"Right click on me"})]})});try{s.displayName="TooltipExample",s.__docgenInfo={description:"",displayName:"TooltipExample",props:{tooltipContent:{defaultValue:null,description:"",name:"tooltipContent",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},containerTag:{defaultValue:null,description:"",name:"containerTag",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"div"'},{value:'"p"'},{value:'"strong"'},{value:'"em"'}]}},visibleOn:{defaultValue:null,description:"",name:"visibleOn",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'},{value:'"focus"'},{value:'"contextmenu"'}]}}}}}catch{}const _={title:"Modals/Tooltip",component:s},t={args:{tooltipContent:"This is a tooltip",containerTag:"span",visibleOn:"hover",id:"tooltip"}},i={args:{tooltipContent:"This is a tooltip",containerTag:"div",visibleOn:"click",id:"tooltip"}},n={args:{tooltipContent:"This is a tooltip",containerTag:"div",visibleOn:"focus",id:"tooltip"}},r={args:{tooltipContent:"This is a tooltip",containerTag:"div",visibleOn:"contextmenu",id:"tooltip"}};var l,c,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: 'span',
    visibleOn: 'hover',
    id: 'tooltip'
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,u,d;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: 'div',
    visibleOn: 'click',
    id: 'tooltip'
  }
}`,...(d=(u=i.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,v,T;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: 'div',
    visibleOn: 'focus',
    id: 'tooltip'
  }
}`,...(T=(v=n.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var h,x,C;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: 'div',
    visibleOn: 'contextmenu',
    id: 'tooltip'
  }
}`,...(C=(x=r.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const V=["VisibleOnHover","VisibleOnClick","VisibleOnFocus","VisibleOnContextMenu"],N=Object.freeze(Object.defineProperty({__proto__:null,VisibleOnClick:i,VisibleOnContextMenu:r,VisibleOnFocus:n,VisibleOnHover:t,__namedExportsOrder:V,default:_},Symbol.toStringTag,{value:"Module"}));export{N as T,t as V};
