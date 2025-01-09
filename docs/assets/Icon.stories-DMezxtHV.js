import{C as c,a as i}from"./Label-ByAyKSec.js";import{j as o}from"./jsx-runtime-OAISXtky.js";import{d as s,u as d}from"./index-BgqNcK8U.js";import"./index-qVDZzPEr.js";const m=s.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
`,p=s.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  font-size: ${e=>e.$theme.fontSizeSmall};
  font-family: ${e=>e.$theme.fontFamilyMonospace};
  color: ${e=>e.$theme.fontColorBase};
  border-radius: ${e=>e.$theme.blockBorderRadius};
  padding: ${e=>e.$theme.gapMedium};

  &:hover {
    background-color: ${e=>e.$theme.backgroundColorLight};
    cursor: pointer;
  }

  svg {
    font-size: ${e=>e.$theme.fontSizeHeader};
  }

  span {
    text-align: center;
  }
`,v=()=>{const e=Object.values(c),u=d();return o.jsx(m,{children:e.map(l=>o.jsxs(p,{$theme:u,children:[o.jsx(i,{name:l}),o.jsx("span",{children:l})]},l))})};try{Iconexample.displayName="Iconexample",Iconexample.__docgenInfo={description:"",displayName:"Iconexample",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"enum",value:[{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"back"'},{value:'"cancel"'},{value:'"checkbox-checked"'},{value:'"checkbox-unchecked"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"clear"'},{value:'"copy"'},{value:'"cut"'},{value:'"delete"'},{value:'"download"'},{value:'"error"'},{value:'"forward"'},{value:'"graduate"'},{value:'"help"'},{value:'"hide"'},{value:'"home"'},{value:'"info"'},{value:'"login"'},{value:'"paste"'},{value:'"question"'},{value:'"save"'},{value:'"show"'},{value:'"upload"'},{value:'"warning"'},{value:'"remove"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const f={title:"Elements/Icon",component:v,argTypes:{name:{control:"select",options:Object.values(c)}}},a={};var r,t,n;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(n=(t=a.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const h=["IconGallery"],I=Object.freeze(Object.defineProperty({__proto__:null,IconGallery:a,__namedExportsOrder:h,default:f},Symbol.toStringTag,{value:"Module"}));export{I as C};
