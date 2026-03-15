import{n as e,r as t}from"./chunk-BneVvdWh.js";import{a as n,t as r}from"./enums-CQiPy48U.js";import{n as i,t as a}from"./Breadcrumbs-CXYQtep4.js";var o=t({Default:()=>c,WithoutIcons:()=>l,WithoutLinks:()=>u,__namedExportsOrder:()=>d,default:()=>s}),s,c,l,u,d,f=e((()=>{r(),i(),s={title:`Molecules/Breadcrumbs`,component:a,argTypes:{items:{control:`object`,description:`Array of breadcrumb items`,table:{type:{summary:`BreadcrumbItem[]`},category:`Content`}},className:{control:`text`,description:`Additional CSS class for custom styling`,table:{type:{summary:`string`},category:`Styling`}},style:{control:`object`,description:`Inline styles for the breadcrumbs container`,table:{type:{summary:`CSSProperties`},category:`Styling`}},id:{control:`text`,description:`Unique identifier for the breadcrumbs`,table:{type:{summary:`string`},category:`Identification`}},title:{control:`text`,description:`Title attribute for the breadcrumbs container`,table:{type:{summary:`string`},category:`Identification`}},tabIndex:{control:`number`,description:`Tab index for the breadcrumbs container`,table:{type:{summary:`number`},category:`Accessibility`}}},args:{items:[{label:`Home`,icon:n.Home,link:`/`},{label:`Documents`,icon:n.BookOpen,link:`/documents`},{label:`Projects`,icon:n.Cast,link:`/documents/projects`},{label:`Report`}]}},c={},l={args:{items:[{label:`Home`,link:`/`},{label:`Settings`,link:`/settings`},{label:`Account`,link:`/settings/account`},{label:`Privacy`}]}},u={args:{items:[{label:`Home`},{label:`Products`},{label:`Electronics`},{label:`Smartphones`}]},parameters:{docs:{description:{story:`Breadcrumbs without any links - useful for static navigation paths.`}}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`Default`,`WithoutIcons`,`WithoutLinks`]}));f();export{c as Default,l as WithoutIcons,u as WithoutLinks,d as __namedExportsOrder,s as default,f as n,o as t};