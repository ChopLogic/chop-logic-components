var j=Object.defineProperty,M=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var f=(t,r,o)=>r in t?j(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,e=(t,r)=>{for(var o in r||(r={}))A.call(r,o)&&f(t,o,r[o]);if(p)for(var o of p(r))F.call(r,o)&&f(t,o,r[o]);return t},n=(t,r)=>M(t,T(r));import{I as a}from"./Icon-7G4m4hr-.js";import{L as V}from"./Link-BMLhIL-8.js";const z={title:"Atoms/Link",component:V,argTypes:{href:{control:"text",description:"The URL the link points to"},children:{control:"text",description:"Link text content"},icon:{control:"select",options:Object.values(a),description:"Optional icon to display with the link"},iconPosition:{control:"radio",options:["left","right"],description:"Position of the icon relative to the text"},external:{control:"boolean",description:"Whether the link points to an external site",defaultValue:!1},disabled:{control:"boolean",description:"Whether the link is disabled",defaultValue:!1},className:{control:"text",description:"Additional CSS class for custom styling"}},args:{href:"#",children:"Example Link",external:!1,disabled:!1}},s={args:{children:"Internal Link",href:"/"}},i={args:{children:"External Website",href:"https://google.com",external:!0}},c={args:{children:"Download File",href:"/files/document.pdf",icon:a.Download,iconPosition:"left"}},l={args:{children:"Learn More",href:"/learn-more",icon:a.ChevronRight,iconPosition:"right"}},d={args:{children:"Contact Us",href:"mailto:hello@example.com",icon:a.Email}},h={args:{children:"Call Us",href:"tel:+1234567890",icon:a.Phone}},m={args:{children:"Disabled Link",disabled:!0,href:"#",icon:a.Cancel}};var u,g,L;s.parameters=n(e({},s.parameters),{docs:n(e({},(u=s.parameters)==null?void 0:u.docs),{source:e({originalSource:`{
  args: {
    children: 'Internal Link',
    href: '/'
  }
}`},(L=(g=s.parameters)==null?void 0:g.docs)==null?void 0:L.source)})});var k,x,b;i.parameters=n(e({},i.parameters),{docs:n(e({},(k=i.parameters)==null?void 0:k.docs),{source:e({originalSource:`{
  args: {
    children: 'External Website',
    href: 'https://google.com',
    external: true
  }
}`},(b=(x=i.parameters)==null?void 0:x.docs)==null?void 0:b.source)})});var I,S,P;c.parameters=n(e({},c.parameters),{docs:n(e({},(I=c.parameters)==null?void 0:I.docs),{source:e({originalSource:`{
  args: {
    children: 'Download File',
    href: '/files/document.pdf',
    icon: IconName.Download,
    iconPosition: 'left'
  }
}`},(P=(S=c.parameters)==null?void 0:S.docs)==null?void 0:P.source)})});var D,E,C;l.parameters=n(e({},l.parameters),{docs:n(e({},(D=l.parameters)==null?void 0:D.docs),{source:e({originalSource:`{
  args: {
    children: 'Learn More',
    href: '/learn-more',
    icon: IconName.ChevronRight,
    iconPosition: 'right'
  }
}`},(C=(E=l.parameters)==null?void 0:E.docs)==null?void 0:C.source)})});var W,N,_;d.parameters=n(e({},d.parameters),{docs:n(e({},(W=d.parameters)==null?void 0:W.docs),{source:e({originalSource:`{
  args: {
    children: 'Contact Us',
    href: 'mailto:hello@example.com',
    icon: IconName.Email
  }
}`},(_=(N=d.parameters)==null?void 0:N.docs)==null?void 0:_.source)})});var v,w,y;h.parameters=n(e({},h.parameters),{docs:n(e({},(v=h.parameters)==null?void 0:v.docs),{source:e({originalSource:`{
  args: {
    children: 'Call Us',
    href: 'tel:+1234567890',
    icon: IconName.Phone
  }
}`},(y=(w=h.parameters)==null?void 0:w.docs)==null?void 0:y.source)})});var O,R,U;m.parameters=n(e({},m.parameters),{docs:n(e({},(O=m.parameters)==null?void 0:O.docs),{source:e({originalSource:`{
  args: {
    children: 'Disabled Link',
    disabled: true,
    href: '#',
    icon: IconName.Cancel
  }
}`},(U=(R=m.parameters)==null?void 0:R.docs)==null?void 0:U.source)})});const q=["Default","External","WithLeftIcon","WithRightIcon","EmailLink","PhoneLink","DisabledLink"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:s,DisabledLink:m,EmailLink:d,External:i,PhoneLink:h,WithLeftIcon:c,WithRightIcon:l,__namedExportsOrder:q,default:z},Symbol.toStringTag,{value:"Module"}));export{J as L};
