import{r as b}from"./index-RYns6xqu.js";import{j as n}from"./jsx-runtime-DEdD30eg.js";import{d as s,F as p,U as h,C as c}from"./styled-components.browser.esm-2v_QRtKj.js";function u(e){const l=b.useId(),r=e??l,a=`${r}_error`,t=`${r}_dropdown`;return{elementId:r,errorId:a,dropdownId:t}}try{u.displayName="useElementIds",u.__docgenInfo={description:"",displayName:"useElementIds",props:{}}}catch{}const d=s.label`
  font-size: 0.8rem;
  font-family: ${p.core};
  display: flex;
  align-items: center;
  gap: ${h.smallGap};
  color: ${c.primary};
`,i=s.span`
  text-wrap: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 2px 0;
`,o=s.abbr`
  font-size: 0.8rem;
  font-family: ${p.core};
  text-decoration: none;
  color: ${c.accent};
  cursor: pointer;
`;try{d.displayName="StyledLabel",d.__docgenInfo={description:"",displayName:"StyledLabel",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{i.displayName="StyledLabelText",i.__docgenInfo={description:"",displayName:"StyledLabelText",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{o.displayName="StyledRequiredSign",o.__docgenInfo={description:"",displayName:"StyledRequiredSign",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}const V=({label:e,required:l,inputId:r,icon:a,iconPosition:t,isTextHidden:m=!1,style:f})=>{const y=!!a&&t==="left",_=!!a&&t==="right",g=n.jsx(o,{title:"required",children:"*"});return n.jsxs(d,{htmlFor:r,style:f,children:[y&&a,!m&&n.jsx(i,{children:e}),l&&g,_&&a]})};try{Label.displayName="Label",Label.__docgenInfo={description:"",displayName:"Label",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!0,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!0,type:{name:"string"}},isTextHidden:{defaultValue:{value:"false"},description:"",name:"isTextHidden",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}export{V as C,u};
