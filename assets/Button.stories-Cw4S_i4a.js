var k=Object.defineProperty,N=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var v=(a,n,r)=>n in a?k(a,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[n]=r,e=(a,n)=>{for(var r in n||(n={}))T.call(n,r)&&v(a,r,n[r]);if(p)for(var r of p(n))H.call(n,r)&&v(a,r,n[r]);return a},t=(a,n)=>N(a,P(n));import{B as j,a as l}from"./Button-BDoRLwTt.js";import{I as d}from"./Icon-D4WeBZx2.js";import{j as M}from"./iframe-CvRPWbsI.js";const m=a=>M.jsx(j,e({},a));try{m.displayName="ButtonExample",m.__docgenInfo={description:"",displayName:"ButtonExample",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLButtonElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLButtonElement>"}},view:{defaultValue:null,description:"",name:"view",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"icon"'},{value:'"inner"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"back"'},{value:'"cancel"'},{value:'"checkbox-checked"'},{value:'"checkbox-unchecked"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"clear"'},{value:'"copy"'},{value:'"cut"'},{value:'"delete"'},{value:'"download"'},{value:'"edit"'},{value:'"email"'},{value:'"error"'},{value:'"forward"'},{value:'"graduate"'},{value:'"help"'},{value:'"hide"'},{value:'"home"'},{value:'"info"'},{value:'"login"'},{value:'"paste"'},{value:'"phone"'},{value:'"plus-circle"'},{value:'"question"'},{value:'"save"'},{value:'"search"'},{value:'"show"'},{value:'"upload"'},{value:'"warning"'},{value:'"remove"'}]}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},extended:{defaultValue:null,description:"",name:"extended",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch(a){}const O={argTypes:{text:{control:"text"},disabled:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]},icon:{control:"select",options:Object.values(d)},view:{control:"select",options:Object.values(l)},extended:{control:"boolean"}},args:{text:"Button",type:"button",view:l.Primary,disabled:!1,extended:!1},component:m,title:"Atoms/Button"},o={args:{text:"Copy",view:l.Primary,icon:d.Copy}},u={args:{text:"Learn more...",view:l.Secondary,icon:d.Forward}},s={args:{view:l.Icon,icon:d.Cancel,label:"Cancel"}},i={args:{text:"Hover On Me",view:l.Secondary,tooltip:"This button does nothing..."}},c={args:{text:"Disabled",view:l.Primary,icon:d.Clear,disabled:!0}};var y,f,b;o.parameters=t(e({},o.parameters),{docs:t(e({},(y=o.parameters)==null?void 0:y.docs),{source:e({originalSource:`{
  args: {
    text: 'Copy',
    view: ButtonView.Primary,
    icon: IconName.Copy
  }
}`},(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source)})});var g,w,x;u.parameters=t(e({},u.parameters),{docs:t(e({},(g=u.parameters)==null?void 0:g.docs),{source:e({originalSource:`{
  args: {
    text: 'Learn more...',
    view: ButtonView.Secondary,
    icon: IconName.Forward
  }
}`},(x=(w=u.parameters)==null?void 0:w.docs)==null?void 0:x.source)})});var V,h,q;s.parameters=t(e({},s.parameters),{docs:t(e({},(V=s.parameters)==null?void 0:V.docs),{source:e({originalSource:`{
  args: {
    view: ButtonView.Icon,
    icon: IconName.Cancel,
    label: 'Cancel'
  }
}`},(q=(h=s.parameters)==null?void 0:h.docs)==null?void 0:q.source)})});var B,S,_;i.parameters=t(e({},i.parameters),{docs:t(e({},(B=i.parameters)==null?void 0:B.docs),{source:e({originalSource:`{
  args: {
    text: 'Hover On Me',
    view: ButtonView.Secondary,
    tooltip: 'This button does nothing...'
  }
}`},(_=(S=i.parameters)==null?void 0:S.docs)==null?void 0:_.source)})});var C,I,E;c.parameters=t(e({},c.parameters),{docs:t(e({},(C=c.parameters)==null?void 0:C.docs),{source:e({originalSource:`{
  args: {
    text: 'Disabled',
    view: ButtonView.Primary,
    icon: IconName.Clear,
    disabled: true
  }
}`},(E=(I=c.parameters)==null?void 0:I.docs)==null?void 0:E.source)})});const F=["Primary","Secondary","Icon","WithTooltip","Disabled"],A=Object.freeze(Object.defineProperty({__proto__:null,Disabled:c,Icon:s,Primary:o,Secondary:u,WithTooltip:i,__namedExportsOrder:F,default:O},Symbol.toStringTag,{value:"Module"}));export{A as B};
