import{j as n}from"./jsx-runtime-DEdD30eg.js";import{C as f}from"./TextInput-Bjvl9Law.js";const y=t=>n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",padding:"20px"},children:n.jsx(f,{...t,style:{width:"240px"}})});try{TextInputExample.displayName="TextInputExample",TextInputExample.__docgenInfo={description:"",displayName:"TextInputExample",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},clearable:{defaultValue:null,description:"",name:"clearable",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!1,type:{name:"(() => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"email"'},{value:'"password"'}]}},validator:{defaultValue:null,description:"",name:"validator",required:!1,type:{name:"RegExpWithFlags | TextValidationFunction"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},autoComplete:{defaultValue:null,description:"",name:"autoComplete",required:!1,type:{name:"HTMLInputAutoCompleteAttribute"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}}}}}catch{}const g={title:"Inputs/TextInput",component:y},e={args:{placeholder:"Type here...",label:"Enter the formula",name:"formula",id:"formula-input",type:"text",required:!1,disabled:!1,clearable:!0,errorMessage:"Only latin letters are allowed",validator:{regexp:"^[A-Za-z ]+$"}},argTypes:{type:{control:"select",options:["text","email","password"]},validator:{control:"object"}}},a={args:{placeholder:"Enter your password",label:"Password",name:"pwd",id:"pwd-input",type:"password",required:!0,disabled:!1,clearable:!1,errorMessage:"Your password should contain at least 6 characters",validator:t=>t.length>6},argTypes:{type:{control:"select",options:["text","email","password"]},validator:{control:"object"}}},l={args:{placeholder:"Enter your email",label:"Email",name:"email",id:"email-input",type:"email",required:!0,disabled:!1,clearable:!0,errorMessage:"This is not a valid email",validator:{regexp:"^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$"}},argTypes:{type:{control:"select",options:["text","email","password"]},validator:{control:"object"}}};var r,s,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type here...',
    label: 'Enter the formula',
    name: 'formula',
    id: 'formula-input',
    type: 'text',
    required: false,
    disabled: false,
    clearable: true,
    errorMessage: 'Only latin letters are allowed',
    validator: {
      regexp: '^[A-Za-z ]+$'
    }
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password']
    },
    validator: {
      control: 'object'
    }
  }
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var i,u,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your password',
    label: 'Password',
    name: 'pwd',
    id: 'pwd-input',
    type: 'password',
    required: true,
    disabled: false,
    clearable: false,
    errorMessage: 'Your password should contain at least 6 characters',
    validator: input => input.length > 6
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password']
    },
    validator: {
      control: 'object'
    }
  }
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var p,m,c;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your email',
    label: 'Email',
    name: 'email',
    id: 'email-input',
    type: 'email',
    required: true,
    disabled: false,
    clearable: true,
    errorMessage: 'This is not a valid email',
    // eslint-disable-next-line no-useless-escape
    validator: {
      regexp: \`^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$\`
    }
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password']
    },
    validator: {
      control: 'object'
    }
  }
}`,...(c=(m=l.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const b=["DefaultTextInput","PasswordInput","EmailInput"],q=Object.freeze(Object.defineProperty({__proto__:null,DefaultTextInput:e,EmailInput:l,PasswordInput:a,__namedExportsOrder:b,default:g},Symbol.toStringTag,{value:"Module"}));export{e as D,q as T};
