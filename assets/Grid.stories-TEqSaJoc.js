import{j as n,r as k}from"./iframe-DP4TfwvB.js";import{g}from"./get-class-name-BY88G7uf.js";import{L as D}from"./Label-GsN7KfjG.js";import{I as v}from"./icon-name-DofyCo9k.js";import{u as B}from"./use-element-ids-BwRwfIW9.js";function M({item:e,columns:t,renderDataItem:a}){const o=[];for(const l of t){let r;a&&e[l.field]?r=a(e,l.field):e[l.field]?r=e[l.field].toString():r="",o.push({field:l.field,value:r})}return o}const _=({value:e})=>n.jsx("td",{children:e});try{_.displayName="GridDataCell",_.__docgenInfo={description:"",displayName:"GridDataCell",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | ReactElement<unknown, string | JSXElementConstructor<any>>"}}}}}catch{}const f=({name:e,label:t,disabled:a,required:o=!1,onChange:l,checked:r=!1,...d})=>{const{elementId:i}=B(d?.id),s=g(["cl-grid-checkbox",{"cl-grid-checkbox_disabled":!!a,"cl-grid-checkbox_checked":!!r}]);return n.jsxs("div",{className:s,children:[n.jsx("input",{id:i,name:e,type:"checkbox",disabled:a,required:o,checked:r,onChange:l,className:"cl-grid-checkbox__input"}),n.jsx(D,{label:t,required:o,inputId:i,isTextHidden:!0,iconPosition:"left",icon:r?v.CheckSquare:v.Square})]})};try{f.displayName="GridCheckbox",f.__docgenInfo={description:"",displayName:"GridCheckbox",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}}}catch{}const b=({rowId:e,isRowSelected:t,selectRowById:a,deselectRowById:o,disabled:l})=>{const r=d=>{const{checked:i}=d.target;i?a(e):o(e)};return n.jsx("td",{children:n.jsx(f,{label:"Select row",onChange:r,id:`select_row_${e}`,checked:t,disabled:l})})};try{b.displayName="SelectGridRowCell",b.__docgenInfo={description:"",displayName:"SelectGridRowCell",props:{rowId:{defaultValue:null,description:"",name:"rowId",required:!0,type:{name:"string"}},isRowSelected:{defaultValue:null,description:"",name:"isRowSelected",required:!0,type:{name:"boolean"}},selectRowById:{defaultValue:null,description:"",name:"selectRowById",required:!0,type:{name:"(id: string) => void"}},deselectRowById:{defaultValue:null,description:"",name:"deselectRowById",required:!0,type:{name:"(id: string) => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const I=({rowId:e,selectRowById:t,deselectRowById:a,selectable:o,values:l,selectedIds:r,disabled:d})=>{const i=r.includes(e);return n.jsxs("tr",{className:g(["cl-grid-row",{"cl-grid-row_selected":i}]),children:[o&&n.jsx(b,{rowId:e,selectRowById:t,deselectRowById:a,isRowSelected:i,disabled:d}),l.map(s=>{const u=`cell-${e}-${s.field}`;return n.jsx(_,{value:s.value},u)})]})};try{I.displayName="GridRow",I.__docgenInfo={description:"",displayName:"GridRow",props:{rowId:{defaultValue:null,description:"",name:"rowId",required:!0,type:{name:"string"}},selectedIds:{defaultValue:null,description:"",name:"selectedIds",required:!0,type:{name:"string[]"}},selectRowById:{defaultValue:null,description:"",name:"selectRowById",required:!0,type:{name:"(id: string) => void"}},deselectRowById:{defaultValue:null,description:"",name:"deselectRowById",required:!0,type:{name:"(id: string) => void"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}},values:{defaultValue:null,description:"",name:"values",required:!0,type:{name:"GridRowValue[]"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const C=({selectRowById:e,deselectRowById:t,renderDataItem:a,selectedIds:o,selectable:l,data:r,columns:d})=>n.jsx("tbody",{className:"cl-grid-body",children:r.map(i=>{const s=M({item:i,columns:d,renderDataItem:a});return n.jsx(I,{rowId:i.id,disabled:i?.disabled,selectRowById:e,deselectRowById:t,selectable:l,values:s,selectedIds:o},i.id)})});try{C.displayName="GridBody",C.__docgenInfo={description:"",displayName:"GridBody",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"GridItem[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"GridColumn[]"}},selectedIds:{defaultValue:null,description:"",name:"selectedIds",required:!0,type:{name:"string[]"}},selectRowById:{defaultValue:null,description:"",name:"selectRowById",required:!0,type:{name:"(id: string) => void"}},deselectRowById:{defaultValue:null,description:"",name:"deselectRowById",required:!0,type:{name:"(id: string) => void"}},renderDataItem:{defaultValue:null,description:"",name:"renderDataItem",required:!1,type:{name:"RenderDataItemCallback"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}}}}}catch{}const w=({columns:e,selectable:t})=>n.jsxs("colgroup",{children:[t&&n.jsx("col",{className:"cl-grid-column cl-grid-column_first cl-grid-column_check"}),e.map((a,o)=>n.jsx("col",{className:g(["cl-grid-column",a?.className,{"cl-grid-column_first":o===0&&!t,"cl-grid-column_highlighted":!!a?.highlighted}])},a?.title))]});try{w.displayName="GridColumnGroup",w.__docgenInfo={description:"",displayName:"GridColumnGroup",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"GridColumn[]"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}}}}}catch{}const E=({data:e,id:t,onSelect:a})=>{const{elementId:o}=B(t),[l,r]=k.useState([]),d=e.map(c=>c.id),i=d.length===l.length,s=e.some(c=>c?.disabled),u=c=>{r(c),a?.(c)};return{elementId:o,isAllSelected:i,isAllCheckboxDisabled:s,selectedIds:l,handleSelectAll:()=>{u(d)},handleDeselectAll:()=>{u([])},handleSelectRowById:c=>{const p=[...l,c];u(p)},handleDeselectRowById:c=>{const p=l.filter(h=>h!==c);u(p)}}},x=({title:e,component:t})=>n.jsx("th",{children:t??e??""});try{x.displayName="GridHeaderCell",x.__docgenInfo={description:"",displayName:"GridHeaderCell",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}}}}}catch{}const G=({gridId:e,isAllSelected:t,selectAll:a,deselectAll:o,disabled:l})=>{const r=d=>{const{checked:i}=d.target;i?a():o()};return n.jsx("th",{children:n.jsx(f,{label:"Select all rows",onChange:r,id:`select_all_${e}`,checked:t,disabled:l})})};try{G.displayName="SelectAllGridRowsCell",G.__docgenInfo={description:"",displayName:"SelectAllGridRowsCell",props:{gridId:{defaultValue:null,description:"",name:"gridId",required:!0,type:{name:"string"}},isAllSelected:{defaultValue:null,description:"",name:"isAllSelected",required:!0,type:{name:"boolean"}},selectAll:{defaultValue:null,description:"",name:"selectAll",required:!0,type:{name:"() => void"}},deselectAll:{defaultValue:null,description:"",name:"deselectAll",required:!0,type:{name:"() => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const q=({columns:e,gridId:t,selectAll:a,deselectAll:o,selectable:l,isAllSelected:r,isAllCheckboxDisabled:d=!1})=>n.jsx("thead",{className:"cl-grid-head",children:n.jsxs("tr",{className:"cl-grid-head__row",children:[l&&n.jsx(G,{isAllSelected:r,disabled:d,gridId:t,selectAll:a,deselectAll:o}),e.map(i=>n.jsx(x,{title:i.title,component:i.component},`${i.title}_${t}`))]})});try{q.displayName="GridHead",q.__docgenInfo={description:"",displayName:"GridHead",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"GridColumn[]"}},gridId:{defaultValue:null,description:"",name:"gridId",required:!0,type:{name:"string"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}},isAllSelected:{defaultValue:null,description:"",name:"isAllSelected",required:!0,type:{name:"boolean"}},isAllCheckboxDisabled:{defaultValue:{value:"false"},description:"",name:"isAllCheckboxDisabled",required:!1,type:{name:"boolean"}},selectAll:{defaultValue:null,description:"",name:"selectAll",required:!0,type:{name:"() => void"}},deselectAll:{defaultValue:null,description:"",name:"deselectAll",required:!0,type:{name:"() => void"}}}}}catch{}const V=({columns:e,data:t,id:a,onSelect:o,renderDataItem:l,caption:r,selectable:d=!1,className:i,...s})=>{const{elementId:u,handleSelectAll:R,handleDeselectAll:A,isAllCheckboxDisabled:N,isAllSelected:j,handleDeselectRowById:c,handleSelectRowById:p,selectedIds:h}=E({id:a,data:t,onSelect:o});return n.jsx("div",{className:"cl-grid__wrapper",children:n.jsxs("table",{...s,className:g(["cl-grid",i]),children:[r&&n.jsx("caption",{className:"cl-grid__caption",children:r}),n.jsx(w,{columns:e,selectable:d}),n.jsx(q,{gridId:u,columns:e,selectable:d,selectAll:R,deselectAll:A,isAllSelected:j,isAllCheckboxDisabled:N}),n.jsx(C,{columns:e,data:t,selectable:d,selectRowById:p,deselectRowById:c,selectedIds:h,renderDataItem:l})]})})};try{V.displayName="Grid",V.__docgenInfo={description:"",displayName:"Grid",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"GridColumn[]"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"GridItem[]"}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"string"}},selectable:{defaultValue:{value:"false"},description:"",name:"selectable",required:!1,type:{name:"boolean"}},renderDataItem:{defaultValue:null,description:"",name:"renderDataItem",required:!1,type:{name:"RenderDataItemCallback"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((ids: string[]) => void)"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const S=e=>n.jsx(V,{...e});try{S.displayName="GridExample",S.__docgenInfo={description:"",displayName:"GridExample",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"GridColumn[]"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"GridItem[]"}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"string"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!1,type:{name:"boolean"}},renderDataItem:{defaultValue:null,description:"",name:"renderDataItem",required:!1,type:{name:"RenderDataItemCallback"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((ids: string[]) => void)"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch{}const H={component:S,title:"Organisms/Grid",argTypes:{data:{control:"object",description:"Array of data items to display in the grid",table:{type:{summary:"Record<string, any>[]"},category:"Content"}},columns:{control:"object",description:"Array of column definitions for the grid",table:{type:{summary:"GridColumn[]"},category:"Content"}},caption:{control:"text",description:"Optional caption/title for the grid",table:{type:{summary:"string"},category:"Content"}},selectable:{control:"boolean",description:"Whether rows can be selected",table:{type:{summary:"boolean"},category:"Behavior"}},renderDataItem:{control:"object",description:"Custom render function for grid cells",table:{type:{summary:"(item: Record<string, any>, field: string) => ReactNode"},category:"Behavior"}},onSelect:{action:"selected",description:"Callback function when rows are selected",table:{type:{summary:"(ids: string[]) => void"},category:"Interaction"}},className:{control:"text",description:"Additional CSS class for custom styling",table:{type:{summary:"string"},category:"Styling"}},style:{control:"object",description:"Inline CSS styles for the grid",table:{type:{summary:"CSSProperties"},category:"Styling"}},id:{control:"text",description:"Unique identifier for the grid",table:{type:{summary:"string"},category:"Identification"}},title:{control:"text",description:"Accessibility title for the grid",table:{type:{summary:"string"},category:"Identification"}},tabIndex:{control:"number",description:"Tab index for keyboard navigation",table:{type:{summary:"number"},category:"Accessibility"}}}},m={args:{selectable:!1,renderDataItem:(e,t)=>t==="phone"?n.jsx("em",{children:e[t??""]}):n.jsx("span",{children:e[t]}),caption:"Contact List",columns:[{title:"Company",field:"company"},{title:"Contact",field:"contact"},{title:"Country",field:"country"},{title:"Phone",field:"phone"}],data:[{id:"row1",company:"Alfreds Futterkiste",contact:"Maria Anders",country:"Germany",phone:"123-345-7890"},{id:"row2",company:"Centro comercial Moctezuma",contact:"Francisco Chang",country:"Mexico",phone:"123-345-7890"},{id:"row3",company:"Ernst Handel",contact:"Roland Mendel",country:"Austria",phone:"123-345-7890"},{id:"row4",company:"Island Trading",contact:"Helen Bennett",country:"UK",phone:"123-345-7890"},{id:"row5",company:"Laughing Bacchus Winecellars",contact:"Yoshi Tannamuri",country:"Canada",phone:"123-345-7890"},{id:"row6",company:"Magazzini Alimentari Riuniti",contact:"Giovanni Rovelli",country:"Italy",phone:"123-345-7890"}]}},y={args:{selectable:!0,onSelect:e=>console.log(e),columns:[{title:"Company",field:"company"},{title:"Contact",field:"contact"},{title:"Country",field:"country"},{title:"Phone",field:"phone"}],data:[{id:"row1",company:"Alfreds Futterkiste",contact:"Maria Anders",country:"Germany",phone:"123-345-7890"},{id:"row2",company:"Centro comercial Moctezuma",contact:"Francisco Chang",country:"Mexico",phone:"123-345-7890"},{id:"row3",company:"Ernst Handel",contact:"Roland Mendel",country:"Austria",phone:"123-345-7890"},{id:"row4",company:"Island Trading",contact:"Helen Bennett",country:"UK",phone:"123-345-7890"},{id:"row5",company:"Laughing Bacchus Winecellars",contact:"Yoshi Tannamuri",country:"Canada",phone:"123-345-7890"},{id:"row6",company:"Magazzini Alimentari Riuniti",contact:"Giovanni Rovelli",country:"Italy",phone:"123-345-7890"}]}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    selectable: false,
    renderDataItem: (item, field) => {
      return field === 'phone' ? <em>{item[field ?? ''] as string}</em> : <span>{item[field] as string}</span>;
    },
    caption: 'Contact List',
    columns: [{
      title: 'Company',
      field: 'company'
    }, {
      title: 'Contact',
      field: 'contact'
    }, {
      title: 'Country',
      field: 'country'
    }, {
      title: 'Phone',
      field: 'phone'
    }],
    data: [{
      id: 'row1',
      company: 'Alfreds Futterkiste',
      contact: 'Maria Anders',
      country: 'Germany',
      phone: '123-345-7890'
    }, {
      id: 'row2',
      company: 'Centro comercial Moctezuma',
      contact: 'Francisco Chang',
      country: 'Mexico',
      phone: '123-345-7890'
    }, {
      id: 'row3',
      company: 'Ernst Handel',
      contact: 'Roland Mendel',
      country: 'Austria',
      phone: '123-345-7890'
    }, {
      id: 'row4',
      company: 'Island Trading',
      contact: 'Helen Bennett',
      country: 'UK',
      phone: '123-345-7890'
    }, {
      id: 'row5',
      company: 'Laughing Bacchus Winecellars',
      contact: 'Yoshi Tannamuri',
      country: 'Canada',
      phone: '123-345-7890'
    }, {
      id: 'row6',
      company: 'Magazzini Alimentari Riuniti',
      contact: 'Giovanni Rovelli',
      country: 'Italy',
      phone: '123-345-7890'
    }]
  }
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    selectable: true,
    onSelect: (ids: string[]) => console.log(ids),
    columns: [{
      title: 'Company',
      field: 'company'
    }, {
      title: 'Contact',
      field: 'contact'
    }, {
      title: 'Country',
      field: 'country'
    }, {
      title: 'Phone',
      field: 'phone'
    }],
    data: [{
      id: 'row1',
      company: 'Alfreds Futterkiste',
      contact: 'Maria Anders',
      country: 'Germany',
      phone: '123-345-7890'
    }, {
      id: 'row2',
      company: 'Centro comercial Moctezuma',
      contact: 'Francisco Chang',
      country: 'Mexico',
      phone: '123-345-7890'
    }, {
      id: 'row3',
      company: 'Ernst Handel',
      contact: 'Roland Mendel',
      country: 'Austria',
      phone: '123-345-7890'
    }, {
      id: 'row4',
      company: 'Island Trading',
      contact: 'Helen Bennett',
      country: 'UK',
      phone: '123-345-7890'
    }, {
      id: 'row5',
      company: 'Laughing Bacchus Winecellars',
      contact: 'Yoshi Tannamuri',
      country: 'Canada',
      phone: '123-345-7890'
    }, {
      id: 'row6',
      company: 'Magazzini Alimentari Riuniti',
      contact: 'Giovanni Rovelli',
      country: 'Italy',
      phone: '123-345-7890'
    }]
  }
}`,...y.parameters?.docs?.source}}};const z=["DefaultGrid","SelectableGrid"],K=Object.freeze(Object.defineProperty({__proto__:null,DefaultGrid:m,SelectableGrid:y,__namedExportsOrder:z,default:H},Symbol.toStringTag,{value:"Module"}));export{K as G};
