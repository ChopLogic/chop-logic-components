import{j as n}from"./iframe-CcStb-xO.js";import"./EditableText-q3k3r0Uc.js";import{C as f}from"./Header-BiTp834B.js";import{C as r,a as s}from"./Icon-wNEFAMcc.js";import"./Loader-BhAQqttu.js";import"./Portal-CahqD_2f.js";const I={title:"Atoms/Label",component:f,argTypes:{label:{control:"text",description:"The text content of the label"},required:{control:"boolean",description:"Whether the associated field is required"},inputId:{control:"text",description:"ID of the associated input element"},isTextHidden:{control:"boolean",description:"Visually hides the label text (still accessible to screen readers)"},icon:{description:"Optional icon element to display with the label",control:"select",options:Object.values(r)},iconPosition:{options:["left","right"],control:{type:"radio"},description:"Position of the icon relative to the text"}},args:{label:"Sample Label",required:!1,inputId:"sample-input",isTextHidden:!1}},e={args:{label:"Username",required:!0}},o={args:{label:"Login into the account",icon:n.jsx(s,{name:r.Login}),iconPosition:"left"}},t={args:{label:"Password",icon:n.jsx(s,{name:r.Hide}),iconPosition:"right",required:!0}},i={args:{label:"Delete",isTextHidden:!0,icon:n.jsx(s,{name:r.Delete}),iconPosition:"left"},parameters:{docs:{description:{story:"Label with visually hidden text (still accessible to screen readers)"}}}};var a,c,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    required: true
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,p,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Login into the account',
    icon: <ChopLogicIcon name={ChopLogicIconName.Login} />,
    iconPosition: 'left'
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,h,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    icon: <ChopLogicIcon name={ChopLogicIconName.Hide} />,
    iconPosition: 'right',
    required: true
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var b,L,x;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Delete',
    isTextHidden: true,
    icon: <ChopLogicIcon name={ChopLogicIconName.Delete} />,
    iconPosition: 'left'
  },
  parameters: {
    docs: {
      description: {
        story: 'Label with visually hidden text (still accessible to screen readers)'
      }
    }
  }
}`,...(x=(L=i.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};const P=["Primary","WithLeftIcon","WithRightIcon","HiddenText"],q=Object.freeze(Object.defineProperty({__proto__:null,HiddenText:i,Primary:e,WithLeftIcon:o,WithRightIcon:t,__namedExportsOrder:P,default:I},Symbol.toStringTag,{value:"Module"}));export{q as L};
