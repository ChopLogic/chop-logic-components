import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-CMulKWTX.js";import"./ResponsiveWrapper-Ms0iAAgh.js";import{n as r,t as i}from"./MultiSelect-BA9dCy9q.js";var a,o;function s(){return(s=e((()=>{r(),a=n(),o=e=>(0,a.jsx)(i,{...e,className:`responsiveWrapper`});try{o.displayName=`MultiSelectExample`,o.__docgenInfo={description:``,displayName:`MultiSelectExample`,filePath:`/home/runner/work/chop-logic-components/chop-logic-components/src/components/molecules/multi-select/__docs__/MultiSelect.example.tsx`,methods:[],props:{options:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/multi-select.ts`,name:`MultiSelectProps`}],description:``,name:`options`,parent:{fileName:`chop-logic-components/src/types/multi-select.ts`,name:`MultiSelectProps`},required:!0,tags:{},type:{name:`SelectValue[]`}},onChange:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/multi-select.ts`,name:`MultiSelectProps`}],description:``,name:`onChange`,parent:{fileName:`chop-logic-components/src/types/multi-select.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`((values?: SelectValue[]) => void)`}},defaultValue:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/multi-select.ts`,name:`MultiSelectProps`}],description:``,name:`defaultValue`,parent:{fileName:`chop-logic-components/src/types/multi-select.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`string | number | readonly string[]`}},placeholder:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/multi-select.ts`,name:`MultiSelectProps`}],description:``,name:`placeholder`,parent:{fileName:`chop-logic-components/src/types/multi-select.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`string`}},label:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`}],description:``,name:`label`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`},required:!0,tags:{},type:{name:`string`}},name:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`}],description:``,name:`name`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`},required:!0,tags:{},type:{name:`string`}},disabled:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`}],description:``,name:`disabled`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`},required:!1,tags:{},type:{name:`boolean`}},required:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`}],description:``,name:`required`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`},required:!1,tags:{},type:{name:`boolean`}},stateless:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`}],description:``,name:`stateless`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`},required:!1,tags:{},type:{name:`boolean`}},value:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`}],description:``,name:`value`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`},required:!1,tags:{},type:{name:`string | number | readonly string[]`}},isLoading:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`}],description:``,name:`isLoading`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`},required:!1,tags:{},type:{name:`boolean`}},id:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`id`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`className`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`style`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`CSSProperties`}},tabIndex:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`tabIndex`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`number`}},title:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`title`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var c=t({Default:()=>u,Disabled:()=>f,Loading:()=>p,ManyOptions:()=>m,Required:()=>d,__namedExportsOrder:()=>h,default:()=>l}),l,u,d,f,p,m,h;function g(){return(g=e((()=>{s(),l={component:o,title:`Molecules/MultiSelect`,argTypes:{label:{control:`text`,description:`Label text displayed above the multi-select. Required for accessibility.`,table:{type:{summary:`string`},category:`Content`}},placeholder:{control:`text`,description:`Placeholder text shown when no options are selected`,table:{type:{summary:`string`},defaultValue:{summary:`"Not selected"`},category:`Content`}},options:{control:`object`,description:"Array of available options. Each option must have `id` and `label` properties.",table:{type:{summary:`SelectValue[]`},category:`Content`}},defaultValue:{control:`text`,description:`Initial selected value ID(s). Used with form context.`,table:{type:{summary:`string | number | readonly string[]`},category:`Content`}},disabled:{control:`boolean`,description:`Disables the multi-select, preventing user interaction`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`},category:`State`}},isLoading:{control:`boolean`,description:`Shows loading state with shimmer animation. Disables interaction while loading.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`},category:`State`}},required:{control:`boolean`,description:`Marks the field as required. Adds visual indicator and sets aria-required.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`},category:`Validation`}},onChange:{action:`changed`,description:`Callback fired when selection changes. Receives array of all currently selected options.`,table:{type:{summary:`(values?: SelectValue[]) => void`},category:`Interaction`}},className:{control:`text`,description:`Additional CSS class for custom styling`,table:{type:{summary:`string`},category:`Styling`}},style:{control:`object`,description:`Inline styles for the multi-select wrapper`,table:{type:{summary:`CSSProperties`},category:`Styling`}},id:{control:`text`,description:`Unique identifier. Auto-generated if not provided.`,table:{type:{summary:`string`},category:`Identification`}},name:{control:`text`,description:`Name attribute for form submission. Required prop.`,table:{type:{summary:`string`},category:`Identification`}},tabIndex:{control:`number`,description:`Tab index for keyboard navigation`,table:{type:{summary:`number`},category:`HTML Attributes`}},title:{control:`text`,description:`Title attribute for the multi-select wrapper`,table:{type:{summary:`string`},category:`HTML Attributes`}}},args:{label:`Select languages`,options:[{id:`57b5a856-bc4b-4c2f-8295-9f44434fafc7`,label:`English`},{id:`583e8b60-0177-4e38-a423-4b1d5d0a2236`,label:`Spanish`},{id:`b20bea7b-8172-4d12-b172-d5feac02d863`,label:`French`},{id:`641fc722-af5a-4426-8f8a-1566cc492b91`,label:`German`},{id:`a1b2c3d4-e5f6-7890-abcd-ef1234567890`,label:`Italian`},{id:`b2c3d4e5-f6a7-8901-bcde-f12345678901`,label:`Portuguese`}],name:`languages`,placeholder:`Select languages`,required:!1,disabled:!1,isLoading:!1}},u={args:{id:`default-multiselect`},parameters:{docs:{description:{story:`Default multi-select component with standard configuration.`}}}},d={args:{id:`required-multiselect`,required:!0,label:`Preferred languages`},parameters:{docs:{description:{story:'Required multi-select field. Shows a visual indicator and sets `aria-required="true"` for accessibility.'}}}},f={args:{id:`disabled-multiselect`,disabled:!0},parameters:{docs:{description:{story:`Disabled multi-select that cannot be interacted with. Useful for read-only scenarios.`}}}},p={args:{id:`loading-multiselect`,isLoading:!0},parameters:{docs:{description:{story:`Loading state with shimmer animation. The dropdown cannot be opened while loading. Use this when fetching options asynchronously.`}}}},m={args:{id:`many-options-multiselect`,label:`Select skills`,name:`skills`,placeholder:`Choose your skills`,options:[{id:`js`,label:`JavaScript`},{id:`ts`,label:`TypeScript`},{id:`react`,label:`React`},{id:`vue`,label:`Vue`},{id:`angular`,label:`Angular`},{id:`node`,label:`Node.js`},{id:`python`,label:`Python`},{id:`java`,label:`Java`},{id:`csharp`,label:`C#`},{id:`go`,label:`Go`},{id:`rust`,label:`Rust`},{id:`sql`,label:`SQL`}]},parameters:{docs:{description:{story:`Multi-select with many options. Use keyboard navigation (Arrow keys, Home, End) to efficiently navigate long lists.`}}}},h=[`Default`,`Required`,`Disabled`,`Loading`,`ManyOptions`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'default-multiselect'
  },
  parameters: {
    docs: {
      description: {
        story: 'Default multi-select component with standard configuration.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'required-multiselect',
    required: true,
    label: 'Preferred languages'
  },
  parameters: {
    docs: {
      description: {
        story: 'Required multi-select field. Shows a visual indicator and sets \`aria-required="true"\` for accessibility.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'disabled-multiselect',
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled multi-select that cannot be interacted with. Useful for read-only scenarios.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'loading-multiselect',
    isLoading: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading state with shimmer animation. The dropdown cannot be opened while loading. Use this when fetching options asynchronously.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'many-options-multiselect',
    label: 'Select skills',
    name: 'skills',
    placeholder: 'Choose your skills',
    options: [{
      id: 'js',
      label: 'JavaScript'
    }, {
      id: 'ts',
      label: 'TypeScript'
    }, {
      id: 'react',
      label: 'React'
    }, {
      id: 'vue',
      label: 'Vue'
    }, {
      id: 'angular',
      label: 'Angular'
    }, {
      id: 'node',
      label: 'Node.js'
    }, {
      id: 'python',
      label: 'Python'
    }, {
      id: 'java',
      label: 'Java'
    }, {
      id: 'csharp',
      label: 'C#'
    }, {
      id: 'go',
      label: 'Go'
    }, {
      id: 'rust',
      label: 'Rust'
    }, {
      id: 'sql',
      label: 'SQL'
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'Multi-select with many options. Use keyboard navigation (Arrow keys, Home, End) to efficiently navigate long lists.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}}})))()}export{g as n,c as t};