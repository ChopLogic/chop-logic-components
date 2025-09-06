import{a as S,b as r}from"./Header-BiTp834B.js";import{j as e}from"./iframe-CcStb-xO.js";import{C as l,a as s}from"./Button-BpT_NpT1.js";import"./Checkbox-tGBE6wEh.js";import"./MultiSelect-Cf-voyBX.js";import"./NumericInput-D8kBOieZ.js";import"./Select-BmZ8RkA4.js";import"./TextInput-B3eC91JC.js";const u=({tooltipContent:p,containerTag:V,visibleOn:o,id:O,...D})=>e.jsx("div",{children:e.jsxs(S,{tooltipContent:p,containerTag:V,visibleOn:o,id:O,...D,children:[o==="click"&&e.jsx(l,{text:"Click me",view:s.Secondary}),o==="hover"&&e.jsx(l,{text:"Hover on me",view:s.Secondary}),o==="focus"&&e.jsx(l,{text:"Focus on me",view:s.Secondary}),o==="contextmenu"&&e.jsx(l,{text:"Right click on me",view:s.Secondary})]})});try{u.displayName="TooltipExample",u.__docgenInfo={description:"",displayName:"TooltipExample",props:{tooltipContent:{defaultValue:null,description:"",name:"tooltipContent",required:!0,type:{name:"string | ReactElement<unknown, string | JSXElementConstructor<any>>"}},containerTag:{defaultValue:null,description:"",name:"containerTag",required:!1,type:{name:"enum",value:[{value:'"span"'},{value:'"div"'},{value:'"p"'},{value:'"strong"'},{value:'"em"'}]}},visibleOn:{defaultValue:null,description:"",name:"visibleOn",required:!1,type:{name:"enum",value:[{value:'"hover"'},{value:'"click"'},{value:'"focus"'},{value:'"contextmenu"'}]}},autoClose:{defaultValue:null,description:"",name:"autoClose",required:!1,type:{name:"boolean"}},autoCloseDelay:{defaultValue:null,description:"",name:"autoCloseDelay",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const _={component:u,title:"Atoms/Tooltip"},t={args:{tooltipContent:"This is a tooltip",containerTag:r.Span,visibleOn:"hover",id:"tooltip-id",autoClose:!1,autoCloseDelay:3e3},argTypes:{containerTag:{table:{defaultValue:{summary:"span"},type:{summary:"ChopLogicTooltipContainer"}}},visibleOn:{table:{defaultValue:{summary:"hover"},type:{summary:"'hover' | 'click' | 'focus' | 'contextmenu'"}}},autoClose:{table:{defaultValue:{summary:"false"},type:{summary:"boolean"}}},autoCloseDelay:{table:{defaultValue:{summary:"3000"},type:{summary:"number"}}}}},a={args:{tooltipContent:"This is a tooltip",containerTag:r.Div,visibleOn:"click",id:"tooltip-id",autoClose:!0,autoCloseDelay:3e3}},i={args:{tooltipContent:"This is a tooltip",containerTag:r.Div,visibleOn:"focus",id:"tooltip-id",autoClose:!0,autoCloseDelay:3e3}},n={args:{tooltipContent:"This is a tooltip",containerTag:r.Div,visibleOn:"contextmenu",id:"tooltip-id",autoClose:!0,autoCloseDelay:3e3}};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: ChopLogicTooltipContainer.Span,
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
          summary: 'ChopLogicTooltipContainer'
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
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var y,C,g;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: ChopLogicTooltipContainer.Div,
    visibleOn: 'click',
    id: 'tooltip-id',
    autoClose: true,
    autoCloseDelay: 3000
  }
}`,...(g=(C=a.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var f,v,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: ChopLogicTooltipContainer.Div,
    visibleOn: 'focus',
    id: 'tooltip-id',
    autoClose: true,
    autoCloseDelay: 3000
  }
}`,...(b=(v=i.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var T,h,x;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    tooltipContent: 'This is a tooltip',
    containerTag: ChopLogicTooltipContainer.Div,
    visibleOn: 'contextmenu',
    id: 'tooltip-id',
    autoClose: true,
    autoCloseDelay: 3000
  }
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const k=["VisibleOnHover","VisibleOnClick","VisibleOnFocus","VisibleOnContextMenu"],I=Object.freeze(Object.defineProperty({__proto__:null,VisibleOnClick:a,VisibleOnContextMenu:n,VisibleOnFocus:i,VisibleOnHover:t,__namedExportsOrder:k,default:_},Symbol.toStringTag,{value:"Module"}));export{I as T};
