var I=Object.defineProperty,A=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var m=(e,a,n)=>a in e?I(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,t=(e,a)=>{for(var n in a||(a={}))_.call(a,n)&&m(e,n,a[n]);if(u)for(var n of u(a))w.call(a,n)&&m(e,n,a[n]);return e},r=(e,a)=>A(e,P(a));import{j as V,r as E}from"./iframe-ByKzMmaK.js";import{C as N}from"./Checkbox-D5jwUFPF.js";const c=e=>V.jsx(N,t({},e));try{c.displayName="CheckboxExample",c.__docgenInfo={description:"",displayName:"CheckboxExample",props:{noLabel:{defaultValue:null,description:"",name:"noLabel",required:!1,type:{name:"boolean"}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},defaultChecked:{defaultValue:null,description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},stateless:{defaultValue:null,description:"",name:"stateless",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number | readonly string[]"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch(e){}const j={component:c,title:"Molecules/Checkbox",argTypes:{label:{control:"text",description:"The label text displayed with the checkbox",table:{type:{summary:"string"},category:"Content"}},iconPosition:{control:"select",options:["left","right"],description:"Position of the icon relative to the label text",table:{type:{summary:"'left' | 'right'"},defaultValue:{summary:"left"},category:"Styling"}},className:{control:"text",description:"Additional CSS class for the search wrapper",table:{type:{summary:"string"},defaultValue:{summary:"undefined"},category:"Styling"}},style:{control:"object",description:"Inline styles for the search wrapper",table:{type:{summary:"CSSProperties"},defaultValue:{summary:"undefined"},category:"Styling"}},defaultChecked:{control:"boolean",description:"Initial checked state of the checkbox",table:{type:{summary:"boolean"},category:"State"}},disabled:{control:"boolean",description:"Whether the checkbox is disabled",table:{type:{summary:"boolean"},category:"State"}},noLabel:{control:"boolean",description:"Whether to hide the label visually (still accessible to screen readers)",table:{type:{summary:"boolean"},category:"Behavior"}},stateless:{control:"boolean",description:"When true, the checkbox is stateless and controlled externally via the checked prop",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Behavior"}},checked:{control:"boolean",description:"The external checked state (used when stateless is true)",table:{type:{summary:"boolean"},category:"Behavior"}},onChange:{description:"Callback function when the checked state changes",table:{type:{summary:"(checked: boolean) => void"},category:"Behavior"}},required:{control:"boolean",description:"Whether the checkbox is required",table:{type:{summary:"boolean"},category:"Validation"}},name:{control:"text",description:"Name attribute for form submission",table:{type:{summary:"string"},category:"Identification"}},id:{control:"text",description:"The unique ID for the search input (auto-generated if not provided)",table:{type:{summary:"string"},defaultValue:{summary:"undefined"},category:"HTML Attributes"}},tabIndex:{control:"number",description:"Tab index for the search input",table:{type:{summary:"number"},defaultValue:{summary:"undefined"},category:"HTML Attributes"}},title:{control:"text",description:"Title attribute for the search wrapper",table:{type:{summary:"string"},defaultValue:{summary:"undefined"},category:"HTML Attributes"}}}},s={args:{id:"accept-terms-checkbox",name:"isTermsAccepted",label:"Accept Terms and Conditions",required:!0,disabled:!1,noLabel:!1,defaultChecked:!1,iconPosition:"left"},argTypes:{iconPosition:{control:"select",options:["left","right"]}}},l={args:{id:"accept-terms-checkbox",name:"isTermsAccepted",label:"Accept Terms and Conditions",required:!1,disabled:!1,noLabel:!1,defaultChecked:!1,iconPosition:"right"}},o={args:{id:"newsletter-checkbox",name:"subscribeNewsletter",label:"Subscribe to newsletter",stateless:!0,checked:!0,required:!1,disabled:!1,noLabel:!1,iconPosition:"left"},render:e=>{var d;const[a,n]=E.useState((d=e.checked)!=null?d:!1),L=v=>{n(v.target.checked)};return V.jsx(c,r(t({},e),{checked:a,onChange:L}))}},i={args:{id:"accept-terms-checkbox",name:"isTermsAccepted",label:"Accept Terms and Conditions",required:!1,disabled:!1,noLabel:!0,defaultChecked:!0}};var b,p,h;s.parameters=r(t({},s.parameters),{docs:r(t({},(b=s.parameters)==null?void 0:b.docs),{source:t({originalSource:`{
  args: {
    id: 'accept-terms-checkbox',
    name: 'isTermsAccepted',
    label: 'Accept Terms and Conditions',
    required: true,
    disabled: false,
    noLabel: false,
    defaultChecked: false,
    iconPosition: 'left'
  },
  argTypes: {
    iconPosition: {
      control: 'select',
      options: ['left', 'right']
    }
  }
}`},(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source)})});var f,y,g;l.parameters=r(t({},l.parameters),{docs:r(t({},(f=l.parameters)==null?void 0:f.docs),{source:t({originalSource:`{
  args: {
    id: 'accept-terms-checkbox',
    name: 'isTermsAccepted',
    label: 'Accept Terms and Conditions',
    required: false,
    disabled: false,
    noLabel: false,
    defaultChecked: false,
    iconPosition: 'right'
  }
}`},(g=(y=l.parameters)==null?void 0:y.docs)==null?void 0:g.source)})});var k,x,C;o.parameters=r(t({},o.parameters),{docs:r(t({},(k=o.parameters)==null?void 0:k.docs),{source:t({originalSource:`{
  args: {
    id: 'newsletter-checkbox',
    name: 'subscribeNewsletter',
    label: 'Subscribe to newsletter',
    stateless: true,
    checked: true,
    required: false,
    disabled: false,
    noLabel: false,
    iconPosition: 'left'
  },
  render: args => {
    const [isSubscribed, setIsSubscribed] = useState(args.checked ?? false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsSubscribed(event.target.checked);
    };
    return <CheckboxExample {...args} checked={isSubscribed} onChange={handleChange} />;
  }
}`},(C=(x=o.parameters)==null?void 0:x.docs)==null?void 0:C.source)})});var S,q,T;i.parameters=r(t({},i.parameters),{docs:r(t({},(S=i.parameters)==null?void 0:S.docs),{source:t({originalSource:`{
  args: {
    id: 'accept-terms-checkbox',
    name: 'isTermsAccepted',
    label: 'Accept Terms and Conditions',
    required: false,
    disabled: false,
    noLabel: true,
    defaultChecked: true
  }
}`},(T=(q=i.parameters)==null?void 0:q.docs)==null?void 0:T.source)})});const M=["LeftIconCheckbox","RightIconCheckbox","Stateless","NoLabelCheckbox"],W=Object.freeze(Object.defineProperty({__proto__:null,LeftIconCheckbox:s,NoLabelCheckbox:i,RightIconCheckbox:l,Stateless:o,__namedExportsOrder:M,default:j},Symbol.toStringTag,{value:"Module"}));export{W as C};
