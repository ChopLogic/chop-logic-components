var ae=Object.defineProperty,ne=Object.defineProperties;var oe=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var w=(a,n,o)=>n in a?ae(a,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[n]=o,e=(a,n)=>{for(var o in n||(n={}))y.call(n,o)&&w(a,o,n[o]);if(h)for(var o of h(n))I.call(n,o)&&w(a,o,n[o]);return a},r=(a,n)=>ne(a,oe(n));var E=(a,n)=>{var o={};for(var t in a)y.call(a,t)&&n.indexOf(t)<0&&(o[t]=a[t]);if(a!=null&&h)for(var t of h(a))n.indexOf(t)<0&&I.call(a,t)&&(o[t]=a[t]);return o};import{a as re,I as l}from"./Icon-D4WeBZx2.js";import{j as v}from"./iframe-CvRPWbsI.js";import{g as te}from"./get-class-name-CHDn80c0.js";const le="_link_1saak_2",ie="_link__disabled_1saak_22",se="_link_text_1saak_26",ce="_link_icon_1saak_35",f={link:le,link__disabled:ie,link_text:se,link_icon:ce},k=me=>{var x=me,{href:a,children:n,icon:o,iconPosition:t="left",external:J=!1,disabled:g=!1,className:K,target:_}=x,Q=E(x,["href","children","icon","iconPosition","external","disabled","className","target"]);const X=te([f.link,K,{[f.link__disabled]:g}]),b=J||a.startsWith("http")||a.startsWith("//"),Y=b?_||"_blank":_,L=o?v.jsx(re,{name:o,className:f.link_icon,"aria-hidden":"true"}):null,Z=o&&t==="left",ee=o&&t==="right";return v.jsxs("a",r(e(r(e({href:a,className:X,target:Y},b&&{"aria-label":typeof n=="string"?`${n} (opens in new window)`:"Opens in new window"}),{"aria-disabled":g}),Q),{children:[Z&&L,v.jsx("span",{className:f.link_text,children:n}),ee&&L]}))};try{k.displayName="Link",k.__docgenInfo={description:"",displayName:"Link",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"back"'},{value:'"cancel"'},{value:'"checkbox-checked"'},{value:'"checkbox-unchecked"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"clear"'},{value:'"copy"'},{value:'"cut"'},{value:'"delete"'},{value:'"download"'},{value:'"edit"'},{value:'"email"'},{value:'"error"'},{value:'"forward"'},{value:'"graduate"'},{value:'"help"'},{value:'"hide"'},{value:'"home"'},{value:'"info"'},{value:'"login"'},{value:'"paste"'},{value:'"phone"'},{value:'"plus-circle"'},{value:'"question"'},{value:'"save"'},{value:'"search"'},{value:'"show"'},{value:'"upload"'},{value:'"warning"'},{value:'"remove"'}]}},iconPosition:{defaultValue:{value:"left"},description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},external:{defaultValue:{value:"false"},description:"",name:"external",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch(a){}const de={title:"Atoms/Link",component:k,argTypes:{href:{control:"text",description:"The URL the link points to"},children:{control:"text",description:"Link text content"},icon:{control:"select",options:Object.values(l),description:"Optional icon to display with the link"},iconPosition:{control:"radio",options:["left","right"],description:"Position of the icon relative to the text"},external:{control:"boolean",description:"Whether the link points to an external site",defaultValue:!1},disabled:{control:"boolean",description:"Whether the link is disabled",defaultValue:!1},className:{control:"text",description:"Additional CSS class for custom styling"}},args:{href:"#",children:"Example Link",external:!1,disabled:!1}},i={args:{children:"Internal Link",href:"/about"}},s={args:{children:"External Website",href:"https://example.com",external:!0}},c={args:{children:"Download File",href:"/files/document.pdf",icon:l.Download,iconPosition:"left"}},d={args:{children:"Learn More",href:"/learn-more",icon:l.ChevronRight,iconPosition:"right"}},u={args:{children:"Contact Us",href:"mailto:hello@example.com",icon:l.Email}},m={args:{children:"Call Us",href:"tel:+1234567890",icon:l.Phone}},p={args:{children:"Disabled Link",disabled:!0,href:"#",icon:l.Cancel}};var N,P,S;i.parameters=r(e({},i.parameters),{docs:r(e({},(N=i.parameters)==null?void 0:N.docs),{source:e({originalSource:`{
  args: {
    children: 'Internal Link',
    href: '/about'
  }
}`},(S=(P=i.parameters)==null?void 0:P.docs)==null?void 0:S.source)})});var C,D,W;s.parameters=r(e({},s.parameters),{docs:r(e({},(C=s.parameters)==null?void 0:C.docs),{source:e({originalSource:`{
  args: {
    children: 'External Website',
    href: 'https://example.com',
    external: true
  }
}`},(W=(D=s.parameters)==null?void 0:D.docs)==null?void 0:W.source)})});var j,R,V;c.parameters=r(e({},c.parameters),{docs:r(e({},(j=c.parameters)==null?void 0:j.docs),{source:e({originalSource:`{
  args: {
    children: 'Download File',
    href: '/files/document.pdf',
    icon: IconName.Download,
    iconPosition: 'left'
  }
}`},(V=(R=c.parameters)==null?void 0:R.docs)==null?void 0:V.source)})});var q,O,U;d.parameters=r(e({},d.parameters),{docs:r(e({},(q=d.parameters)==null?void 0:q.docs),{source:e({originalSource:`{
  args: {
    children: 'Learn More',
    href: '/learn-more',
    icon: IconName.ChevronRight,
    iconPosition: 'right'
  }
}`},(U=(O=d.parameters)==null?void 0:O.docs)==null?void 0:U.source)})});var T,M,A;u.parameters=r(e({},u.parameters),{docs:r(e({},(T=u.parameters)==null?void 0:T.docs),{source:e({originalSource:`{
  args: {
    children: 'Contact Us',
    href: 'mailto:hello@example.com',
    icon: IconName.Email
  }
}`},(A=(M=u.parameters)==null?void 0:M.docs)==null?void 0:A.source)})});var F,z,$;m.parameters=r(e({},m.parameters),{docs:r(e({},(F=m.parameters)==null?void 0:F.docs),{source:e({originalSource:`{
  args: {
    children: 'Call Us',
    href: 'tel:+1234567890',
    icon: IconName.Phone
  }
}`},($=(z=m.parameters)==null?void 0:z.docs)==null?void 0:$.source)})});var B,G,H;p.parameters=r(e({},p.parameters),{docs:r(e({},(B=p.parameters)==null?void 0:B.docs),{source:e({originalSource:`{
  args: {
    children: 'Disabled Link',
    disabled: true,
    href: '#',
    icon: IconName.Cancel
  }
}`},(H=(G=p.parameters)==null?void 0:G.docs)==null?void 0:H.source)})});const ue=["Default","External","WithLeftIcon","WithRightIcon","EmailLink","PhoneLink","DisabledLink"],ke=Object.freeze(Object.defineProperty({__proto__:null,Default:i,DisabledLink:p,EmailLink:u,External:s,PhoneLink:m,WithLeftIcon:c,WithRightIcon:d,__namedExportsOrder:ue,default:de},Symbol.toStringTag,{value:"Module"}));export{ke as L};
