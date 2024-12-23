import{d as c,C as s,u as i,a as d}from"./index-DOtmxc0W.js";import{j as o}from"./jsx-runtime-OAISXtky.js";import"./index-qVDZzPEr.js";import"./index-1hWSJLP3.js";const m=c.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
`,p=c.div`
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
`,v=()=>{const e=Object.values(s),u=i();return o.jsx(m,{children:e.map(t=>o.jsxs(p,{$theme:u,children:[o.jsx(d,{name:t}),o.jsx("span",{children:t})]},t))})};try{Iconexample.displayName="Iconexample",Iconexample.__docgenInfo={description:"",displayName:"Iconexample",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"enum",value:[{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"back"'},{value:'"cancel"'},{value:'"checkbox-checked"'},{value:'"checkbox-unchecked"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"clear"'},{value:'"copy"'},{value:'"cut"'},{value:'"delete"'},{value:'"download"'},{value:'"error"'},{value:'"forward"'},{value:'"help"'},{value:'"hide"'},{value:'"info"'},{value:'"paste"'},{value:'"question"'},{value:'"save"'},{value:'"show"'},{value:'"upload"'},{value:'"warning"'},{value:'"remove"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const f={title:"Elements/Icon",component:v,argTypes:{name:{control:"select",options:Object.values(s)}}},a={};var l,r,n;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(n=(r=a.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const h=["Default"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:h,default:f},Symbol.toStringTag,{value:"Module"}));export{$ as C};
