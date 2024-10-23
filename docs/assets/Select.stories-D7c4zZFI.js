import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{C as m}from"./Select-fz0dFz33.js";const f=({id:l,options:r,onChange:s,name:c,placeholder:i,label:d,required:p,disabled:u})=>a.jsx("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%",padding:"20px"},children:a.jsx(m,{id:l,options:r,onChange:s,name:c,placeholder:i,label:d,required:p,disabled:u,style:{width:"240px"}})});try{SelectExample.displayName="SelectExample",SelectExample.__docgenInfo={description:"",displayName:"SelectExample",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectValue[]"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}const g=[{id:"57b5a856-bc4b-4c2f-8295-9f44434fafc7",label:"English"},{id:"b4b08a09-e287-400b-ba65-afd6ae1f6fd7",label:"Russian"},{id:"641fc722-af5a-4426-8f8a-1566cc492b91",label:"German"}],b={title:"Inputs/Select",component:f},e={args:{id:"example-select",label:"Select your language",options:g,name:"language",placeholder:"Click to select",onChange:l=>console.log(l),required:!1,disabled:!1}};var t,n,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    id: 'example-select',
    label: 'Select your language',
    options: SELECT_LANGUAGES,
    name: 'language',
    placeholder: 'Click to select',
    onChange: value => console.log(value),
    required: false,
    disabled: false
  }
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const S=["Default"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:S,default:b},Symbol.toStringTag,{value:"Module"}));export{e as D,y as S};
