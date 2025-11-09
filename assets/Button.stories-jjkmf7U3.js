var j=Object.defineProperty,H=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var y=(n,t,r)=>t in n?j(n,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[t]=r,e=(n,t)=>{for(var r in t||(t={}))O.call(t,r)&&y(n,r,t[r]);if(v)for(var r of v(t))F.call(t,r)&&y(n,r,t[r]);return n},a=(n,t)=>H(n,M(t));import{j as L}from"./iframe-Dwcaj2QA.js";import{B as D,a as o}from"./Button-DFuVSk3h.js";import{I as l}from"./Icon-2KdL7_px.js";const p=n=>L.jsx(D,e({},n));try{p.displayName="ButtonExample",p.__docgenInfo={description:"",displayName:"ButtonExample",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLButtonElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLButtonElement>"}},view:{defaultValue:null,description:"",name:"view",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"icon"'},{value:'"inner"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"back"'},{value:'"cancel"'},{value:'"checkbox-checked"'},{value:'"checkbox-unchecked"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"chop-logic"'},{value:'"clear"'},{value:'"copy"'},{value:'"cut"'},{value:'"delete"'},{value:'"documents"'},{value:'"download"'},{value:'"edit"'},{value:'"email"'},{value:'"error"'},{value:'"forward"'},{value:'"graduate"'},{value:'"help"'},{value:'"hide"'},{value:'"home"'},{value:'"image"'},{value:'"info"'},{value:'"login"'},{value:'"paste"'},{value:'"phone"'},{value:'"plus-circle"'},{value:'"projects"'},{value:'"question"'},{value:'"save"'},{value:'"search"'},{value:'"settings"'},{value:'"show"'},{value:'"upload"'},{value:'"warning"'},{value:'"remove"'}]}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},extended:{defaultValue:null,description:"",name:"extended",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch(n){}const W={argTypes:{text:{control:"text"},disabled:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]},icon:{control:"select",options:Object.values(l)},view:{control:"select",options:Object.values(o)},extended:{control:"boolean"}},args:{text:"Button",type:"button",view:o.Primary,disabled:!1,extended:!1},component:p,title:"Atoms/Button"},u={args:{text:"Copy",view:o.Primary,icon:l.Copy}},s={args:{text:"Copy",view:o.Primary,icon:l.Copy,extended:!0}},i={args:{text:"Learn more...",view:o.Secondary,icon:l.Forward}},c={args:{view:o.Icon,icon:l.Cancel,label:"Cancel"}},d={args:{text:"Hover On Me",view:o.Secondary,tooltip:"This button does nothing..."}},m={args:{text:"Disabled",view:o.Primary,icon:l.Clear,disabled:!0}};var f,g,b;u.parameters=a(e({},u.parameters),{docs:a(e({},(f=u.parameters)==null?void 0:f.docs),{source:e({originalSource:`{
  args: {
    text: 'Copy',
    view: ButtonView.Primary,
    icon: IconName.Copy
  }
}`},(b=(g=u.parameters)==null?void 0:g.docs)==null?void 0:b.source)})});var x,w,V;s.parameters=a(e({},s.parameters),{docs:a(e({},(x=s.parameters)==null?void 0:x.docs),{source:e({originalSource:`{
  args: {
    text: 'Copy',
    view: ButtonView.Primary,
    icon: IconName.Copy,
    extended: true
  }
}`},(V=(w=s.parameters)==null?void 0:w.docs)==null?void 0:V.source)})});var h,q,B;i.parameters=a(e({},i.parameters),{docs:a(e({},(h=i.parameters)==null?void 0:h.docs),{source:e({originalSource:`{
  args: {
    text: 'Learn more...',
    view: ButtonView.Secondary,
    icon: IconName.Forward
  }
}`},(B=(q=i.parameters)==null?void 0:q.docs)==null?void 0:B.source)})});var C,S,I;c.parameters=a(e({},c.parameters),{docs:a(e({},(C=c.parameters)==null?void 0:C.docs),{source:e({originalSource:`{
  args: {
    view: ButtonView.Icon,
    icon: IconName.Cancel,
    label: 'Cancel'
  }
}`},(I=(S=c.parameters)==null?void 0:S.docs)==null?void 0:I.source)})});var _,E,P;d.parameters=a(e({},d.parameters),{docs:a(e({},(_=d.parameters)==null?void 0:_.docs),{source:e({originalSource:`{
  args: {
    text: 'Hover On Me',
    view: ButtonView.Secondary,
    tooltip: 'This button does nothing...'
  }
}`},(P=(E=d.parameters)==null?void 0:E.docs)==null?void 0:P.source)})});var N,k,T;m.parameters=a(e({},m.parameters),{docs:a(e({},(N=m.parameters)==null?void 0:N.docs),{source:e({originalSource:`{
  args: {
    text: 'Disabled',
    view: ButtonView.Primary,
    icon: IconName.Clear,
    disabled: true
  }
}`},(T=(k=m.parameters)==null?void 0:k.docs)==null?void 0:T.source)})});const z=["Primary","PrimaryExtended","Secondary","Icon","WithTooltip","Disabled"],K=Object.freeze(Object.defineProperty({__proto__:null,Disabled:m,Icon:c,Primary:u,PrimaryExtended:s,Secondary:i,WithTooltip:d,__namedExportsOrder:z,default:W},Symbol.toStringTag,{value:"Module"}));export{K as B};
