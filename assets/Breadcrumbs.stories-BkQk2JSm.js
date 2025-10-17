var D=Object.defineProperty,E=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var y=(e,r,t)=>r in e?D(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))g.call(r,t)&&y(e,t,r[t]);if(d)for(var t of d(r))h.call(r,t)&&y(e,t,r[t]);return e},o=(e,r)=>E(e,T(r));var x=(e,r)=>{var t={};for(var a in e)g.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&d)for(var a of d(e))r.indexOf(a)<0&&h.call(e,a)&&(t[a]=e[a]);return t};import{a as j,I as m}from"./Icon-dWZyNSFh.js";import{j as n}from"./iframe-BQgxzBO6.js";import{g as W}from"./get-class-name-CHDn80c0.js";import{L as O}from"./Link-DQpKZqBS.js";const R="_breadcrumbs_list_e19m5_1",w="_breadcrumbs_item_e19m5_10",M="_breadcrumbs_text_e19m5_14",u={breadcrumbs_list:R,breadcrumbs_item:w,breadcrumbs_text:M},b=({item:e,isLastItem:r})=>{const t=!!e.link&&!r;return n.jsxs(n.Fragment,{children:[n.jsx("li",{className:u.breadcrumbs_item,children:t?n.jsx(O,{href:e.link,icon:e.icon,iconPosition:"left",children:e.label}):n.jsxs("span",{"aria-current":r?"page":void 0,className:u.breadcrumbs_text,children:[e.icon&&n.jsx(j,{name:e.icon,hidden:!0}),e.label]})}),!r&&n.jsx(j,{name:m.ChevronRight,hidden:!0})]})};try{b.displayName="BreadcrumbItem",b.__docgenInfo={description:"",displayName:"BreadcrumbItem",props:{item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"Breadcrumb"}},isLastItem:{defaultValue:null,description:"",name:"isLastItem",required:!0,type:{name:"boolean"}}}}}catch(e){}const p=({items:e})=>n.jsx("ol",{className:u.breadcrumbs_list,children:e.map((r,t)=>n.jsx(b,{item:r,isLastItem:t===e.length-1},r.label))});try{p.displayName="BreadcrumbList",p.__docgenInfo={description:"",displayName:"BreadcrumbList",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Breadcrumb[]"}}}}}catch(e){}const _=U=>{var f=U,{items:e,className:r,id:t,style:a,tabIndex:v,title:H}=f,C=x(f,["items","className","id","style","tabIndex","title"]);const A=W([u.breadcrumbs,r]);return!e||e.length===0?null:n.jsx("nav",o(s({"aria-label":"Breadcrumb",className:A,id:t,style:a,tabIndex:v,title:H},C),{children:n.jsx(p,{items:e})}))};try{_.displayName="Breadcrumbs",_.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Breadcrumb[]"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch(e){}const z={title:"Molecules/Breadcrumbs",component:_,argTypes:{items:{control:"object",description:"Array of breadcrumb items"},className:{control:"text",description:"Additional CSS class for custom styling"},id:{control:"text",description:"Unique identifier for the breadcrumbs"},style:{control:"object",description:"Inline styles for the breadcrumbs container"},tabIndex:{control:"number",description:"Tab index for the breadcrumbs container"},title:{control:"text",description:"Title attribute for the breadcrumbs container"}},args:{items:[{label:"Home",icon:m.Home,link:"/"},{label:"Documents",icon:m.Documents,link:"/documents"},{label:"Projects",icon:m.Projects,link:"/documents/projects"},{label:"Report"}]}},c={},i={args:{items:[{label:"Home",link:"/"},{label:"Settings",link:"/settings"},{label:"Account",link:"/settings/account"},{label:"Privacy"}]}},l={args:{items:[{label:"Home"},{label:"Products"},{label:"Electronics"},{label:"Smartphones"}]},parameters:{docs:{description:{story:"Breadcrumbs without any links - useful for static navigation paths."}}}};var B,k,I;c.parameters=o(s({},c.parameters),{docs:o(s({},(B=c.parameters)==null?void 0:B.docs),{source:s({originalSource:"{}"},(I=(k=c.parameters)==null?void 0:k.docs)==null?void 0:I.source)})});var N,S,q;i.parameters=o(s({},i.parameters),{docs:o(s({},(N=i.parameters)==null?void 0:N.docs),{source:s({originalSource:`{
  args: {
    items: [{
      label: 'Home',
      link: '/'
    }, {
      label: 'Settings',
      link: '/settings'
    }, {
      label: 'Account',
      link: '/settings/account'
    }, {
      label: 'Privacy'
    }]
  }
}`},(q=(S=i.parameters)==null?void 0:S.docs)==null?void 0:q.source)})});var L,P,V;l.parameters=o(s({},l.parameters),{docs:o(s({},(L=l.parameters)==null?void 0:L.docs),{source:s({originalSource:`{
  args: {
    items: [{
      label: 'Home'
    }, {
      label: 'Products'
    }, {
      label: 'Electronics'
    }, {
      label: 'Smartphones'
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumbs without any links - useful for static navigation paths.'
      }
    }
  }
}`},(V=(P=l.parameters)==null?void 0:P.docs)==null?void 0:V.source)})});const F=["Default","WithoutIcons","WithoutLinks"],Y=Object.freeze(Object.defineProperty({__proto__:null,Default:c,WithoutIcons:i,WithoutLinks:l,__namedExportsOrder:F,default:z},Symbol.toStringTag,{value:"Module"}));export{Y as B};
