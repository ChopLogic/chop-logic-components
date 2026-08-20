import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-BxXWrdMh.js";import{i as r,n as i,r as a,t as o}from"./Avatar-BvmjaUNF.js";import{t as s}from"./get-class-name-ekH_fREr.js";import{n as c,t as l}from"./Header-DgfbMwWL.js";import{n as u,t as d}from"./Image-nNvOKdjo.js";import{n as f,t as p}from"./Tag-DCipqzvy.js";var m,h;function g(){return(g=e((()=>{i(),c(),u(),f(),r(),m=n(),h=({link:e,linkTarget:t=a.Self,image:n,title:r,summary:i,authors:c=[],tags:u=[],className:f,...h})=>{let g=s([`cl-preview-card`,f]),_=t===a.Blank,v=r||`Preview card`,y=`View article: ${r}`;return(0,m.jsxs)(`article`,{className:g,"aria-label":v,...h,children:[(0,m.jsx)(`a`,{href:e,target:t,rel:_?`noopener noreferrer`:void 0,"aria-label":y,className:`cl-preview-card__image-link`,children:(0,m.jsx)(d,{...n,className:`cl-preview-card__image`})}),(0,m.jsx)(l,{as:`h6`,className:`cl-preview-card__title`,children:r}),i&&(0,m.jsx)(`p`,{className:`cl-preview-card__summary`,children:i}),c.length>0&&(0,m.jsx)(`ul`,{className:`cl-preview-card__authors`,"aria-label":`Authors`,children:c.map(e=>(0,m.jsxs)(`li`,{className:`cl-preview-card__author-item`,children:[(0,m.jsx)(o,{...e}),(0,m.jsx)(`span`,{children:e.name})]},e.id))}),u.length>0&&(0,m.jsx)(`ul`,{className:`cl-preview-card__tags`,"aria-label":`Tags`,children:u.map(e=>(0,m.jsx)(`li`,{className:`cl-preview-card__tag-item`,children:(0,m.jsx)(p,{...e})},e.id))})]})};try{h.displayName=`PreviewCard`,h.__docgenInfo={description:``,displayName:`PreviewCard`,filePath:`/home/runner/work/chop-logic-components/chop-logic-components/src/components/organisms/preview-card/PreviewCard.tsx`,methods:[],props:{link:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/preview-card.ts`,name:`PreviewCardProps`}],description:``,name:`link`,parent:{fileName:`chop-logic-components/src/types/preview-card.ts`,name:`PreviewCardProps`},required:!0,tags:{},type:{name:`string`}},linkTarget:{defaultValue:{value:`LinkTarget.Self`},declarations:[{fileName:`chop-logic-components/src/types/preview-card.ts`,name:`PreviewCardProps`}],description:``,name:`linkTarget`,parent:{fileName:`chop-logic-components/src/types/preview-card.ts`,name:`PreviewCardProps`},required:!1,tags:{},type:{name:`enum`,raw:`LinkTarget`,value:[{value:`"_self"`,description:``,fullComment:``,tags:{}},{value:`"_blank"`,description:``,fullComment:``,tags:{}},{value:`"_parent"`,description:``,fullComment:``,tags:{}},{value:`"_top"`,description:``,fullComment:``,tags:{}}]}},image:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/preview-card.ts`,name:`PreviewCardProps`}],description:``,name:`image`,parent:{fileName:`chop-logic-components/src/types/preview-card.ts`,name:`PreviewCardProps`},required:!0,tags:{},type:{name:`ImageProps`}},title:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/preview-card.ts`,name:`PreviewCardProps`}],description:``,name:`title`,parent:{fileName:`chop-logic-components/src/types/preview-card.ts`,name:`PreviewCardProps`},required:!0,tags:{},type:{name:`string`}},authors:{defaultValue:{value:`[]`},declarations:[{fileName:`chop-logic-components/src/types/preview-card.ts`,name:`PreviewCardProps`}],description:``,name:`authors`,parent:{fileName:`chop-logic-components/src/types/preview-card.ts`,name:`PreviewCardProps`},required:!1,tags:{},type:{name:`Author[]`}},tags:{defaultValue:{value:`[]`},declarations:[{fileName:`chop-logic-components/src/types/preview-card.ts`,name:`PreviewCardProps`}],description:``,name:`tags`,parent:{fileName:`chop-logic-components/src/types/preview-card.ts`,name:`PreviewCardProps`},required:!1,tags:{},type:{name:`TagData[]`}},summary:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/preview-card.ts`,name:`PreviewCardProps`}],description:``,name:`summary`,parent:{fileName:`chop-logic-components/src/types/preview-card.ts`,name:`PreviewCardProps`},required:!1,tags:{},type:{name:`string`}},id:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`id`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`className`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`style`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`CSSProperties`}},tabIndex:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`tabIndex`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`number`}}},tags:{}}}catch{}})))()}var _=t({Default:()=>y,ExternalLink:()=>C,WithoutAuthors:()=>x,WithoutSummary:()=>b,WithoutTags:()=>S,__namedExportsOrder:()=>w,default:()=>v}),v,y,b,x,S,C,w;function T(){return(T=e((()=>{r(),g(),v={component:h,title:`Organisms/PreviewCard`,argTypes:{link:{control:`text`,description:`URL for the card primary link`,table:{type:{summary:`string`},category:`Content`}},image:{control:`object`,description:`Image props (src, alt, etc.) passed to the Image atom`,table:{type:{summary:`ImageProps`},category:`Content`}},title:{control:`text`,description:`Card title rendered as an h3 heading`,table:{type:{summary:`string`},category:`Content`}},summary:{control:`text`,description:`Optional summary paragraph text`,table:{type:{summary:`string`},category:`Content`}},authors:{control:`object`,description:`Array of authors rendered as Avatar components`,table:{type:{summary:`Author[]`},defaultValue:{summary:`[]`},category:`Content`}},tags:{control:`object`,description:`Array of tags rendered as Tag components`,table:{type:{summary:`TagData[]`},defaultValue:{summary:`[]`},category:`Content`}},linkTarget:{control:`select`,options:Object.values(a),description:`Anchor target attribute for the image link`,table:{type:{summary:`LinkTarget`},defaultValue:{summary:`_self`},category:`Behavior`}},className:{control:`text`,description:`Additional CSS class for custom styling`,table:{type:{summary:`string`},category:`Styling`}},style:{control:`object`,description:`Inline CSS styles for the root element`,table:{type:{summary:`CSSProperties`},category:`Styling`}},id:{control:`text`,description:`Unique identifier for the card`,table:{type:{summary:`string`},category:`Identification`}},tabIndex:{control:`number`,description:`Tab index for keyboard navigation`,table:{type:{summary:`number`},category:`Accessibility`}}},args:{link:`https://example.com/article`,image:{src:`https://picsum.photos/seed/preview/600/300`,alt:`Article preview image`},title:`Building Accessible Component Libraries`,summary:`A comprehensive guide to creating reusable, accessible React components with TypeScript and CSS variables for theming.`,authors:[{id:`1`,name:`Jane Smith`,imageUrl:`https://i.pravatar.cc/150?img=1`,link:`https://example.com/jane`},{id:`2`,name:`John Doe`,imageUrl:`https://i.pravatar.cc/150?img=2`}],tags:[{id:`1`,name:`React`,color:`#61DAFB`,tooltip:`A JavaScript library for building UIs`},{id:`2`,name:`JavaScript`,color:`#f5f122`},{id:`3`,name:`CSS`}]}},y={parameters:{docs:{description:{story:`PreviewCard with all sections populated: image, title, summary, authors, and tags.`}}}},b={args:{summary:void 0},parameters:{docs:{description:{story:`PreviewCard without the optional summary paragraph.`}}}},x={args:{authors:[]},parameters:{docs:{description:{story:`PreviewCard with an empty authors array — the authors section is omitted.`}}}},S={args:{tags:[]},parameters:{docs:{description:{story:`PreviewCard with an empty tags array — the tags section is omitted.`}}}},C={args:{linkTarget:a.Blank},parameters:{docs:{description:{story:`PreviewCard with linkTarget set to _blank. The image link opens in a new window and includes rel="noopener noreferrer" and an accessible label indicating external navigation.`}}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'PreviewCard with all sections populated: image, title, summary, authors, and tags.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    summary: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'PreviewCard without the optional summary paragraph.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    authors: []
  },
  parameters: {
    docs: {
      description: {
        story: 'PreviewCard with an empty authors array — the authors section is omitted.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    tags: []
  },
  parameters: {
    docs: {
      description: {
        story: 'PreviewCard with an empty tags array — the tags section is omitted.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    linkTarget: LinkTarget.Blank
  },
  parameters: {
    docs: {
      description: {
        story: 'PreviewCard with linkTarget set to _blank. The image link opens in a new window and includes rel="noopener noreferrer" and an accessible label indicating external navigation.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}},w=[`Default`,`WithoutSummary`,`WithoutAuthors`,`WithoutTags`,`ExternalLink`]})))()}export{T as n,_ as t};