import{L as n}from"./Label-B0vz0m2R.js";import{I as a}from"./icon-name-DofyCo9k.js";const s={title:"Atoms/Label",component:n,argTypes:{label:{control:"text",description:"The text content of the label",table:{type:{summary:"string"},category:"Content"}},icon:{control:"select",options:Object.values(a),description:"Optional icon element to display with the label",table:{type:{summary:"IconName"},category:"Content"}},iconPosition:{control:"radio",options:["left","right"],description:"Position of the icon relative to the text",table:{type:{summary:"'left' | 'right'"},defaultValue:{summary:"left"},category:"Styling"}},inputId:{control:"text",description:"ID of the associated input element",table:{type:{summary:"string"},category:"Association"}},required:{control:"boolean",description:"Whether the associated field is required",table:{type:{summary:"boolean"},category:"Validation"}},isTextHidden:{control:"boolean",description:"Visually hides the label text (still accessible to screen readers)",table:{type:{summary:"boolean"},category:"Accessibility"}}},args:{label:"Sample Label",required:!1,inputId:"sample-input",isTextHidden:!1}},e={args:{label:"Username",required:!0}},t={args:{label:"Login into the account",icon:a.LogIn,iconPosition:"left"}},o={args:{label:"Password",icon:a.EyeOff,iconPosition:"right",required:!0}},r={args:{label:"Delete",isTextHidden:!0,icon:a.Trash2,iconPosition:"left"},parameters:{docs:{description:{story:"Label with visually hidden text (still accessible to screen readers)"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    required: true
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Login into the account',
    icon: IconName.LogIn,
    iconPosition: 'left'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    icon: IconName.EyeOff,
    iconPosition: 'right',
    required: true
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Delete',
    isTextHidden: true,
    icon: IconName.Trash2,
    iconPosition: 'left'
  },
  parameters: {
    docs: {
      description: {
        story: 'Label with visually hidden text (still accessible to screen readers)'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};const i=["Primary","WithLeftIcon","WithRightIcon","HiddenText"],d=Object.freeze(Object.defineProperty({__proto__:null,HiddenText:r,Primary:e,WithLeftIcon:t,WithRightIcon:o,__namedExportsOrder:i,default:s},Symbol.toStringTag,{value:"Module"}));export{d as L};
