import{j as i,r as d}from"./iframe-Doc73XE3.js";/* empty css                          */import{N as c}from"./NumericInput-C-U7kNfL.js";const r=e=>i.jsx(c,{...e,className:"responsiveWrapper"});try{r.displayName="NumericInputExample",r.__docgenInfo={description:"",displayName:"NumericInputExample",props:{errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},validator:{defaultValue:null,description:"",name:"validator",required:!1,type:{name:"NumericInputValidator"}},hasSpinButtons:{defaultValue:null,description:"",name:"hasSpinButtons",required:!1,type:{name:"boolean"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:null,description:"",name:"step",required:!1,type:{name:"number"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"number"}},stateless:{defaultValue:null,description:"",name:"stateless",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number"}},onIncrement:{defaultValue:null,description:"",name:"onIncrement",required:!1,type:{name:"(() => void)"}},onDecrement:{defaultValue:null,description:"",name:"onDecrement",required:!1,type:{name:"(() => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLInputElement>"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const p={component:r,title:"Molecules/NumericInput",argTypes:{label:{control:"text",description:"Label text displayed above the numeric input",table:{type:{summary:"string"},category:"Content"}},errorMessage:{control:"text",description:"Error message displayed when validation fails",table:{type:{summary:"string"},category:"Content"}},defaultValue:{control:"number",description:"Initial numeric value",table:{type:{summary:"number"},defaultValue:{summary:"0"},category:"Behavior"}},min:{control:"number",description:"Minimum allowed numeric value",table:{type:{summary:"number"},category:"Behavior"}},max:{control:"number",description:"Maximum allowed numeric value",table:{type:{summary:"number"},category:"Behavior"}},step:{control:"number",description:"Increment/decrement step value",table:{type:{summary:"number"},defaultValue:{summary:"1"},category:"Behavior"}},hasSpinButtons:{control:"boolean",description:"Whether to display spinner buttons for increment/decrement",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Behavior"}},stateless:{control:"boolean",description:"When true, the input is stateless and controlled externally via the value prop",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Behavior"}},value:{control:"number",description:"The external numeric value (used when stateless is true)",table:{type:{summary:"number"},category:"Behavior"}},disabled:{control:"boolean",description:"Whether the input is disabled",table:{type:{summary:"boolean"},category:"State"}},readOnly:{control:"boolean",description:"Whether the input is read-only",table:{type:{summary:"boolean"},category:"State"}},required:{control:"boolean",description:"Whether the field is required",table:{type:{summary:"boolean"},category:"Validation"}},validator:{control:"object",description:"Custom validation function or object",table:{type:{summary:"(value: number) => boolean"},category:"Validation"}},id:{control:"text",description:"Unique identifier for the input",table:{type:{summary:"string"},category:"Identification"}},name:{control:"text",description:"Name attribute for form submission",table:{type:{summary:"string"},category:"Identification"}},onChange:{action:"changed",description:"Callback function called when input value changes",table:{type:{summary:"ChangeEventHandler<HTMLInputElement>"},category:"Interaction"}},onBlur:{action:"blurred",description:"Callback function triggered when the input loses focus",table:{type:{summary:"FocusEventHandler<HTMLInputElement>"},category:"Interaction"}},onFocus:{action:"focused",description:"Callback function triggered when the input receives focus",table:{type:{summary:"FocusEventHandler<HTMLInputElement>"},category:"Interaction"}},onIncrement:{action:"incremented",description:"Callback function triggered when the increment button is clicked",table:{type:{summary:"(value?: number) => void"},category:"Interaction"}},onDecrement:{action:"decremented",description:"Callback function triggered when the decrement button is clicked",table:{type:{summary:"(value?: number) => void"},category:"Interaction"}},title:{control:"text",description:"Tooltip text shown on hover",table:{type:{summary:"string"},category:"Interaction"}},className:{control:"text",description:"Additional CSS class names for custom styling",table:{type:{summary:"string"},category:"Styling"}},style:{control:"object",description:"Inline CSS styles to apply to the input",table:{type:{summary:"CSSProperties"},category:"Styling"}},tabIndex:{control:"number",description:"Tab index for keyboard navigation",table:{type:{summary:"number"},category:"Accessibility"}}}},n={args:{name:"age",label:"Enter your age:",id:"age-input",defaultValue:0,max:100,min:0,step:1,required:!1,disabled:!1,readOnly:!1,hasSpinButtons:!0,errorMessage:"Enter a number between 1 and 99",validator:e=>!!e&&e>=1&&e<100}},a={args:{name:"product-quantity",label:"Product Quantity:",id:"quantity-input",stateless:!0,value:5,max:50,min:1,step:1,disabled:!1,readOnly:!1,hasSpinButtons:!0},render:e=>{const[o,l]=d.useState(e.value||5),u=t=>{l(Number(t.target.value))},s=()=>{l(t=>Math.min(t+(e.step||1),e.max||50))},m=()=>{l(t=>Math.max(t-(e.step||1),e.min||1))};return i.jsx(r,{...e,value:o,onChange:u,onIncrement:s,onDecrement:m})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'product-quantity',
    label: 'Product Quantity:',
    id: 'quantity-input',
    stateless: true,
    value: 5,
    max: 50,
    min: 1,
    step: 1,
    disabled: false,
    readOnly: false,
    hasSpinButtons: true
  },
  render: args => {
    const [quantity, setQuantity] = useState(args.value || 5);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuantity(Number(event.target.value));
    };
    const handleIncrement = () => {
      setQuantity(prev => Math.min(prev + (args.step || 1), args.max || 50));
    };
    const handleDecrement = () => {
      setQuantity(prev => Math.max(prev - (args.step || 1), args.min || 1));
    };
    return <NumericInputExample {...args} value={quantity} onChange={handleChange} onIncrement={handleIncrement} onDecrement={handleDecrement} />;
  }
}`,...a.parameters?.docs?.source}}};const y=["StatefulWithValidation","Stateless"],h=Object.freeze(Object.defineProperty({__proto__:null,StatefulWithValidation:n,Stateless:a,__namedExportsOrder:y,default:p},Symbol.toStringTag,{value:"Module"}));export{h as S};
