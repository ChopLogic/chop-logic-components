import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-WDqgAjPb.js";import{i as n,r}from"./react-Dxrh8G77.js";import{a as i,d as a,u as o}from"./blocks-D7cjmNaL.js";import{n as s,t as c}from"./RadioGroup.stories-DfTGno5h.js";function l(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...n(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o,{of:c,title:`Atoms/RadioGroup`}),`
`,(0,d.jsx)(t.h1,{id:`radiogroup`,children:`RadioGroup`}),`
`,(0,d.jsxs)(t.p,{children:[`The `,(0,d.jsx)(t.code,{children:`RadioGroup`}),` component is a customizable, accessible group of mutually exclusive radio options. It supports both stateful and stateless modes, vertical or horizontal layouts, group-level and per-option disabling, a loading state, and full keyboard navigation.`]}),`
`,(0,d.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,d.jsx)(t.h3,{id:`stateful-default`,children:`Stateful (Default)`}),`
`,(0,d.jsxs)(t.p,{children:[`When `,(0,d.jsx)(t.code,{children:`stateless`}),` is false or omitted, the component manages its own selection internally. Provide `,(0,d.jsx)(t.code,{children:`defaultValue`}),` to set the initially selected option and `,(0,d.jsx)(t.code,{children:`onChange`}),` to react to selection changes.`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { RadioGroup } from "chop-logic-components";

const options = [
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium" },
  { value: "large", label: "Large" },
];

<RadioGroup name="size" label="Select a size" options={options} defaultValue="medium" onChange={(value) => console.log(value)} />;
`})}),`
`,(0,d.jsx)(t.h3,{id:`stateless`,children:`Stateless`}),`
`,(0,d.jsxs)(t.p,{children:[`When `,(0,d.jsx)(t.code,{children:`stateless`}),` is true, the component is fully controlled via the `,(0,d.jsx)(t.code,{children:`value`}),` prop. You manage the selection externally and update it from `,(0,d.jsx)(t.code,{children:`onChange`}),`.`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`import { RadioGroup } from "chop-logic-components";

const options = [
  { value: "small", label: "Small" },
  { value: "medium", label: "Medium" },
  { value: "large", label: "Large" },
];

const [size, setSize] = useState("medium");

<RadioGroup name="size" label="Select a size" options={options} stateless value={size} onChange={setSize} />;
`})}),`
`,(0,d.jsx)(t.h3,{id:`orientation`,children:`Orientation`}),`
`,(0,d.jsxs)(t.p,{children:[`Options are laid out vertically by default. Set `,(0,d.jsx)(t.code,{children:`orientation="horizontal"`}),` to arrange them in a row.`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`<RadioGroup name="size" label="Select a size" options={options} orientation="horizontal" />
`})}),`
`,(0,d.jsx)(t.h3,{id:`disabled-and-loading-states`,children:`Disabled and loading states`}),`
`,(0,d.jsxs)(t.p,{children:[`Disable the whole group with `,(0,d.jsx)(t.code,{children:`disabled`}),`, disable a single option via the option's `,(0,d.jsx)(t.code,{children:`disabled`}),` flag, or set `,(0,d.jsx)(t.code,{children:`isLoading`}),` to block interaction while data is in flight.`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-tsx`,children:`// Disable the entire group
<RadioGroup name="size" label="Select a size" options={options} disabled />

// Disable a single option
<RadioGroup
  name="size"
  label="Select a size"
  options={[
    { value: "small", label: "Small" },
    { value: "medium", label: "Medium", disabled: true },
    { value: "large", label: "Large" },
  ]}
/>

// Loading state
<RadioGroup name="size" label="Select a size" options={options} isLoading />
`})}),`
`,(0,d.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:`Prop`}),(0,d.jsx)(t.th,{children:`Type`}),(0,d.jsx)(t.th,{children:`Default`}),(0,d.jsx)(t.th,{children:`Description`})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`options`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`RadioGroupOption[]`})}),(0,d.jsx)(t.td,{children:`—`}),(0,d.jsxs)(t.td,{children:[`Options to render. Each has `,(0,d.jsx)(t.code,{children:`value`}),`, `,(0,d.jsx)(t.code,{children:`label`}),`, and optional `,(0,d.jsx)(t.code,{children:`disabled`}),`.`]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`label`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`string`})}),(0,d.jsx)(t.td,{children:`—`}),(0,d.jsxs)(t.td,{children:[`Accessible label applied to the group via `,(0,d.jsx)(t.code,{children:`aria-label`}),`.`]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`name`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`string`})}),(0,d.jsx)(t.td,{children:`—`}),(0,d.jsxs)(t.td,{children:[`Shared `,(0,d.jsx)(t.code,{children:`name`}),` for the underlying radio inputs; also seeds the group `,(0,d.jsx)(t.code,{children:`id`}),`.`]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`orientation`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`'vertical' | 'horizontal'`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`'vertical'`})}),(0,d.jsx)(t.td,{children:`Layout direction of the options.`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`onChange`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`(value: string) => void`})}),(0,d.jsx)(t.td,{children:`—`}),(0,d.jsx)(t.td,{children:`Called with the selected value whenever the selection changes.`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`defaultValue`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`string`})}),(0,d.jsx)(t.td,{children:`—`}),(0,d.jsx)(t.td,{children:`Initially selected value in stateful mode.`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`value`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`string`})}),(0,d.jsx)(t.td,{children:`—`}),(0,d.jsxs)(t.td,{children:[`Controlled selected value used when `,(0,d.jsx)(t.code,{children:`stateless`}),` is true.`]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`stateless`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`boolean`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`false`})}),(0,d.jsxs)(t.td,{children:[`When true, selection is controlled externally via `,(0,d.jsx)(t.code,{children:`value`}),`.`]})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`disabled`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`boolean`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`false`})}),(0,d.jsx)(t.td,{children:`Disables the entire group.`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`isLoading`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`boolean`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`false`})}),(0,d.jsx)(t.td,{children:`Marks the group as busy and blocks interaction.`})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`required`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`boolean`})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:`false`})}),(0,d.jsxs)(t.td,{children:[`Marks a selection as required (`,(0,d.jsx)(t.code,{children:`aria-required`}),`).`]})]})]})]}),`
`,(0,d.jsxs)(t.p,{children:[`Each `,(0,d.jsx)(t.code,{children:`RadioGroupOption`}),` has the shape `,(0,d.jsx)(t.code,{children:`{ value: string; label: string; disabled?: boolean }`}),`.`]}),`
`,(0,d.jsx)(i,{}),`
`,(0,d.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`The container renders with `,(0,d.jsx)(t.code,{children:`role="radiogroup"`}),` and is labelled by the `,(0,d.jsx)(t.code,{children:`label`}),` prop through `,(0,d.jsx)(t.code,{children:`aria-label`}),`.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`aria-orientation`}),` reflects the current `,(0,d.jsx)(t.code,{children:`orientation`}),` so assistive technologies announce the layout.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`aria-required`}),` is set from the `,(0,d.jsx)(t.code,{children:`required`}),` prop, and `,(0,d.jsx)(t.code,{children:`aria-busy`}),` is set while `,(0,d.jsx)(t.code,{children:`isLoading`}),` is true.`]}),`
`,(0,d.jsxs)(t.li,{children:[`Selection state is exposed through the native radio inputs, so `,(0,d.jsx)(t.code,{children:`aria-checked`}),` semantics are handled by the browser.`]}),`
`,(0,d.jsxs)(t.li,{children:[`Keyboard support:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[`Tab moves focus into and out of the group as a single stop (roving `,(0,d.jsx)(t.code,{children:`tabindex`}),`); the selected option — or the first enabled option when nothing is selected — is the tab target.`]}),`
`,(0,d.jsx)(t.li,{children:`Arrow keys (Up/Down and Left/Right) move between options, wrapping at the boundaries and skipping disabled options.`}),`
`,(0,d.jsx)(t.li,{children:`Space selects the currently focused option.`}),`
`]}),`
`]}),`
`,(0,d.jsx)(t.li,{children:`Disabled options and disabled groups are removed from pointer and keyboard interaction.`}),`
`,(0,d.jsxs)(t.li,{children:[`Always pass a meaningful `,(0,d.jsx)(t.code,{children:`label`}),` so the group is announced correctly.`]}),`
`]}),`
`,(0,d.jsx)(t.h2,{id:`theming`,children:`Theming`}),`
`,(0,d.jsxs)(t.p,{children:[`The component is styled with pure CSS using the `,(0,d.jsx)(t.code,{children:`cl-`}),` prefixed BEM classes (`,(0,d.jsx)(t.code,{children:`.cl-radio-group`}),`, `,(0,d.jsx)(t.code,{children:`.cl-radio-group__option`}),`, `,(0,d.jsx)(t.code,{children:`.cl-radio-group__circle`}),`, `,(0,d.jsx)(t.code,{children:`.cl-radio-group__label`}),`) and consumes design tokens from `,(0,d.jsx)(t.code,{children:`src/styles/main.css`}),`. No colors or spacing are hard-coded.`]}),`
`,(0,d.jsx)(t.p,{children:`Key CSS variables used:`}),`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`--cl-accent-a0`}),` — fill and border color of the selected radio circle.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`--cl-base-font-color`}),` — default circle border and label text color.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`--cl-danger-a0`}),` — border and label color for the invalid state.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`--cl-surface-tonal-a0`}),` — hover background for enabled options.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.code,{children:`--cl-outline-border`}),` — focus outline shown on `,(0,d.jsx)(t.code,{children:`:focus-visible`}),`.`]}),`
`,(0,d.jsxs)(t.li,{children:[`Spacing (`,(0,d.jsx)(t.code,{children:`--cl-m-gap`}),`, `,(0,d.jsx)(t.code,{children:`--cl-s-gap`}),`, `,(0,d.jsx)(t.code,{children:`--cl-xs-gap`}),`), radius (`,(0,d.jsx)(t.code,{children:`--cl-border-radius`}),`), icon size (`,(0,d.jsx)(t.code,{children:`--cl-icon-size`}),`), and typography (`,(0,d.jsx)(t.code,{children:`--cl-core-font`}),`, `,(0,d.jsx)(t.code,{children:`--cl-typography-base-*`}),`).`]}),`
`]}),`
`,(0,d.jsxs)(t.p,{children:[`Light theme is the default (defined in `,(0,d.jsx)(t.code,{children:`:root`}),`). Dark theme activates automatically when the `,(0,d.jsx)(t.code,{children:`cl-components-dark-theme`}),` class is present on the document element:`]}),`
`,(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:`language-ts`,children:`document.documentElement.classList.add("cl-components-dark-theme");
`})}),`
`,(0,d.jsx)(t.p,{children:`All theme-aware variables switch values under that class, so the RadioGroup adapts to light and dark themes without any component-level changes.`}),`
`,(0,d.jsx)(t.h2,{id:`best-practices`,children:`Best Practices`}),`
`,(0,d.jsxs)(t.ol,{children:[`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Clear options`}),`: Use concise, mutually exclusive option labels.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Meaningful label`}),`: Always provide the `,(0,d.jsx)(t.code,{children:`label`}),` prop for accessibility.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Sensible defaults`}),`: Set `,(0,d.jsx)(t.code,{children:`defaultValue`}),` (stateful) or `,(0,d.jsx)(t.code,{children:`value`}),` (stateless) to a valid option.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Controlled vs uncontrolled`}),`:`,`
`,(0,d.jsxs)(t.ul,{children:[`
`,(0,d.jsx)(t.li,{children:`Use stateful mode (default) for simple, isolated groups.`}),`
`,(0,d.jsx)(t.li,{children:`Use stateless mode to integrate with external state management.`}),`
`]}),`
`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Orientation`}),`: Prefer vertical layout for long lists; use horizontal for a small number of short options.`]}),`
`,(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.em,{children:`Disabled options`}),`: Disable individual options rather than removing them when their availability may change.`]}),`
`]})]})}function u(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}var d;function f(){return(f=e((()=>{d=t(),r(),a(),s()})))()}f();export{u as default};