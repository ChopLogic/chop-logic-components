import{j as l}from"./jsx-runtime-OAISXtky.js";import{C as T}from"./Checkbox-Bk0Weu8K.js";const v=({id:n="example-checkbox",name:h="example",label:f,iconPosition:b,required:g=!0,onChange:x=q=>console.log("Checkbox state:",q.target.checked),disabled:k=!1,noLabel:C=!1,defaultChecked:y})=>l.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:l.jsx(T,{id:n,name:h,label:f,required:g,onChange:x,disabled:k,noLabel:C,iconPosition:b,defaultChecked:y})});try{CheckboxExample.displayName="CheckboxExample",CheckboxExample.__docgenInfo={description:"",displayName:"CheckboxExample",props:{id:{defaultValue:{value:"example-checkbox"},description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:{value:"example"},description:"",name:"name",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"true"},description:"",name:"required",required:!1,type:{name:"boolean"}},noLabel:{defaultValue:{value:"false"},description:"",name:"noLabel",required:!1,type:{name:"boolean"}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},onChange:{defaultValue:{value:"(e) => console.log('Checkbox state:', e.target.checked)"},description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},defaultChecked:{defaultValue:null,description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}}}}}catch{}const L={component:v,title:"Inputs/Checkbox"},e={args:{id:"accept-terms-checkbox",name:"isTermsAccepted",label:"Accept Terms and Conditions",required:!0,disabled:!1,noLabel:!1,defaultChecked:!1,iconPosition:"left",theme:"light"},argTypes:{theme:{control:"radio",options:["light","dark"]},iconPosition:{control:"select",options:["left","right"]}}},a={args:{id:"accept-terms-checkbox",name:"isTermsAccepted",label:"Accept Terms and Conditions",required:!1,disabled:!1,noLabel:!1,defaultChecked:!1,iconPosition:"right",theme:"light"},argTypes:{theme:{control:"radio",options:["light","dark"]},iconPosition:{control:"select",options:["left","right"]}}},t={args:{id:"accept-terms-checkbox",name:"isTermsAccepted",label:"Accept Terms and Conditions",required:!1,disabled:!1,noLabel:!0,defaultChecked:!0,theme:"light"},argTypes:{theme:{control:"radio",options:["light","dark"]}}};var o,r,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    id: 'accept-terms-checkbox',
    name: 'isTermsAccepted',
    label: 'Accept Terms and Conditions',
    required: true,
    disabled: false,
    noLabel: false,
    defaultChecked: false,
    iconPosition: 'left',
    theme: 'light'
  },
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark']
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right']
    }
  }
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var i,c,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    id: 'accept-terms-checkbox',
    name: 'isTermsAccepted',
    label: 'Accept Terms and Conditions',
    required: false,
    disabled: false,
    noLabel: false,
    defaultChecked: false,
    iconPosition: 'right',
    theme: 'light'
  },
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark']
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right']
    }
  }
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,m,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    id: 'accept-terms-checkbox',
    name: 'isTermsAccepted',
    label: 'Accept Terms and Conditions',
    required: false,
    disabled: false,
    noLabel: true,
    defaultChecked: true,
    theme: 'light'
  },
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark']
    }
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const V=["LeftIconCheckbox","RightIconCheckbox","NoLabelCheckbox"],P=Object.freeze(Object.defineProperty({__proto__:null,LeftIconCheckbox:e,NoLabelCheckbox:t,RightIconCheckbox:a,__namedExportsOrder:V,default:L},Symbol.toStringTag,{value:"Module"}));export{P as C,e as L};
