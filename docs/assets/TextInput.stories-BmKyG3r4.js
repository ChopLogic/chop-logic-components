import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import{C as g}from"./TextInput-CqaYWJKQ.js";const y=t=>n.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",padding:"20px"},children:n.jsx(g,{...t,style:{width:"240px"}})});try{TextInputExample.displayName="TextInputExample",TextInputExample.__docgenInfo={description:"",displayName:"TextInputExample",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},clearable:{defaultValue:null,description:"",name:"clearable",required:!1,type:{name:"boolean"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!1,type:{name:"(() => void)"}},validator:{defaultValue:null,description:"",name:"validator",required:!1,type:{name:"RegExpWithFlags | TextValidationFunction"}}}}}catch{}const x={title:"Inputs/TextInput",component:y},e={args:{placeholder:"Type here...",label:"Enter the formula",name:"formula",id:"formula-input",type:"text",required:!1,disabled:!1,clearable:!0,errorMessage:"Only latin letters are allowed",validator:{regexp:"^[A-Za-z ]+$"}},argTypes:{type:{control:"select",options:["text","email","password"]},validator:{control:"object"}}},a={args:{placeholder:"Enter your password",label:"Password",name:"pwd",id:"pwd-input",type:"password",required:!0,disabled:!1,clearable:!1,errorMessage:"Your password should contain at least 6 characters",validator:t=>t.length>6},argTypes:{type:{control:"select",options:["text","email","password"]},validator:{control:"object"}}},r={args:{placeholder:"Enter your email",label:"Email",name:"email",id:"email-input",type:"email",required:!0,disabled:!1,clearable:!0,errorMessage:"This is not a valid email",validator:{regexp:"^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$"}},argTypes:{type:{control:"select",options:["text","email","password"]},validator:{control:"object"}}};var l,o,s;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var i,p,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,c,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const f=["DefaultTextInput","PasswordInput","EmailInput"],w=Object.freeze(Object.defineProperty({__proto__:null,DefaultTextInput:e,EmailInput:r,PasswordInput:a,__namedExportsOrder:f,default:x},Symbol.toStringTag,{value:"Module"}));export{e as D,w as T};
