import{I as e}from"./icon-name-DofyCo9k.js";import{L as c}from"./Link-DI1ggpWC.js";const l={title:"Atoms/Link",component:c,argTypes:{children:{control:"text",description:"Link text content",table:{type:{summary:"string | ReactNode"},category:"Content"}},icon:{control:"select",options:Object.values(e),description:"Optional icon to display with the link",table:{type:{summary:"IconName"},category:"Content"}},href:{control:"text",description:"The URL the link points to",table:{type:{summary:"string"},category:"Behavior"}},external:{control:"boolean",description:"Whether the link points to an external site",table:{type:{summary:"boolean"},category:"Behavior"}},iconPosition:{control:"radio",options:["left","right"],description:"Position of the icon relative to the text",table:{type:{summary:"'left' | 'right'"},defaultValue:{summary:"left"},category:"Styling"}},className:{control:"text",description:"Additional CSS class for custom styling",table:{type:{summary:"string"},category:"Styling"}},disabled:{control:"boolean",description:"Whether the link is disabled",table:{type:{summary:"boolean"},category:"State"}}},args:{href:"#",children:"Example Link",external:!1,disabled:!1}},r={args:{children:"Internal Link",href:"/"}},o={args:{children:"External Website",href:"https://google.com",external:!0}},n={args:{children:"Download File",href:"/files/document.pdf",icon:e.Download,iconPosition:"left"}},t={args:{children:"Learn More",href:"/learn-more",icon:e.ChevronRight,iconPosition:"right"}},a={args:{children:"Contact Us",href:"mailto:hello@example.com",icon:e.Mail}},s={args:{children:"Call Us",href:"tel:+1234567890",icon:e.Phone}},i={args:{children:"Disabled Link",disabled:!0,href:"#",icon:e.XSquare}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Internal Link',
    href: '/'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'External Website',
    href: 'https://google.com',
    external: true
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Download File',
    href: '/files/document.pdf',
    icon: IconName.Download,
    iconPosition: 'left'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Learn More',
    href: '/learn-more',
    icon: IconName.ChevronRight,
    iconPosition: 'right'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Contact Us',
    href: 'mailto:hello@example.com',
    icon: IconName.Mail
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Call Us',
    href: 'tel:+1234567890',
    icon: IconName.Phone
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Link',
    disabled: true,
    href: '#',
    icon: IconName.XSquare
  }
}`,...i.parameters?.docs?.source}}};const d=["Default","External","WithLeftIcon","WithRightIcon","EmailLink","PhoneLink","DisabledLink"],p=Object.freeze(Object.defineProperty({__proto__:null,Default:r,DisabledLink:i,EmailLink:a,External:o,PhoneLink:s,WithLeftIcon:n,WithRightIcon:t,__namedExportsOrder:d,default:l},Symbol.toStringTag,{value:"Module"}));export{p as L};
