var j=Object.defineProperty,M=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var g=(t,o,n)=>o in t?j(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,e=(t,o)=>{for(var n in o||(o={}))A.call(o,n)&&g(t,n,o[n]);if(p)for(var n of p(o))B.call(o,n)&&g(t,n,o[n]);return t},r=(t,o)=>M(t,T(o));import{I as a}from"./Icon-B65JLDHH.js";import{L as F}from"./Link-CgYrU6hl.js";const z={title:"Atoms/Link",component:F,argTypes:{children:{control:"text",description:"Link text content",table:{type:{summary:"string | ReactNode"},category:"Content"}},icon:{control:"select",options:Object.values(a),description:"Optional icon to display with the link",table:{type:{summary:"IconName"},category:"Content"}},href:{control:"text",description:"The URL the link points to",table:{type:{summary:"string"},category:"Behavior"}},external:{control:"boolean",description:"Whether the link points to an external site",table:{type:{summary:"boolean"},category:"Behavior"}},iconPosition:{control:"radio",options:["left","right"],description:"Position of the icon relative to the text",table:{type:{summary:"'left' | 'right'"},defaultValue:{summary:"left"},category:"Styling"}},className:{control:"text",description:"Additional CSS class for custom styling",table:{type:{summary:"string"},category:"Styling"}},disabled:{control:"boolean",description:"Whether the link is disabled",table:{type:{summary:"boolean"},category:"State"}}},args:{href:"#",children:"Example Link",external:!1,disabled:!1}},s={args:{children:"Internal Link",href:"/"}},i={args:{children:"External Website",href:"https://google.com",external:!0}},c={args:{children:"Download File",href:"/files/document.pdf",icon:a.Download,iconPosition:"left"}},l={args:{children:"Learn More",href:"/learn-more",icon:a.ChevronRight,iconPosition:"right"}},m={args:{children:"Contact Us",href:"mailto:hello@example.com",icon:a.Email}},d={args:{children:"Call Us",href:"tel:+1234567890",icon:a.Phone}},h={args:{children:"Disabled Link",disabled:!0,href:"#",icon:a.Cancel}};var u,f,y;s.parameters=r(e({},s.parameters),{docs:r(e({},(u=s.parameters)==null?void 0:u.docs),{source:e({originalSource:`{
  args: {
    children: 'Internal Link',
    href: '/'
  }
}`},(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source)})});var b,L,k;i.parameters=r(e({},i.parameters),{docs:r(e({},(b=i.parameters)==null?void 0:b.docs),{source:e({originalSource:`{
  args: {
    children: 'External Website',
    href: 'https://google.com',
    external: true
  }
}`},(k=(L=i.parameters)==null?void 0:L.docs)==null?void 0:k.source)})});var x,S,I;c.parameters=r(e({},c.parameters),{docs:r(e({},(x=c.parameters)==null?void 0:x.docs),{source:e({originalSource:`{
  args: {
    children: 'Download File',
    href: '/files/document.pdf',
    icon: IconName.Download,
    iconPosition: 'left'
  }
}`},(I=(S=c.parameters)==null?void 0:S.docs)==null?void 0:I.source)})});var C,P,D;l.parameters=r(e({},l.parameters),{docs:r(e({},(C=l.parameters)==null?void 0:C.docs),{source:e({originalSource:`{
  args: {
    children: 'Learn More',
    href: '/learn-more',
    icon: IconName.ChevronRight,
    iconPosition: 'right'
  }
}`},(D=(P=l.parameters)==null?void 0:P.docs)==null?void 0:D.source)})});var E,N,W;m.parameters=r(e({},m.parameters),{docs:r(e({},(E=m.parameters)==null?void 0:E.docs),{source:e({originalSource:`{
  args: {
    children: 'Contact Us',
    href: 'mailto:hello@example.com',
    icon: IconName.Email
  }
}`},(W=(N=m.parameters)==null?void 0:N.docs)==null?void 0:W.source)})});var v,R,_;d.parameters=r(e({},d.parameters),{docs:r(e({},(v=d.parameters)==null?void 0:v.docs),{source:e({originalSource:`{
  args: {
    children: 'Call Us',
    href: 'tel:+1234567890',
    icon: IconName.Phone
  }
}`},(_=(R=d.parameters)==null?void 0:R.docs)==null?void 0:_.source)})});var w,O,U;h.parameters=r(e({},h.parameters),{docs:r(e({},(w=h.parameters)==null?void 0:w.docs),{source:e({originalSource:`{
  args: {
    children: 'Disabled Link',
    disabled: true,
    href: '#',
    icon: IconName.Cancel
  }
}`},(U=(O=h.parameters)==null?void 0:O.docs)==null?void 0:U.source)})});const V=["Default","External","WithLeftIcon","WithRightIcon","EmailLink","PhoneLink","DisabledLink"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:s,DisabledLink:h,EmailLink:m,External:i,PhoneLink:d,WithLeftIcon:c,WithRightIcon:l,__namedExportsOrder:V,default:z},Symbol.toStringTag,{value:"Module"}));export{J as L};
