var h=Object.defineProperty,T=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var d=(e,a,r)=>a in e?h(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,l=(e,a)=>{for(var r in a||(a={}))V.call(a,r)&&d(e,r,a[r]);if(u)for(var r of u(a))w.call(a,r)&&d(e,r,a[r]);return e},t=(e,a)=>T(e,v(a));import{j as E}from"./iframe-CNQVeOyN.js";import{T as I}from"./TextInput-wqhiK9en.js";const i=e=>E.jsx(I,t(l({},e),{style:{width:"240px"}}));try{i.displayName="TextInputExample",i.__docgenInfo={description:"",displayName:"TextInputExample",props:{errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},clearable:{defaultValue:null,description:"",name:"clearable",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"email"'},{value:'"password"'}]}},validator:{defaultValue:null,description:"",name:"validator",required:!1,type:{name:"ChopLogicRegExpWithFlags | TextInputValidator"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},autoComplete:{defaultValue:null,description:"",name:"autoComplete",required:!1,type:{name:"HTMLInputAutoCompleteAttribute"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!1,type:{name:"(() => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch(e){}const _={component:i,title:"Molecules/TextInput"},n={args:{placeholder:"Type here...",label:"Enter the formula",name:"formula",id:"formula-input",type:"text",required:!1,disabled:!1,clearable:!0,errorMessage:"Only latin letters are allowed",validator:{regexp:"^[A-Za-z ]+$"}},argTypes:{type:{control:"select",options:["text","email","password"]},validator:{control:"object"}}},s={args:{placeholder:"Enter your password",label:"Password",name:"pwd",id:"pwd-input",type:"password",required:!0,disabled:!1,clearable:!1,errorMessage:"Your password should contain at least 6 characters",validator:e=>e.length>6},argTypes:{type:{control:"select",options:["text","email","password"]},validator:{control:"object"}}},o={args:{placeholder:"Enter your email",label:"Email",name:"email",id:"email-input",type:"email",required:!0,disabled:!1,clearable:!0,errorMessage:"This is not a valid email",validator:{regexp:"^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$"}},argTypes:{type:{control:"select",options:["text","email","password"]},validator:{control:"object"}}};var p,m,c;n.parameters=t(l({},n.parameters),{docs:t(l({},(p=n.parameters)==null?void 0:p.docs),{source:l({originalSource:`{
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
}`},(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source)})});var f,y,g;s.parameters=t(l({},s.parameters),{docs:t(l({},(f=s.parameters)==null?void 0:f.docs),{source:l({originalSource:`{
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
}`},(g=(y=s.parameters)==null?void 0:y.docs)==null?void 0:g.source)})});var b,x,q;o.parameters=t(l({},o.parameters),{docs:t(l({},(b=o.parameters)==null?void 0:b.docs),{source:l({originalSource:`{
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
      regexp: \`^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$\`
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
}`},(q=(x=o.parameters)==null?void 0:x.docs)==null?void 0:q.source)})});const M=["DefaultTextInput","PasswordInput","EmailInput"],z=Object.freeze(Object.defineProperty({__proto__:null,DefaultTextInput:n,EmailInput:o,PasswordInput:s,__namedExportsOrder:M,default:_},Symbol.toStringTag,{value:"Module"}));export{z as T};
