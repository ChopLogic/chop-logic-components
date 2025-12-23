var L=Object.defineProperty,q=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var g=(e,o,t)=>o in e?L(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,a=(e,o)=>{for(var t in o||(o={}))h.call(o,t)&&g(e,t,o[t]);if(d)for(var t of d(o))T.call(o,t)&&g(e,t,o[t]);return e},i=(e,o)=>q(e,B(o));var v=(e,o)=>{var t={};for(var r in e)h.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&d)for(var r of d(e))o.indexOf(r)<0&&T.call(e,r)&&(t[r]=e[r]);return t};import{T as E,a as m,B as y,b as p}from"./Button-BnHaWgV4.js";import{j as n}from"./iframe-BD2qMxgm.js";const b=R=>{var f=R,{tooltipContent:e,containerTag:o,visibleOn:t,id:r}=f,A=v(f,["tooltipContent","containerTag","visibleOn","id"]);return n.jsx("div",{children:n.jsxs(E,i(a({tooltipContent:e,containerTag:o,visibleOn:t,id:r},A),{children:[t==="click"&&n.jsx(m,{text:"Click me",view:y.Secondary}),t==="hover"&&n.jsx(m,{text:"Hover on me",view:y.Secondary}),t==="focus"&&n.jsx(m,{text:"Focus on me",view:y.Secondary}),t==="contextmenu"&&n.jsx(m,{text:"Right click on me",view:y.Secondary})]}))})};try{b.displayName="TooltipExample",b.__docgenInfo={description:"",displayName:"TooltipExample",props:{tooltipContent:{defaultValue:null,description:"",name:"tooltipContent",required:!0,type:{name:"string | ReactElement<unknown, string | JSXElementConstructor<any>>"}},containerTag:{defaultValue:null,description:"",name:"containerTag",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"div"'},{value:'"p"'},{value:'"strong"'},{value:'"em"'}]}},visibleOn:{defaultValue:null,description:"",name:"visibleOn",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'},{value:'"focus"'},{value:'"contextmenu"'}]}},autoClose:{defaultValue:null,description:"",name:"autoClose",required:!1,type:{name:"boolean"}},autoCloseDelay:{defaultValue:null,description:"",name:"autoCloseDelay",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch(e){}const I={component:b,title:"Atoms/Tooltip"},l={args:{tooltipContent:"This is a tooltip",containerTag:p.Span,visibleOn:"hover",id:"tooltip-id",autoClose:!1,autoCloseDelay:3e3},argTypes:{tooltipContent:{control:"text",description:"The content to display in the tooltip",table:{type:{summary:"ReactNode"},category:"Content"}},containerTag:{control:"select",options:Object.values(p),description:"The HTML tag to use as the container wrapper",table:{defaultValue:{summary:"span"},type:{summary:"TooltipContainer"},category:"Styling"}},visibleOn:{control:"radio",options:["hover","click","focus","contextmenu"],description:"Event that triggers tooltip visibility",table:{defaultValue:{summary:"hover"},type:{summary:"'hover' | 'click' | 'focus' | 'contextmenu'"},category:"Behavior"}},autoClose:{control:"boolean",description:"Whether to automatically close the tooltip after a delay",table:{defaultValue:{summary:"false"},type:{summary:"boolean"},category:"Behavior"}},autoCloseDelay:{control:"number",description:"Delay in milliseconds before auto-closing the tooltip",table:{defaultValue:{summary:"3000"},type:{summary:"number"},category:"Behavior"}},id:{control:"text",description:"The unique ID for the search input (auto-generated if not provided)",table:{type:{summary:"string"},defaultValue:{summary:"undefined"},category:"HTML Attributes"}},className:{control:"text",description:"Additional CSS class for the search wrapper",table:{type:{summary:"string"},defaultValue:{summary:"undefined"},category:"HTML Attributes"}},style:{control:"object",description:"Inline styles for the search wrapper",table:{type:{summary:"CSSProperties"},defaultValue:{summary:"undefined"},category:"HTML Attributes"}},tabIndex:{control:"number",description:"Tab index for the search input",table:{type:{summary:"number"},defaultValue:{summary:"undefined"},category:"HTML Attributes"}},title:{control:"text",description:"Title attribute for the search wrapper",table:{type:{summary:"string"},defaultValue:{summary:"undefined"},category:"HTML Attributes"}}}},s={args:{tooltipContent:"This is a tooltip",containerTag:p.Div,visibleOn:"click",id:"tooltip-id",autoClose:!0,autoCloseDelay:3e3}},u={args:{tooltipContent:"This is a tooltip",containerTag:p.Div,visibleOn:"focus",id:"tooltip-id",autoClose:!0,autoCloseDelay:3e3}},c={args:{tooltipContent:"This is a tooltip",containerTag:p.Div,visibleOn:"contextmenu",id:"tooltip-id",autoClose:!0,autoCloseDelay:3e3}};var C,x,V;l.parameters=i(a({},l.parameters),{docs:i(a({},(C=l.parameters)==null?void 0:C.docs),{source:a({originalSource:`{
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
    }
  }
}`},(V=(x=l.parameters)==null?void 0:x.docs)==null?void 0:V.source)})});var S,D,O;s.parameters=i(a({},s.parameters),{docs:i(a({},(S=s.parameters)==null?void 0:S.docs),{source:a({originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: TooltipContainer.Div,
    visibleOn: 'click',
    id: 'tooltip-id',
    autoClose: true,
    autoCloseDelay: 3000
  }
}`},(O=(D=s.parameters)==null?void 0:D.docs)==null?void 0:O.source)})});var H,M,j;u.parameters=i(a({},u.parameters),{docs:i(a({},(H=u.parameters)==null?void 0:H.docs),{source:a({originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: TooltipContainer.Div,
    visibleOn: 'focus',
    id: 'tooltip-id',
    autoClose: true,
    autoCloseDelay: 3000
  }
}`},(j=(M=u.parameters)==null?void 0:M.docs)==null?void 0:j.source)})});var w,_,k;c.parameters=i(a({},c.parameters),{docs:i(a({},(w=c.parameters)==null?void 0:w.docs),{source:a({originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: TooltipContainer.Div,
    visibleOn: 'contextmenu',
    id: 'tooltip-id',
    autoClose: true,
    autoCloseDelay: 3000
  }
}`},(k=(_=c.parameters)==null?void 0:_.docs)==null?void 0:k.source)})});const N=["VisibleOnHover","VisibleOnClick","VisibleOnFocus","VisibleOnContextMenu"],z=Object.freeze(Object.defineProperty({__proto__:null,VisibleOnClick:s,VisibleOnContextMenu:c,VisibleOnFocus:u,VisibleOnHover:l,__namedExportsOrder:N,default:I},Symbol.toStringTag,{value:"Module"}));export{z as T};
