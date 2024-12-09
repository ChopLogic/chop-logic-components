import{j as l}from"./jsx-runtime-OAISXtky.js";import{C as f}from"./Checkbox-Czr_VCiy.js";const b=t=>l.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:l.jsx(f,{...t})});try{CheckboxExample.displayName="CheckboxExample",CheckboxExample.__docgenInfo={description:"",displayName:"CheckboxExample",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},noLabel:{defaultValue:null,description:"",name:"noLabel",required:!1,type:{name:"boolean"}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},defaultChecked:{defaultValue:null,description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}}}}}catch{}const h={component:b,title:"Inputs/Checkbox"},e={args:{id:"accept-terms-checkbox",name:"isTermsAccepted",label:"Accept Terms and Conditions",required:!0,disabled:!1,noLabel:!1,defaultChecked:!1,iconPosition:"left"},argTypes:{iconPosition:{control:"select",options:["left","right"]}}},n={args:{id:"accept-terms-checkbox",name:"isTermsAccepted",label:"Accept Terms and Conditions",required:!1,disabled:!1,noLabel:!1,defaultChecked:!1,iconPosition:"right"},argTypes:{iconPosition:{control:"select",options:["left","right"]}}},a={args:{id:"accept-terms-checkbox",name:"isTermsAccepted",label:"Accept Terms and Conditions",required:!1,disabled:!1,noLabel:!0,defaultChecked:!0}};var r,s,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    id: 'accept-terms-checkbox',
    name: 'isTermsAccepted',
    label: 'Accept Terms and Conditions',
    required: true,
    disabled: false,
    noLabel: false,
    defaultChecked: false,
    iconPosition: 'left'
  },
  argTypes: {
    iconPosition: {
      control: 'select',
      options: ['left', 'right']
    }
  }
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var i,c,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    id: 'accept-terms-checkbox',
    name: 'isTermsAccepted',
    label: 'Accept Terms and Conditions',
    required: false,
    disabled: false,
    noLabel: false,
    defaultChecked: false,
    iconPosition: 'right'
  },
  argTypes: {
    iconPosition: {
      control: 'select',
      options: ['left', 'right']
    }
  }
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,p,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    id: 'accept-terms-checkbox',
    name: 'isTermsAccepted',
    label: 'Accept Terms and Conditions',
    required: false,
    disabled: false,
    noLabel: true,
    defaultChecked: true
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const g=["LeftIconCheckbox","RightIconCheckbox","NoLabelCheckbox"],y=Object.freeze(Object.defineProperty({__proto__:null,LeftIconCheckbox:e,NoLabelCheckbox:a,RightIconCheckbox:n,__namedExportsOrder:g,default:h},Symbol.toStringTag,{value:"Module"}));export{y as C,e as L};
