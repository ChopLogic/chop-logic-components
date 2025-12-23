var H=Object.defineProperty,P=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var y=(r,e,n)=>e in r?H(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n,t=(r,e)=>{for(var n in e||(e={}))M.call(e,n)&&y(r,n,e[n]);if(d)for(var n of d(e))O.call(e,n)&&y(r,n,e[n]);return r},o=(r,e)=>P(r,E(e));import{B as a,a as N}from"./Button-AHhdSE-N.js";import{I as m}from"./Icon-CmAPyYs8.js";const L={title:"Atoms/Button",component:N,args:{text:"Button",type:"button",view:a.Primary,disabled:!1,extended:!1},argTypes:{text:{control:"text",description:"The text content displayed on the button",table:{type:{summary:"string"},category:"Content"}},icon:{control:"select",options:Object.values(m),description:"Icon to display alongside the button text",table:{type:{summary:"IconName"},category:"Content"}},view:{control:"select",options:Object.values(a),description:"Visual style variant of the button",table:{type:{summary:"ButtonView"},category:"Styling"}},extended:{control:"boolean",description:"Whether the button should take full available width",table:{type:{summary:"boolean"},category:"Styling"}},type:{control:"select",options:["button","submit","reset"],description:"The HTML button type attribute",table:{type:{summary:"'button' | 'submit' | 'reset'"},defaultValue:{summary:"button"},category:"Behavior"}},disabled:{control:"boolean",description:"Whether the button is disabled",table:{type:{summary:"boolean"},category:"State"}},tooltip:{control:"text",description:"Tooltip text shown on hover",table:{type:{summary:"string"},category:"Interaction"}},label:{control:"text",description:"Accessibility label for icon-only buttons",table:{type:{summary:"string"},category:"Accessibility"}},tabIndex:{control:"number",description:"Tab index for keyboard navigation",table:{type:{summary:"number"},category:"Accessibility"}},onClick:{action:"clicked",description:"Callback function triggered when the button is clicked",table:{type:{summary:"MouseEventHandler<HTMLButtonElement>"},category:"Interaction"}},onFocus:{action:"focused",description:"Callback function triggered when the button receives focus",table:{type:{summary:"FocusEventHandler<HTMLButtonElement>"},category:"Interaction"}},onBlur:{action:"blurred",description:"Callback function triggered when the button loses focus",table:{type:{summary:"FocusEventHandler<HTMLButtonElement>"},category:"Interaction"}},title:{control:"text",description:"Tooltip text shown on hover",table:{type:{summary:"string"},category:"Interaction"}},visibleOn:{control:"radio",options:["hover","click","focus","contextmenu"],description:"Event that triggers tooltip visibility",table:{type:{summary:"'hover' | 'click' | 'focus' | 'contextmenu'"},category:"Interaction"}},id:{control:"text",description:"Unique identifier for the button element",table:{type:{summary:"string"},category:"Identification"}},name:{control:"text",description:"The name attribute for the button element (useful for form submission)",table:{type:{summary:"string"},category:"Identification"}},required:{control:"boolean",description:"Whether the button is required (for form validation)",table:{type:{summary:"boolean"},category:"Validation"}},className:{control:"text",description:"Additional CSS class names for custom styling",table:{type:{summary:"string"},category:"Styling"}},style:{control:"object",description:"Inline CSS styles to apply to the button",table:{type:{summary:"CSSProperties"},category:"Styling"}}}},i={args:{text:"Copy",view:a.Primary,icon:m.Copy}},s={args:{text:"Learn more...",view:a.Secondary,icon:m.Forward}},c={args:{view:a.Icon,icon:m.Cancel,label:"Cancel"}},l={args:{text:"Hover On Me",view:a.Secondary,tooltip:"This button does nothing..."}},u={args:{text:"Disabled",view:a.Primary,icon:m.Clear,disabled:!0}};var p,b,g;i.parameters=o(t({},i.parameters),{docs:o(t({},(p=i.parameters)==null?void 0:p.docs),{source:t({originalSource:`{
  args: {
    text: 'Copy',
    view: ButtonView.Primary,
    icon: IconName.Copy
  }
}`},(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source)})});var h,v,f;s.parameters=o(t({},s.parameters),{docs:o(t({},(h=s.parameters)==null?void 0:h.docs),{source:t({originalSource:`{
  args: {
    text: 'Learn more...',
    view: ButtonView.Secondary,
    icon: IconName.Forward
  }
}`},(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source)})});var x,w,S;c.parameters=o(t({},c.parameters),{docs:o(t({},(x=c.parameters)==null?void 0:x.docs),{source:t({originalSource:`{
  args: {
    view: ButtonView.Icon,
    icon: IconName.Cancel,
    label: 'Cancel'
  }
}`},(S=(w=c.parameters)==null?void 0:w.docs)==null?void 0:S.source)})});var I,C,B;l.parameters=o(t({},l.parameters),{docs:o(t({},(I=l.parameters)==null?void 0:I.docs),{source:t({originalSource:`{
  args: {
    text: 'Hover On Me',
    view: ButtonView.Secondary,
    tooltip: 'This button does nothing...'
  }
}`},(B=(C=l.parameters)==null?void 0:C.docs)==null?void 0:B.source)})});var T,k,V;u.parameters=o(t({},u.parameters),{docs:o(t({},(T=u.parameters)==null?void 0:T.docs),{source:t({originalSource:`{
  args: {
    text: 'Disabled',
    view: ButtonView.Primary,
    icon: IconName.Clear,
    disabled: true
  }
}`},(V=(k=u.parameters)==null?void 0:k.docs)==null?void 0:V.source)})});const _=["Primary","Secondary","Icon","WithTooltip","Disabled"],W=Object.freeze(Object.defineProperty({__proto__:null,Disabled:u,Icon:c,Primary:i,Secondary:s,WithTooltip:l,__namedExportsOrder:_,default:L},Symbol.toStringTag,{value:"Module"}));export{W as B};
