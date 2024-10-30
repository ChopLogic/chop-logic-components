import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{C as i}from"./NumericInput-DgAxqivs.js";const u=e=>n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",padding:"20px"},children:n.jsx(i,{...e,style:{width:"240px"}})});try{NumericInputExample.displayName="NumericInputExample",NumericInputExample.__docgenInfo={description:"",displayName:"NumericInputExample",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},validator:{defaultValue:null,description:"",name:"validator",required:!1,type:{name:"NumericValidationFunction"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!1,type:{name:"(() => void)"}},hasSpinButtons:{defaultValue:null,description:"",name:"hasSpinButtons",required:!1,type:{name:"boolean"}},onSpinButtonClick:{defaultValue:null,description:"",name:"onSpinButtonClick",required:!1,type:{name:"((value?: number) => void)"}}}}}catch{}const s={title:"Inputs/NumericInput",component:u},a={args:{name:"age",label:"Enter your age:",id:"age-input",defaultValue:0,max:100,min:0,step:1,required:!1,disabled:!1,readOnly:!1,hasSpinButtons:!0,errorMessage:"Enter a number between 1 and 99",validator:e=>!!e&&e>=1&&e<100}};var r,t,l;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(l=(t=a.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const o=["Default"],m=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:o,default:s},Symbol.toStringTag,{value:"Module"}));export{a as D,m as N};
