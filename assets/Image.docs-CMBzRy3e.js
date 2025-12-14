var l=Object.defineProperty,m=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var r=(i,e,s)=>e in i?l(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s,t=(i,e)=>{for(var s in e||(e={}))h.call(e,s)&&r(i,s,e[s]);if(a)for(var s of a(e))x.call(e,s)&&r(i,s,e[s]);return i},o=(i,e)=>m(i,d(e));import{j as n}from"./iframe-BBnnbBfy.js";import{useMDXComponents as c}from"./index-Cc_5Bw9t.js";import{M as g,b as j}from"./blocks-BqYnnMm3.js";import{I as u}from"./Image.stories-Lwud_Yfo.js";import"./preload-helper-BDBacUwf.js";import"./index-SbOQj9hQ.js";import"./index-DEQMa67G.js";import"./get-class-name-BY88G7uf.js";import"./Icon-D3WKOnh1.js";function p(i){const e=t(t({code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre"},c()),i.components);return n.jsxs(n.Fragment,{children:[n.jsx(g,{of:u,title:"Image"}),`
`,n.jsx(e.h1,{id:"image",children:"Image"}),`
`,n.jsx(e.p,{children:"A responsive and accessible image component that supports multiple source sets, aspect ratio control, lazy loading, and comprehensive error handling for optimal performance and user experience."}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Image } from './Image';

// Basic image with lazy loading
<Image
  src="https://example.com/image.jpg"
  alt="Descriptive alt text"
  width="400"
  height="300"
/>

// Image with caption and aspect ratio
<Image
  src="https://example.com/photo.jpg"
  alt="Beautiful landscape"
  caption="Sunset over the mountains"
  aspectRatio="16/9"
/>

// Responsive image with multiple sources
<Image
  src="https://example.com/large.jpg"
  alt="Responsive image example"
  sources={[
    {
      src: 'https://example.com/small.jpg',
      descriptor: '400w',
      media: '(max-width: 480px)',
    },
    {
      src: 'https://example.com/medium.jpg',
      descriptor: '800w',
      media: '(max-width: 1024px)',
    }
  ]}
  sizes="(max-width: 480px) 400px, (max-width: 1024px) 800px, 1200px"
/>
`})}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Accessibility"}),": Always provide meaningful alt text unless the image is purely decorative (use decorative=true and empty alt in that case)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Performance"}),': Use loading="lazy" for below-the-fold images and decoding="async" for non-critical images']}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Responsive Images"}),": Utilize the sources prop with appropriate media queries and descriptors for different screen sizes"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Aspect Ratios"}),": Use the aspectRatio prop to maintain consistent proportions and prevent layout shifts"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Error Handling"}),": Implement onError callbacks to handle broken images gracefully with fallback content"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"Captions"}),": Use the caption prop to provide additional context when needed"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"File Optimization"}),": Serve images in modern formats (WebP, AVIF) when possible and appropriate sizes for each breakpoint"]}),`
`]}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(j,{})]})}function C(i={}){const{wrapper:e}=t(t({},c()),i.components);return e?n.jsx(e,o(t({},i),{children:n.jsx(p,t({},i))})):p(i)}export{C as default};
