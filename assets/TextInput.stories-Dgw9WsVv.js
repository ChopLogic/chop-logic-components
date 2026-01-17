var M=Object.defineProperty,S=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var p=(e,t,r)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,a=(e,t)=>{for(var r in t||(t={}))_.call(t,r)&&p(e,r,t[r]);if(d)for(var r of d(t))L.call(t,r)&&p(e,r,t[r]);return e},n=(e,t)=>S(e,H(t));import{j as I,r as j}from"./iframe-ByKzMmaK.js";import{s as A}from"./ResponsiveWrapper.module-CBt-uAwD.js";import{T as O}from"./TextInput-y-f0QpK9.js";const u=e=>I.jsx(O,n(a({},e),{className:A.responsiveWrapper}));try{u.displayName="TextInputExample",u.__docgenInfo={description:"",displayName:"TextInputExample",props:{errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},clearable:{defaultValue:null,description:"",name:"clearable",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"email"'},{value:'"password"'}]}},validator:{defaultValue:null,description:"",name:"validator",required:!1,type:{name:"ChopLogicRegExpWithFlags | TextInputValidator"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},autoComplete:{defaultValue:null,description:"",name:"autoComplete",required:!1,type:{name:"HTMLInputAutoCompleteAttribute"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!1,type:{name:"(() => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},stateless:{defaultValue:null,description:"",name:"stateless",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | readonly string[]"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch(e){}const z={component:u,title:"Molecules/TextInput",argTypes:{label:{control:"text",description:"Label text displayed above the input",table:{type:{summary:"string"},category:"Content"}},placeholder:{control:"text",description:"Placeholder text shown when input is empty",table:{type:{summary:"string"},category:"Content"}},errorMessage:{control:"text",description:"Error message displayed when validation fails",table:{type:{summary:"string"},category:"Content"}},type:{control:"select",options:["text","email","password"],description:"Input type attribute",table:{type:{summary:"'text' | 'email' | 'password'"},defaultValue:{summary:"text"},category:"Behavior"}},clearable:{control:"boolean",description:"Whether to show a clear button when input has value",table:{type:{summary:"boolean"},category:"Behavior"}},disabled:{control:"boolean",description:"Whether the input is disabled",table:{type:{summary:"boolean"},category:"State"}},readOnly:{control:"boolean",description:"Whether the input is read-only",table:{type:{summary:"boolean"},category:"State"}},required:{control:"boolean",description:"Whether the field is required",table:{type:{summary:"boolean"},category:"Validation"}},validator:{control:"object",description:"Custom validation function or regex pattern",table:{type:{summary:"(value: string) => boolean | { regexp: string }"},category:"Validation"}},id:{control:"text",description:"Unique identifier for the input",table:{type:{summary:"string"},category:"Identification"}},name:{control:"text",description:"Name attribute for form submission",table:{type:{summary:"string"},category:"Identification"}},defaultValue:{control:"text",description:"Default value for the input field",table:{type:{summary:"string"},category:"Content"}},maxLength:{control:"number",description:"Maximum number of characters allowed in the input",table:{type:{summary:"number"},category:"Behavior"}},autoComplete:{control:"text",description:"HTML autocomplete attribute value",table:{type:{summary:"HTMLInputAutoCompleteAttribute"},category:"Behavior"}},stateless:{control:"boolean",description:"When true, the input is stateless and controlled externally via the value prop",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Behavior"}},value:{control:"text",description:"The external string value (used when stateless is true)",table:{type:{summary:"string"},category:"Behavior"}},onChange:{action:"changed",description:"Callback function called when input value changes",table:{type:{summary:"ChangeEventHandler<HTMLInputElement>"},category:"Interaction"}},onBlur:{action:"blurred",description:"Callback function triggered when the input loses focus",table:{type:{summary:"FocusEventHandler<HTMLInputElement>"},category:"Interaction"}},onFocus:{action:"focused",description:"Callback function triggered when the input receives focus",table:{type:{summary:"FocusEventHandler<HTMLInputElement>"},category:"Interaction"}},onClear:{action:"cleared",description:"Callback function triggered when the clear button is clicked",table:{type:{summary:"() => void"},category:"Interaction"}},title:{control:"text",description:"Tooltip text shown on hover",table:{type:{summary:"string"},category:"Interaction"}},className:{control:"text",description:"Additional CSS class names for custom styling",table:{type:{summary:"string"},category:"Styling"}},style:{control:"object",description:"Inline CSS styles to apply to the input",table:{type:{summary:"CSSProperties"},category:"Styling"}},tabIndex:{control:"number",description:"Tab index for keyboard navigation",table:{type:{summary:"number"},category:"Accessibility"}}}},l={args:{placeholder:"Type here...",label:"Enter the formula",name:"formula",id:"formula-input",type:"text",required:!1,disabled:!1,clearable:!0,errorMessage:"Only latin letters are allowed",validator:{regexp:"^[A-Za-z ]+$"}},argTypes:{type:{control:"select",options:["text","email","password"]},validator:{control:"object"}}},o={args:{placeholder:"Enter your password",label:"Password",name:"pwd",id:"pwd-input",type:"password",required:!0,disabled:!1,clearable:!1,errorMessage:"Your password should contain at least 6 characters",validator:e=>e.length>6},argTypes:{type:{control:"select",options:["text","email","password"]},validator:{control:"object"}}},s={args:{placeholder:"Enter your email",label:"Email",name:"email",id:"email-input",type:"email",required:!0,disabled:!1,clearable:!0,errorMessage:"This is not a valid email",validator:{regexp:"^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$"}},argTypes:{type:{control:"select",options:["text","email","password"]},validator:{control:"object"}}},i={args:{name:"message",label:"Your Message:",id:"message-input",stateless:!0,value:"Hello",placeholder:"Type your message...",type:"text",disabled:!1,readOnly:!1,clearable:!0},render:e=>{const[t,r]=j.useState(e.value||""),q=V=>{r(V.target.value)},E=()=>{r("")};return I.jsx(u,n(a({},e),{value:t,onChange:q,onClear:E}))}};var c,m,y;l.parameters=n(a({},l.parameters),{docs:n(a({},(c=l.parameters)==null?void 0:c.docs),{source:a({originalSource:`{
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
}`},(y=(m=l.parameters)==null?void 0:m.docs)==null?void 0:y.source)})});var g,b,f;o.parameters=n(a({},o.parameters),{docs:n(a({},(g=o.parameters)==null?void 0:g.docs),{source:a({originalSource:`{
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
}`},(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source)})});var h,v,x;s.parameters=n(a({},s.parameters),{docs:n(a({},(h=s.parameters)==null?void 0:h.docs),{source:a({originalSource:`{
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
}`},(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source)})});var T,C,w;i.parameters=n(a({},i.parameters),{docs:n(a({},(T=i.parameters)==null?void 0:T.docs),{source:a({originalSource:`{
  args: {
    name: 'message',
    label: 'Your Message:',
    id: 'message-input',
    stateless: true,
    value: 'Hello',
    placeholder: 'Type your message...',
    type: 'text',
    disabled: false,
    readOnly: false,
    clearable: true
  },
  render: args => {
    const [message, setMessage] = useState(args.value || '');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setMessage(event.target.value);
    };
    const handleClear = () => {
      setMessage('');
    };
    return <TextInputExample {...args} value={message} onChange={handleChange} onClear={handleClear} />;
  }
}`},(w=(C=i.parameters)==null?void 0:C.docs)==null?void 0:w.source)})});const B=["DefaultTextInput","PasswordInput","EmailInput","Stateless"],W=Object.freeze(Object.defineProperty({__proto__:null,DefaultTextInput:l,EmailInput:s,PasswordInput:o,Stateless:i,__namedExportsOrder:B,default:z},Symbol.toStringTag,{value:"Module"}));export{W as T};
