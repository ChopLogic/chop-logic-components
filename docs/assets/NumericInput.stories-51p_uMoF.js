import{j as r}from"./jsx-runtime-OAISXtky.js";import{C as u}from"./NumericInput-CSsCWHDr.js";const i=e=>r.jsx(u,{...e,style:{width:"240px"}});try{NumericInputexample.displayName="NumericInputexample",NumericInputexample.__docgenInfo={description:"",displayName:"NumericInputexample",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},validator:{defaultValue:null,description:"",name:"validator",required:!1,type:{name:"NumericValidationFunction"}},hasSpinButtons:{defaultValue:null,description:"",name:"hasSpinButtons",required:!1,type:{name:"boolean"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:null,description:"",name:"step",required:!1,type:{name:"number"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"number"}},onSpinButtonClick:{defaultValue:null,description:"",name:"onSpinButtonClick",required:!1,type:{name:"((value?: number) => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}}}}}catch{}const s={component:i,title:"Inputs/NumericInput"},a={args:{name:"age",label:"Enter your age:",id:"age-input",defaultValue:0,max:100,min:0,step:1,required:!1,disabled:!1,readOnly:!1,hasSpinButtons:!0,errorMessage:"Enter a number between 1 and 99",validator:e=>!!e&&e>=1&&e<100}};var n,l,t;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    name: 'age',
    label: 'Enter your age:',
    id: 'age-input',
    defaultValue: 0,
    max: 100,
    min: 0,
    step: 1,
    required: false,
    disabled: false,
    readOnly: false,
    hasSpinButtons: true,
    errorMessage: 'Enter a number between 1 and 99',
    validator: age => !!age && age >= 1 && age < 100
  }
}`,...(t=(l=a.parameters)==null?void 0:l.docs)==null?void 0:t.source}}};const d=["Default"],p=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:d,default:s},Symbol.toStringTag,{value:"Module"}));export{p as N};
