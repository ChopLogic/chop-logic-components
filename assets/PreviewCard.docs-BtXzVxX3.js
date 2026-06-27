import{i as e}from"./preload-helper-CT_b8DTk.js";import{n as t}from"./iframe-DO3n-0Jb.js";import{C as n,a as r,d as i,u as a}from"./blocks-uoxeo9Yp.js";import{t as o}from"./mdx-react-shim-D7gSKTRi.js";import{n as s,t as c}from"./PreviewCard.stories-Cplq-sAX.js";function l(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a,{of:c,title:`PreviewCard`}),`
`,(0,d.jsx)(t.h1,{id:`previewcard`,children:`PreviewCard`}),`
`,(0,d.jsxs)(t.p,{children:[`The `,(0,d.jsx)(t.code,{children:`PreviewCard`}),` is an organism component that displays an article or external resource preview in a card layout. It composes the `,(0,d.jsx)(t.code,{children:`Avatar`}),` and `,(0,d.jsx)(t.code,{children:`Tag`}),` atom components along with the existing `,(0,d.jsx)(t.code,{children:`Image`}),` atom to present a rich content summary including an image, title, summary text, a list of authors, and keyword tags.`]}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { PreviewCard } from "chop-logic-components";

const ArticlePreview = () => {
  return (
    <PreviewCard
      link="https://example.com/article"
      image={{ src: "/images/article.jpg", alt: "Article cover" }}
      title="Building Accessible Component Libraries"
      summary="A guide to creating reusable, accessible React components."
      authors={[
        { id: "1", name: "Jane Smith", email: "jane@example.com", imageUrl: "/avatars/jane.jpg", link: "https://example.com/jane" },
        { id: "2", name: "John Doe", email: "john@example.com", imageUrl: "/avatars/john.jpg" },
      ]}
      tags={[
        { id: "1", name: "React", color: "#61DAFB", tooltip: "A JavaScript library for building UIs" },
        { id: "2", name: "TypeScript", color: "#3178C6" },
      ]}
    />
  );
};
`})}),`
`,(0,d.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,d.jsx)(t.p,{children:`PreviewCard composes the following components:`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Image`}),` (atom) — renders the card header image with responsive behavior and fallback`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Avatar`}),` (atom) — renders each author as a circular image with optional link and fallback letter`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:`Tag`}),` (atom) — renders each tag as an inline label with optional tooltip and custom color`]}),`
`]}),`
`,(0,d.jsxs)(t.p,{children:[`The card renders these sections in order: image link, title (`,(0,d.jsx)(t.code,{children:`h3`}),`), optional summary (`,(0,d.jsx)(t.code,{children:`p`}),`), optional authors list (`,(0,d.jsx)(t.code,{children:`ul`}),`), and optional tags list (`,(0,d.jsx)(t.code,{children:`ul`}),`). When `,(0,d.jsx)(t.code,{children:`authors`}),` or `,(0,d.jsx)(t.code,{children:`tags`}),` arrays are empty, their respective sections are omitted entirely.`]}),`
`,(0,d.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Content`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`Provide a meaningful `,(0,d.jsx)(t.code,{children:`title`}),` for both visual display and accessibility`]}),`
`,(0,d.jsxs)(t.li,{children:[`Use descriptive `,(0,d.jsx)(t.code,{children:`alt`}),` text for the card image`]}),`
`,(0,d.jsxs)(t.li,{children:[`Keep `,(0,d.jsx)(t.code,{children:`summary`}),` concise — it serves as a teaser`]}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Links`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`Use `,(0,d.jsx)(t.code,{children:`linkTarget="_blank"`}),` for external resources`]}),`
`,(0,d.jsxs)(t.li,{children:[`The component automatically adds `,(0,d.jsx)(t.code,{children:`rel="noopener noreferrer"`}),` for blank targets`]}),`
`,(0,d.jsx)(t.li,{children:`Each author can have an independent link with its own target`}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Accessibility`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`The root `,(0,d.jsx)(t.code,{children:`<article>`}),` element has an `,(0,d.jsx)(t.code,{children:`aria-label`}),` derived from the title`]}),`
`,(0,d.jsxs)(t.li,{children:[`The image link includes an `,(0,d.jsx)(t.code,{children:`aria-label`}),` "View article: title"`]}),`
`,(0,d.jsx)(t.li,{children:`External links announce "(opens in new window)" to screen readers`}),`
`,(0,d.jsxs)(t.li,{children:[`Authors and tags sections use semantic `,(0,d.jsx)(t.code,{children:`<ul>`}),` lists with `,(0,d.jsx)(t.code,{children:`aria-label`})]}),`
`,(0,d.jsx)(t.li,{children:`Test with keyboard navigation and screen readers`}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Theming`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`All colors use CSS variables and respond to light/dark theme automatically`}),`
`,(0,d.jsxs)(t.li,{children:[`Tags accept custom `,(0,d.jsx)(t.code,{children:`color`}),` for visual categorization`]}),`
`]}),`
`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,d.jsx)(r,{})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;e((()=>{d=t(),o(),i(),s()}))();export{u as default};