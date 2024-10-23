import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{a as b}from"./Icon-Bscejonv.js";import{U as t,C as n,S as i,G as s,d as c,F as p,B as g}from"./styled-components.browser.esm-BAmCwVtG.js";const x=`
    border-radius: ${t.blockBorderRadius};
    color: ${n.background};
    box-shadow: ${i.box};
    filter: brightness(100%);
    transition: 0.3s;
    background: ${s.primary};

    &:hover,
    &:active {
    filter: brightness(130%);
    }
`,$=`
    border-radius: ${t.blockBorderRadius};
    color: ${n.background};
    box-shadow: ${i.box};
    filter: brightness(100%);
    transition: 0.3s;
    background: ${s.accent};

    &:hover,
    &:active {
      filter: brightness(130%);
    }
`,_=`
    background: none;
    color: ${n.primary};
    text-shadow: none;
    transition: 0.3s;

    & .cl-button__text {
      text-decoration: underline;
    }

    &:hover,
    &:active {
      text-shadow: ${i.text};
    }

    &.cl-button_disabled {
      opacity: 0.6;
    }
`,w=`
    gap: 0;
    background: transparent;
    font-weight: normal;
    font-size: 1.4rem;
    border-radius: ${t.blockBorderRadius};
    color: ${n.secondary};

    &:hover,
    &:active {
      background-color: ${n.shade};
    }
`,l=c.button`
  min-height: ${t.minElementSize};
  min-width: ${t.minElementSize};
  border: none;
  cursor: pointer;
  padding: 0 ${t.mediumGap};
  font-size: 1rem;
  font-family: ${p.core};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${t.smallGap};
  overflow: hidden;

  &:focus-visible {
    outline: ${g.outline};
    outline-offset: 2px;
  }

  ${a=>{switch(a.$view){case"primary":return x;case"secondary":return _;case"danger":return $;case"icon":return w;default:return""}}}

  ${a=>a.$disabled&&`
      pointer-events: none;
      filter: grayscale(80%);
      opacity: 0.9;
    `}

    ${a=>a.$extended&&"width: 100%;"}
`,o=c.span`
  overflow: hidden;
  text-overflow: ellipsis;
`;try{l.displayName="StyledButton",l.__docgenInfo={description:"",displayName:"StyledButton",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{o.displayName="StyledButtonText",o.__docgenInfo={description:"",displayName:"StyledButtonText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const q=({onClick:a,text:m,icon:v,label:f,disabled:d=!1,extended:y=!1,type:h="button",view:u="primary",...e})=>r.jsxs(l,{$view:u,$disabled:d,$extended:y,"aria-label":f,type:h,onClick:a,disabled:d,id:e==null?void 0:e.id,className:e==null?void 0:e.className,style:e==null?void 0:e.style,tabIndex:e==null?void 0:e.tabIndex,children:[r.jsx(b,{name:v}),u!=="icon"&&r.jsx(o,{children:m})]});try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{view:{defaultValue:{value:"primary"},description:"",name:"view",required:!1,type:{name:"enum",value:[{value:'"icon"'},{value:'"primary"'},{value:'"secondary"'},{value:'"danger"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"enum",value:[{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"back"'},{value:'"cancel"'},{value:'"checkbox-checked"'},{value:'"checkbox-unchecked"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"clear"'},{value:'"copy"'},{value:'"cut"'},{value:'"delete"'},{value:'"download"'},{value:'"error"'},{value:'"forward"'},{value:'"help"'},{value:'"hide"'},{value:'"info"'},{value:'"paste"'},{value:'"question"'},{value:'"save"'},{value:'"show"'},{value:'"upload"'},{value:'"warning"'},{value:'"remove"'}]}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},extended:{defaultValue:{value:"false"},description:"",name:"extended",required:!1,type:{name:"boolean"}}}}}catch{}export{q as C};
