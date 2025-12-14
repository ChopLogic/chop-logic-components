var v=Object.defineProperty,w=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var d=(e,t,r)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,a=(e,t)=>{for(var r in t||(t={}))T.call(t,r)&&d(e,r,t[r]);if(u)for(var r of u(t))q.call(t,r)&&d(e,r,t[r]);return e},n=(e,t)=>w(e,I(t));import{j as E}from"./iframe-BBnnbBfy.js";import{s as V}from"./ResponsiveWrapper.module-B2uI7vga.js";import{T as C}from"./TextInput-BGAwRzMx.js";const s=e=>E.jsx(C,n(a({},e),{className:V.responsiveWrapper}));try{s.displayName="TextInputExample",s.__docgenInfo={description:"",displayName:"TextInputExample",props:{errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},clearable:{defaultValue:null,description:"",name:"clearable",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"email"'},{value:'"password"'}]}},validator:{defaultValue:null,description:"",name:"validator",required:!1,type:{name:"ChopLogicRegExpWithFlags | TextInputValidator"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},autoComplete:{defaultValue:null,description:"",name:"autoComplete",required:!1,type:{name:"HTMLInputAutoCompleteAttribute"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!1,type:{name:"(() => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch(e){}const M={component:s,title:"Molecules/TextInput",argTypes:{label:{control:"text",description:"Label text displayed above the input",table:{type:{summary:"string"},category:"Content"}},placeholder:{control:"text",description:"Placeholder text shown when input is empty",table:{type:{summary:"string"},category:"Content"}},errorMessage:{control:"text",description:"Error message displayed when validation fails",table:{type:{summary:"string"},category:"Content"}},type:{control:"select",options:["text","email","password"],description:"Input type attribute",table:{type:{summary:"'text' | 'email' | 'password'"},defaultValue:{summary:"text"},category:"Behavior"}},clearable:{control:"boolean",description:"Whether to show a clear button when input has value",table:{type:{summary:"boolean"},category:"Behavior"}},disabled:{control:"boolean",description:"Whether the input is disabled",table:{type:{summary:"boolean"},category:"State"}},readOnly:{control:"boolean",description:"Whether the input is read-only",table:{type:{summary:"boolean"},category:"State"}},required:{control:"boolean",description:"Whether the field is required",table:{type:{summary:"boolean"},category:"Validation"}},validator:{control:"object",description:"Custom validation function or regex pattern",table:{type:{summary:"(value: string) => boolean | { regexp: string }"},category:"Validation"}},id:{control:"text",description:"Unique identifier for the input",table:{type:{summary:"string"},category:"Identification"}},name:{control:"text",description:"Name attribute for form submission",table:{type:{summary:"string"},category:"Identification"}},defaultValue:{control:"text",description:"Default value for the input field",table:{type:{summary:"string"},category:"Content"}},maxLength:{control:"number",description:"Maximum number of characters allowed in the input",table:{type:{summary:"number"},category:"Behavior"}},autoComplete:{control:"text",description:"HTML autocomplete attribute value",table:{type:{summary:"HTMLInputAutoCompleteAttribute"},category:"Behavior"}},onChange:{action:"changed",description:"Callback function called when input value changes",table:{type:{summary:"ChangeEventHandler<HTMLInputElement>"},category:"Interaction"}},onBlur:{action:"blurred",description:"Callback function triggered when the input loses focus",table:{type:{summary:"FocusEventHandler<HTMLInputElement>"},category:"Interaction"}},onFocus:{action:"focused",description:"Callback function triggered when the input receives focus",table:{type:{summary:"FocusEventHandler<HTMLInputElement>"},category:"Interaction"}},onClear:{action:"cleared",description:"Callback function triggered when the clear button is clicked",table:{type:{summary:"() => void"},category:"Interaction"}},title:{control:"text",description:"Tooltip text shown on hover",table:{type:{summary:"string"},category:"Interaction"}},className:{control:"text",description:"Additional CSS class names for custom styling",table:{type:{summary:"string"},category:"Styling"}},style:{control:"object",description:"Inline CSS styles to apply to the input",table:{type:{summary:"CSSProperties"},category:"Styling"}},tabIndex:{control:"number",description:"Tab index for keyboard navigation",table:{type:{summary:"number"},category:"Accessibility"}}}},l={args:{placeholder:"Type here...",label:"Enter the formula",name:"formula",id:"formula-input",type:"text",required:!1,disabled:!1,clearable:!0,errorMessage:"Only latin letters are allowed",validator:{regexp:"^[A-Za-z ]+$"}},argTypes:{type:{control:"select",options:["text","email","password"]},validator:{control:"object"}}},o={args:{placeholder:"Enter your password",label:"Password",name:"pwd",id:"pwd-input",type:"password",required:!0,disabled:!1,clearable:!1,errorMessage:"Your password should contain at least 6 characters",validator:e=>e.length>6},argTypes:{type:{control:"select",options:["text","email","password"]},validator:{control:"object"}}},i={args:{placeholder:"Enter your email",label:"Email",name:"email",id:"email-input",type:"email",required:!0,disabled:!1,clearable:!0,errorMessage:"This is not a valid email",validator:{regexp:"^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$"}},argTypes:{type:{control:"select",options:["text","email","password"]},validator:{control:"object"}}};var p,c,m;l.parameters=n(a({},l.parameters),{docs:n(a({},(p=l.parameters)==null?void 0:p.docs),{source:a({originalSource:`{
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
}`},(m=(c=l.parameters)==null?void 0:c.docs)==null?void 0:m.source)})});var y,b,g;o.parameters=n(a({},o.parameters),{docs:n(a({},(y=o.parameters)==null?void 0:y.docs),{source:a({originalSource:`{
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
}`},(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source)})});var f,h,x;i.parameters=n(a({},i.parameters),{docs:n(a({},(f=i.parameters)==null?void 0:f.docs),{source:a({originalSource:`{
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
}`},(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source)})});const S=["DefaultTextInput","PasswordInput","EmailInput"],j=Object.freeze(Object.defineProperty({__proto__:null,DefaultTextInput:l,EmailInput:i,PasswordInput:o,__namedExportsOrder:S,default:M},Symbol.toStringTag,{value:"Module"}));export{j as T};
