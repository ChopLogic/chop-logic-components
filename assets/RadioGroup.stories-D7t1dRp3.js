import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-HsEYkK1h.js";import{n as r,t as i}from"./RadioGroup-CO15oglb.js";var a,o;function s(){return(s=e((()=>{r(),a=n(),o=e=>(0,a.jsx)(i,{...e});try{o.displayName=`RadioGroupExample`,o.__docgenInfo={description:``,displayName:`RadioGroupExample`,filePath:`/home/runner/work/chop-logic-components/chop-logic-components/src/components/atoms/radio-group/__docs__/RadioGroup.example.tsx`,methods:[],props:{options:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/radio-group.ts`,name:`RadioGroupProps`}],description:``,name:`options`,parent:{fileName:`chop-logic-components/src/types/radio-group.ts`,name:`RadioGroupProps`},required:!0,tags:{},type:{name:`RadioGroupOption[]`}},orientation:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/radio-group.ts`,name:`RadioGroupProps`}],description:``,name:`orientation`,parent:{fileName:`chop-logic-components/src/types/radio-group.ts`,name:`RadioGroupProps`},required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical"`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},value:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/radio-group.ts`,name:`RadioGroupProps`}],description:``,name:`value`,parent:{fileName:`chop-logic-components/src/types/radio-group.ts`,name:`RadioGroupProps`},required:!1,tags:{},type:{name:`string`}},onChange:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/radio-group.ts`,name:`RadioGroupProps`}],description:``,name:`onChange`,parent:{fileName:`chop-logic-components/src/types/radio-group.ts`,name:`RadioGroupProps`},required:!1,tags:{},type:{name:`((value: string) => void)`}},defaultValue:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/radio-group.ts`,name:`RadioGroupProps`}],description:``,name:`defaultValue`,parent:{fileName:`chop-logic-components/src/types/radio-group.ts`,name:`RadioGroupProps`},required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`className`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`string`}},name:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`}],description:``,name:`name`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`},required:!0,tags:{},type:{name:`string`}},id:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`id`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`style`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`CSSProperties`}},label:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`}],description:``,name:`label`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`},required:!0,tags:{},type:{name:`string`}},disabled:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`}],description:``,name:`disabled`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`},required:!1,tags:{},type:{name:`boolean`}},required:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`}],description:``,name:`required`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`},required:!1,tags:{},type:{name:`boolean`}},stateless:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`}],description:``,name:`stateless`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`},required:!1,tags:{},type:{name:`boolean`}},isLoading:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`}],description:``,name:`isLoading`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`},required:!1,tags:{},type:{name:`boolean`}}},tags:{}}}catch{}})))()}var c=t({Default:()=>d,Disabled:()=>m,Horizontal:()=>f,IndividualDisabledOption:()=>h,WithDefaultValue:()=>p,__namedExportsOrder:()=>g,default:()=>l}),l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{s(),l={component:o,title:`Atoms/RadioGroup`,argTypes:{label:{control:`text`,description:`Accessible label for the radio group`,table:{type:{summary:`string`},category:`Content`}},options:{control:`object`,description:`Array of options to display, each with a value, label, and optional disabled`,table:{type:{summary:`RadioGroupOption[]`},category:`Content`}},orientation:{control:`select`,options:[`vertical`,`horizontal`],description:`Layout orientation of the options`,table:{type:{summary:`'vertical' | 'horizontal'`},defaultValue:{summary:`vertical`},category:`Styling`}},className:{control:`text`,description:`Additional CSS class for the radio group wrapper`,table:{type:{summary:`string`},defaultValue:{summary:`undefined`},category:`Styling`}},style:{control:`object`,description:`Inline styles for the radio group wrapper`,table:{type:{summary:`CSSProperties`},defaultValue:{summary:`undefined`},category:`Styling`}},defaultValue:{control:`text`,description:`Initial selected value (stateful mode)`,table:{type:{summary:`string`},category:`State`}},value:{control:`text`,description:`The externally controlled selected value (used when stateless is true)`,table:{type:{summary:`string`},category:`State`}},disabled:{control:`boolean`,description:`Whether the entire group is disabled`,table:{type:{summary:`boolean`},category:`State`}},isLoading:{control:`boolean`,description:`Whether the group is in a loading state`,table:{type:{summary:`boolean`},category:`State`}},stateless:{control:`boolean`,description:`When true, the group is stateless and controlled externally via the value prop`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`},category:`Behavior`}},onChange:{description:`Callback when the selection changes, receives the selected value`,table:{type:{summary:`(value: string) => void`},category:`Behavior`}},required:{control:`boolean`,description:`Whether a selection is required`,table:{type:{summary:`boolean`},category:`Validation`}},name:{control:`text`,description:`Name attribute shared by the radio inputs`,table:{type:{summary:`string`},category:`Identification`}},id:{control:`text`,description:`The unique ID for the group (auto-generated from name if not provided)`,table:{type:{summary:`string`},defaultValue:{summary:`undefined`},category:`Identification`}}}},u=[{value:`small`,label:`Small`},{value:`medium`,label:`Medium`},{value:`large`,label:`Large`}],d={args:{name:`size`,label:`Select a size`,options:u,orientation:`vertical`,defaultValue:`medium`,disabled:!1,required:!1}},f={args:{name:`size`,label:`Select a size`,options:u,orientation:`horizontal`,defaultValue:`small`}},p={args:{name:`size`,label:`Select a size`,options:u,defaultValue:`large`}},m={args:{name:`size`,label:`Select a size`,options:u,defaultValue:`medium`,disabled:!0}},h={args:{name:`size`,label:`Select a size`,options:[{value:`small`,label:`Small`},{value:`medium`,label:`Medium`,disabled:!0},{value:`large`,label:`Large`}],defaultValue:`small`}},g=[`Default`,`Horizontal`,`WithDefaultValue`,`Disabled`,`IndividualDisabledOption`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'size',
    label: 'Select a size',
    options: SIZE_OPTIONS,
    orientation: 'vertical',
    defaultValue: 'medium',
    disabled: false,
    required: false
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'size',
    label: 'Select a size',
    options: SIZE_OPTIONS,
    orientation: 'horizontal',
    defaultValue: 'small'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'size',
    label: 'Select a size',
    options: SIZE_OPTIONS,
    defaultValue: 'large'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'size',
    label: 'Select a size',
    options: SIZE_OPTIONS,
    defaultValue: 'medium',
    disabled: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'size',
    label: 'Select a size',
    options: [{
      value: 'small',
      label: 'Small'
    }, {
      value: 'medium',
      label: 'Medium',
      disabled: true
    }, {
      value: 'large',
      label: 'Large'
    }],
    defaultValue: 'small'
  }
}`,...h.parameters?.docs?.source}}}})))()}export{_ as n,c as t};