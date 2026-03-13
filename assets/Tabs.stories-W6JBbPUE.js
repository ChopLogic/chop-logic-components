import{n as e,r as t}from"./chunk-BneVvdWh.js";import{n}from"./iframe-DM9h6Jyd.js";import{i as r,t as i}from"./enums-CQiPy48U.js";import{n as a,t as o}from"./organisms-D9JvJQYu.js";var s,c,l=e((()=>{o(),s=n(),c=e=>{let t=(t,n)=>{e.onTabTitleChange?.(t,n)},n=()=>{e.onTabAdd?.()};return(0,s.jsx)(a,{...e,onTabTitleChange:t,onTabAdd:e.extendable?n:void 0})};try{c.displayName=`TabsExample`,c.__docgenInfo={description:``,displayName:`TabsExample`,props:{tabs:{defaultValue:null,description:``,name:`tabs`,required:!0,type:{name:`ChopLogicTabItem[]`}},defaultTabId:{defaultValue:null,description:``,name:`defaultTabId`,required:!1,type:{name:`string`}},mode:{defaultValue:null,description:``,name:`mode`,required:!1,type:{name:`enum`,value:[{value:`"vertical"`},{value:`"horizontal"`}]}},stretched:{defaultValue:null,description:``,name:`stretched`,required:!1,type:{name:`boolean`}},editable:{defaultValue:null,description:``,name:`editable`,required:!1,type:{name:`boolean`}},extendable:{defaultValue:null,description:``,name:`extendable`,required:!1,type:{name:`boolean`}},extendedTabLabel:{defaultValue:null,description:``,name:`extendedTabLabel`,required:!1,type:{name:`string`}},extendedTabContent:{defaultValue:null,description:``,name:`extendedTabContent`,required:!1,type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>>`}},onTabTitleChange:{defaultValue:null,description:``,name:`onTabTitleChange`,required:!1,type:{name:`((tabId: string, newTitle: string) => void)`}},onTabAdd:{defaultValue:null,description:``,name:`onTabAdd`,required:!1,type:{name:`(() => void)`}},onTabSelect:{defaultValue:null,description:``,name:`onTabSelect`,required:!1,type:{name:`((id: string) => void)`}},onTabDelete:{defaultValue:null,description:``,name:`onTabDelete`,required:!1,type:{name:`((id: string) => void)`}},id:{defaultValue:null,description:``,name:`id`,required:!1,type:{name:`string`}},className:{defaultValue:null,description:``,name:`className`,required:!1,type:{name:`string`}},style:{defaultValue:null,description:``,name:`style`,required:!1,type:{name:`CSSProperties`}},tabIndex:{defaultValue:null,description:``,name:`tabIndex`,required:!1,type:{name:`number`}},title:{defaultValue:null,description:``,name:`title`,required:!1,type:{name:`string`}}}}}catch{}})),u=t({Disabled:()=>b,Editable:()=>v,Extendable:()=>y,Horizontal:()=>h,Stretched:()=>_,Vertical:()=>g,__namedExportsOrder:()=>x,default:()=>m}),d,f,p,m,h,g,_,v,y,b,x,S=e((()=>{i(),l(),d=n(),f=({title:e,content:t})=>(0,d.jsxs)(`div`,{style:{padding:`1rem`,border:`2px dashed #ccc`,borderRadius:`4px`},children:[(0,d.jsx)(`h3`,{children:e}),(0,d.jsx)(`p`,{children:t??`Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolor accusantium consequatur quia sequi, aspernatur aperiam natus harum error ratione id ullam dicta aliquid, repellendus magni voluptates temporibus iure corporis.`})]}),p=[{id:`tab1`,title:`Tab 1`,content:(0,d.jsx)(f,{title:`Tab 1 Content`})},{id:`tab2`,title:`Tab 2`,content:(0,d.jsx)(f,{title:`Tab 2 Content`})},{id:`tab3`,title:`Tab 3`,content:(0,d.jsx)(f,{title:`Tab 3 Content`})}],m={argTypes:{tabs:{control:`object`,description:`Array of tab items to display`,table:{type:{summary:`ChopLogicTabItem[]`},defaultValue:{summary:`[]`},category:`Content`}},extendedTabContent:{control:`object`,description:`Content template for newly added tabs`,table:{type:{summary:`ReactElement`},defaultValue:{summary:`<div></div>`},category:`Content`}},extendedTabLabel:{control:`text`,description:`Default label for newly added tabs`,table:{type:{summary:`string`},defaultValue:{summary:`"New Tab"`},category:`Content`}},mode:{control:`radio`,options:Object.values(r),description:`Orientation of the tabs`,table:{type:{summary:`OrientationMode`},defaultValue:{summary:`OrientationMode.Horizontal`},category:`Behavior`}},defaultTabId:{control:`text`,description:`Initially selected tab ID`,table:{type:{summary:`string`},defaultValue:{summary:`first tab ID`},category:`Behavior`}},stretched:{control:`boolean`,description:`Whether tabs should stretch to fill available space`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`},category:`Behavior`}},editable:{control:`boolean`,description:`Whether tab titles can be edited`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`},category:`Behavior`}},extendable:{control:`boolean`,description:`Whether new tabs can be added`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`},category:`Behavior`}},onTabTitleChange:{action:`onTabTitleChange`,description:`Callback when a tab title is changed`,table:{type:{summary:`(tabId: string, newTitle: string) => void`},category:`Interaction`}},onTabAdd:{action:`onTabAdd`,description:`Callback when a new tab is added`,table:{type:{summary:`() => void`},category:`Interaction`}},onTabSelect:{action:`onTabSelect`,description:`Callback when a tab is selected`,table:{type:{summary:`(id: string) => void`},category:`Interaction`}},onTabDelete:{action:`onTabDelete`,description:`Callback when a tab is deleted`,table:{type:{summary:`(id: string) => void`},category:`Interaction`}},className:{control:`text`,description:`Additional CSS class for the root element`,table:{type:{summary:`string`},category:`Styling`}},style:{control:`object`,description:`HTML style attribute for the root element`,table:{type:{summary:`React.CSSProperties`},category:`Styling`}},id:{control:`text`,description:`HTML id attribute for the root element`,table:{type:{summary:`string`},category:`Identification`}},title:{control:`text`,description:`HTML title attribute for the root element`,table:{type:{summary:`string`},category:`Identification`}},tabIndex:{control:`number`,description:`HTML tab-index attribute for the root element`,table:{type:{summary:`number`},category:`Accessibility`}}},args:{tabs:p,defaultTabId:`tab1`,mode:r.Horizontal,stretched:!1,editable:!1,extendable:!1,extendedTabLabel:`New Tab`},component:c,parameters:{docs:{description:{component:`A flexible and accessible tabs component supporting horizontal and vertical orientations, editable titles, and dynamic tab management.`}}},title:`Organisms/Tabs`},h={args:{mode:r.Horizontal},parameters:{docs:{description:{story:`Default horizontal tabs with standard navigation.`}}}},g={args:{mode:r.Vertical},parameters:{docs:{description:{story:`Vertical tabs for sidebar navigation or compact layouts.`}}}},_={args:{mode:r.Horizontal,stretched:!0},parameters:{docs:{description:{story:`Tabs that stretch to fill the available horizontal space.`}}}},v={args:{editable:!0,stretched:!0,onTabTitleChange:(e,t)=>console.log(`Tab ID: ${e}, New Title: ${t}`)},parameters:{docs:{description:{story:`Tabs with editable titles. Click the edit icon on the selected tab to modify its title.`}}}},y={args:{editable:!0,stretched:!0,extendable:!0,onTabTitleChange:(e,t)=>console.log(`Tab ID: ${e}, New Title: ${t}`),onTabAdd:()=>console.log(`New tab added!`),onTabDelete:e=>console.log(`Tab deleted: ${e}`),extendedTabLabel:`New Tab`,extendedTabContent:(0,d.jsx)(f,{title:`New Tab Content`,content:`This is the content of the newly added tab.`})},parameters:{docs:{description:{story:`Fully dynamic tabs with add/delete functionality and editable titles. Add new tabs using the "+" button and delete tabs using the delete icon.`}}}},b={args:{tabs:[{id:`active-tab`,title:`Active Tab`,content:(0,d.jsx)(f,{title:`Active Tab Content`})},{id:`disabled-tab`,title:`Disabled Tab`,disabled:!0,content:(0,d.jsx)(f,{title:`Disabled Tab Content`})},{id:`another-active`,title:`Another Active`,content:(0,d.jsx)(f,{title:`Another Active Tab Content`})}]},parameters:{docs:{description:{story:`Tabs with disabled state. Disabled tabs cannot be selected or edited.`}}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    mode: OrientationMode.Horizontal
  },
  parameters: {
    docs: {
      description: {
        story: 'Default horizontal tabs with standard navigation.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    mode: OrientationMode.Vertical
  },
  parameters: {
    docs: {
      description: {
        story: 'Vertical tabs for sidebar navigation or compact layouts.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    mode: OrientationMode.Horizontal,
    stretched: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs that stretch to fill the available horizontal space.'
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    editable: true,
    stretched: true,
    onTabTitleChange: (tabId: string, newTitle: string) => console.log(\`Tab ID: \${tabId}, New Title: \${newTitle}\`)
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs with editable titles. Click the edit icon on the selected tab to modify its title.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    editable: true,
    stretched: true,
    extendable: true,
    onTabTitleChange: (tabId: string, newTitle: string) => console.log(\`Tab ID: \${tabId}, New Title: \${newTitle}\`),
    onTabAdd: () => console.log('New tab added!'),
    onTabDelete: (id: string) => console.log(\`Tab deleted: \${id}\`),
    extendedTabLabel: 'New Tab',
    extendedTabContent: <TabContent title="New Tab Content" content="This is the content of the newly added tab." />
  },
  parameters: {
    docs: {
      description: {
        story: 'Fully dynamic tabs with add/delete functionality and editable titles. Add new tabs using the "+" button and delete tabs using the delete icon.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: 'active-tab',
      title: 'Active Tab',
      content: <TabContent title="Active Tab Content" />
    }, {
      id: 'disabled-tab',
      title: 'Disabled Tab',
      disabled: true,
      content: <TabContent title="Disabled Tab Content" />
    }, {
      id: 'another-active',
      title: 'Another Active',
      content: <TabContent title="Another Active Tab Content" />
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs with disabled state. Disabled tabs cannot be selected or edited.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x=[`Horizontal`,`Vertical`,`Stretched`,`Editable`,`Extendable`,`Disabled`]}));S();export{b as Disabled,v as Editable,y as Extendable,h as Horizontal,_ as Stretched,g as Vertical,x as __namedExportsOrder,m as default,S as n,u as t};