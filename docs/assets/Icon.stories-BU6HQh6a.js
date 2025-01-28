import{C as s,a as i}from"./Label-DP2hSXEE.js";import{j as l}from"./jsx-runtime-OAISXtky.js";import{d as c,u as d}from"./index-BT98D5zi.js";import"./index-qVDZzPEr.js";const m=c.div`
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
`,v=()=>{const e=Object.values(s),u=d();return l.jsx(m,{children:e.map(o=>l.jsxs(p,{$theme:u,children:[l.jsx(i,{name:o}),l.jsx("span",{children:o})]},o))})};try{Iconexample.displayName="Iconexample",Iconexample.__docgenInfo={description:"",displayName:"Iconexample",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"enum",value:[{value:'"arrow-down"'},{value:'"arrow-up"'},{value:'"back"'},{value:'"cancel"'},{value:'"checkbox-checked"'},{value:'"checkbox-unchecked"'},{value:'"check-mark"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-up"'},{value:'"clear"'},{value:'"copy"'},{value:'"cut"'},{value:'"delete"'},{value:'"download"'},{value:'"error"'},{value:'"forward"'},{value:'"graduate"'},{value:'"help"'},{value:'"hide"'},{value:'"home"'},{value:'"info"'},{value:'"login"'},{value:'"paste"'},{value:'"question"'},{value:'"save"'},{value:'"show"'},{value:'"upload"'},{value:'"warning"'},{value:'"remove"'}]}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const f={title:"Elements/Icon",component:v,argTypes:{name:{control:"select",options:Object.values(s)}}},a={};var r,t,n;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(n=(t=a.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const g=["IconGallery"],b=Object.freeze(Object.defineProperty({__proto__:null,IconGallery:a,__namedExportsOrder:g,default:f},Symbol.toStringTag,{value:"Module"}));export{b as C};
