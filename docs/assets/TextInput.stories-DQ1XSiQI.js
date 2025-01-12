import{j as c}from"./jsx-runtime-OAISXtky.js";import{C as f}from"./TextInput-k1kqE6W_.js";const y=r=>c.jsx(f,{...r,style:{width:"240px"}});try{TextInputexample.displayName="TextInputexample",TextInputexample.__docgenInfo={description:"",displayName:"TextInputexample",props:{errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},clearable:{defaultValue:null,description:"",name:"clearable",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"email"'},{value:'"password"'}]}},validator:{defaultValue:null,description:"",name:"validator",required:!1,type:{name:"ChopLogicRegExpWithFlags | ChopLogicTextInputValidator"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},autoComplete:{defaultValue:null,description:"",name:"autoComplete",required:!1,type:{name:"HTMLInputAutoCompleteAttribute"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!1,type:{name:"(() => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const g={component:y,title:"Inputs/TextInput"},e={args:{placeholder:"Type here...",label:"Enter the formula",name:"formula",id:"formula-input",type:"text",required:!1,disabled:!1,clearable:!0,errorMessage:"Only latin letters are allowed",validator:{regexp:"^[A-Za-z ]+$"}},argTypes:{type:{control:"select",options:["text","email","password"]},validator:{control:"object"}}},a={args:{placeholder:"Enter your password",label:"Password",name:"pwd",id:"pwd-input",type:"password",required:!0,disabled:!1,clearable:!1,errorMessage:"Your password should contain at least 6 characters",validator:r=>r.length>6},argTypes:{type:{control:"select",options:["text","email","password"]},validator:{control:"object"}}},l={args:{placeholder:"Enter your email",label:"Email",name:"email",id:"email-input",type:"email",required:!0,disabled:!1,clearable:!0,errorMessage:"This is not a valid email",validator:{regexp:"^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$"}},argTypes:{type:{control:"select",options:["text","email","password"]},validator:{control:"object"}}};var t,n,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var o,i,u;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(u=(i=a.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var d,p,m;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(p=l.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const b=["DefaultTextInput","PasswordInput","EmailInput"],q=Object.freeze(Object.defineProperty({__proto__:null,DefaultTextInput:e,EmailInput:l,PasswordInput:a,__namedExportsOrder:b,default:g},Symbol.toStringTag,{value:"Module"}));export{q as T};
