var ee=Object.defineProperty,ne=Object.defineProperties;var te=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var E=(e,t,n)=>t in e?ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))H.call(t,n)&&E(e,n,t[n]);if(w)for(var n of w(t))T.call(t,n)&&E(e,n,t[n]);return e},m=(e,t)=>ne(e,te(t));var q=(e,t)=>{var n={};for(var l in e)H.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(e!=null&&w)for(var l of w(e))t.indexOf(l)<0&&T.call(e,l)&&(n[l]=e[l]);return n};import{j as a,r as le}from"./iframe-Dwcaj2QA.js";import{g as b}from"./get-class-name-BY88G7uf.js";import{L as ae}from"./Label-D8OHu-5u.js";import{u as X}from"./use-element-ids-Bsr7LtLD.js";import{I as F}from"./Icon-2KdL7_px.js";function re({item:e,columns:t,renderDataItem:n}){const l=[];for(const r of t){let d;n&&e[r.field]?d=n(e,r.field):e[r.field]?d=e[r.field].toString():d="",l.push({field:r.field,value:d})}return l}const de="_cell_veiud_1",ie={cell:de},V=({value:e})=>a.jsx("td",{className:ie.cell,children:e});try{V.displayName="GridDataCell",V.__docgenInfo={description:"",displayName:"GridDataCell",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | ReactElement<unknown, string | JSXElementConstructor<any>>"}}}}}catch(e){}const oe="_checkbox_1814z_3",ce="_checkbox__disabled_1814z_15",se="_checkbox_input_1814z_27",I={checkbox:oe,checkbox__disabled:ce,checkbox_input:se},C=i=>{var s=i,{name:e,label:t,disabled:n,required:l=!1,onChange:r,checked:d=!1}=s,o=q(s,["name","label","disabled","required","onChange","checked"]);const{elementId:u}=X(o==null?void 0:o.id),y=b([I.checkbox,{[I.checkbox__disabled]:!!n,[I.checkbox__checked]:d}]);return a.jsxs("div",{className:y,children:[a.jsx("input",{id:u,name:e,type:"checkbox",disabled:n,required:l,checked:d,onChange:r,className:I.checkbox_input}),a.jsx(ae,{label:t,required:l,inputId:u,isTextHidden:!0,iconPosition:"left",icon:d?F.CheckboxChecked:F.CheckboxUnchecked})]})};try{C.displayName="GridCheckbox",C.__docgenInfo={description:"",displayName:"GridCheckbox",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}}}catch(e){}const ue="_cell_veiud_1",pe={cell:ue},R=({rowId:e,isRowSelected:t,selectRowById:n,deselectRowById:l,disabled:r})=>{const d=o=>{const{checked:i}=o.target;i?n(e):l(e)};return a.jsx("td",{className:pe.cell,children:a.jsx(C,{label:"Select row",onChange:d,id:`select_row_${e}`,checked:t,disabled:r})})};try{R.displayName="SelectGridRowCell",R.__docgenInfo={description:"",displayName:"SelectGridRowCell",props:{rowId:{defaultValue:null,description:"",name:"rowId",required:!0,type:{name:"string"}},isRowSelected:{defaultValue:null,description:"",name:"isRowSelected",required:!0,type:{name:"boolean"}},selectRowById:{defaultValue:null,description:"",name:"selectRowById",required:!0,type:{name:"(id: string) => void"}},deselectRowById:{defaultValue:null,description:"",name:"deselectRowById",required:!0,type:{name:"(id: string) => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch(e){}const me="_row_nfmhf_1",ye="_row__selected_nfmhf_5",L={row:me,row__selected:ye},A=({rowId:e,selectRowById:t,deselectRowById:n,selectable:l,values:r,selectedIds:d,disabled:o})=>{const i=d.includes(e);return a.jsxs("tr",{className:b([L.row,{[L.row__selected]:i}]),children:[l&&a.jsx(R,{rowId:e,selectRowById:t,deselectRowById:n,isRowSelected:i,disabled:o}),r.map(s=>{const u=`cell-${e}-${s.field}`;return a.jsx(V,{value:s.value},u)})]})};try{A.displayName="GridRow",A.__docgenInfo={description:"",displayName:"GridRow",props:{rowId:{defaultValue:null,description:"",name:"rowId",required:!0,type:{name:"string"}},selectedIds:{defaultValue:null,description:"",name:"selectedIds",required:!0,type:{name:"string[]"}},selectRowById:{defaultValue:null,description:"",name:"selectRowById",required:!0,type:{name:"(id: string) => void"}},deselectRowById:{defaultValue:null,description:"",name:"deselectRowById",required:!0,type:{name:"(id: string) => void"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}},values:{defaultValue:null,description:"",name:"values",required:!0,type:{name:"GridRowValue[]"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch(e){}const _e="_body_iae6m_2",he={body:_e},N=({selectRowById:e,deselectRowById:t,renderDataItem:n,selectedIds:l,selectable:r,data:d,columns:o})=>a.jsx("tbody",{className:he.body,children:d.map(i=>{const s=re({item:i,columns:o,renderDataItem:n});return a.jsx(A,{rowId:i.id,disabled:i==null?void 0:i.disabled,selectRowById:e,deselectRowById:t,selectable:r,values:s,selectedIds:l},i.id)})});try{N.displayName="GridBody",N.__docgenInfo={description:"",displayName:"GridBody",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"GridItem[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"GridColumn[]"}},selectedIds:{defaultValue:null,description:"",name:"selectedIds",required:!0,type:{name:"string[]"}},selectRowById:{defaultValue:null,description:"",name:"selectRowById",required:!0,type:{name:"(id: string) => void"}},deselectRowById:{defaultValue:null,description:"",name:"deselectRowById",required:!0,type:{name:"(id: string) => void"}},renderDataItem:{defaultValue:null,description:"",name:"renderDataItem",required:!1,type:{name:"RenderDataItemCallback"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}}}}}catch(e){}const fe="_column_s4wq6_1",ge="_column__first_s4wq6_4",be="_column__highlighted_s4wq6_7",h={column:fe,column__first:ge,column__highlighted:be},S=({columns:e,selectable:t})=>a.jsxs("colgroup",{children:[t&&a.jsx("col",{className:b([h.column,h.column__first])}),e.map((n,l)=>a.jsx("col",{className:b([h.column,n==null?void 0:n.className,{[h.column__first]:l===0&&!t,[h.column__highlighted]:!!(n!=null&&n.highlighted)}])},n==null?void 0:n.title))]});try{S.displayName="GridColumnGroup",S.__docgenInfo={description:"",displayName:"GridColumnGroup",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"GridColumn[]"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}}}}}catch(e){}const we=({data:e,id:t,onSelect:n})=>{const{elementId:l}=X(t),[r,d]=le.useState([]),o=e.map(c=>c.id),i=o.length===r.length,s=e.some(c=>c==null?void 0:c.disabled),u=c=>{d(c),n==null||n(c)};return{elementId:l,isAllSelected:i,isAllCheckboxDisabled:s,selectedIds:r,handleSelectAll:()=>{u(o)},handleDeselectAll:()=>{u([])},handleSelectRowById:c=>{const _=[...r,c];u(_)},handleDeselectRowById:c=>{const _=r.filter(x=>x!==c);u(_)}}},Ie="_grid_9nwvq_2",Ce="_grid_caption_9nwvq_5",xe="_grid_wrapper_9nwvq_26",G={grid:Ie,grid_caption:Ce,grid_wrapper:xe},qe="_headerCell_wd2ft_1",Ge={headerCell:qe},v=({title:e,component:t})=>{var n;return a.jsx("th",{className:Ge.headerCell,children:(n=t!=null?t:e)!=null?n:""})};try{v.displayName="GridHeaderCell",v.__docgenInfo={description:"",displayName:"GridHeaderCell",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}}}}}catch(e){}const Ve="_headerCell_wd2ft_1",Re={headerCell:Ve},k=({gridId:e,isAllSelected:t,selectAll:n,deselectAll:l,disabled:r})=>{const d=o=>{const{checked:i}=o.target;i?n():l()};return a.jsx("th",{className:Re.headerCell,children:a.jsx(C,{label:"Select all rows",onChange:d,id:`select_all_${e}`,checked:t,disabled:r})})};try{k.displayName="SelectAllGridRowsCell",k.__docgenInfo={description:"",displayName:"SelectAllGridRowsCell",props:{gridId:{defaultValue:null,description:"",name:"gridId",required:!0,type:{name:"string"}},isAllSelected:{defaultValue:null,description:"",name:"isAllSelected",required:!0,type:{name:"boolean"}},selectAll:{defaultValue:null,description:"",name:"selectAll",required:!0,type:{name:"() => void"}},deselectAll:{defaultValue:null,description:"",name:"deselectAll",required:!0,type:{name:"() => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch(e){}const Ae="_head_8bsdh_2",Ne="_head_row_8bsdh_22",P={head:Ae,head_row:Ne},j=({columns:e,gridId:t,selectAll:n,deselectAll:l,selectable:r,isAllSelected:d,isAllCheckboxDisabled:o=!1})=>a.jsx("thead",{className:P.head,children:a.jsxs("tr",{className:P.head_row,children:[r&&a.jsx(k,{isAllSelected:d,disabled:o,gridId:t,selectAll:n,deselectAll:l}),e.map(i=>a.jsx(v,{title:i.title,component:i.component},`${i.title}_${t}`))]})});try{j.displayName="GridHead",j.__docgenInfo={description:"",displayName:"GridHead",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"GridColumn[]"}},gridId:{defaultValue:null,description:"",name:"gridId",required:!0,type:{name:"string"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}},isAllSelected:{defaultValue:null,description:"",name:"isAllSelected",required:!0,type:{name:"boolean"}},isAllCheckboxDisabled:{defaultValue:{value:"false"},description:"",name:"isAllCheckboxDisabled",required:!1,type:{name:"boolean"}},selectAll:{defaultValue:null,description:"",name:"selectAll",required:!0,type:{name:"() => void"}},deselectAll:{defaultValue:null,description:"",name:"deselectAll",required:!0,type:{name:"() => void"}}}}}catch(e){}const B=u=>{var y=u,{columns:e,data:t,id:n,onSelect:l,renderDataItem:r,caption:d,selectable:o=!1,className:i}=y,s=q(y,["columns","data","id","onSelect","renderDataItem","caption","selectable","className"]);const{elementId:M,handleSelectAll:$,handleDeselectAll:z,isAllCheckboxDisabled:c,isAllSelected:_,handleDeselectRowById:x,handleSelectRowById:Q,selectedIds:Z}=we({id:n,data:t,onSelect:l});return a.jsx("div",{className:G.grid_wrapper,children:a.jsxs("table",m(p({},s),{className:b([G.grid,i]),children:[d&&a.jsx("caption",{className:G.grid_caption,children:d}),a.jsx(S,{columns:e,selectable:o}),a.jsx(j,{gridId:M,columns:e,selectable:o,selectAll:$,deselectAll:z,isAllSelected:_,isAllCheckboxDisabled:c}),a.jsx(N,{columns:e,data:t,selectable:o,selectRowById:Q,deselectRowById:x,selectedIds:Z,renderDataItem:r})]}))})};try{B.displayName="Grid",B.__docgenInfo={description:"",displayName:"Grid",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"GridColumn[]"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"GridItem[]"}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"string"}},selectable:{defaultValue:{value:"false"},description:"",name:"selectable",required:!1,type:{name:"boolean"}},renderDataItem:{defaultValue:null,description:"",name:"renderDataItem",required:!1,type:{name:"RenderDataItemCallback"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((ids: string[]) => void)"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch(e){}const D=e=>a.jsx(B,p({},e));try{D.displayName="GridExample",D.__docgenInfo={description:"",displayName:"GridExample",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"GridColumn[]"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"GridItem[]"}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"string"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!1,type:{name:"boolean"}},renderDataItem:{defaultValue:null,description:"",name:"renderDataItem",required:!1,type:{name:"RenderDataItemCallback"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((ids: string[]) => void)"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch(e){}const Se={component:D,title:"Organisms/Grid"},f={args:{selectable:!1,renderDataItem:(e,t)=>t==="phone"?a.jsx("em",{children:e[t!=null?t:""]}):a.jsx("span",{children:e[t]}),caption:"Contact List",columns:[{title:"Company",field:"company"},{title:"Contact",field:"contact"},{title:"Country",field:"country"},{title:"Phone",field:"phone"}],data:[{id:"row1",company:"Alfreds Futterkiste",contact:"Maria Anders",country:"Germany",phone:"123-345-7890"},{id:"row2",company:"Centro comercial Moctezuma",contact:"Francisco Chang",country:"Mexico",phone:"123-345-7890"},{id:"row3",company:"Ernst Handel",contact:"Roland Mendel",country:"Austria",phone:"123-345-7890"},{id:"row4",company:"Island Trading",contact:"Helen Bennett",country:"UK",phone:"123-345-7890"},{id:"row5",company:"Laughing Bacchus Winecellars",contact:"Yoshi Tannamuri",country:"Canada",phone:"123-345-7890"},{id:"row6",company:"Magazzini Alimentari Riuniti",contact:"Giovanni Rovelli",country:"Italy",phone:"123-345-7890"}]}},g={args:{selectable:!0,onSelect:e=>console.log(e),columns:[{title:"Company",field:"company"},{title:"Contact",field:"contact"},{title:"Country",field:"country"},{title:"Phone",field:"phone"}],data:[{id:"row1",company:"Alfreds Futterkiste",contact:"Maria Anders",country:"Germany",phone:"123-345-7890"},{id:"row2",company:"Centro comercial Moctezuma",contact:"Francisco Chang",country:"Mexico",phone:"123-345-7890"},{id:"row3",company:"Ernst Handel",contact:"Roland Mendel",country:"Austria",phone:"123-345-7890"},{id:"row4",company:"Island Trading",contact:"Helen Bennett",country:"UK",phone:"123-345-7890"},{id:"row5",company:"Laughing Bacchus Winecellars",contact:"Yoshi Tannamuri",country:"Canada",phone:"123-345-7890"},{id:"row6",company:"Magazzini Alimentari Riuniti",contact:"Giovanni Rovelli",country:"Italy",phone:"123-345-7890"}]}};var K,U,O;f.parameters=m(p({},f.parameters),{docs:m(p({},(K=f.parameters)==null?void 0:K.docs),{source:p({originalSource:`{
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
}`},(O=(U=f.parameters)==null?void 0:U.docs)==null?void 0:O.source)})});var W,Y,J;g.parameters=m(p({},g.parameters),{docs:m(p({},(W=g.parameters)==null?void 0:W.docs),{source:p({originalSource:`{
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
}`},(J=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:J.source)})});const ve=["DefaultGrid","SelectableGrid"],ze=Object.freeze(Object.defineProperty({__proto__:null,DefaultGrid:f,SelectableGrid:g,__namedExportsOrder:ve,default:Se},Symbol.toStringTag,{value:"Module"}));export{ze as G};
