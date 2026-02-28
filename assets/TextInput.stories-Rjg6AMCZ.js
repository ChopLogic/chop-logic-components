import{j as s,r as c}from"./iframe-Doc73XE3.js";/* empty css                          */import{T as m}from"./TextInput-CuSvbkjT.js";const l=e=>s.jsx(m,{...e,className:"responsiveWrapper"});try{l.displayName="TextInputExample",l.__docgenInfo={description:"",displayName:"TextInputExample",props:{errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},clearable:{defaultValue:null,description:"",name:"clearable",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"email"'},{value:'"text"'},{value:'"password"'}]}},validator:{defaultValue:null,description:"",name:"validator",required:!1,type:{name:"ChopLogicRegExpWithFlags | TextInputValidator"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},autoComplete:{defaultValue:null,description:"",name:"autoComplete",required:!1,type:{name:"HTMLInputAutoCompleteAttribute"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!1,type:{name:"(() => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},stateless:{defaultValue:null,description:"",name:"stateless",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | readonly string[]"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const y={component:l,title:"Molecules/TextInput",argTypes:{label:{control:"text",description:"Label text displayed above the input",table:{type:{summary:"string"},category:"Content"}},placeholder:{control:"text",description:"Placeholder text shown when input is empty",table:{type:{summary:"string"},category:"Content"}},errorMessage:{control:"text",description:"Error message displayed when validation fails",table:{type:{summary:"string"},category:"Content"}},type:{control:"select",options:["text","email","password"],description:"Input type attribute",table:{type:{summary:"'text' | 'email' | 'password'"},defaultValue:{summary:"text"},category:"Behavior"}},clearable:{control:"boolean",description:"Whether to show a clear button when input has value",table:{type:{summary:"boolean"},category:"Behavior"}},disabled:{control:"boolean",description:"Whether the input is disabled",table:{type:{summary:"boolean"},category:"State"}},readOnly:{control:"boolean",description:"Whether the input is read-only",table:{type:{summary:"boolean"},category:"State"}},required:{control:"boolean",description:"Whether the field is required",table:{type:{summary:"boolean"},category:"Validation"}},validator:{control:"object",description:"Custom validation function or regex pattern",table:{type:{summary:"(value: string) => boolean | { regexp: string }"},category:"Validation"}},id:{control:"text",description:"Unique identifier for the input",table:{type:{summary:"string"},category:"Identification"}},name:{control:"text",description:"Name attribute for form submission",table:{type:{summary:"string"},category:"Identification"}},defaultValue:{control:"text",description:"Default value for the input field",table:{type:{summary:"string"},category:"Content"}},maxLength:{control:"number",description:"Maximum number of characters allowed in the input",table:{type:{summary:"number"},category:"Behavior"}},autoComplete:{control:"text",description:"HTML autocomplete attribute value",table:{type:{summary:"HTMLInputAutoCompleteAttribute"},category:"Behavior"}},stateless:{control:"boolean",description:"When true, the input is stateless and controlled externally via the value prop",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Behavior"}},value:{control:"text",description:"The external string value (used when stateless is true)",table:{type:{summary:"string"},category:"Behavior"}},onChange:{action:"changed",description:"Callback function called when input value changes",table:{type:{summary:"ChangeEventHandler<HTMLInputElement>"},category:"Interaction"}},onBlur:{action:"blurred",description:"Callback function triggered when the input loses focus",table:{type:{summary:"FocusEventHandler<HTMLInputElement>"},category:"Interaction"}},onFocus:{action:"focused",description:"Callback function triggered when the input receives focus",table:{type:{summary:"FocusEventHandler<HTMLInputElement>"},category:"Interaction"}},onClear:{action:"cleared",description:"Callback function triggered when the clear button is clicked",table:{type:{summary:"() => void"},category:"Interaction"}},title:{control:"text",description:"Tooltip text shown on hover",table:{type:{summary:"string"},category:"Interaction"}},className:{control:"text",description:"Additional CSS class names for custom styling",table:{type:{summary:"string"},category:"Styling"}},style:{control:"object",description:"Inline CSS styles to apply to the input",table:{type:{summary:"CSSProperties"},category:"Styling"}},tabIndex:{control:"number",description:"Tab index for keyboard navigation",table:{type:{summary:"number"},category:"Accessibility"}}}},a={args:{placeholder:"Type here...",label:"Enter the formula",name:"formula",id:"formula-input",type:"text",required:!1,disabled:!1,clearable:!0,errorMessage:"Only latin letters are allowed",validator:{regexp:"^[A-Za-z ]+$"}},argTypes:{type:{control:"select",options:["text","email","password"]},validator:{control:"object"}}},t={args:{placeholder:"Enter your password",label:"Password",name:"pwd",id:"pwd-input",type:"password",required:!0,disabled:!1,clearable:!1,errorMessage:"Your password should contain at least 6 characters",validator:e=>e.length>6},argTypes:{type:{control:"select",options:["text","email","password"]},validator:{control:"object"}}},r={args:{placeholder:"Enter your email",label:"Email",name:"email",id:"email-input",type:"email",required:!0,disabled:!1,clearable:!0,errorMessage:"This is not a valid email",validator:{regexp:"^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$"}},argTypes:{type:{control:"select",options:["text","email","password"]},validator:{control:"object"}}},n={args:{name:"message",label:"Your Message:",id:"message-input",stateless:!0,value:"Hello",placeholder:"Type your message...",type:"text",disabled:!1,readOnly:!1,clearable:!0},render:e=>{const[i,o]=c.useState(e.value||""),u=p=>{o(p.target.value)},d=()=>{o("")};return s.jsx(l,{...e,value:i,onChange:u,onClear:d})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const g=["DefaultTextInput","PasswordInput","EmailInput","Stateless"],v=Object.freeze(Object.defineProperty({__proto__:null,DefaultTextInput:a,EmailInput:r,PasswordInput:t,Stateless:n,__namedExportsOrder:g,default:y},Symbol.toStringTag,{value:"Module"}));export{v as T};
