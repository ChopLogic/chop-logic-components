import{n as e,r as t}from"./chunk-BneVvdWh.js";import{n}from"./iframe-DM9h6Jyd.js";import{n as r,r as i,t as a}from"./enums-CQiPy48U.js";import{a as o,i as s,r as c,t as l}from"./Button-KLfsPtDl.js";var u,d,f=e((()=>{c(),o(),u=n(),d=({tooltipContent:e,containerTag:t,visibleOn:n,id:r,...i})=>(0,u.jsx)(`div`,{children:(0,u.jsxs)(s,{tooltipContent:e,containerTag:t,visibleOn:n,id:r,...i,children:[n===`click`&&(0,u.jsx)(l,{text:`Click me`}),n===`hover`&&(0,u.jsx)(l,{text:`Hover on me`}),n===`focus`&&(0,u.jsx)(l,{text:`Focus on me`}),n===`contextmenu`&&(0,u.jsx)(l,{text:`Right click on me`})]})});try{d.displayName=`TooltipExample`,d.__docgenInfo={description:``,displayName:`TooltipExample`,props:{tooltipContent:{defaultValue:null,description:``,name:`tooltipContent`,required:!0,type:{name:`string | ReactElement<unknown, string | JSXElementConstructor<any>>`}},containerTag:{defaultValue:null,description:``,name:`containerTag`,required:!1,type:{name:`enum`,value:[{value:`"span"`},{value:`"div"`},{value:`"p"`},{value:`"strong"`},{value:`"em"`}]}},visibleOn:{defaultValue:null,description:``,name:`visibleOn`,required:!1,type:{name:`enum`,value:[{value:`"hover"`},{value:`"click"`},{value:`"focus"`},{value:`"contextmenu"`}]}},autoClose:{defaultValue:null,description:``,name:`autoClose`,required:!1,type:{name:`boolean`}},autoCloseDelay:{defaultValue:null,description:``,name:`autoCloseDelay`,required:!1,type:{name:`number`}},color:{defaultValue:null,description:``,name:`color`,required:!1,type:{name:`enum`,value:[{value:`"default"`},{value:`"info"`},{value:`"success"`},{value:`"warning"`},{value:`"danger"`}]}},id:{defaultValue:null,description:``,name:`id`,required:!1,type:{name:`string`}},className:{defaultValue:null,description:``,name:`className`,required:!1,type:{name:`string`}},style:{defaultValue:null,description:``,name:`style`,required:!1,type:{name:`CSSProperties`}},tabIndex:{defaultValue:null,description:``,name:`tabIndex`,required:!1,type:{name:`number`}},title:{defaultValue:null,description:``,name:`title`,required:!1,type:{name:`string`}}}}}catch{}})),p=t({VisibleOnClick:()=>g,VisibleOnContextMenu:()=>v,VisibleOnFocus:()=>_,VisibleOnHover:()=>h,__namedExportsOrder:()=>y,default:()=>m}),m,h,g,_,v,y,b=e((()=>{a(),f(),m={component:d,title:`Atoms/Tooltip`},h={args:{tooltipContent:`This is a tooltip`,containerTag:r.Span,visibleOn:`hover`,id:`tooltip-id`,autoClose:!1,autoCloseDelay:3e3},argTypes:{tooltipContent:{control:`text`,description:`The content to display in the tooltip`,table:{type:{summary:`ReactNode`},category:`Content`}},containerTag:{control:`select`,options:Object.values(r),description:`The HTML tag to use as the container wrapper`,table:{defaultValue:{summary:`span`},type:{summary:`TooltipContainer`},category:`Styling`}},visibleOn:{control:`radio`,options:[`hover`,`click`,`focus`,`contextmenu`],description:`Event that triggers tooltip visibility`,table:{defaultValue:{summary:`hover`},type:{summary:`'hover' | 'click' | 'focus' | 'contextmenu'`},category:`Behavior`}},autoClose:{control:`boolean`,description:`Whether to automatically close the tooltip after a delay`,table:{defaultValue:{summary:`false`},type:{summary:`boolean`},category:`Behavior`}},autoCloseDelay:{control:`number`,description:`Delay in milliseconds before auto-closing the tooltip`,table:{defaultValue:{summary:`3000`},type:{summary:`number`},category:`Behavior`}},id:{control:`text`,description:`The unique ID for the search input (auto-generated if not provided)`,table:{type:{summary:`string`},defaultValue:{summary:`undefined`},category:`HTML Attributes`}},className:{control:`text`,description:`Additional CSS class for the search wrapper`,table:{type:{summary:`string`},defaultValue:{summary:`undefined`},category:`HTML Attributes`}},style:{control:`object`,description:`Inline styles for the search wrapper`,table:{type:{summary:`CSSProperties`},defaultValue:{summary:`undefined`},category:`HTML Attributes`}},tabIndex:{control:`number`,description:`Tab index for the search input`,table:{type:{summary:`number`},defaultValue:{summary:`undefined`},category:`HTML Attributes`}},title:{control:`text`,description:`Title attribute for the search wrapper`,table:{type:{summary:`string`},defaultValue:{summary:`undefined`},category:`HTML Attributes`}},color:{control:`select`,options:Object.values(i),description:`Semantic color of the tooltip`,table:{defaultValue:{summary:`default`},type:{summary:`SemanticColor`},category:`Styling`}}}},g={args:{tooltipContent:`This is a tooltip`,containerTag:r.Div,visibleOn:`click`,id:`tooltip-id`,autoClose:!0,autoCloseDelay:3e3}},_={args:{tooltipContent:`This is a tooltip`,containerTag:r.Div,visibleOn:`focus`,id:`tooltip-id`,autoClose:!0,autoCloseDelay:3e3}},v={args:{tooltipContent:`This is a tooltip`,containerTag:r.Div,visibleOn:`contextmenu`,id:`tooltip-id`,autoClose:!0,autoCloseDelay:3e3}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: TooltipContainer.Span,
    visibleOn: 'hover',
    id: 'tooltip-id',
    autoClose: false,
    autoCloseDelay: 3000
  },
  argTypes: {
    // Content
    tooltipContent: {
      control: 'text',
      description: 'The content to display in the tooltip',
      table: {
        type: {
          summary: 'ReactNode'
        },
        category: 'Content'
      }
    },
    // Styling
    containerTag: {
      control: 'select',
      options: Object.values(TooltipContainer),
      description: 'The HTML tag to use as the container wrapper',
      table: {
        defaultValue: {
          summary: 'span'
        },
        type: {
          summary: 'TooltipContainer'
        },
        category: 'Styling'
      }
    },
    // Behavior
    visibleOn: {
      control: 'radio',
      options: ['hover', 'click', 'focus', 'contextmenu'],
      description: 'Event that triggers tooltip visibility',
      table: {
        defaultValue: {
          summary: 'hover'
        },
        type: {
          summary: "'hover' | 'click' | 'focus' | 'contextmenu'"
        },
        category: 'Behavior'
      }
    },
    autoClose: {
      control: 'boolean',
      description: 'Whether to automatically close the tooltip after a delay',
      table: {
        defaultValue: {
          summary: 'false'
        },
        type: {
          summary: 'boolean'
        },
        category: 'Behavior'
      }
    },
    autoCloseDelay: {
      control: 'number',
      description: 'Delay in milliseconds before auto-closing the tooltip',
      table: {
        defaultValue: {
          summary: '3000'
        },
        type: {
          summary: 'number'
        },
        category: 'Behavior'
      }
    },
    // HTML attributes
    id: {
      control: 'text',
      description: 'The unique ID for the search input (auto-generated if not provided)',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'undefined'
        },
        category: 'HTML Attributes'
      }
    },
    className: {
      control: 'text',
      description: 'Additional CSS class for the search wrapper',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'undefined'
        },
        category: 'HTML Attributes'
      }
    },
    style: {
      control: 'object',
      description: 'Inline styles for the search wrapper',
      table: {
        type: {
          summary: 'CSSProperties'
        },
        defaultValue: {
          summary: 'undefined'
        },
        category: 'HTML Attributes'
      }
    },
    tabIndex: {
      control: 'number',
      description: 'Tab index for the search input',
      table: {
        type: {
          summary: 'number'
        },
        defaultValue: {
          summary: 'undefined'
        },
        category: 'HTML Attributes'
      }
    },
    title: {
      control: 'text',
      description: 'Title attribute for the search wrapper',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'undefined'
        },
        category: 'HTML Attributes'
      }
    },
    color: {
      control: 'select',
      options: Object.values(SemanticColor),
      description: 'Semantic color of the tooltip',
      table: {
        defaultValue: {
          summary: 'default'
        },
        type: {
          summary: 'SemanticColor'
        },
        category: 'Styling'
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: TooltipContainer.Div,
    visibleOn: 'click',
    id: 'tooltip-id',
    autoClose: true,
    autoCloseDelay: 3000
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: TooltipContainer.Div,
    visibleOn: 'focus',
    id: 'tooltip-id',
    autoClose: true,
    autoCloseDelay: 3000
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: TooltipContainer.Div,
    visibleOn: 'contextmenu',
    id: 'tooltip-id',
    autoClose: true,
    autoCloseDelay: 3000
  }
}`,...v.parameters?.docs?.source}}},y=[`VisibleOnHover`,`VisibleOnClick`,`VisibleOnFocus`,`VisibleOnContextMenu`]}));b();export{g as VisibleOnClick,v as VisibleOnContextMenu,_ as VisibleOnFocus,h as VisibleOnHover,y as __namedExportsOrder,m as default,b as n,p as t};