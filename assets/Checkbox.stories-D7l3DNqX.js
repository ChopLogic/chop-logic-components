import{a as e,n as t,r as n}from"./chunk-BneVvdWh.js";import{t as r}from"./react-l7Y7wVQj.js";import{n as i}from"./iframe-BApIZdni.js";import{n as a,t as o}from"./Checkbox-Dzntw8ks.js";var s,c,l=t((()=>{a(),s=i(),c=e=>(0,s.jsx)(o,{...e});try{c.displayName=`CheckboxExample`,c.__docgenInfo={description:``,displayName:`CheckboxExample`,props:{noLabel:{defaultValue:null,description:``,name:`noLabel`,required:!1,type:{name:`boolean`}},iconPosition:{defaultValue:null,description:``,name:`iconPosition`,required:!1,type:{name:`enum`,value:[{value:`"left"`},{value:`"right"`}]}},onChange:{defaultValue:null,description:``,name:`onChange`,required:!1,type:{name:`ChangeEventHandler<HTMLInputElement>`}},defaultChecked:{defaultValue:null,description:``,name:`defaultChecked`,required:!1,type:{name:`boolean`}},checked:{defaultValue:null,description:``,name:`checked`,required:!1,type:{name:`boolean`}},label:{defaultValue:null,description:``,name:`label`,required:!0,type:{name:`string`}},name:{defaultValue:null,description:``,name:`name`,required:!0,type:{name:`string`}},disabled:{defaultValue:null,description:``,name:`disabled`,required:!1,type:{name:`boolean`}},required:{defaultValue:null,description:``,name:`required`,required:!1,type:{name:`boolean`}},stateless:{defaultValue:null,description:``,name:`stateless`,required:!1,type:{name:`boolean`}},value:{defaultValue:null,description:``,name:`value`,required:!1,type:{name:`string | number | readonly string[]`}},id:{defaultValue:null,description:``,name:`id`,required:!1,type:{name:`string`}},className:{defaultValue:null,description:``,name:`className`,required:!1,type:{name:`string`}},style:{defaultValue:null,description:``,name:`style`,required:!1,type:{name:`CSSProperties`}},tabIndex:{defaultValue:null,description:``,name:`tabIndex`,required:!1,type:{name:`number`}},title:{defaultValue:null,description:``,name:`title`,required:!1,type:{name:`string`}}}}}catch{}})),u=n({LeftIconCheckbox:()=>m,NoLabelCheckbox:()=>_,RightIconCheckbox:()=>h,Stateless:()=>g,__namedExportsOrder:()=>v,default:()=>p}),d,f,p,m,h,g,_,v,y=t((()=>{d=e(r(),1),l(),f=i(),p={component:c,title:`Molecules/Checkbox`,argTypes:{label:{control:`text`,description:`The label text displayed with the checkbox`,table:{type:{summary:`string`},category:`Content`}},iconPosition:{control:`select`,options:[`left`,`right`],description:`Position of the icon relative to the label text`,table:{type:{summary:`'left' | 'right'`},defaultValue:{summary:`left`},category:`Styling`}},className:{control:`text`,description:`Additional CSS class for the search wrapper`,table:{type:{summary:`string`},defaultValue:{summary:`undefined`},category:`Styling`}},style:{control:`object`,description:`Inline styles for the search wrapper`,table:{type:{summary:`CSSProperties`},defaultValue:{summary:`undefined`},category:`Styling`}},defaultChecked:{control:`boolean`,description:`Initial checked state of the checkbox`,table:{type:{summary:`boolean`},category:`State`}},disabled:{control:`boolean`,description:`Whether the checkbox is disabled`,table:{type:{summary:`boolean`},category:`State`}},noLabel:{control:`boolean`,description:`Whether to hide the label visually (still accessible to screen readers)`,table:{type:{summary:`boolean`},category:`Behavior`}},stateless:{control:`boolean`,description:`When true, the checkbox is stateless and controlled externally via the checked prop`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`},category:`Behavior`}},checked:{control:`boolean`,description:`The external checked state (used when stateless is true)`,table:{type:{summary:`boolean`},category:`Behavior`}},onChange:{description:`Callback function when the checked state changes`,table:{type:{summary:`(checked: boolean) => void`},category:`Behavior`}},required:{control:`boolean`,description:`Whether the checkbox is required`,table:{type:{summary:`boolean`},category:`Validation`}},name:{control:`text`,description:`Name attribute for form submission`,table:{type:{summary:`string`},category:`Identification`}},id:{control:`text`,description:`The unique ID for the search input (auto-generated if not provided)`,table:{type:{summary:`string`},defaultValue:{summary:`undefined`},category:`HTML Attributes`}},tabIndex:{control:`number`,description:`Tab index for the search input`,table:{type:{summary:`number`},defaultValue:{summary:`undefined`},category:`HTML Attributes`}},title:{control:`text`,description:`Title attribute for the search wrapper`,table:{type:{summary:`string`},defaultValue:{summary:`undefined`},category:`HTML Attributes`}}}},m={args:{id:`accept-terms-checkbox`,name:`isTermsAccepted`,label:`Accept Terms and Conditions`,required:!0,disabled:!1,noLabel:!1,defaultChecked:!1,iconPosition:`left`},argTypes:{iconPosition:{control:`select`,options:[`left`,`right`]}}},h={args:{id:`accept-terms-checkbox`,name:`isTermsAccepted`,label:`Accept Terms and Conditions`,required:!1,disabled:!1,noLabel:!1,defaultChecked:!1,iconPosition:`right`}},g={args:{id:`newsletter-checkbox`,name:`subscribeNewsletter`,label:`Subscribe to newsletter`,stateless:!0,checked:!0,required:!1,disabled:!1,noLabel:!1,iconPosition:`left`},render:e=>{let[t,n]=(0,d.useState)(e.checked??!1),r=e=>{n(e.target.checked)};return(0,f.jsx)(c,{...e,checked:t,onChange:r})}},_={args:{id:`accept-terms-checkbox`,name:`isTermsAccepted`,label:`Accept Terms and Conditions`,required:!1,disabled:!1,noLabel:!0,defaultChecked:!0}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'accept-terms-checkbox',
    name: 'isTermsAccepted',
    label: 'Accept Terms and Conditions',
    required: false,
    disabled: false,
    noLabel: true,
    defaultChecked: true
  }
}`,..._.parameters?.docs?.source}}},v=[`LeftIconCheckbox`,`RightIconCheckbox`,`Stateless`,`NoLabelCheckbox`]}));y();export{m as LeftIconCheckbox,_ as NoLabelCheckbox,h as RightIconCheckbox,g as Stateless,v as __namedExportsOrder,p as default,y as n,u as t};