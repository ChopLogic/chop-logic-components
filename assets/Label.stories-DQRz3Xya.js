var T=Object.defineProperty,H=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var m=(r,t,o)=>t in r?T(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,e=(r,t)=>{for(var o in t||(t={}))_.call(t,o)&&m(r,o,t[o]);if(d)for(var o of d(t))v.call(t,o)&&m(r,o,t[o]);return r},n=(r,t)=>H(r,q(t));import{L as w}from"./Label-DX3cIGOQ.js";import{I as l}from"./Icon-Z7qWIs8D.js";const D={title:"Atoms/Label",component:w,argTypes:{label:{control:"text",description:"The text content of the label",table:{type:{summary:"string"},category:"Content"}},icon:{control:"select",options:Object.values(l),description:"Optional icon element to display with the label",table:{type:{summary:"IconName"},category:"Content"}},iconPosition:{control:"radio",options:["left","right"],description:"Position of the icon relative to the text",table:{type:{summary:"'left' | 'right'"},defaultValue:{summary:"left"},category:"Styling"}},inputId:{control:"text",description:"ID of the associated input element",table:{type:{summary:"string"},category:"Association"}},required:{control:"boolean",description:"Whether the associated field is required",table:{type:{summary:"boolean"},category:"Validation"}},isTextHidden:{control:"boolean",description:"Visually hides the label text (still accessible to screen readers)",table:{type:{summary:"boolean"},category:"Accessibility"}}},args:{label:"Sample Label",required:!1,inputId:"sample-input",isTextHidden:!1}},a={args:{label:"Username",required:!0}},i={args:{label:"Login into the account",icon:l.Login,iconPosition:"left"}},s={args:{label:"Password",icon:l.Hide,iconPosition:"right",required:!0}},c={args:{label:"Delete",isTextHidden:!0,icon:l.Delete,iconPosition:"left"},parameters:{docs:{description:{story:"Label with visually hidden text (still accessible to screen readers)"}}}};var p,u,b;a.parameters=n(e({},a.parameters),{docs:n(e({},(p=a.parameters)==null?void 0:p.docs),{source:e({originalSource:`{
  args: {
    label: 'Username',
    required: true
  }
}`},(b=(u=a.parameters)==null?void 0:u.docs)==null?void 0:b.source)})});var g,y,h;i.parameters=n(e({},i.parameters),{docs:n(e({},(g=i.parameters)==null?void 0:g.docs),{source:e({originalSource:`{
  args: {
    label: 'Login into the account',
    icon: IconName.Login,
    iconPosition: 'left'
  }
}`},(h=(y=i.parameters)==null?void 0:y.docs)==null?void 0:h.source)})});var f,x,L;s.parameters=n(e({},s.parameters),{docs:n(e({},(f=s.parameters)==null?void 0:f.docs),{source:e({originalSource:`{
  args: {
    label: 'Password',
    icon: IconName.Hide,
    iconPosition: 'right',
    required: true
  }
}`},(L=(x=s.parameters)==null?void 0:x.docs)==null?void 0:L.source)})});var I,P,S;c.parameters=n(e({},c.parameters),{docs:n(e({},(I=c.parameters)==null?void 0:I.docs),{source:e({originalSource:`{
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
}`},(S=(P=c.parameters)==null?void 0:P.docs)==null?void 0:S.source)})});const N=["Primary","WithLeftIcon","WithRightIcon","HiddenText"],A=Object.freeze(Object.defineProperty({__proto__:null,HiddenText:c,Primary:a,WithLeftIcon:i,WithRightIcon:s,__namedExportsOrder:N,default:D},Symbol.toStringTag,{value:"Module"}));export{A as L};
