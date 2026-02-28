import{j as e}from"./iframe-Doc73XE3.js";import{useMDXComponents as t}from"./index-BeVWJvHh.js";import{M as a,C as r}from"./blocks-B9t17XrR.js";import{I as o}from"./Image.stories-CaYYxwmM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ECW4Oirl.js";import"./index-CyugzvtL.js";import"./get-class-name-BY88G7uf.js";import"./Icon-DTjVTp_9.js";import"./icon-name-DofyCo9k.js";function s(i){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:o,title:"Image"}),`
`,e.jsx(n.h1,{id:"image",children:"Image"}),`
`,e.jsx(n.p,{children:"A responsive and accessible image component that supports multiple source sets, aspect ratio control, lazy loading, and comprehensive error handling for optimal performance and user experience."}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Image } from './Image';

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
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Accessibility"}),": Always provide meaningful alt text unless the image is purely decorative (use decorative=true and empty alt in that case)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Performance"}),': Use loading="lazy" for below-the-fold images and decoding="async" for non-critical images']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Responsive Images"}),": Utilize the sources prop with appropriate media queries and descriptors for different screen sizes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Aspect Ratios"}),": Use the aspectRatio prop to maintain consistent proportions and prevent layout shifts"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Error Handling"}),": Implement onError callbacks to handle broken images gracefully with fallback content"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"Captions"}),": Use the caption prop to provide additional context when needed"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.em,{children:"File Optimization"}),": Serve images in modern formats (WebP, AVIF) when possible and appropriate sizes for each breakpoint"]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(r,{})]})}function f(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{f as default};
