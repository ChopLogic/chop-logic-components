import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{n}from"./iframe-L3lfpXVe.js";import{c as r,t as i}from"./enums-BrA02Z5m.js";import{t as a}from"./get-class-name-BU37VJF3.js";import{t as o}from"./utils-D9hFbl7y.js";import{a as s,c,g as l,t as u}from"./Avatar-BVujMYXa.js";import{t as d}from"./Header-eNDt8iPA.js";var f=t((()=>{})),p,m,h=t((()=>{f(),s(),i(),o(),p=n(),m=({link:e,linkTarget:t=r.Self,image:n,title:i,summary:o,authors:s=[],tags:f=[],className:m,...h})=>{let g=a([`cl-preview-card`,m]),_=t===r.Blank,v=i||`Preview card`,y=`View article: ${i}`;return(0,p.jsxs)(`article`,{className:g,"aria-label":v,...h,children:[(0,p.jsx)(`a`,{href:e,target:t,rel:_?`noopener noreferrer`:void 0,"aria-label":y,className:`cl-preview-card__image-link`,children:(0,p.jsx)(l,{...n,className:`cl-preview-card__image`})}),(0,p.jsx)(d,{as:`h6`,className:`cl-preview-card__title`,children:i}),o&&(0,p.jsx)(`p`,{className:`cl-preview-card__summary`,children:o}),s.length>0&&(0,p.jsx)(`ul`,{className:`cl-preview-card__authors`,"aria-label":`Authors`,children:s.map(e=>(0,p.jsxs)(`li`,{className:`cl-preview-card__author-item`,children:[(0,p.jsx)(u,{...e}),(0,p.jsx)(`span`,{children:e.name})]},e.id))}),f.length>0&&(0,p.jsx)(`ul`,{className:`cl-preview-card__tags`,"aria-label":`Tags`,children:f.map(e=>(0,p.jsx)(`li`,{className:`cl-preview-card__tag-item`,children:(0,p.jsx)(c,{...e})},e.id))})]})};try{m.displayName=`PreviewCard`,m.__docgenInfo={description:``,displayName:`PreviewCard`,filePath:`/home/runner/work/chop-logic-components/chop-logic-components/src/components/organisms/preview-card/PreviewCard.tsx`,methods:[],props:{link:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/preview-card.ts`,name:`PreviewCardProps`}],description:``,name:`link`,parent:{fileName:`chop-logic-components/src/types/preview-card.ts`,name:`PreviewCardProps`},required:!0,tags:{},type:{name:`string`}},linkTarget:{defaultValue:{value:`LinkTarget.Self`},declarations:[{fileName:`chop-logic-components/src/types/preview-card.ts`,name:`PreviewCardProps`}],description:``,name:`linkTarget`,parent:{fileName:`chop-logic-components/src/types/preview-card.ts`,name:`PreviewCardProps`},required:!1,tags:{},type:{name:`enum`,raw:`LinkTarget`,value:[{value:`"_self"`,description:``,fullComment:``,tags:{}},{value:`"_blank"`,description:``,fullComment:``,tags:{}},{value:`"_parent"`,description:``,fullComment:``,tags:{}},{value:`"_top"`,description:``,fullComment:``,tags:{}}]}},image:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/preview-card.ts`,name:`PreviewCardProps`}],description:``,name:`image`,parent:{fileName:`chop-logic-components/src/types/preview-card.ts`,name:`PreviewCardProps`},required:!0,tags:{},type:{name:`ImageProps`}},title:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/preview-card.ts`,name:`PreviewCardProps`}],description:``,name:`title`,parent:{fileName:`chop-logic-components/src/types/preview-card.ts`,name:`PreviewCardProps`},required:!0,tags:{},type:{name:`string`}},authors:{defaultValue:{value:`[]`},declarations:[{fileName:`chop-logic-components/src/types/preview-card.ts`,name:`PreviewCardProps`}],description:``,name:`authors`,parent:{fileName:`chop-logic-components/src/types/preview-card.ts`,name:`PreviewCardProps`},required:!1,tags:{},type:{name:`Author[]`}},tags:{defaultValue:{value:`[]`},declarations:[{fileName:`chop-logic-components/src/types/preview-card.ts`,name:`PreviewCardProps`}],description:``,name:`tags`,parent:{fileName:`chop-logic-components/src/types/preview-card.ts`,name:`PreviewCardProps`},required:!1,tags:{},type:{name:`TagData[]`}},summary:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/preview-card.ts`,name:`PreviewCardProps`}],description:``,name:`summary`,parent:{fileName:`chop-logic-components/src/types/preview-card.ts`,name:`PreviewCardProps`},required:!1,tags:{},type:{name:`string`}},id:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`id`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`className`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`style`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`CSSProperties`}},tabIndex:{defaultValue:null,declarations:[{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`}],description:``,name:`tabIndex`,parent:{fileName:`chop-logic-components/src/types/_common.ts`,name:`ChopLogicComponentProps`},required:!1,tags:{},type:{name:`number`}}},tags:{}}}catch{}})),g=e({Default:()=>v,ExternalLink:()=>S,WithoutAuthors:()=>b,WithoutSummary:()=>y,WithoutTags:()=>x,__namedExportsOrder:()=>C,default:()=>_}),_,v,y,b,x,S,C,w=t((()=>{i(),h(),_={component:m,title:`Organisms/PreviewCard`,argTypes:{link:{control:`text`,description:`URL for the card primary link`,table:{type:{summary:`string`},category:`Content`}},image:{control:`object`,description:`Image props (src, alt, etc.) passed to the Image atom`,table:{type:{summary:`ImageProps`},category:`Content`}},title:{control:`text`,description:`Card title rendered as an h3 heading`,table:{type:{summary:`string`},category:`Content`}},summary:{control:`text`,description:`Optional summary paragraph text`,table:{type:{summary:`string`},category:`Content`}},authors:{control:`object`,description:`Array of authors rendered as Avatar components`,table:{type:{summary:`Author[]`},defaultValue:{summary:`[]`},category:`Content`}},tags:{control:`object`,description:`Array of tags rendered as Tag components`,table:{type:{summary:`TagData[]`},defaultValue:{summary:`[]`},category:`Content`}},linkTarget:{control:`select`,options:Object.values(r),description:`Anchor target attribute for the image link`,table:{type:{summary:`LinkTarget`},defaultValue:{summary:`_self`},category:`Behavior`}},className:{control:`text`,description:`Additional CSS class for custom styling`,table:{type:{summary:`string`},category:`Styling`}},style:{control:`object`,description:`Inline CSS styles for the root element`,table:{type:{summary:`CSSProperties`},category:`Styling`}},id:{control:`text`,description:`Unique identifier for the card`,table:{type:{summary:`string`},category:`Identification`}},tabIndex:{control:`number`,description:`Tab index for keyboard navigation`,table:{type:{summary:`number`},category:`Accessibility`}}},args:{link:`https://example.com/article`,image:{src:`https://picsum.photos/seed/preview/600/300`,alt:`Article preview image`},title:`Building Accessible Component Libraries`,summary:`A comprehensive guide to creating reusable, accessible React components with TypeScript and CSS variables for theming.`,authors:[{id:`1`,name:`Jane Smith`,imageUrl:`https://i.pravatar.cc/150?img=1`,link:`https://example.com/jane`},{id:`2`,name:`John Doe`,imageUrl:`https://i.pravatar.cc/150?img=2`}],tags:[{id:`1`,name:`React`,color:`#61DAFB`,tooltip:`A JavaScript library for building UIs`},{id:`2`,name:`JavaScript`,color:`#f5f122`},{id:`3`,name:`CSS`}]}},v={parameters:{docs:{description:{story:`PreviewCard with all sections populated: image, title, summary, authors, and tags.`}}}},y={args:{summary:void 0},parameters:{docs:{description:{story:`PreviewCard without the optional summary paragraph.`}}}},b={args:{authors:[]},parameters:{docs:{description:{story:`PreviewCard with an empty authors array — the authors section is omitted.`}}}},x={args:{tags:[]},parameters:{docs:{description:{story:`PreviewCard with an empty tags array — the tags section is omitted.`}}}},S={args:{linkTarget:r.Blank},parameters:{docs:{description:{story:`PreviewCard with linkTarget set to _blank. The image link opens in a new window and includes rel="noopener noreferrer" and an accessible label indicating external navigation.`}}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'PreviewCard with all sections populated: image, title, summary, authors, and tags.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`Default`,`WithoutSummary`,`WithoutAuthors`,`WithoutTags`,`ExternalLink`]}));w();export{v as Default,S as ExternalLink,b as WithoutAuthors,y as WithoutSummary,x as WithoutTags,C as __namedExportsOrder,_ as default,w as n,g as t};