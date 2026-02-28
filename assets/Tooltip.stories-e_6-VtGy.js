import{T as d,a as l,b as n,S as y}from"./Button-BkZxBmQE.js";import{j as e}from"./iframe-DP4TfwvB.js";const s=({tooltipContent:u,containerTag:c,visibleOn:t,id:p,...m})=>e.jsx("div",{children:e.jsxs(d,{tooltipContent:u,containerTag:c,visibleOn:t,id:p,...m,children:[t==="click"&&e.jsx(l,{text:"Click me"}),t==="hover"&&e.jsx(l,{text:"Hover on me"}),t==="focus"&&e.jsx(l,{text:"Focus on me"}),t==="contextmenu"&&e.jsx(l,{text:"Right click on me"})]})});try{s.displayName="TooltipExample",s.__docgenInfo={description:"",displayName:"TooltipExample",props:{tooltipContent:{defaultValue:null,description:"",name:"tooltipContent",required:!0,type:{name:"string | ReactElement<unknown, string | JSXElementConstructor<any>>"}},containerTag:{defaultValue:null,description:"",name:"containerTag",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"div"'},{value:'"p"'},{value:'"strong"'},{value:'"em"'}]}},visibleOn:{defaultValue:null,description:"",name:"visibleOn",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'},{value:'"focus"'},{value:'"contextmenu"'}]}},autoClose:{defaultValue:null,description:"",name:"autoClose",required:!1,type:{name:"boolean"}},autoCloseDelay:{defaultValue:null,description:"",name:"autoCloseDelay",required:!1,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"danger"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const f={component:s,title:"Atoms/Tooltip"},o={args:{tooltipContent:"This is a tooltip",containerTag:n.Span,visibleOn:"hover",id:"tooltip-id",autoClose:!1,autoCloseDelay:3e3},argTypes:{tooltipContent:{control:"text",description:"The content to display in the tooltip",table:{type:{summary:"ReactNode"},category:"Content"}},containerTag:{control:"select",options:Object.values(n),description:"The HTML tag to use as the container wrapper",table:{defaultValue:{summary:"span"},type:{summary:"TooltipContainer"},category:"Styling"}},visibleOn:{control:"radio",options:["hover","click","focus","contextmenu"],description:"Event that triggers tooltip visibility",table:{defaultValue:{summary:"hover"},type:{summary:"'hover' | 'click' | 'focus' | 'contextmenu'"},category:"Behavior"}},autoClose:{control:"boolean",description:"Whether to automatically close the tooltip after a delay",table:{defaultValue:{summary:"false"},type:{summary:"boolean"},category:"Behavior"}},autoCloseDelay:{control:"number",description:"Delay in milliseconds before auto-closing the tooltip",table:{defaultValue:{summary:"3000"},type:{summary:"number"},category:"Behavior"}},id:{control:"text",description:"The unique ID for the search input (auto-generated if not provided)",table:{type:{summary:"string"},defaultValue:{summary:"undefined"},category:"HTML Attributes"}},className:{control:"text",description:"Additional CSS class for the search wrapper",table:{type:{summary:"string"},defaultValue:{summary:"undefined"},category:"HTML Attributes"}},style:{control:"object",description:"Inline styles for the search wrapper",table:{type:{summary:"CSSProperties"},defaultValue:{summary:"undefined"},category:"HTML Attributes"}},tabIndex:{control:"number",description:"Tab index for the search input",table:{type:{summary:"number"},defaultValue:{summary:"undefined"},category:"HTML Attributes"}},title:{control:"text",description:"Title attribute for the search wrapper",table:{type:{summary:"string"},defaultValue:{summary:"undefined"},category:"HTML Attributes"}},color:{control:"select",options:Object.values(y),description:"Semantic color of the tooltip",table:{defaultValue:{summary:"default"},type:{summary:"SemanticColor"},category:"Styling"}}}},a={args:{tooltipContent:"This is a tooltip",containerTag:n.Div,visibleOn:"click",id:"tooltip-id",autoClose:!0,autoCloseDelay:3e3}},r={args:{tooltipContent:"This is a tooltip",containerTag:n.Div,visibleOn:"focus",id:"tooltip-id",autoClose:!0,autoCloseDelay:3e3}},i={args:{tooltipContent:"This is a tooltip",containerTag:n.Div,visibleOn:"contextmenu",id:"tooltip-id",autoClose:!0,autoCloseDelay:3e3}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: TooltipContainer.Div,
    visibleOn: 'click',
    id: 'tooltip-id',
    autoClose: true,
    autoCloseDelay: 3000
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: TooltipContainer.Div,
    visibleOn: 'focus',
    id: 'tooltip-id',
    autoClose: true,
    autoCloseDelay: 3000
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: TooltipContainer.Div,
    visibleOn: 'contextmenu',
    id: 'tooltip-id',
    autoClose: true,
    autoCloseDelay: 3000
  }
}`,...i.parameters?.docs?.source}}};const b=["VisibleOnHover","VisibleOnClick","VisibleOnFocus","VisibleOnContextMenu"],v=Object.freeze(Object.defineProperty({__proto__:null,VisibleOnClick:a,VisibleOnContextMenu:i,VisibleOnFocus:r,VisibleOnHover:o,__namedExportsOrder:b,default:f},Symbol.toStringTag,{value:"Module"}));export{v as T};
