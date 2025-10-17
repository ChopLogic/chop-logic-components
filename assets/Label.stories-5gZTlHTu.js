var H=Object.defineProperty,S=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var p=(r,t,o)=>t in r?H(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,e=(r,t)=>{for(var o in t||(t={}))_.call(t,o)&&p(r,o,t[o]);if(d)for(var o of d(t))v.call(t,o)&&p(r,o,t[o]);return r},n=(r,t)=>S(r,q(t));import{L as w}from"./Label-Osqgpz2l.js";import{I as l}from"./Icon-dWZyNSFh.js";const D={title:"Atoms/Label",component:w,argTypes:{label:{control:"text",description:"The text content of the label"},required:{control:"boolean",description:"Whether the associated field is required"},inputId:{control:"text",description:"ID of the associated input element"},isTextHidden:{control:"boolean",description:"Visually hides the label text (still accessible to screen readers)"},icon:{description:"Optional icon element to display with the label",control:"select",options:Object.values(l)},iconPosition:{options:["left","right"],control:{type:"radio"},description:"Position of the icon relative to the text"}},args:{label:"Sample Label",required:!1,inputId:"sample-input",isTextHidden:!1}},i={args:{label:"Username",required:!0}},s={args:{label:"Login into the account",icon:l.Login,iconPosition:"left"}},a={args:{label:"Password",icon:l.Hide,iconPosition:"right",required:!0}},c={args:{label:"Delete",isTextHidden:!0,icon:l.Delete,iconPosition:"left"},parameters:{docs:{description:{story:"Label with visually hidden text (still accessible to screen readers)"}}}};var m,u,b;i.parameters=n(e({},i.parameters),{docs:n(e({},(m=i.parameters)==null?void 0:m.docs),{source:e({originalSource:`{
  args: {
    label: 'Username',
    required: true
  }
}`},(b=(u=i.parameters)==null?void 0:u.docs)==null?void 0:b.source)})});var h,g,f;s.parameters=n(e({},s.parameters),{docs:n(e({},(h=s.parameters)==null?void 0:h.docs),{source:e({originalSource:`{
  args: {
    label: 'Login into the account',
    icon: IconName.Login,
    iconPosition: 'left'
  }
}`},(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source)})});var x,L,P;a.parameters=n(e({},a.parameters),{docs:n(e({},(x=a.parameters)==null?void 0:x.docs),{source:e({originalSource:`{
  args: {
    label: 'Password',
    icon: IconName.Hide,
    iconPosition: 'right',
    required: true
  }
}`},(P=(L=a.parameters)==null?void 0:L.docs)==null?void 0:P.source)})});var y,I,T;c.parameters=n(e({},c.parameters),{docs:n(e({},(y=c.parameters)==null?void 0:y.docs),{source:e({originalSource:`{
  args: {
    label: 'Delete',
    isTextHidden: true,
    icon: IconName.Delete,
    iconPosition: 'left'
  },
  parameters: {
    docs: {
      description: {
        story: 'Label with visually hidden text (still accessible to screen readers)'
      }
    }
  }
}`},(T=(I=c.parameters)==null?void 0:I.docs)==null?void 0:T.source)})});const O=["Primary","WithLeftIcon","WithRightIcon","HiddenText"],R=Object.freeze(Object.defineProperty({__proto__:null,HiddenText:c,Primary:i,WithLeftIcon:s,WithRightIcon:a,__namedExportsOrder:O,default:D},Symbol.toStringTag,{value:"Module"}));export{R as L};
