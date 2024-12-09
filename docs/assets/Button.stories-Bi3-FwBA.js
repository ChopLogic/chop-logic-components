import{C as n}from"./index-yZyA0tCI.js";import{j as o}from"./jsx-runtime-OAISXtky.js";import{C as f}from"./Button-BaR6FR-0.js";const y=l=>o.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20px"},children:o.jsx(f,{...l})});try{ButtonExample.displayName="ButtonExample",ButtonExample.__docgenInfo={description:"",displayName:"ButtonExample",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},view:{defaultValue:null,description:"",name:"view",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"3D"'},{value:'"flat"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"back"'},{value:'"cancel"'},{value:'"checkbox-checked"'},{value:'"checkbox-unchecked"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"clear"'},{value:'"copy"'},{value:'"cut"'},{value:'"delete"'},{value:'"download"'},{value:'"error"'},{value:'"forward"'},{value:'"help"'},{value:'"hide"'},{value:'"info"'},{value:'"paste"'},{value:'"question"'},{value:'"save"'},{value:'"show"'},{value:'"upload"'},{value:'"warning"'},{value:'"remove"'}]}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},extended:{defaultValue:null,description:"",name:"extended",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}}}}}catch{}const b={argTypes:{text:{control:"text"},disabled:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]},icon:{control:"select",options:Object.values(n)},view:{control:"select",options:["3D","flat","icon"]},extended:{control:"boolean"}},args:{text:"Button",type:"button",icon:n.Copy,view:"3D",disabled:!1,extended:!1},component:y,title:"Inputs/Button"},e={args:{text:"Copy",view:"3D",icon:n.Copy,type:"button",disabled:!1}},a={args:{text:"Learn more...",view:"flat",icon:n.Forward,type:"button",disabled:!1}},t={args:{view:"icon",type:"button",icon:n.Cancel,label:"Cancel",disabled:!1}};var r,u,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    text: 'Copy',
    view: '3D',
    icon: ChopLogicIconName.Copy,
    type: 'button',
    disabled: false
  }
}`,...(s=(u=e.parameters)==null?void 0:u.docs)==null?void 0:s.source}}};var i,c,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    text: 'Learn more...',
    view: 'flat',
    icon: ChopLogicIconName.Forward,
    type: 'button',
    disabled: false
  }
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,m,v;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    view: 'icon',
    type: 'button',
    icon: ChopLogicIconName.Cancel,
    label: 'Cancel',
    disabled: false
  }
}`,...(v=(m=t.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};const g=["DefaultButton","FlatButton","IconButton"],C=Object.freeze(Object.defineProperty({__proto__:null,DefaultButton:e,FlatButton:a,IconButton:t,__namedExportsOrder:g,default:b},Symbol.toStringTag,{value:"Module"}));export{C as B,e as D};
