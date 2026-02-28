import{E as t}from"./ErrorMessage-Bcx3cAYD.js";const r={title:"Atoms/ErrorMessage",component:t,argTypes:{message:{control:"text",description:"The error message text to display",table:{type:{summary:"string"},category:"Content"}},visible:{control:"boolean",description:"Controls whether the error message is visible",table:{type:{summary:"boolean"},category:"State"}},className:{control:"text",description:"Additional CSS class names for custom styling",table:{type:{summary:"string"},category:"Styling"}},errorId:{control:"text",description:"Unique ID for the error message, used for accessibility with aria-describedby",table:{type:{summary:"string"},category:"Accessibility"}},testId:{control:"text",description:"Test ID used for automated testing",table:{type:{summary:"string"},category:"Testing"}}}},e={args:{errorId:"error-id",visible:!0,message:"Incorrect value",testId:"test-id",className:"test-class"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    errorId: 'error-id',
    visible: true,
    message: 'Incorrect value',
    testId: 'test-id',
    className: 'test-class'
  }
}`,...e.parameters?.docs?.source}}};const s=["Default"],a=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:s,default:r},Symbol.toStringTag,{value:"Module"}));export{a as E};
