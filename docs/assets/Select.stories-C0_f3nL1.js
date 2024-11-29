import{j as l}from"./jsx-runtime-OAISXtky.js";import{C as i}from"./Select-BBYs4roD.js";const u=a=>l.jsx("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%",padding:"20px"},children:l.jsx(i,{...a,style:{width:"240px"}})});try{SelectExample.displayName="SelectExample",SelectExample.__docgenInfo={description:"",displayName:"SelectExample",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectValue[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: SelectValue) => void)"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number | readonly string[]"}}}}}catch{}const s=[{id:"57b5a856-bc4b-4c2f-8295-9f44434fafc7",label:"English"},{id:"b4b08a09-e287-400b-ba65-afd6ae1f6fd7",label:"Russian"},{id:"641fc722-af5a-4426-8f8a-1566cc492b91",label:"German"}],d={component:u,title:"Inputs/Select"},e={args:{id:"example-select",label:"Select your language",options:s,name:"language",placeholder:"Select your language",onChange:a=>console.log(a),required:!1,disabled:!1,theme:"light"},argTypes:{theme:{control:"radio",options:["light","dark"]}}};var n,t,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    id: 'example-select',
    label: 'Select your language',
    options: SELECT_LANGUAGES,
    name: 'language',
    placeholder: 'Select your language',
    onChange: value => console.log(value),
    required: false,
    disabled: false,
    theme: 'light'
  },
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark']
    }
  }
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const o=["Default"],m=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:o,default:d},Symbol.toStringTag,{value:"Module"}));export{e as D,m as S};
