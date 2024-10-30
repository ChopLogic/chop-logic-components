import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{C as m}from"./MultiSelect-DtrJ6l6D.js";const g=({id:l,name:r,label:c,options:o,placeholder:i,required:d,disabled:u,onChange:p})=>a.jsx("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%",padding:"20px"},children:a.jsx(m,{id:l,name:r,label:c,options:o,placeholder:i,required:d,disabled:u,onChange:p,style:{width:"240px"}})});try{MultiSelectExample.displayName="MultiSelectExample",MultiSelectExample.__docgenInfo={description:"",displayName:"MultiSelectExample",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectValue[]"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}}}}}catch{}const f=[{id:"57b5a856-bc4b-4c2f-8295-9f44434fafc7",label:"English",selected:!1},{id:"583e8b60-0177-4e38-a423-4b1d5d0a2236",label:"Spanish",selected:!1},{id:"b20bea7b-8172-4d12-b172-d5feac02d863",label:"French",selected:!1},{id:"641fc722-af5a-4426-8f8a-1566cc492b91",label:"German",selected:!1}],b={title:"Inputs/MultiSelect",component:g},e={args:{id:"example-multiselect",name:"languages",label:"Select Languages",options:f,placeholder:"Select languages",onChange:l=>console.log(l),required:!0,disabled:!1}};var t,n,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    id: 'example-multiselect',
    name: 'languages',
    label: 'Select Languages',
    options: MULTI_SELECT_VALUES,
    placeholder: 'Select languages',
    onChange: values => console.log(values),
    required: true,
    disabled: false
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const S=["Default"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:S,default:b},Symbol.toStringTag,{value:"Module"}));export{e as D,h as M};
