import{C as e}from"./Icon-BeaB2qBy.js";import{j as i}from"./jsx-runtime-OAISXtky.js";import{C as I}from"./Button-BCnh0a_A.js";const T=({disabled:l,onClick:k,text:B,view:q,type:V,icon:_})=>i.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:i.jsx(I,{text:B,disabled:l,view:q,onClick:k,type:V,icon:_})});try{ButtonExample.displayName="ButtonExample",ButtonExample.__docgenInfo={description:"",displayName:"ButtonExample",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},view:{defaultValue:null,description:"",name:"view",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"primary"'},{value:'"secondary"'},{value:'"danger"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"back"'},{value:'"cancel"'},{value:'"checkbox-checked"'},{value:'"checkbox-unchecked"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"clear"'},{value:'"copy"'},{value:'"cut"'},{value:'"delete"'},{value:'"download"'},{value:'"error"'},{value:'"forward"'},{value:'"help"'},{value:'"hide"'},{value:'"info"'},{value:'"paste"'},{value:'"question"'},{value:'"save"'},{value:'"show"'},{value:'"upload"'},{value:'"warning"'},{value:'"remove"'}]}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},extended:{defaultValue:null,description:"",name:"extended",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}}}}}catch{}const S={argTypes:{text:{control:"text"},disabled:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]},icon:{control:"select",options:Object.values(e)},view:{control:"select",options:["primary","secondary","danger","icon"]},theme:{control:"radio",options:["light","dark"]}},args:{text:"Button",type:"button",icon:e.Copy,view:"primary",disabled:!1,theme:"light"},component:T,title:"Inputs/Button"},t={args:{text:"Copy",view:"primary",icon:e.Copy,type:"button",disabled:!1,theme:"light"},argTypes:{theme:{control:"radio",options:["light","dark"]}}},a={args:{text:"Learn more...",view:"secondary",icon:e.Forward,type:"button",disabled:!1,theme:"light"},argTypes:{theme:{control:"radio",options:["light","dark"]}}},n={args:{text:"Delete",view:"danger",icon:e.Delete,type:"button",disabled:!1,theme:"light"},argTypes:{theme:{control:"radio",options:["light","dark"]}}},o={args:{view:"icon",type:"button",icon:e.Cancel,label:"Cancel",disabled:!1,theme:"light"},argTypes:{theme:{control:"radio",options:["light","dark"]}}},r={args:{text:"Copy",view:"primary",icon:e.Copy,type:"button",disabled:!0,theme:"light"},argTypes:{theme:{control:"radio",options:["light","dark"]}}};var s,u,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    text: 'Copy',
    view: 'primary',
    icon: ChopLogicIconName.Copy,
    type: 'button',
    disabled: false,
    theme: 'light'
  },
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark']
    }
  }
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var c,p,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    text: 'Learn more...',
    view: 'secondary',
    icon: ChopLogicIconName.Forward,
    type: 'button',
    disabled: false,
    theme: 'light'
  },
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark']
    }
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var y,g,h;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    text: 'Delete',
    view: 'danger',
    icon: ChopLogicIconName.Delete,
    type: 'button',
    disabled: false,
    theme: 'light'
  },
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark']
    }
  }
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,f,b;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    view: 'icon',
    type: 'button',
    icon: ChopLogicIconName.Cancel,
    label: 'Cancel',
    disabled: false,
    theme: 'light'
  },
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark']
    }
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,C,w;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    text: 'Copy',
    view: 'primary',
    icon: ChopLogicIconName.Copy,
    type: 'button',
    disabled: true,
    theme: 'light'
  },
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark']
    }
  }
}`,...(w=(C=r.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};const L=["PrimaryButton","SecondaryButton","DangerButton","IconButton","DisabledButton"],D=Object.freeze(Object.defineProperty({__proto__:null,DangerButton:n,DisabledButton:r,IconButton:o,PrimaryButton:t,SecondaryButton:a,__namedExportsOrder:L,default:S},Symbol.toStringTag,{value:"Module"}));export{D as B,t as P};
