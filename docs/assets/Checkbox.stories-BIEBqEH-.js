import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{C as L}from"./Checkbox-D-9x5qN4.js";const _=({id:n="example-checkbox",name:b="example",label:f,iconPosition:h,required:x=!0,onChange:g=y=>console.log("Checkbox state:",y.target.checked),disabled:C=!1,noLabel:k=!1,defaultChecked:T})=>t.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:t.jsx(L,{id:n,name:b,label:f,required:x,onChange:g,disabled:C,noLabel:k,iconPosition:h,defaultChecked:T})});try{CheckboxExample.displayName="CheckboxExample",CheckboxExample.__docgenInfo={description:"",displayName:"CheckboxExample",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},noLabel:{defaultValue:{value:"false"},description:"",name:"noLabel",required:!1,type:{name:"boolean"}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}const A={title:"Inputs/Checkbox",component:_},e={args:{id:"accept-terms-checkbox",name:"isTermsAccepted",label:"Accept Terms and Conditions",required:!0,disabled:!1,noLabel:!1,defaultChecked:!1,iconPosition:"left"},argTypes:{iconPosition:{control:"select",options:["left","right"]}}},o={args:{id:"accept-terms-checkbox",name:"isTermsAccepted",label:"Accept Terms and Conditions",required:!1,disabled:!1,noLabel:!1,defaultChecked:!1,iconPosition:"right"},argTypes:{iconPosition:{control:"select",options:["left","right"]}}},a={args:{id:"accept-terms-checkbox",name:"isTermsAccepted",label:"Accept Terms and Conditions",required:!1,disabled:!1,noLabel:!0,defaultChecked:!0}};var s,c,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(r=(c=e.parameters)==null?void 0:c.docs)==null?void 0:r.source}}};var l,i,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    id: 'accept-terms-checkbox',
    name: 'isTermsAccepted',
    label: 'Accept Terms and Conditions',
    required: false,
    disabled: false,
    noLabel: true,
    defaultChecked: true
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const P=["LeftIconCheckbox","RightIconCheckbox","NoLabelCheckbox"],E=Object.freeze(Object.defineProperty({__proto__:null,LeftIconCheckbox:e,NoLabelCheckbox:a,RightIconCheckbox:o,__namedExportsOrder:P,default:A},Symbol.toStringTag,{value:"Module"}));export{E as C,e as L};
