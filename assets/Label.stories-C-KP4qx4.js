var S=Object.defineProperty,q=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var u=(n,t,o)=>t in n?S(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,e=(n,t)=>{for(var o in t||(t={}))v.call(t,o)&&u(n,o,t[o]);if(p)for(var o of p(t))w.call(t,o)&&u(n,o,t[o]);return n},r=(n,t)=>q(n,_(t));import{j as d}from"./iframe-DldSfwU-.js";import{I as l,a as m}from"./Icon-C2ayUpEw.js";import{L as D}from"./Label-bYYRV1Qt.js";const O={title:"Atoms/Label",component:D,argTypes:{label:{control:"text",description:"The text content of the label"},required:{control:"boolean",description:"Whether the associated field is required"},inputId:{control:"text",description:"ID of the associated input element"},isTextHidden:{control:"boolean",description:"Visually hides the label text (still accessible to screen readers)"},icon:{description:"Optional icon element to display with the label",control:"select",options:Object.values(l)},iconPosition:{options:["left","right"],control:{type:"radio"},description:"Position of the icon relative to the text"}},args:{label:"Sample Label",required:!1,inputId:"sample-input",isTextHidden:!1}},s={args:{label:"Username",required:!0}},i={args:{label:"Login into the account",icon:d.jsx(m,{name:l.Login}),iconPosition:"left"}},a={args:{label:"Password",icon:d.jsx(m,{name:l.Hide}),iconPosition:"right",required:!0}},c={args:{label:"Delete",isTextHidden:!0,icon:d.jsx(m,{name:l.Delete}),iconPosition:"left"},parameters:{docs:{description:{story:"Label with visually hidden text (still accessible to screen readers)"}}}};var b,h,g;s.parameters=r(e({},s.parameters),{docs:r(e({},(b=s.parameters)==null?void 0:b.docs),{source:e({originalSource:`{
  args: {
    label: 'Username',
    required: true
  }
}`},(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source)})});var x,f,I;i.parameters=r(e({},i.parameters),{docs:r(e({},(x=i.parameters)==null?void 0:x.docs),{source:e({originalSource:`{
  args: {
    label: 'Login into the account',
    icon: <Icon name={IconName.Login} />,
    iconPosition: 'left'
  }
}`},(I=(f=i.parameters)==null?void 0:f.docs)==null?void 0:I.source)})});var L,P,y;a.parameters=r(e({},a.parameters),{docs:r(e({},(L=a.parameters)==null?void 0:L.docs),{source:e({originalSource:`{
  args: {
    label: 'Password',
    icon: <Icon name={IconName.Hide} />,
    iconPosition: 'right',
    required: true
  }
}`},(y=(P=a.parameters)==null?void 0:P.docs)==null?void 0:y.source)})});var T,j,H;c.parameters=r(e({},c.parameters),{docs:r(e({},(T=c.parameters)==null?void 0:T.docs),{source:e({originalSource:`{
  args: {
    label: 'Delete',
    isTextHidden: true,
    icon: <Icon name={IconName.Delete} />,
    iconPosition: 'left'
  },
  parameters: {
    docs: {
      description: {
        story: 'Label with visually hidden text (still accessible to screen readers)'
      }
    }
  }
}`},(H=(j=c.parameters)==null?void 0:j.docs)==null?void 0:H.source)})});const W=["Primary","WithLeftIcon","WithRightIcon","HiddenText"],z=Object.freeze(Object.defineProperty({__proto__:null,HiddenText:c,Primary:s,WithLeftIcon:i,WithRightIcon:a,__namedExportsOrder:W,default:O},Symbol.toStringTag,{value:"Module"}));export{z as L};
