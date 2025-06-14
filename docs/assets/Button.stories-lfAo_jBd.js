import{C,a as e}from"./Button-DNPweYWQ.js";import{C as t}from"./Icon-BBWlz8VR.js";import{j as w}from"./iframe-C3nnaSfA.js";const r=u=>w.jsx(C,{...u});try{r.displayName="ChopLogicButtonExample",r.__docgenInfo={description:"",displayName:"ChopLogicButtonExample",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLButtonElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLButtonElement>"}},view:{defaultValue:null,description:"",name:"view",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"flat"'},{value:'"icon"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"back"'},{value:'"cancel"'},{value:'"checkbox-checked"'},{value:'"checkbox-unchecked"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"clear"'},{value:'"copy"'},{value:'"cut"'},{value:'"delete"'},{value:'"download"'},{value:'"error"'},{value:'"forward"'},{value:'"graduate"'},{value:'"help"'},{value:'"hide"'},{value:'"home"'},{value:'"info"'},{value:'"login"'},{value:'"paste"'},{value:'"question"'},{value:'"save"'},{value:'"show"'},{value:'"upload"'},{value:'"warning"'},{value:'"remove"'}]}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},extended:{defaultValue:null,description:"",name:"extended",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const x={argTypes:{text:{control:"text"},disabled:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]},icon:{control:"select",options:Object.values(t)},view:{control:"select",options:Object.values(e)},extended:{control:"boolean"}},args:{text:"Button",type:"button",icon:t.Copy,view:e.Primary,disabled:!1,extended:!1},component:r,title:"Molecules/Button"},a={args:{text:"Copy",view:e.Primary,icon:t.Copy,type:"button",disabled:!1}},n={args:{text:"Learn more...",view:e.Flat,icon:t.Forward,type:"button",disabled:!1}},o={args:{view:e.Icon,type:"button",icon:t.Cancel,label:"Cancel",tooltip:"Cancel",disabled:!1}},l={args:{text:"Hover On Me",view:e.Flat,icon:t.Forward,type:"button",disabled:!1,tooltip:"This button does nothing..."}};var i,s,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    text: 'Copy',
    view: ChopLogicButtonView.Primary,
    icon: ChopLogicIconName.Copy,
    type: 'button',
    disabled: false
  }
}`,...(c=(s=a.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var d,p,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    text: 'Learn more...',
    view: ChopLogicButtonView.Flat,
    icon: ChopLogicIconName.Forward,
    type: 'button',
    disabled: false
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var v,f,y;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    view: ChopLogicButtonView.Icon,
    type: 'button',
    icon: ChopLogicIconName.Cancel,
    label: 'Cancel',
    tooltip: 'Cancel',
    disabled: false
  }
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var b,g,h;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    text: 'Hover On Me',
    view: ChopLogicButtonView.Flat,
    icon: ChopLogicIconName.Forward,
    type: 'button',
    disabled: false,
    tooltip: 'This button does nothing...'
  }
}`,...(h=(g=l.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const B=["PrimaryButton","FlatButton","IconButton","ButtonWithTooltip"],F=Object.freeze(Object.defineProperty({__proto__:null,ButtonWithTooltip:l,FlatButton:n,IconButton:o,PrimaryButton:a,__namedExportsOrder:B,default:x},Symbol.toStringTag,{value:"Module"}));export{F as B};
