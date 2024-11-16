import{j as r}from"./jsx-runtime-OAISXtky.js";import{a as b}from"./Icon-BeaB2qBy.js";import{U as a,C as t,S as o,G as d,d as s,F as h,B as g}from"./styled-components.browser.esm-BD-stqwa.js";const x=`
    border-radius: ${a.blockBorderRadius};
    color: ${t.background};
    box-shadow: ${o.box};
    filter: brightness(100%);
    transition: 0.3s;
    background: ${d.primary};

    &:hover,
    &:active {
    filter: brightness(130%);
    }
`,$=`
    border-radius: ${a.blockBorderRadius};
    color: ${t.background};
    box-shadow: ${o.box};
    filter: brightness(100%);
    transition: 0.3s;
    background: ${d.accent};

    &:hover,
    &:active {
      filter: brightness(130%);
    }
`,_=`
    background: none;
    color: ${t.primary};
    text-shadow: none;
    transition: 0.3s;

    & .cl-button__text {
      text-decoration: underline;
    }

    &:hover,
    &:active {
      text-shadow: ${o.text};
    }

    &.cl-button_disabled {
      opacity: 0.6;
    }
`,w=`
    gap: 0;
    background: transparent;
    font-weight: normal;
    font-size: 1.4rem;
    border-radius: ${a.blockBorderRadius};
    color: ${t.secondary};

    &:hover,
    &:active {
      background-color: ${t.shade};
    }
`,n=s.button`
  min-height: ${a.minElementSize};
  min-width: ${a.minElementSize};
  border: none;
  cursor: pointer;
  padding: 0 ${a.mediumGap};
  font-size: 1rem;
  font-family: ${h.core};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${a.smallGap};
  overflow: hidden;

  &:focus-visible {
    outline: ${g.outline};
    outline-offset: 2px;
  }

  ${e=>{switch(e.$view){case"primary":return x;case"secondary":return _;case"danger":return $;case"icon":return w;default:return""}}}

  ${e=>e.$disabled&&`
      pointer-events: none;
      filter: grayscale(80%);
      opacity: 0.9;
    `}

    ${e=>e.$extended&&"width: 100%;"}
`,l=s.span`
  overflow: hidden;
  text-overflow: ellipsis;
`;try{n.displayName="StyledButton",n.__docgenInfo={description:"",displayName:"StyledButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{l.displayName="StyledButtonText",l.__docgenInfo={description:"",displayName:"StyledButtonText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const k=({onClick:e,text:c,icon:p,label:m,disabled:i=!1,extended:f=!1,type:v="button",view:u="primary",...y})=>r.jsxs(n,{$view:u,$disabled:i,$extended:f,"aria-label":m,type:v,onClick:e,disabled:i,...y,children:[r.jsx(b,{name:p}),u!=="icon"&&r.jsx(l,{children:c})]});try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},view:{defaultValue:{value:"primary"},description:"",name:"view",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"primary"'},{value:'"secondary"'},{value:'"danger"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"back"'},{value:'"cancel"'},{value:'"checkbox-checked"'},{value:'"checkbox-unchecked"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"clear"'},{value:'"copy"'},{value:'"cut"'},{value:'"delete"'},{value:'"download"'},{value:'"error"'},{value:'"forward"'},{value:'"help"'},{value:'"hide"'},{value:'"info"'},{value:'"paste"'},{value:'"question"'},{value:'"save"'},{value:'"show"'},{value:'"upload"'},{value:'"warning"'},{value:'"remove"'}]}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},extended:{defaultValue:{value:"false"},description:"",name:"extended",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"button"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}}}}}catch{}export{k as C};
