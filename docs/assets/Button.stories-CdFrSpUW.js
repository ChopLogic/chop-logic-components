import{C as n}from"./index-CreP8U9z.js";import{j as v}from"./jsx-runtime-OAISXtky.js";import{C as f}from"./Button-DlAqbfbK.js";const b=l=>v.jsx(f,{...l});try{ButtonExample.displayName="ButtonExample",ButtonExample.__docgenInfo={description:"",displayName:"ButtonExample",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},view:{defaultValue:null,description:"",name:"view",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"3D"'},{value:'"flat"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"back"'},{value:'"cancel"'},{value:'"checkbox-checked"'},{value:'"checkbox-unchecked"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"clear"'},{value:'"copy"'},{value:'"cut"'},{value:'"delete"'},{value:'"download"'},{value:'"error"'},{value:'"forward"'},{value:'"help"'},{value:'"hide"'},{value:'"info"'},{value:'"paste"'},{value:'"question"'},{value:'"save"'},{value:'"show"'},{value:'"upload"'},{value:'"warning"'},{value:'"remove"'}]}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},extended:{defaultValue:null,description:"",name:"extended",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}}}}}catch{}const y={argTypes:{text:{control:"text"},disabled:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]},icon:{control:"select",options:Object.values(n)},view:{control:"select",options:["3D","flat","icon"]},extended:{control:"boolean"}},args:{text:"Button",type:"button",icon:n.Copy,view:"3D",disabled:!1,extended:!1},component:b,title:"Inputs/Button"},e={args:{text:"Copy",view:"3D",icon:n.Copy,type:"button",disabled:!1}},a={args:{text:"Learn more...",view:"flat",icon:n.Forward,type:"button",disabled:!1}},t={args:{view:"icon",type:"button",icon:n.Cancel,label:"Cancel",disabled:!1}};var o,r,u;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    text: 'Copy',
    view: '3D',
    icon: ChopLogicIconName.Copy,
    type: 'button',
    disabled: false
  }
}`,...(u=(r=e.parameters)==null?void 0:r.docs)==null?void 0:u.source}}};var s,i,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    text: 'Learn more...',
    view: 'flat',
    icon: ChopLogicIconName.Forward,
    type: 'button',
    disabled: false
  }
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,p,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    view: 'icon',
    type: 'button',
    icon: ChopLogicIconName.Cancel,
    label: 'Cancel',
    disabled: false
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const g=["DefaultButton","FlatButton","IconButton"],C=Object.freeze(Object.defineProperty({__proto__:null,DefaultButton:e,FlatButton:a,IconButton:t,__namedExportsOrder:g,default:y},Symbol.toStringTag,{value:"Module"}));export{C as B};
