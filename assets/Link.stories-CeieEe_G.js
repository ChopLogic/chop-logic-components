import{n as e,r as t}from"./chunk-BneVvdWh.js";import{a as n,t as r}from"./enums-CQiPy48U.js";import{o as i,s as a}from"./Button-KLfsPtDl.js";var o=t({Default:()=>c,DisabledLink:()=>m,EmailLink:()=>f,External:()=>l,PhoneLink:()=>p,WithLeftIcon:()=>u,WithRightIcon:()=>d,__namedExportsOrder:()=>h,default:()=>s}),s,c,l,u,d,f,p,m,h,g=e((()=>{r(),a(),s={title:`Atoms/Link`,component:i,argTypes:{children:{control:`text`,description:`Link text content`,table:{type:{summary:`string | ReactNode`},category:`Content`}},icon:{control:`select`,options:Object.values(n),description:`Optional icon to display with the link`,table:{type:{summary:`IconName`},category:`Content`}},href:{control:`text`,description:`The URL the link points to`,table:{type:{summary:`string`},category:`Behavior`}},external:{control:`boolean`,description:`Whether the link points to an external site`,table:{type:{summary:`boolean`},category:`Behavior`}},iconPosition:{control:`radio`,options:[`left`,`right`],description:`Position of the icon relative to the text`,table:{type:{summary:`'left' | 'right'`},defaultValue:{summary:`left`},category:`Styling`}},className:{control:`text`,description:`Additional CSS class for custom styling`,table:{type:{summary:`string`},category:`Styling`}},disabled:{control:`boolean`,description:`Whether the link is disabled`,table:{type:{summary:`boolean`},category:`State`}}},args:{href:`#`,children:`Example Link`,external:!1,disabled:!1}},c={args:{children:`Internal Link`,href:`/`}},l={args:{children:`External Website`,href:`https://google.com`,external:!0}},u={args:{children:`Download File`,href:`/files/document.pdf`,icon:n.Download,iconPosition:`left`}},d={args:{children:`Learn More`,href:`/learn-more`,icon:n.ChevronRight,iconPosition:`right`}},f={args:{children:`Contact Us`,href:`mailto:hello@example.com`,icon:n.Mail}},p={args:{children:`Call Us`,href:`tel:+1234567890`,icon:n.Phone}},m={args:{children:`Disabled Link`,disabled:!0,href:`#`,icon:n.XSquare}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Internal Link',
    href: '/'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'External Website',
    href: 'https://google.com',
    external: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Download File',
    href: '/files/document.pdf',
    icon: IconName.Download,
    iconPosition: 'left'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Learn More',
    href: '/learn-more',
    icon: IconName.ChevronRight,
    iconPosition: 'right'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Contact Us',
    href: 'mailto:hello@example.com',
    icon: IconName.Mail
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Call Us',
    href: 'tel:+1234567890',
    icon: IconName.Phone
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Link',
    disabled: true,
    href: '#',
    icon: IconName.XSquare
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`External`,`WithLeftIcon`,`WithRightIcon`,`EmailLink`,`PhoneLink`,`DisabledLink`]}));g();export{c as Default,m as DisabledLink,f as EmailLink,l as External,p as PhoneLink,u as WithLeftIcon,d as WithRightIcon,h as __namedExportsOrder,s as default,g as n,o as t};