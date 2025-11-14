var B=Object.defineProperty,F=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var v=(e,o,t)=>o in e?B(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,a=(e,o)=>{for(var t in o||(o={}))T.call(o,t)&&v(e,t,o[t]);if(c)for(var t of c(o))b.call(o,t)&&v(e,t,o[t]);return e},l=(e,o)=>F(e,H(o));var g=(e,o)=>{var t={};for(var n in e)T.call(e,n)&&o.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&c)for(var n of c(e))o.indexOf(n)<0&&b.call(e,n)&&(t[n]=e[n]);return t};import{j as i}from"./iframe-31bCIIM-.js";import{T as I,B as m,a as d,b as y}from"./Button-CXfa96Wd.js";const C=P=>{var f=P,{tooltipContent:e,containerTag:o,visibleOn:t,id:n}=f,N=g(f,["tooltipContent","containerTag","visibleOn","id"]);return i.jsx("div",{children:i.jsxs(I,l(a({tooltipContent:e,containerTag:o,visibleOn:t,id:n},N),{children:[t==="click"&&i.jsx(m,{text:"Click me",view:d.Secondary}),t==="hover"&&i.jsx(m,{text:"Hover on me",view:d.Secondary}),t==="focus"&&i.jsx(m,{text:"Focus on me",view:d.Secondary}),t==="contextmenu"&&i.jsx(m,{text:"Right click on me",view:d.Secondary})]}))})};try{C.displayName="TooltipExample",C.__docgenInfo={description:"",displayName:"TooltipExample",props:{tooltipContent:{defaultValue:null,description:"",name:"tooltipContent",required:!0,type:{name:"string | ReactElement<unknown, string | JSXElementConstructor<any>>"}},containerTag:{defaultValue:null,description:"",name:"containerTag",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"div"'},{value:'"p"'},{value:'"strong"'},{value:'"em"'}]}},visibleOn:{defaultValue:null,description:"",name:"visibleOn",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'},{value:'"focus"'},{value:'"contextmenu"'}]}},autoClose:{defaultValue:null,description:"",name:"autoClose",required:!1,type:{name:"boolean"}},autoCloseDelay:{defaultValue:null,description:"",name:"autoCloseDelay",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch(e){}const M={component:C,title:"Atoms/Tooltip"},s={args:{tooltipContent:"This is a tooltip",containerTag:y.Span,visibleOn:"hover",id:"tooltip-id",autoClose:!1,autoCloseDelay:3e3},argTypes:{containerTag:{table:{defaultValue:{summary:"span"},type:{summary:"TooltipContainer"}}},visibleOn:{table:{defaultValue:{summary:"hover"},type:{summary:"'hover' | 'click' | 'focus' | 'contextmenu'"}}},autoClose:{table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},autoCloseDelay:{table:{defaultValue:{summary:"3000"},type:{summary:"number"}}}}},r={args:{tooltipContent:"This is a tooltip",containerTag:y.Div,visibleOn:"click",id:"tooltip-id",autoClose:!0,autoCloseDelay:3e3}},u={args:{tooltipContent:"This is a tooltip",containerTag:y.Div,visibleOn:"focus",id:"tooltip-id",autoClose:!0,autoCloseDelay:3e3}},p={args:{tooltipContent:"This is a tooltip",containerTag:y.Div,visibleOn:"contextmenu",id:"tooltip-id",autoClose:!0,autoCloseDelay:3e3}};var x,V,h;s.parameters=l(a({},s.parameters),{docs:l(a({},(x=s.parameters)==null?void 0:x.docs),{source:a({originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: TooltipContainer.Span,
    visibleOn: 'hover',
    id: 'tooltip-id',
    autoClose: false,
    autoCloseDelay: 3000
  },
  argTypes: {
    containerTag: {
      table: {
        defaultValue: {
          summary: 'span'
        },
        type: {
          summary: 'TooltipContainer'
        }
      }
    },
    visibleOn: {
      table: {
        defaultValue: {
          summary: 'hover'
        },
        type: {
          summary: "'hover' | 'click' | 'focus' | 'contextmenu'"
        }
      }
    },
    autoClose: {
      table: {
        defaultValue: {
          summary: 'false'
        },
        type: {
          summary: 'boolean'
        }
      }
    },
    autoCloseDelay: {
      table: {
        defaultValue: {
          summary: '3000'
        },
        type: {
          summary: 'number'
        }
      }
    }
  }
}`},(h=(V=s.parameters)==null?void 0:V.docs)==null?void 0:h.source)})});var O,D,S;r.parameters=l(a({},r.parameters),{docs:l(a({},(O=r.parameters)==null?void 0:O.docs),{source:a({originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: TooltipContainer.Div,
    visibleOn: 'click',
    id: 'tooltip-id',
    autoClose: true,
    autoCloseDelay: 3000
  }
}`},(S=(D=r.parameters)==null?void 0:D.docs)==null?void 0:S.source)})});var _,k,j;u.parameters=l(a({},u.parameters),{docs:l(a({},(_=u.parameters)==null?void 0:_.docs),{source:a({originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: TooltipContainer.Div,
    visibleOn: 'focus',
    id: 'tooltip-id',
    autoClose: true,
    autoCloseDelay: 3000
  }
}`},(j=(k=u.parameters)==null?void 0:k.docs)==null?void 0:j.source)})});var q,E,w;p.parameters=l(a({},p.parameters),{docs:l(a({},(q=p.parameters)==null?void 0:q.docs),{source:a({originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: TooltipContainer.Div,
    visibleOn: 'contextmenu',
    id: 'tooltip-id',
    autoClose: true,
    autoCloseDelay: 3000
  }
}`},(w=(E=p.parameters)==null?void 0:E.docs)==null?void 0:w.source)})});const R=["VisibleOnHover","VisibleOnClick","VisibleOnFocus","VisibleOnContextMenu"],X=Object.freeze(Object.defineProperty({__proto__:null,VisibleOnClick:r,VisibleOnContextMenu:p,VisibleOnFocus:u,VisibleOnHover:s,__namedExportsOrder:R,default:M},Symbol.toStringTag,{value:"Module"}));export{X as T};
