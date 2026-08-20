import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-BxXWrdMh.js";import{n as r,t as i}from"./Button-Cp9o0IfN.js";import{c as a,i as o,l as s,r as c,s as l,u}from"./with-tooltip-CQAXnEeV.js";var d,f;function p(){return(p=e((()=>{r(),o(),d=n(),f=({tooltipContent:e,containerTag:t,visibleOn:n,id:r,...a})=>(0,d.jsx)(`div`,{children:(0,d.jsxs)(c,{tooltipContent:e,containerTag:t,visibleOn:n,id:r,...a,children:[n===`click`&&(0,d.jsx)(i,{text:`Click me`}),n===`hover`&&(0,d.jsx)(i,{text:`Hover on me`}),n===`focus`&&(0,d.jsx)(i,{text:`Focus on me`}),n===`contextmenu`&&(0,d.jsx)(i,{text:`Right click on me`})]})});try{f.displayName=`TooltipExample`,f.__docgenInfo={description:``,displayName:`TooltipExample`,filePath:`/home/runner/work/chop-logic-components/chop-logic-components/src/components/atoms/tooltip/__docs__/Tooltip.example.tsx`,methods:[],props:{tooltipContent:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/tooltip.ts`,name:`TooltipProps`}],description:``,name:`tooltipContent`,parent:{fileName:`chop-logic-components/src/types/tooltip.ts`,name:`TooltipProps`},required:!0,tags:{},type:{name:`string | ReactElement<unknown, string | JSXElementConstructor<any>>`}},containerTag:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/tooltip.ts`,name:`TooltipProps`}],description:``,name:`containerTag`,parent:{fileName:`chop-logic-components/src/types/tooltip.ts`,name:`TooltipProps`},required:!1,tags:{},type:{name:`enum`,raw:`TooltipContainer`,value:[{value:`"span"`,description:``,fullComment:``,tags:{}},{value:`"div"`,description:``,fullComment:``,tags:{}},{value:`"p"`,description:``,fullComment:``,tags:{}},{value:`"strong"`,description:``,fullComment:``,tags:{}},{value:`"em"`,description:``,fullComment:``,tags:{}}]}},visibleOn:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/tooltip.ts`,name:`TooltipProps`}],description:``,name:`visibleOn`,parent:{fileName:`chop-logic-components/src/types/tooltip.ts`,name:`TooltipProps`},required:!1,tags:{},type:{name:`enum`,raw:`"hover" | "click" | "focus" | "contextmenu"`,value:[{value:`"hover"`},{value:`"click"`},{value:`"focus"`},{value:`"contextmenu"`}]}},autoClose:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/tooltip.ts`,name:`TooltipProps`}],description:``,name:`autoClose`,parent:{fileName:`chop-logic-components/src/types/tooltip.ts`,name:`TooltipProps`},required:!1,tags:{},type:{name:`boolean`}},autoCloseDelay:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/tooltip.ts`,name:`TooltipProps`}],description:``,name:`autoCloseDelay`,parent:{fileName:`chop-logic-components/src/types/tooltip.ts`,name:`TooltipProps`},required:!1,tags:{},type:{name:`number`}},color:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/tooltip.ts`,name:`TooltipProps`}],description:``,name:`color`,parent:{fileName:`chop-logic-components/src/types/tooltip.ts`,name:`TooltipProps`},required:!1,tags:{},type:{name:`enum`,raw:`SemanticColor`,value:[{value:`"default"`,description:``,fullComment:``,tags:{}},{value:`"info"`,description:``,fullComment:``,tags:{}},{value:`"success"`,description:``,fullComment:``,tags:{}},{value:`"warning"`,description:``,fullComment:``,tags:{}},{value:`"danger"`,description:``,fullComment:``,tags:{}}]}},id:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`id`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`className`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`style`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`CSSProperties`}},tabIndex:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`tabIndex`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`number`}},title:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`title`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var m=t({VisibleOnClick:()=>_,VisibleOnContextMenu:()=>y,VisibleOnFocus:()=>v,VisibleOnHover:()=>g,__namedExportsOrder:()=>b,default:()=>h}),h,g,_,v,y,b;function x(){return(x=e((()=>{u(),a(),p(),h={component:f,title:`Atoms/Tooltip`},g={args:{tooltipContent:`This is a tooltip`,containerTag:l.Span,visibleOn:`hover`,id:`tooltip-id`,autoClose:!1,autoCloseDelay:3e3},argTypes:{tooltipContent:{control:`text`,description:`The content to display in the tooltip`,table:{type:{summary:`ReactNode`},category:`Content`}},containerTag:{control:`select`,options:Object.values(l),description:`The HTML tag to use as the container wrapper`,table:{defaultValue:{summary:`span`},type:{summary:`TooltipContainer`},category:`Styling`}},visibleOn:{control:`radio`,options:[`hover`,`click`,`focus`,`contextmenu`],description:`Event that triggers tooltip visibility`,table:{defaultValue:{summary:`hover`},type:{summary:`'hover' | 'click' | 'focus' | 'contextmenu'`},category:`Behavior`}},autoClose:{control:`boolean`,description:`Whether to automatically close the tooltip after a delay`,table:{defaultValue:{summary:`false`},type:{summary:`boolean`},category:`Behavior`}},autoCloseDelay:{control:`number`,description:`Delay in milliseconds before auto-closing the tooltip`,table:{defaultValue:{summary:`3000`},type:{summary:`number`},category:`Behavior`}},id:{control:`text`,description:`The unique ID for the search input (auto-generated if not provided)`,table:{type:{summary:`string`},defaultValue:{summary:`undefined`},category:`HTML Attributes`}},className:{control:`text`,description:`Additional CSS class for the search wrapper`,table:{type:{summary:`string`},defaultValue:{summary:`undefined`},category:`HTML Attributes`}},style:{control:`object`,description:`Inline styles for the search wrapper`,table:{type:{summary:`CSSProperties`},defaultValue:{summary:`undefined`},category:`HTML Attributes`}},tabIndex:{control:`number`,description:`Tab index for the search input`,table:{type:{summary:`number`},defaultValue:{summary:`undefined`},category:`HTML Attributes`}},title:{control:`text`,description:`Title attribute for the search wrapper`,table:{type:{summary:`string`},defaultValue:{summary:`undefined`},category:`HTML Attributes`}},color:{control:`select`,options:Object.values(s),description:`Semantic color of the tooltip`,table:{defaultValue:{summary:`default`},type:{summary:`SemanticColor`},category:`Styling`}}}},_={args:{tooltipContent:`This is a tooltip`,containerTag:l.Div,visibleOn:`click`,id:`tooltip-id`,autoClose:!0,autoCloseDelay:3e3}},v={args:{tooltipContent:`This is a tooltip`,containerTag:l.Div,visibleOn:`focus`,id:`tooltip-id`,autoClose:!0,autoCloseDelay:3e3}},y={args:{tooltipContent:`This is a tooltip`,containerTag:l.Div,visibleOn:`contextmenu`,id:`tooltip-id`,autoClose:!0,autoCloseDelay:3e3}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: TooltipContainer.Div,
    visibleOn: 'click',
    id: 'tooltip-id',
    autoClose: true,
    autoCloseDelay: 3000
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: TooltipContainer.Div,
    visibleOn: 'focus',
    id: 'tooltip-id',
    autoClose: true,
    autoCloseDelay: 3000
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: TooltipContainer.Div,
    visibleOn: 'contextmenu',
    id: 'tooltip-id',
    autoClose: true,
    autoCloseDelay: 3000
  }
}`,...y.parameters?.docs?.source}}},b=[`VisibleOnHover`,`VisibleOnClick`,`VisibleOnFocus`,`VisibleOnContextMenu`]})))()}export{x as n,m as t};