import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{c as n,t as r}from"./enums-Ce7QlA98.js";import{n as i,t as a}from"./Avatar-A_O3UPio.js";var o=t({Default:()=>c,WithExternalLink:()=>d,WithFallback:()=>l,WithLink:()=>u,__namedExportsOrder:()=>f,default:()=>s}),s,c,l,u,d,f,p=e((()=>{r(),i(),s={title:`Atoms/Avatar`,component:a,argTypes:{name:{control:`text`,description:`Author name, used for alt text and fallback letter`,table:{type:{summary:`string`},category:`Content`}},tooltip:{control:`text`,description:`A tooltip text`,table:{type:{summary:`string`},category:`Content`}},imageUrl:{control:`text`,description:`URL for the avatar image`,table:{type:{summary:`string`},category:`Content`}},link:{control:`text`,description:`Optional URL to wrap the avatar in an anchor element`,table:{type:{summary:`string`},category:`Behavior`}},linkTarget:{control:`select`,options:Object.values(n),description:`Anchor target attribute when link is provided`,table:{type:{summary:`LinkTarget`},defaultValue:{summary:`_self`},category:`Behavior`}},id:{control:`text`,description:`Unique identifier for the root element`,table:{type:{summary:`string`},defaultValue:{summary:`undefined`},category:`HTML Attributes`}},className:{control:`text`,description:`Additional CSS class for custom styling`,table:{type:{summary:`string`},defaultValue:{summary:`undefined`},category:`HTML Attributes`}},style:{control:`object`,description:`Inline styles for the root element`,table:{type:{summary:`CSSProperties`},defaultValue:{summary:`undefined`},category:`HTML Attributes`}},tabIndex:{control:`number`,description:`Tab index for the root element`,table:{type:{summary:`number`},defaultValue:{summary:`undefined`},category:`HTML Attributes`}},title:{control:`text`,description:`Title attribute for the root element`,table:{type:{summary:`string`},defaultValue:{summary:`undefined`},category:`HTML Attributes`}}},args:{name:`Jane Doe`,tooltip:`jane.doe@example.com`,imageUrl:`https://i.pravatar.cc/150?img=1`}},c={args:{name:`Jane Doe`,tooltip:`jane.doe@example.com`,imageUrl:`https://i.pravatar.cc/150?img=1`}},l={args:{name:`John Smith`,tooltip:`John Smith`,imageUrl:`https://broken-url.example/avatar.jpg`}},u={args:{name:`Jane Doe`,tooltip:`Jane Doe Profile`,imageUrl:`https://i.pravatar.cc/150?img=1`,link:`https://example.com/profile/jane`,linkTarget:n.Self}},d={args:{name:`Jane Doe`,tooltip:`jane.doe@example.com`,imageUrl:`https://i.pravatar.cc/150?img=1`,link:`https://example.com/profile/jane`,linkTarget:n.Blank}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Jane Doe',
    tooltip: 'jane.doe@example.com',
    imageUrl: 'https://i.pravatar.cc/150?img=1'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'John Smith',
    tooltip: 'John Smith',
    imageUrl: 'https://broken-url.example/avatar.jpg'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Jane Doe',
    tooltip: 'Jane Doe Profile',
    imageUrl: 'https://i.pravatar.cc/150?img=1',
    link: 'https://example.com/profile/jane',
    linkTarget: LinkTarget.Self
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Jane Doe',
    tooltip: 'jane.doe@example.com',
    imageUrl: 'https://i.pravatar.cc/150?img=1',
    link: 'https://example.com/profile/jane',
    linkTarget: LinkTarget.Blank
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`,`WithFallback`,`WithLink`,`WithExternalLink`]}));p();export{c as Default,d as WithExternalLink,l as WithFallback,u as WithLink,f as __namedExportsOrder,s as default,p as n,o as t};