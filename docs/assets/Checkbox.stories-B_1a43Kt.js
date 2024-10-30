import{j as l}from"./jsx-runtime-DEdD30eg.js";import{C as T}from"./Checkbox-JFxaaHM8.js";const L=({id:t="example-checkbox",name:f="example",label:b,iconPosition:h,required:x=!0,onChange:g=q=>console.log("Checkbox state:",q.target.checked),disabled:C=!1,noLabel:k=!1,defaultChecked:y})=>l.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:l.jsx(T,{id:t,name:f,label:b,required:x,onChange:g,disabled:C,noLabel:k,iconPosition:h,defaultChecked:y})});try{CheckboxExample.displayName="CheckboxExample",CheckboxExample.__docgenInfo={description:"",displayName:"CheckboxExample",props:{id:{defaultValue:{value:"example-checkbox"},description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:{value:"example"},description:"",name:"name",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"true"},description:"",name:"required",required:!1,type:{name:"boolean"}},noLabel:{defaultValue:{value:"false"},description:"",name:"noLabel",required:!1,type:{name:"boolean"}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},onChange:{defaultValue:{value:"(e) => console.log('Checkbox state:', e.target.checked)"},description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},defaultChecked:{defaultValue:null,description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}}}}}catch{}const _={title:"Inputs/Checkbox",component:L},e={args:{id:"accept-terms-checkbox",name:"isTermsAccepted",label:"Accept Terms and Conditions",required:!0,disabled:!1,noLabel:!1,defaultChecked:!1,iconPosition:"left"},argTypes:{iconPosition:{control:"select",options:["left","right"]}}},a={args:{id:"accept-terms-checkbox",name:"isTermsAccepted",label:"Accept Terms and Conditions",required:!1,disabled:!1,noLabel:!1,defaultChecked:!1,iconPosition:"right"},argTypes:{iconPosition:{control:"select",options:["left","right"]}}},n={args:{id:"accept-terms-checkbox",name:"isTermsAccepted",label:"Accept Terms and Conditions",required:!1,disabled:!1,noLabel:!0,defaultChecked:!0}};var s,o,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var c,i,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var u,p,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    id: 'accept-terms-checkbox',
    name: 'isTermsAccepted',
    label: 'Accept Terms and Conditions',
    required: false,
    disabled: false,
    noLabel: true,
    defaultChecked: true
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const V=["LeftIconCheckbox","RightIconCheckbox","NoLabelCheckbox"],P=Object.freeze(Object.defineProperty({__proto__:null,LeftIconCheckbox:e,NoLabelCheckbox:n,RightIconCheckbox:a,__namedExportsOrder:V,default:_},Symbol.toStringTag,{value:"Module"}));export{P as C,e as L};
