import{j as l}from"./jsx-runtime-OAISXtky.js";import{C as f}from"./Checkbox-CLF59sww.js";const h=a=>l.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:l.jsx(f,{...a})});try{CheckboxExample.displayName="CheckboxExample",CheckboxExample.__docgenInfo={description:"",displayName:"CheckboxExample",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},noLabel:{defaultValue:null,description:"",name:"noLabel",required:!1,type:{name:"boolean"}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},defaultChecked:{defaultValue:null,description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}}}}}catch{}const b={component:h,title:"Inputs/Checkbox"},e={args:{id:"accept-terms-checkbox",name:"isTermsAccepted",label:"Accept Terms and Conditions",required:!0,disabled:!1,noLabel:!1,defaultChecked:!1,iconPosition:"left",theme:"light"},argTypes:{theme:{control:"radio",options:["light","dark"]},iconPosition:{control:"select",options:["left","right"]}}},n={args:{id:"accept-terms-checkbox",name:"isTermsAccepted",label:"Accept Terms and Conditions",required:!1,disabled:!1,noLabel:!1,defaultChecked:!1,iconPosition:"right",theme:"light"},argTypes:{theme:{control:"radio",options:["light","dark"]},iconPosition:{control:"select",options:["left","right"]}}},t={args:{id:"accept-terms-checkbox",name:"isTermsAccepted",label:"Accept Terms and Conditions",required:!1,disabled:!1,noLabel:!0,defaultChecked:!0,theme:"light"},argTypes:{theme:{control:"radio",options:["light","dark"]}}};var o,r,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var s,c,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,m,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const g=["LeftIconCheckbox","RightIconCheckbox","NoLabelCheckbox"],x=Object.freeze(Object.defineProperty({__proto__:null,LeftIconCheckbox:e,NoLabelCheckbox:t,RightIconCheckbox:n,__namedExportsOrder:g,default:b},Symbol.toStringTag,{value:"Module"}));export{x as C,e as L};
