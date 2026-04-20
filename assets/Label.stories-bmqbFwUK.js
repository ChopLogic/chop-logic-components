import{n as e,r as t}from"./chunk-BneVvdWh.js";import{a as n,t as r}from"./enums-f3-dvFJa.js";import{a as i,u as a}from"./Button-BHS50WPa.js";var o=t({HiddenText:()=>d,Primary:()=>c,WithLeftIcon:()=>l,WithRightIcon:()=>u,__namedExportsOrder:()=>f,default:()=>s}),s,c,l,u,d,f,p=e((()=>{i(),r(),s={title:`Atoms/Label`,component:a,argTypes:{label:{control:`text`,description:`The text content of the label`,table:{type:{summary:`string`},category:`Content`}},icon:{control:`select`,options:Object.values(n),description:`Optional icon element to display with the label`,table:{type:{summary:`IconName`},category:`Content`}},iconPosition:{control:`radio`,options:[`left`,`right`],description:`Position of the icon relative to the text`,table:{type:{summary:`'left' | 'right'`},defaultValue:{summary:`left`},category:`Styling`}},inputId:{control:`text`,description:`ID of the associated input element`,table:{type:{summary:`string`},category:`Association`}},required:{control:`boolean`,description:`Whether the associated field is required`,table:{type:{summary:`boolean`},category:`Validation`}},isTextHidden:{control:`boolean`,description:`Visually hides the label text (still accessible to screen readers)`,table:{type:{summary:`boolean`},category:`Accessibility`}}},args:{label:`Sample Label`,required:!1,inputId:`sample-input`,isTextHidden:!1}},c={args:{label:`Username`,required:!0}},l={args:{label:`Login into the account`,icon:n.LogIn,iconPosition:`left`}},u={args:{label:`Password`,icon:n.EyeOff,iconPosition:`right`,required:!0}},d={args:{label:`Delete`,isTextHidden:!0,icon:n.Trash2,iconPosition:`left`},parameters:{docs:{description:{story:`Label with visually hidden text (still accessible to screen readers)`}}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    required: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Login into the account',
    icon: IconName.LogIn,
    iconPosition: 'left'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    icon: IconName.EyeOff,
    iconPosition: 'right',
    required: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`Primary`,`WithLeftIcon`,`WithRightIcon`,`HiddenText`]}));p();export{d as HiddenText,c as Primary,l as WithLeftIcon,u as WithRightIcon,f as __namedExportsOrder,s as default,p as n,o as t};