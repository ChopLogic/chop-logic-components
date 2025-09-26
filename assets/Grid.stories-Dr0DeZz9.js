var Z=Object.defineProperty,ee=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var $=(e,t,n)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))H.call(t,n)&&$(e,n,t[n]);if(w)for(var n of w(t))z.call(t,n)&&$(e,n,t[n]);return e},m=(e,t)=>ee(e,ne(t));var q=(e,t)=>{var n={};for(var l in e)H.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(e!=null&&w)for(var l of w(e))t.indexOf(l)<0&&z.call(e,l)&&(n[l]=e[l]);return n};import{j as a,r as te}from"./iframe-7UvCaPuN.js";import{g as b}from"./get-class-name-CHDn80c0.js";import{C as le,a as ae}from"./CheckboxUncheckedIcon-Bf1ZHiwb.js";import{L as re}from"./Label-DdwZtC2e.js";import{u as J}from"./use-element-ids-D_Vfufc9.js";function de({item:e,columns:t,renderDataItem:n}){const l=[];for(const r of t){let d;n&&e[r.field]?d=n(e,r.field):e[r.field]?d=e[r.field].toString():d="",l.push(d)}return l}const oe="_cell_veiud_1",ie={cell:oe},G=({value:e})=>a.jsx("td",{className:ie.cell,children:e});try{G.displayName="GridDataCell",G.__docgenInfo={description:"",displayName:"GridDataCell",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | ReactElement<unknown, string | JSXElementConstructor<any>>"}}}}}catch(e){}const ce="_checkbox_bpqws_2",se="_checkbox__disabled_bpqws_14",ue="_checkbox_input_bpqws_26",I={checkbox:ce,checkbox__disabled:se,checkbox_input:ue},C=o=>{var s=o,{name:e,label:t,disabled:n,required:l=!1,onChange:r,checked:d=!1}=s,i=q(s,["name","label","disabled","required","onChange","checked"]);const{elementId:u}=J(i==null?void 0:i.id),y=b([I.checkbox,{[I.checkbox__disabled]:!!n,[I.checkbox__checked]:d}]);return a.jsxs("div",{className:y,children:[a.jsx("input",{id:u,name:e,type:"checkbox",disabled:n,required:l,checked:d,onChange:r,className:I.checkbox_input}),a.jsx(re,{label:t,required:l,inputId:u,isTextHidden:!0,iconPosition:"left",icon:d?a.jsx(le,{}):a.jsx(ae,{})})]})};try{C.displayName="GridCheckbox",C.__docgenInfo={description:"",displayName:"GridCheckbox",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}}}catch(e){}const pe="_cell_veiud_1",me={cell:pe},V=({rowId:e,isRowSelected:t,selectRowById:n,deselectRowById:l,disabled:r})=>{const d=i=>{const{checked:o}=i.target;o?n(e):l(e)};return a.jsx("td",{className:me.cell,children:a.jsx(C,{label:"Select row",onChange:d,id:`select_row_${e}`,checked:t,disabled:r})})};try{V.displayName="SelectGridRowCell",V.__docgenInfo={description:"",displayName:"SelectGridRowCell",props:{rowId:{defaultValue:null,description:"",name:"rowId",required:!0,type:{name:"string"}},isRowSelected:{defaultValue:null,description:"",name:"isRowSelected",required:!0,type:{name:"boolean"}},selectRowById:{defaultValue:null,description:"",name:"selectRowById",required:!0,type:{name:"(id: string) => void"}},deselectRowById:{defaultValue:null,description:"",name:"deselectRowById",required:!0,type:{name:"(id: string) => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch(e){}const ye="_row_1qhna_1",_e="_row__selected_1qhna_5",T={row:ye,row__selected:_e},R=({rowId:e,selectRowById:t,deselectRowById:n,selectable:l,values:r,selectedIds:d,disabled:i})=>{const o=d.includes(e);return a.jsxs("tr",{className:b([T.row,{[T.row__selected]:o}]),children:[l&&a.jsx(V,{rowId:e,selectRowById:t,deselectRowById:n,isRowSelected:o,disabled:i}),r.map((s,u)=>a.jsx(G,{value:s},`row_${u}`))]})};try{R.displayName="GridRow",R.__docgenInfo={description:"",displayName:"GridRow",props:{rowId:{defaultValue:null,description:"",name:"rowId",required:!0,type:{name:"string"}},selectedIds:{defaultValue:null,description:"",name:"selectedIds",required:!0,type:{name:"string[]"}},selectRowById:{defaultValue:null,description:"",name:"selectRowById",required:!0,type:{name:"(id: string) => void"}},deselectRowById:{defaultValue:null,description:"",name:"deselectRowById",required:!0,type:{name:"(id: string) => void"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}},values:{defaultValue:null,description:"",name:"values",required:!0,type:{name:"(string | ReactElement<unknown, string | JSXElementConstructor<any>>)[]"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch(e){}const he="_body_1gm9g_1",fe={body:he},A=({selectRowById:e,deselectRowById:t,renderDataItem:n,selectedIds:l,selectable:r,data:d,columns:i})=>a.jsx("tbody",{className:fe.body,children:d.map(o=>{const s=de({item:o,columns:i,renderDataItem:n});return a.jsx(R,{rowId:o.id,disabled:o==null?void 0:o.disabled,selectRowById:e,deselectRowById:t,selectable:r,values:s,selectedIds:l},o.id)})});try{A.displayName="GridBody",A.__docgenInfo={description:"",displayName:"GridBody",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"GridItem[]"}},columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"GridColumn[]"}},selectedIds:{defaultValue:null,description:"",name:"selectedIds",required:!0,type:{name:"string[]"}},selectRowById:{defaultValue:null,description:"",name:"selectRowById",required:!0,type:{name:"(id: string) => void"}},deselectRowById:{defaultValue:null,description:"",name:"deselectRowById",required:!0,type:{name:"(id: string) => void"}},renderDataItem:{defaultValue:null,description:"",name:"renderDataItem",required:!1,type:{name:"RenderDataItemCallback"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}}}}}catch(e){}const ge="_column_s4wq6_1",be="_column__first_s4wq6_4",we="_column__highlighted_s4wq6_7",h={column:ge,column__first:be,column__highlighted:we},S=({columns:e,selectable:t})=>a.jsxs("colgroup",{children:[t&&a.jsx("col",{className:b([h.column,h.column__first])}),e.map((n,l)=>a.jsx("col",{className:b([h.column,n==null?void 0:n.className,{[h.column__first]:l===0&&!t,[h.column__highlighted]:!!(n!=null&&n.highlighted)}])},n==null?void 0:n.title))]});try{S.displayName="GridColumnGroup",S.__docgenInfo={description:"",displayName:"GridColumnGroup",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"GridColumn[]"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}}}}}catch(e){}const Ie=({data:e,id:t,onSelect:n})=>{const{elementId:l}=J(t),[r,d]=te.useState([]),i=e.map(c=>c.id),o=i.length===r.length,s=e.some(c=>c==null?void 0:c.disabled),u=c=>{d(c),n==null||n(c)};return{elementId:l,isAllSelected:o,isAllCheckboxDisabled:s,selectedIds:r,handleSelectAll:()=>{u(i)},handleDeselectAll:()=>{u([])},handleSelectRowById:c=>{const _=[...r,c];u(_)},handleDeselectRowById:c=>{const _=r.filter(x=>x!==c);u(_)}}},Ce="_grid_ion0k_1",xe="_grid_caption_ion0k_4",F={grid:Ce,grid_caption:xe},qe="_headerCell_wd2ft_1",Ge={headerCell:qe},k=({title:e,component:t})=>{var n;return a.jsx("th",{className:Ge.headerCell,children:(n=t!=null?t:e)!=null?n:""})};try{k.displayName="GridHeaderCell",k.__docgenInfo={description:"",displayName:"GridHeaderCell",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ReactElement<unknown, string | JSXElementConstructor<any>>"}}}}}catch(e){}const Ve="_headerCell_wd2ft_1",Re={headerCell:Ve},N=({gridId:e,isAllSelected:t,selectAll:n,deselectAll:l,disabled:r})=>{const d=i=>{const{checked:o}=i.target;o?n():l()};return a.jsx("th",{className:Re.headerCell,children:a.jsx(C,{label:"Select all rows",onChange:d,id:`select_all_${e}`,checked:t,disabled:r})})};try{N.displayName="SelectAllGridRowsCell",N.__docgenInfo={description:"",displayName:"SelectAllGridRowsCell",props:{gridId:{defaultValue:null,description:"",name:"gridId",required:!0,type:{name:"string"}},isAllSelected:{defaultValue:null,description:"",name:"isAllSelected",required:!0,type:{name:"boolean"}},selectAll:{defaultValue:null,description:"",name:"selectAll",required:!0,type:{name:"() => void"}},deselectAll:{defaultValue:null,description:"",name:"deselectAll",required:!0,type:{name:"() => void"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch(e){}const Ae="_head_1jka0_1",Se="_head_row_1jka0_11",L={head:Ae,head_row:Se},j=({columns:e,gridId:t,selectAll:n,deselectAll:l,selectable:r,isAllSelected:d,isAllCheckboxDisabled:i=!1})=>a.jsx("thead",{className:L.head,children:a.jsxs("tr",{className:L.head_row,children:[r&&a.jsx(N,{isAllSelected:d,disabled:i,gridId:t,selectAll:n,deselectAll:l}),e.map(o=>a.jsx(k,{title:o.title,component:o.component},`${o.title}_${t}`))]})});try{j.displayName="GridHead",j.__docgenInfo={description:"",displayName:"GridHead",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"GridColumn[]"}},gridId:{defaultValue:null,description:"",name:"gridId",required:!0,type:{name:"string"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!0,type:{name:"boolean"}},isAllSelected:{defaultValue:null,description:"",name:"isAllSelected",required:!0,type:{name:"boolean"}},isAllCheckboxDisabled:{defaultValue:{value:"false"},description:"",name:"isAllCheckboxDisabled",required:!1,type:{name:"boolean"}},selectAll:{defaultValue:null,description:"",name:"selectAll",required:!0,type:{name:"() => void"}},deselectAll:{defaultValue:null,description:"",name:"deselectAll",required:!0,type:{name:"() => void"}}}}}catch(e){}const v=u=>{var y=u,{columns:e,data:t,id:n,onSelect:l,renderDataItem:r,caption:d,selectable:i=!1,className:o}=y,s=q(y,["columns","data","id","onSelect","renderDataItem","caption","selectable","className"]);const{elementId:D,handleSelectAll:M,handleDeselectAll:E,isAllCheckboxDisabled:c,isAllSelected:_,handleDeselectRowById:x,handleSelectRowById:X,selectedIds:Q}=Ie({id:n,data:t,onSelect:l});return a.jsxs("table",m(p({},s),{className:b([F.grid,o]),children:[d&&a.jsx("caption",{className:F.grid_caption,children:d}),a.jsx(S,{columns:e,selectable:i}),a.jsx(j,{gridId:D,columns:e,selectable:i,selectAll:M,deselectAll:E,isAllSelected:_,isAllCheckboxDisabled:c}),a.jsx(A,{columns:e,data:t,selectable:i,selectRowById:X,deselectRowById:x,selectedIds:Q,renderDataItem:r})]}))};try{v.displayName="Grid",v.__docgenInfo={description:"",displayName:"Grid",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"GridColumn[]"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"GridItem[]"}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"string"}},selectable:{defaultValue:{value:"false"},description:"",name:"selectable",required:!1,type:{name:"boolean"}},renderDataItem:{defaultValue:null,description:"",name:"renderDataItem",required:!1,type:{name:"RenderDataItemCallback"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((ids: string[]) => void)"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch(e){}const B=e=>a.jsx(v,p({},e));try{B.displayName="GridExample",B.__docgenInfo={description:"",displayName:"GridExample",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"GridColumn[]"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"GridItem[]"}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"string"}},selectable:{defaultValue:null,description:"",name:"selectable",required:!1,type:{name:"boolean"}},renderDataItem:{defaultValue:null,description:"",name:"renderDataItem",required:!1,type:{name:"RenderDataItemCallback"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((ids: string[]) => void)"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}}}catch(e){}const ke={component:B,title:"Organisms/Grid"},f={args:{selectable:!1,renderDataItem:(e,t)=>t==="phone"?a.jsx("em",{children:e[t!=null?t:""]}):a.jsx("span",{children:e[t]}),caption:"Contact List",columns:[{title:"Company",field:"company"},{title:"Contact",field:"contact"},{title:"Country",field:"country"},{title:"Phone",field:"phone"}],data:[{id:"row1",company:"Alfreds Futterkiste",contact:"Maria Anders",country:"Germany",phone:"123-345-7890"},{id:"row2",company:"Centro comercial Moctezuma",contact:"Francisco Chang",country:"Mexico",phone:"123-345-7890"},{id:"row3",company:"Ernst Handel",contact:"Roland Mendel",country:"Austria",phone:"123-345-7890"},{id:"row4",company:"Island Trading",contact:"Helen Bennett",country:"UK",phone:"123-345-7890"},{id:"row5",company:"Laughing Bacchus Winecellars",contact:"Yoshi Tannamuri",country:"Canada",phone:"123-345-7890"},{id:"row6",company:"Magazzini Alimentari Riuniti",contact:"Giovanni Rovelli",country:"Italy",phone:"123-345-7890"}]}},g={args:{selectable:!0,onSelect:e=>console.log(e),columns:[{title:"Company",field:"company"},{title:"Contact",field:"contact"},{title:"Country",field:"country"},{title:"Phone",field:"phone"}],data:[{id:"row1",company:"Alfreds Futterkiste",contact:"Maria Anders",country:"Germany",phone:"123-345-7890"},{id:"row2",company:"Centro comercial Moctezuma",contact:"Francisco Chang",country:"Mexico",phone:"123-345-7890"},{id:"row3",company:"Ernst Handel",contact:"Roland Mendel",country:"Austria",phone:"123-345-7890"},{id:"row4",company:"Island Trading",contact:"Helen Bennett",country:"UK",phone:"123-345-7890"},{id:"row5",company:"Laughing Bacchus Winecellars",contact:"Yoshi Tannamuri",country:"Canada",phone:"123-345-7890"},{id:"row6",company:"Magazzini Alimentari Riuniti",contact:"Giovanni Rovelli",country:"Italy",phone:"123-345-7890"}]}};var P,U,K;f.parameters=m(p({},f.parameters),{docs:m(p({},(P=f.parameters)==null?void 0:P.docs),{source:p({originalSource:`{
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
}`},(K=(U=f.parameters)==null?void 0:U.docs)==null?void 0:K.source)})});var O,W,Y;g.parameters=m(p({},g.parameters),{docs:m(p({},(O=g.parameters)==null?void 0:O.docs),{source:p({originalSource:`{
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
}`},(Y=(W=g.parameters)==null?void 0:W.docs)==null?void 0:Y.source)})});const Ne=["DefaultGrid","SelectableGrid"],$e=Object.freeze(Object.defineProperty({__proto__:null,DefaultGrid:f,SelectableGrid:g,__namedExportsOrder:Ne,default:ke},Symbol.toStringTag,{value:"Module"}));export{$e as G};
