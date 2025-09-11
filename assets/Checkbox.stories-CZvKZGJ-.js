var k=Object.defineProperty,y=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var d=(e,a,t)=>a in e?k(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,n=(e,a)=>{for(var t in a||(a={}))T.call(a,t)&&d(e,t,a[t]);if(c)for(var t of c(a))_.call(a,t)&&d(e,t,a[t]);return e},r=(e,a)=>y(e,q(a));import{j as L}from"./iframe-DldSfwU-.js";import{C as V}from"./Checkbox-DrQbMiKd.js";const i=e=>L.jsx(V,n({},e));try{i.displayName="CheckboxExample",i.__docgenInfo={description:"",displayName:"CheckboxExample",props:{noLabel:{defaultValue:null,description:"",name:"noLabel",required:!1,type:{name:"boolean"}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},defaultChecked:{defaultValue:null,description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch(e){}const A={component:i,title:"Molecules/Checkbox"},l={args:{id:"accept-terms-checkbox",name:"isTermsAccepted",label:"Accept Terms and Conditions",required:!0,disabled:!1,noLabel:!1,defaultChecked:!1,iconPosition:"left"},argTypes:{iconPosition:{control:"select",options:["left","right"]}}},s={args:{id:"accept-terms-checkbox",name:"isTermsAccepted",label:"Accept Terms and Conditions",required:!1,disabled:!1,noLabel:!1,defaultChecked:!1,iconPosition:"right"},argTypes:{iconPosition:{control:"select",options:["left","right"]}}},o={args:{id:"accept-terms-checkbox",name:"isTermsAccepted",label:"Accept Terms and Conditions",required:!1,disabled:!1,noLabel:!0,defaultChecked:!0}};var u,p,m;l.parameters=r(n({},l.parameters),{docs:r(n({},(u=l.parameters)==null?void 0:u.docs),{source:n({originalSource:`{
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
}`},(m=(p=l.parameters)==null?void 0:p.docs)==null?void 0:m.source)})});var f,b,h;s.parameters=r(n({},s.parameters),{docs:r(n({},(f=s.parameters)==null?void 0:f.docs),{source:n({originalSource:`{
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
}`},(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source)})});var g,C,x;o.parameters=r(n({},o.parameters),{docs:r(n({},(g=o.parameters)==null?void 0:g.docs),{source:n({originalSource:`{
  args: {
    id: 'accept-terms-checkbox',
    name: 'isTermsAccepted',
    label: 'Accept Terms and Conditions',
    required: false,
    disabled: false,
    noLabel: true,
    defaultChecked: true
  }
}`},(x=(C=o.parameters)==null?void 0:C.docs)==null?void 0:x.source)})});const P=["LeftIconCheckbox","RightIconCheckbox","NoLabelCheckbox"],N=Object.freeze(Object.defineProperty({__proto__:null,LeftIconCheckbox:l,NoLabelCheckbox:o,RightIconCheckbox:s,__namedExportsOrder:P,default:A},Symbol.toStringTag,{value:"Module"}));export{N as C};
