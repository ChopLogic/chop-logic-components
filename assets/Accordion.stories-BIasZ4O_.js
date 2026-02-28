import{j as n}from"./iframe-DP4TfwvB.js";import{g as d}from"./get-class-name-BY88G7uf.js";import{I as p,E as u}from"./Icon-DgdWz_xl.js";import{I as y}from"./icon-name-DofyCo9k.js";const s=({summary:e,children:i})=>n.jsxs("details",{className:"cl-accordion-item",children:[n.jsxs("summary",{className:"cl-accordion-item__summary",children:[e,n.jsx(p,{name:y.ChevronDown,className:"cl-accordion-item__icon","aria-label":"Toggle Details",testId:"accordion-icon",size:u.Small})]}),n.jsx("div",{className:"cl-accordion-item__content",children:i})]});try{s.displayName="AccordionItem",s.__docgenInfo={description:"",displayName:"AccordionItem",props:{summary:{defaultValue:null,description:"",name:"summary",required:!0,type:{name:"string"}}}}}catch{}const r=({items:e,className:i})=>{const m=d(["cl-accordion",i]);return n.jsx("div",{className:m,children:e.map(l=>n.jsx(s,{...l},l.summary))})};try{r.displayName="Accordion",r.__docgenInfo={description:"",displayName:"Accordion",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"AccordionItemProps[]"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const c=e=>n.jsx(r,{...e});try{c.displayName="AccordionExample",c.__docgenInfo={description:"",displayName:"AccordionExample",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"AccordionItemProps[]"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const g={component:c,title:"Molecules/Accordion",argTypes:{items:{control:"object",description:"Array of accordion items with summary and children content",table:{type:{summary:"AccordionItemProps[]"},category:"Content"}},className:{control:"text",description:"Additional CSS class names for custom styling",table:{type:{summary:"string"},category:"Styling"}},style:{control:"object",description:"Inline CSS styles to apply to the accordion",table:{type:{summary:"CSSProperties"},category:"Styling"}},tabIndex:{control:"number",description:"Tab index for keyboard navigation",table:{type:{summary:"number"},category:"Accessibility"}},id:{control:"text",description:"Unique identifier for the breadcrumbs",table:{type:{summary:"string"},category:"Identification"}},title:{control:"text",description:"Title attribute for the breadcrumbs container",table:{type:{summary:"string"},category:"Identification"}}}},t={args:{items:[{summary:"What is Chop Logic?",children:"Chop Logic Components is a React component library that provides reusable, accessible, and customizable components following the Atomic Design methodology."},{summary:"How do I install it?",children:"You can install Chop Logic Components using npm: npm install chop-logic-components"},{summary:"Is it accessible?",children:"Yes, all components in Chop Logic are built with accessibility in mind, including proper ARIA attributes and keyboard navigation support."}]}},o={args:{items:[{summary:"Getting Started",children:"To get started with Chop Logic, install the package and import the components you need. Check the documentation for detailed examples."}]}},a={args:{items:[{summary:"Features",children:"Chop Logic provides a comprehensive set of components including atoms, molecules, and organisms for building complex UIs."},{summary:"Theming",children:"Components support dynamic theming with CSS variables and built-in theme modes (light/dark)."},{summary:"Hooks",children:"A collection of custom hooks is available to manage component logic and interactions."},{summary:"Styling",children:"All components use BEM CSS with support for responsive design and accessible styling patterns."},{summary:"Documentation",children:"Comprehensive Storybook documentation and examples are available for all components."}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      summary: 'What is Chop Logic?',
      children: 'Chop Logic Components is a React component library that provides reusable, accessible, and customizable components following the Atomic Design methodology.'
    }, {
      summary: 'How do I install it?',
      children: 'You can install Chop Logic Components using npm: npm install chop-logic-components'
    }, {
      summary: 'Is it accessible?',
      children: 'Yes, all components in Chop Logic are built with accessibility in mind, including proper ARIA attributes and keyboard navigation support.'
    }]
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      summary: 'Getting Started',
      children: 'To get started with Chop Logic, install the package and import the components you need. Check the documentation for detailed examples.'
    }]
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      summary: 'Features',
      children: 'Chop Logic provides a comprehensive set of components including atoms, molecules, and organisms for building complex UIs.'
    }, {
      summary: 'Theming',
      children: 'Components support dynamic theming with CSS variables and built-in theme modes (light/dark).'
    }, {
      summary: 'Hooks',
      children: 'A collection of custom hooks is available to manage component logic and interactions.'
    }, {
      summary: 'Styling',
      children: 'All components use BEM CSS with support for responsive design and accessible styling patterns.'
    }, {
      summary: 'Documentation',
      children: 'Comprehensive Storybook documentation and examples are available for all components.'
    }]
  }
}`,...a.parameters?.docs?.source}}};const h=["DefaultAccordion","SingleItem","MultipleItems"],C=Object.freeze(Object.defineProperty({__proto__:null,DefaultAccordion:t,MultipleItems:a,SingleItem:o,__namedExportsOrder:h,default:g},Symbol.toStringTag,{value:"Module"}));export{C as A};
