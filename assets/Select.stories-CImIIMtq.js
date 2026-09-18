import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-BeFlW_HA.js";import"./ResponsiveWrapper-Ms0iAAgh.js";import{n as r,t as i}from"./Select-DvqoznQ8.js";var a,o;function s(){return(s=e((()=>{r(),a=n(),o=e=>(0,a.jsx)(i,{...e,className:`responsiveWrapper`});try{o.displayName=`SelectExample`,o.__docgenInfo={description:``,displayName:`SelectExample`,filePath:`/home/runner/work/chop-logic-components/chop-logic-components/src/components/molecules/select/__docs__/Select.example.tsx`,methods:[],props:{options:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/select.ts`,name:`SelectProps`}],description:``,name:`options`,parent:{fileName:`chop-logic-components/src/types/select.ts`,name:`SelectProps`},required:!0,tags:{},type:{name:`SelectValue[]`}},onChange:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/select.ts`,name:`SelectProps`}],description:``,name:`onChange`,parent:{fileName:`chop-logic-components/src/types/select.ts`,name:`SelectProps`},required:!1,tags:{},type:{name:`((value?: SelectValue) => void)`}},placeholder:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/select.ts`,name:`SelectProps`}],description:``,name:`placeholder`,parent:{fileName:`chop-logic-components/src/types/select.ts`,name:`SelectProps`},required:!1,tags:{},type:{name:`string`}},defaultValue:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/select.ts`,name:`SelectProps`}],description:``,name:`defaultValue`,parent:{fileName:`chop-logic-components/src/types/select.ts`,name:`SelectProps`},required:!1,tags:{},type:{name:`string | number | readonly string[]`}},label:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`}],description:``,name:`label`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`},required:!0,tags:{},type:{name:`string`}},name:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`}],description:``,name:`name`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`},required:!0,tags:{},type:{name:`string`}},disabled:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`}],description:``,name:`disabled`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`},required:!1,tags:{},type:{name:`boolean`}},required:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`}],description:``,name:`required`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`},required:!1,tags:{},type:{name:`boolean`}},stateless:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`}],description:``,name:`stateless`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`},required:!1,tags:{},type:{name:`boolean`}},value:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`}],description:``,name:`value`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`},required:!1,tags:{},type:{name:`string | number | readonly string[]`}},isLoading:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`}],description:``,name:`isLoading`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicInputProps`},required:!1,tags:{},type:{name:`boolean`}},id:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`id`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`className`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`style`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`CSSProperties`}},tabIndex:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`tabIndex`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`number`}},title:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`title`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})))()}var c=t({Default:()=>u,Disabled:()=>p,Loading:()=>m,ManyOptions:()=>h,Required:()=>f,WithDefaultValue:()=>d,__namedExportsOrder:()=>g,default:()=>l}),l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{s(),l={component:o,title:`Molecules/Select`,argTypes:{label:{control:`text`,description:`Label text displayed above the select. Required for accessibility.`,table:{type:{summary:`string`},category:`Content`}},placeholder:{control:`text`,description:`Placeholder text shown when no option is selected`,table:{type:{summary:`string`},defaultValue:{summary:`"Not selected"`},category:`Content`}},options:{control:`object`,description:"Array of available options. Each option must have `id` and `label` properties.",table:{type:{summary:`SelectValue[]`},category:`Content`}},defaultValue:{control:`text`,description:`Initial selected value ID. Can be a string matching an option ID, or used with form context.`,table:{type:{summary:`string | number | readonly string[]`},category:`Content`}},disabled:{control:`boolean`,description:`Disables the select, preventing user interaction`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`},category:`State`}},isLoading:{control:`boolean`,description:`Shows loading state with shimmer animation. Disables interaction while loading.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`},category:`State`}},required:{control:`boolean`,description:`Marks the field as required. Adds visual indicator and sets aria-required.`,table:{type:{summary:`boolean`},defaultValue:{summary:`false`},category:`Validation`}},onChange:{action:`changed`,description:`Callback fired when the selected value changes. Receives the selected option.`,table:{type:{summary:`(value?: SelectValue) => void`},category:`Interaction`}},className:{control:`text`,description:`Additional CSS class for custom styling`,table:{type:{summary:`string`},category:`Styling`}},style:{control:`object`,description:`Inline styles for the select wrapper`,table:{type:{summary:`CSSProperties`},category:`Styling`}},id:{control:`text`,description:`Unique identifier. Auto-generated if not provided.`,table:{type:{summary:`string`},category:`Identification`}},name:{control:`text`,description:`Name attribute for form submission. Required prop.`,table:{type:{summary:`string`},category:`Identification`}},tabIndex:{control:`number`,description:`Tab index for keyboard navigation`,table:{type:{summary:`number`},category:`HTML Attributes`}},title:{control:`text`,description:`Title attribute for the select wrapper`,table:{type:{summary:`string`},category:`HTML Attributes`}}},args:{label:`Select your language`,options:[{id:`57b5a856-bc4b-4c2f-8295-9f44434fafc7`,label:`English`},{id:`b4b08a09-e287-400b-ba65-afd6ae1f6fd7`,label:`Russian`},{id:`641fc722-af5a-4426-8f8a-1566cc492b91`,label:`German`},{id:`a1c2d3e4-f5g6-7h8i-9j0k-l1m2n3o4p5q6`,label:`French`},{id:`b2c3d4e5-f6g7-8h9i-0j1k-l2m3n4o5p6q7`,label:`Spanish`}],name:`language`,placeholder:`Select a language`,required:!1,disabled:!1,isLoading:!1}},u={args:{id:`default-select`},parameters:{docs:{description:{story:`Default select component with standard configuration.`}}}},d={args:{id:`preselected-select`,defaultValue:`b4b08a09-e287-400b-ba65-afd6ae1f6fd7`},parameters:{docs:{description:{story:"Select with a pre-selected value. The `defaultValue` should match an option ID."}}}},f={args:{id:`required-select`,required:!0,label:`Preferred language`},parameters:{docs:{description:{story:'Required select field. Shows a visual indicator and sets `aria-required="true"` for accessibility.'}}}},p={args:{id:`disabled-select`,disabled:!0,defaultValue:`57b5a856-bc4b-4c2f-8295-9f44434fafc7`},parameters:{docs:{description:{story:`Disabled select that cannot be interacted with. Useful for read-only scenarios.`}}}},m={args:{id:`loading-select`,isLoading:!0},parameters:{docs:{description:{story:`Loading state with shimmer animation. The dropdown cannot be opened while loading. Use this when fetching options asynchronously.`}}}},h={args:{id:`many-options-select`,label:`Select a country`,name:`country`,placeholder:`Choose your country`,options:[{id:`us`,label:`United States`},{id:`ca`,label:`Canada`},{id:`mx`,label:`Mexico`},{id:`uk`,label:`United Kingdom`},{id:`de`,label:`Germany`},{id:`fr`,label:`France`},{id:`es`,label:`Spain`},{id:`it`,label:`Italy`},{id:`jp`,label:`Japan`},{id:`cn`,label:`China`},{id:`au`,label:`Australia`},{id:`br`,label:`Brazil`}]},parameters:{docs:{description:{story:`Select with many options. Use keyboard navigation (Arrow keys, Home, End) to efficiently navigate long lists.`}}}},g=[`Default`,`WithDefaultValue`,`Required`,`Disabled`,`Loading`,`ManyOptions`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'default-select'
  },
  parameters: {
    docs: {
      description: {
        story: 'Default select component with standard configuration.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'preselected-select',
    defaultValue: 'b4b08a09-e287-400b-ba65-afd6ae1f6fd7'
  },
  parameters: {
    docs: {
      description: {
        story: 'Select with a pre-selected value. The \`defaultValue\` should match an option ID.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'required-select',
    required: true,
    label: 'Preferred language'
  },
  parameters: {
    docs: {
      description: {
        story: 'Required select field. Shows a visual indicator and sets \`aria-required="true"\` for accessibility.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'disabled-select',
    disabled: true,
    defaultValue: '57b5a856-bc4b-4c2f-8295-9f44434fafc7'
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled select that cannot be interacted with. Useful for read-only scenarios.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'loading-select',
    isLoading: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading state with shimmer animation. The dropdown cannot be opened while loading. Use this when fetching options asynchronously.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'many-options-select',
    label: 'Select a country',
    name: 'country',
    placeholder: 'Choose your country',
    options: [{
      id: 'us',
      label: 'United States'
    }, {
      id: 'ca',
      label: 'Canada'
    }, {
      id: 'mx',
      label: 'Mexico'
    }, {
      id: 'uk',
      label: 'United Kingdom'
    }, {
      id: 'de',
      label: 'Germany'
    }, {
      id: 'fr',
      label: 'France'
    }, {
      id: 'es',
      label: 'Spain'
    }, {
      id: 'it',
      label: 'Italy'
    }, {
      id: 'jp',
      label: 'Japan'
    }, {
      id: 'cn',
      label: 'China'
    }, {
      id: 'au',
      label: 'Australia'
    }, {
      id: 'br',
      label: 'Brazil'
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'Select with many options. Use keyboard navigation (Arrow keys, Home, End) to efficiently navigate long lists.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}}})))()}export{_ as n,c as t};