import{c as h,i as e}from"./Alert-bvtI3V7V.js";import{C as t}from"./Label-B75NJM6h.js";import{j as w}from"./jsx-runtime-D_zvdyIk.js";const x=r=>w.jsx(h,{...r});try{Buttonexample.displayName="Buttonexample",Buttonexample.__docgenInfo={description:"",displayName:"Buttonexample",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLButtonElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLButtonElement>"}},view:{defaultValue:null,description:"",name:"view",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"flat"'},{value:'"icon"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"back"'},{value:'"cancel"'},{value:'"checkbox-checked"'},{value:'"checkbox-unchecked"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"clear"'},{value:'"copy"'},{value:'"cut"'},{value:'"delete"'},{value:'"download"'},{value:'"error"'},{value:'"forward"'},{value:'"graduate"'},{value:'"help"'},{value:'"hide"'},{value:'"home"'},{value:'"info"'},{value:'"login"'},{value:'"paste"'},{value:'"question"'},{value:'"save"'},{value:'"show"'},{value:'"upload"'},{value:'"warning"'},{value:'"remove"'}]}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},extended:{defaultValue:null,description:"",name:"extended",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const B={argTypes:{text:{control:"text"},disabled:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]},icon:{control:"select",options:Object.values(t)},view:{control:"select",options:Object.values(e)},extended:{control:"boolean"}},args:{text:"Button",type:"button",icon:t.Copy,view:e.Primary,disabled:!1,extended:!1},component:x,title:"Inputs/Button"},a={args:{text:"Copy",view:e.Primary,icon:t.Copy,type:"button",disabled:!1}},n={args:{text:"Learn more...",view:e.Flat,icon:t.Forward,type:"button",disabled:!1}},o={args:{view:e.Icon,type:"button",icon:t.Cancel,label:"Cancel",tooltip:"Cancel",disabled:!1}},l={args:{text:"Hover On Me",view:e.Flat,icon:t.Forward,type:"button",disabled:!1,tooltip:"This button does nothing..."}};var u,i,s;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    text: 'Copy',
    view: ChopLogicButtonView.Primary,
    icon: ChopLogicIconName.Copy,
    type: 'button',
    disabled: false
  }
}`,...(s=(i=a.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var c,d,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    text: 'Learn more...',
    view: ChopLogicButtonView.Flat,
    icon: ChopLogicIconName.Forward,
    type: 'button',
    disabled: false
  }
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,v,f;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    view: ChopLogicButtonView.Icon,
    type: 'button',
    icon: ChopLogicIconName.Cancel,
    label: 'Cancel',
    tooltip: 'Cancel',
    disabled: false
  }
}`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var y,b,g;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    text: 'Hover On Me',
    view: ChopLogicButtonView.Flat,
    icon: ChopLogicIconName.Forward,
    type: 'button',
    disabled: false,
    tooltip: 'This button does nothing...'
  }
}`,...(g=(b=l.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const C=["PrimaryButton","FlatButton","IconButton","ButtonWithTooltip"],F=Object.freeze(Object.defineProperty({__proto__:null,ButtonWithTooltip:l,FlatButton:n,IconButton:o,PrimaryButton:a,__namedExportsOrder:C,default:B},Symbol.toStringTag,{value:"Module"}));export{F as B};
