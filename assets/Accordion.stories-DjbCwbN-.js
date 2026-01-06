var v=Object.defineProperty,N=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var g=(e,t,n)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,o=(e,t)=>{for(var n in t||(t={}))q.call(t,n)&&g(e,n,t[n]);if(y)for(var n of y(t))w.call(t,n)&&g(e,n,t[n]);return e},a=(e,t)=>N(e,k(t));import{j as s}from"./iframe-C2ng--48.js";import{g as j}from"./get-class-name-BY88G7uf.js";import{a as V,I as L}from"./Icon-Fv1_a00z.js";const T="_accordion_b776v_1",D={accordion:T},P="_details_6n14v_2",E="_details_summary_6n14v_6",R="_details_content_6n14v_44",H="_details_icon_6n14v_67",l={details:P,details_summary:E,details_content:R,details_icon:H},m=({summary:e,children:t})=>s.jsxs("details",{className:l.details,children:[s.jsxs("summary",{className:l.details_summary,children:[e,s.jsx(V,{name:L.ChevronDown,className:l.details_icon,"aria-label":"Toggle Details",testId:"accordion-icon"})]}),s.jsx("div",{className:l.details_content,children:t})]});try{m.displayName="AccordionItem",m.__docgenInfo={description:"",displayName:"AccordionItem",props:{summary:{defaultValue:null,description:"",name:"summary",required:!0,type:{name:"string"}}}}}catch(e){}const d=({items:e,className:t})=>{const n=j([D.accordion,t]);return s.jsx("div",{className:n,children:e.map(u=>s.jsx(m,o({},u),u.summary))})};try{d.displayName="Accordion",d.__docgenInfo={description:"",displayName:"Accordion",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"AccordionItemProps[]"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch(e){}const p=e=>s.jsx(d,o({},e));try{p.displayName="AccordionExample",p.__docgenInfo={description:"",displayName:"AccordionExample",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"AccordionItemProps[]"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch(e){}const M={component:p,title:"Molecules/Accordion",argTypes:{items:{control:"object",description:"Array of accordion items with summary and children content",table:{type:{summary:"AccordionItemProps[]"},category:"Content"}},className:{control:"text",description:"Additional CSS class names for custom styling",table:{type:{summary:"string"},category:"Styling"}},style:{control:"object",description:"Inline CSS styles to apply to the accordion",table:{type:{summary:"CSSProperties"},category:"Styling"}},tabIndex:{control:"number",description:"Tab index for keyboard navigation",table:{type:{summary:"number"},category:"Accessibility"}},id:{control:"text",description:"Unique identifier for the breadcrumbs",table:{type:{summary:"string"},category:"Identification"}},title:{control:"text",description:"Title attribute for the breadcrumbs container",table:{type:{summary:"string"},category:"Identification"}}}},i={args:{items:[{summary:"What is Chop Logic?",children:"Chop Logic Components is a React component library that provides reusable, accessible, and customizable components following the Atomic Design methodology."},{summary:"How do I install it?",children:"You can install Chop Logic Components using npm: npm install chop-logic-components"},{summary:"Is it accessible?",children:"Yes, all components in Chop Logic are built with accessibility in mind, including proper ARIA attributes and keyboard navigation support."}]}},r={args:{items:[{summary:"Getting Started",children:"To get started with Chop Logic, install the package and import the components you need. Check the documentation for detailed examples."}]}},c={args:{items:[{summary:"Features",children:"Chop Logic provides a comprehensive set of components including atoms, molecules, and organisms for building complex UIs."},{summary:"Theming",children:"Components support dynamic theming with CSS variables and built-in theme modes (light/dark)."},{summary:"Hooks",children:"A collection of custom hooks is available to manage component logic and interactions."},{summary:"Styling",children:"All components use SCSS modules with support for responsive design and accessible styling patterns."},{summary:"Documentation",children:"Comprehensive Storybook documentation and examples are available for all components."}]}};var h,b,_;i.parameters=a(o({},i.parameters),{docs:a(o({},(h=i.parameters)==null?void 0:h.docs),{source:o({originalSource:`{
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
}`},(_=(b=i.parameters)==null?void 0:b.docs)==null?void 0:_.source)})});var f,S,C;r.parameters=a(o({},r.parameters),{docs:a(o({},(f=r.parameters)==null?void 0:f.docs),{source:o({originalSource:`{
  args: {
    items: [{
      summary: 'Getting Started',
      children: 'To get started with Chop Logic, install the package and import the components you need. Check the documentation for detailed examples.'
    }]
  }
}`},(C=(S=r.parameters)==null?void 0:S.docs)==null?void 0:C.source)})});var I,A,x;c.parameters=a(o({},c.parameters),{docs:a(o({},(I=c.parameters)==null?void 0:I.docs),{source:o({originalSource:`{
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
      children: 'All components use SCSS modules with support for responsive design and accessible styling patterns.'
    }, {
      summary: 'Documentation',
      children: 'Comprehensive Storybook documentation and examples are available for all components.'
    }]
  }
}`},(x=(A=c.parameters)==null?void 0:A.docs)==null?void 0:x.source)})});const Y=["DefaultAccordion","SingleItem","MultipleItems"],G=Object.freeze(Object.defineProperty({__proto__:null,DefaultAccordion:i,MultipleItems:c,SingleItem:r,__namedExportsOrder:Y,default:M},Symbol.toStringTag,{value:"Module"}));export{G as A};
