import{C as e}from"./Icon-45b0j04X.js";import{j as s}from"./jsx-runtime-DEdD30eg.js";import{C as S}from"./Button-DcAQNvjF.js";const L=({disabled:l,onClick:B,text:q,view:V,type:_,icon:I})=>s.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:s.jsx(S,{text:q,disabled:l,view:V,onClick:B,type:_,icon:I})});try{ButtonExample.displayName="ButtonExample",ButtonExample.__docgenInfo={description:"",displayName:"ButtonExample",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement> | (() => void)"}},view:{defaultValue:null,description:"",name:"view",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"primary"'},{value:'"secondary"'},{value:'"danger"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"back"'},{value:'"cancel"'},{value:'"checkbox-checked"'},{value:'"checkbox-unchecked"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"clear"'},{value:'"copy"'},{value:'"cut"'},{value:'"delete"'},{value:'"download"'},{value:'"error"'},{value:'"forward"'},{value:'"help"'},{value:'"hide"'},{value:'"info"'},{value:'"paste"'},{value:'"question"'},{value:'"save"'},{value:'"show"'},{value:'"upload"'},{value:'"warning"'},{value:'"remove"'}]}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},extended:{defaultValue:null,description:"",name:"extended",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}}}}}catch{}const N={title:"Inputs/Button",component:L,args:{text:"Button",type:"button",icon:e.Copy,view:"primary",disabled:!1},argTypes:{text:{control:"text"},disabled:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]},icon:{control:"select",options:Object.values(e)},view:{control:"select",options:["primary","secondary","danger","icon"]}}},a={args:{text:"Copy",view:"primary",icon:e.Copy,type:"button",disabled:!1}},t={args:{text:"Learn more...",view:"secondary",icon:e.Forward,type:"button",disabled:!1}},n={args:{text:"Delete",view:"danger",icon:e.Delete,type:"button",disabled:!1}},r={args:{view:"icon",type:"button",icon:e.Cancel,label:"Cancel",disabled:!1}},o={args:{text:"Copy",view:"primary",icon:e.Copy,type:"button",disabled:!0}};var u,i,c;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    text: 'Copy',
    view: 'primary',
    icon: ChopLogicIconName.Copy,
    type: 'button',
    disabled: false
  }
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,p,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    text: 'Learn more...',
    view: 'secondary',
    icon: ChopLogicIconName.Forward,
    type: 'button',
    disabled: false
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var y,v,f;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    text: 'Delete',
    view: 'danger',
    icon: ChopLogicIconName.Delete,
    type: 'button',
    disabled: false
  }
}`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var b,g,x;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    view: 'icon',
    type: 'button',
    icon: ChopLogicIconName.Cancel,
    label: 'Cancel',
    disabled: false
  }
}`,...(x=(g=r.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var C,w,h;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    text: 'Copy',
    view: 'primary',
    icon: ChopLogicIconName.Copy,
    type: 'button',
    disabled: true
  }
}`,...(h=(w=o.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};const k=["PrimaryButton","SecondaryButton","DangerButton","IconButton","DisabledButton"],P=Object.freeze(Object.defineProperty({__proto__:null,DangerButton:n,DisabledButton:o,IconButton:r,PrimaryButton:a,SecondaryButton:t,__namedExportsOrder:k,default:N},Symbol.toStringTag,{value:"Module"}));export{P as B,a as P};
