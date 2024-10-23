import{C as e}from"./Icon-Bscejonv.js";import{j as s}from"./jsx-runtime-CkxqCPlQ.js";import{C as j}from"./Button-D-fuWFS8.js";const D=({disabled:l,onClick:B,text:_,view:I,type:S,icon:L})=>s.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:s.jsx(j,{text:_,disabled:l,view:I,onClick:B,type:S,icon:L})});try{ButtonExample.displayName="ButtonExample",ButtonExample.__docgenInfo={description:"",displayName:"ButtonExample",props:{view:{defaultValue:null,description:"",name:"view",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"primary"'},{value:'"secondary"'},{value:'"danger"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"back"'},{value:'"cancel"'},{value:'"checkbox-checked"'},{value:'"checkbox-unchecked"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"clear"'},{value:'"copy"'},{value:'"cut"'},{value:'"delete"'},{value:'"download"'},{value:'"error"'},{value:'"forward"'},{value:'"help"'},{value:'"hide"'},{value:'"info"'},{value:'"paste"'},{value:'"question"'},{value:'"save"'},{value:'"show"'},{value:'"upload"'},{value:'"warning"'},{value:'"remove"'}]}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},extended:{defaultValue:null,description:"",name:"extended",required:!1,type:{name:"boolean"}}}}}catch{}const N={title:"Inputs/Button",component:D,args:{text:"Button",type:"button",icon:e.Copy,view:"primary",disabled:!1},argTypes:{text:{control:"text"},disabled:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]},icon:{control:"select",options:Object.values(e)},view:{control:"select",options:["primary","secondary","danger","icon"]}}},a={args:{text:"Copy",view:"primary",icon:e.Copy,type:"button",disabled:!1}},t={args:{text:"Learn more...",view:"secondary",icon:e.Forward,type:"button",disabled:!1}},o={args:{text:"Delete",view:"danger",icon:e.Delete,type:"button",disabled:!1}},n={args:{view:"icon",type:"button",icon:e.Cancel,label:"Cancel",disabled:!1}},r={args:{text:"Copy",view:"primary",icon:e.Copy,type:"button",disabled:!0}};var c,u,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    text: 'Copy',
    view: 'primary',
    icon: ChopLogicIconName.Copy,
    type: 'button',
    disabled: false
  }
}`,...(i=(u=a.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var p,d,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    text: 'Learn more...',
    view: 'secondary',
    icon: ChopLogicIconName.Forward,
    type: 'button',
    disabled: false
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var v,y,b;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    text: 'Delete',
    view: 'danger',
    icon: ChopLogicIconName.Delete,
    type: 'button',
    disabled: false
  }
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var g,f,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    view: 'icon',
    type: 'button',
    icon: ChopLogicIconName.Cancel,
    label: 'Cancel',
    disabled: false
  }
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var w,C,h;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    text: 'Copy',
    view: 'primary',
    icon: ChopLogicIconName.Copy,
    type: 'button',
    disabled: true
  }
}`,...(h=(C=r.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};const k=["PrimaryButton","SecondaryButton","DangerButton","IconButton","DisabledButton"],O=Object.freeze(Object.defineProperty({__proto__:null,DangerButton:o,DisabledButton:r,IconButton:n,PrimaryButton:a,SecondaryButton:t,__namedExportsOrder:k,default:N},Symbol.toStringTag,{value:"Module"}));export{O as B,a as P};
