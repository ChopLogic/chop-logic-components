import{I as i}from"./icon-name-DofyCo9k.js";import{j as r}from"./iframe-DP4TfwvB.js";import{g as f}from"./get-class-name-BY88G7uf.js";import{I as d,E as _}from"./Icon-DgdWz_xl.js";import{L as h}from"./Link-DCrFWwad.js";const o=({item:e,isLastItem:t})=>{const a=!!e.link&&!t;return r.jsxs(r.Fragment,{children:[r.jsx("li",{className:"cl-breadcrumbs__item",children:a?r.jsx(h,{href:e?.link??"",icon:e.icon,iconPosition:"left",className:"cl-breadcrumbs__link",children:e.label}):r.jsxs("span",{"aria-current":t?"page":void 0,className:"cl-breadcrumbs__text",children:[e.icon&&r.jsx(d,{name:e.icon,hidden:!0}),e.label]})}),!t&&r.jsx(d,{name:i.ChevronRight,size:_.Small,testId:"breadcrumb-separator"})]})};try{o.displayName="BreadcrumbItem",o.__docgenInfo={description:"",displayName:"BreadcrumbItem",props:{item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"Breadcrumb"}},isLastItem:{defaultValue:null,description:"",name:"isLastItem",required:!0,type:{name:"boolean"}}}}}catch{}const c=({items:e})=>r.jsx("ol",{className:"cl-breadcrumbs__list",children:e.map((t,a)=>r.jsx(o,{item:t,isLastItem:a===e.length-1},t.label))});try{c.displayName="BreadcrumbList",c.__docgenInfo={description:"",displayName:"BreadcrumbList",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Breadcrumb[]"}}}}}catch{}const m=({items:e,className:t,id:a,style:u,tabIndex:p,title:b,...y})=>{const g=f(["cl-breadcrumbs",t]);return!e||e.length===0?null:r.jsx("nav",{"aria-label":"Breadcrumb",className:g,id:a,style:u,tabIndex:p,title:b,...y,children:r.jsx(c,{items:e})})};try{m.displayName="Breadcrumbs",m.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Breadcrumb[]"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const x={title:"Molecules/Breadcrumbs",component:m,argTypes:{items:{control:"object",description:"Array of breadcrumb items",table:{type:{summary:"BreadcrumbItem[]"},category:"Content"}},className:{control:"text",description:"Additional CSS class for custom styling",table:{type:{summary:"string"},category:"Styling"}},style:{control:"object",description:"Inline styles for the breadcrumbs container",table:{type:{summary:"CSSProperties"},category:"Styling"}},id:{control:"text",description:"Unique identifier for the breadcrumbs",table:{type:{summary:"string"},category:"Identification"}},title:{control:"text",description:"Title attribute for the breadcrumbs container",table:{type:{summary:"string"},category:"Identification"}},tabIndex:{control:"number",description:"Tab index for the breadcrumbs container",table:{type:{summary:"number"},category:"Accessibility"}}},args:{items:[{label:"Home",icon:i.Home,link:"/"},{label:"Documents",icon:i.BookOpen,link:"/documents"},{label:"Projects",icon:i.Cast,link:"/documents/projects"},{label:"Report"}]}},n={},s={args:{items:[{label:"Home",link:"/"},{label:"Settings",link:"/settings"},{label:"Account",link:"/settings/account"},{label:"Privacy"}]}},l={args:{items:[{label:"Home"},{label:"Products"},{label:"Electronics"},{label:"Smartphones"}]},parameters:{docs:{description:{story:"Breadcrumbs without any links - useful for static navigation paths."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const I=["Default","WithoutIcons","WithoutLinks"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:n,WithoutIcons:s,WithoutLinks:l,__namedExportsOrder:I,default:x},Symbol.toStringTag,{value:"Module"}));export{q as B};
