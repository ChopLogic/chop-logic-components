var C=Object.defineProperty,k=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var d=(e,t,n)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,a=(e,t)=>{for(var n in t||(t={}))q.call(t,n)&&d(e,n,t[n]);if(c)for(var n of c(t))V.call(t,n)&&d(e,n,t[n]);return e},r=(e,t)=>k(e,T(t));import{j as L}from"./iframe-BD2qMxgm.js";import{C as S}from"./Checkbox-CpjLYu2S.js";const i=e=>L.jsx(S,a({},e));try{i.displayName="CheckboxExample",i.__docgenInfo={description:"",displayName:"CheckboxExample",props:{noLabel:{defaultValue:null,description:"",name:"noLabel",required:!1,type:{name:"boolean"}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},defaultChecked:{defaultValue:null,description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch(e){}const A={component:i,title:"Molecules/Checkbox",argTypes:{label:{control:"text",description:"The label text displayed with the checkbox",table:{type:{summary:"string"},category:"Content"}},iconPosition:{control:"select",options:["left","right"],description:"Position of the icon relative to the label text",table:{type:{summary:"'left' | 'right'"},defaultValue:{summary:"left"},category:"Styling"}},className:{control:"text",description:"Additional CSS class for the search wrapper",table:{type:{summary:"string"},defaultValue:{summary:"undefined"},category:"Styling"}},style:{control:"object",description:"Inline styles for the search wrapper",table:{type:{summary:"CSSProperties"},defaultValue:{summary:"undefined"},category:"Styling"}},defaultChecked:{control:"boolean",description:"Initial checked state of the checkbox",table:{type:{summary:"boolean"},category:"State"}},disabled:{control:"boolean",description:"Whether the checkbox is disabled",table:{type:{summary:"boolean"},category:"State"}},noLabel:{control:"boolean",description:"Whether to hide the label visually (still accessible to screen readers)",table:{type:{summary:"boolean"},category:"Behavior"}},onChange:{description:"Callback function when the checked state changes",table:{type:{summary:"(checked: boolean) => void"},category:"Behavior"}},required:{control:"boolean",description:"Whether the checkbox is required",table:{type:{summary:"boolean"},category:"Validation"}},name:{control:"text",description:"Name attribute for form submission",table:{type:{summary:"string"},category:"Identification"}},id:{control:"text",description:"The unique ID for the search input (auto-generated if not provided)",table:{type:{summary:"string"},defaultValue:{summary:"undefined"},category:"HTML Attributes"}},tabIndex:{control:"number",description:"Tab index for the search input",table:{type:{summary:"number"},defaultValue:{summary:"undefined"},category:"HTML Attributes"}},title:{control:"text",description:"Title attribute for the search wrapper",table:{type:{summary:"string"},defaultValue:{summary:"undefined"},category:"HTML Attributes"}}}},o={args:{id:"accept-terms-checkbox",name:"isTermsAccepted",label:"Accept Terms and Conditions",required:!0,disabled:!1,noLabel:!1,defaultChecked:!1,iconPosition:"left"},argTypes:{iconPosition:{control:"select",options:["left","right"]}}},l={args:{id:"accept-terms-checkbox",name:"isTermsAccepted",label:"Accept Terms and Conditions",required:!1,disabled:!1,noLabel:!1,defaultChecked:!1,iconPosition:"right"},argTypes:{iconPosition:{control:"select",options:["left","right"]}}},s={args:{id:"accept-terms-checkbox",name:"isTermsAccepted",label:"Accept Terms and Conditions",required:!1,disabled:!1,noLabel:!0,defaultChecked:!0}};var u,m,p;o.parameters=r(a({},o.parameters),{docs:r(a({},(u=o.parameters)==null?void 0:u.docs),{source:a({originalSource:`{
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
}`},(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source)})});var b,f,h;l.parameters=r(a({},l.parameters),{docs:r(a({},(b=l.parameters)==null?void 0:b.docs),{source:a({originalSource:`{
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
}`},(h=(f=l.parameters)==null?void 0:f.docs)==null?void 0:h.source)})});var y,g,x;s.parameters=r(a({},s.parameters),{docs:r(a({},(y=s.parameters)==null?void 0:y.docs),{source:a({originalSource:`{
  args: {
    id: 'accept-terms-checkbox',
    name: 'isTermsAccepted',
    label: 'Accept Terms and Conditions',
    required: false,
    disabled: false,
    noLabel: true,
    defaultChecked: true
  }
}`},(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source)})});const P=["LeftIconCheckbox","RightIconCheckbox","NoLabelCheckbox"],N=Object.freeze(Object.defineProperty({__proto__:null,LeftIconCheckbox:o,NoLabelCheckbox:s,RightIconCheckbox:l,__namedExportsOrder:P,default:A},Symbol.toStringTag,{value:"Module"}));export{N as C};
