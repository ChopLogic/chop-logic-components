import{d as t}from"./index-BT98D5zi.js";const r=t.div`
  display: grid;
  grid-template-columns: repeat(${e=>e.$columns}, 1fr);
  grid-template-rows: repeat(${e=>e.$columns}, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
`,a=t.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  font-size: ${e=>e.$theme.fontSizeSmall};
  font-family: ${e=>e.$theme.fontFamilyMonospace};
  color: ${e=>e.$theme.fontColorBase};
  border-radius: ${e=>e.$theme.blockBorderRadius};
  padding: ${e=>e.$theme.gapMedium};
  width: ${e=>e.$size};
  height: ${e=>e.$size};

  &:hover {
    background-color: ${e=>e.$theme.backgroundColorLight};
    cursor: pointer;
  }

  svg {
    font-size: ${e=>e.$theme.fontSizeHeader};
  }

  span {
    text-align: center;
  }
`;try{r.displayName="StyledGridContainer",r.__docgenInfo={description:"",displayName:"StyledGridContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{a.displayName="StyledGridTile",a.__docgenInfo={description:"",displayName:"StyledGridTile",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}export{r as S,a};
