import { j as e } from './jsx-runtime-OAISXtky.js';
import { useMDXComponents as i } from './index-DOvxcyG1.js';
import { ae as o, af as d, ag as s } from './index-BZ-G-mNy.js';
import { C as c, D as l } from './Form.stories-ygCZxxDx.js';
import './index-qVDZzPEr.js';
import './iframe-rVyc2Aj9.js';
import '../sb-preview/runtime.js';
import './index-DzcqJxd1.js';
import './index-D-8MO0q_.js';
import './index-D2o5vtt7.js';
import './index-DrFu-skq.js';
import './Button--7gU6zvB.js';
import './get-chop-logic-theme-C9Q9v90u.js';
import './Checkbox-CLF59sww.js';
import './chop-logic-form-context-lL0zfSzs.js';
import './index-B0wHt5J_.js';
import './MultiSelect-D4Q7nsBa.js';
import './Select.styled-C_20FPH2.js';
import './index-Bg4JDWSn.js';
import './index-BeH7sH-W.js';
import './NumericInput-DS56Xw2R.js';
import './Select-BBYs4roD.js';
import './TextInput-Bou9Y0KU.js';
import './Tabs-CmX9zseh.js';
import './index-7QOc-elU.js';
import './index-hbHCpJbS.js';
import './index-DOKHOwXh.js';
import './index-D9uBcq_H.js';
import './index-CeXmpD0I.js';
function r(t) {
  const n = {
    code: 'code',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    p: 'p',
    pre: 'pre',
    strong: 'strong',
    table: 'table',
    tbody: 'tbody',
    td: 'td',
    th: 'th',
    thead: 'thead',
    tr: 'tr',
    ...i(),
    ...t.components,
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(o, { of: c, title: 'Form' }),
      `
`,
      e.jsx(n.h1, { id: 'choplogicform', children: 'ChopLogicForm' }),
      `
`,
      e.jsxs(n.p, {
        children: [
          'The ',
          e.jsx(n.code, { children: 'ChopLogicForm' }),
          ' component is a wrapper for one or more inputs. It collects values of these inputs, validates them, and passes them to the handler function when the Submit button is clicked. The component works with both Chop Logic inputs and default HTML inputs.',
        ],
      }),
      `
`,
      e.jsx(d, { children: e.jsx(s, { of: l }) }),
      `
`,
      e.jsx(n.h2, { id: 'usage', children: 'Usage' }),
      `
`,
      e.jsx(n.pre, {
        children: e.jsx(n.code, {
          className: 'language-tsx',
          children: `import React from 'react';
import {ChopLogicForm, ChopLogicTextInput, ChopLogicNumericInput} from 'chop-logic-components';

const INITIAL_VALUES = {
  firstName: 'John',
  lastName: 'Doe',
  age: 42
}

const ExampleComponent = () => (
  <ChopLogicForm initialValues={INITIAL_VALUES} columns={2}>
    <ChopLogicTextInput name='firstName' id='first-name' label='First Name' />
    <ChopLogicTextInput name='lastName' id='last-name' label='Last Name' />
    <ChopLogicNumericInput name='age' id='age' label='Age' />
  </ChopLogicForm>
);

export default ExampleComponent;
`,
        }),
      }),
      `
`,
      e.jsx(n.h3, { id: 'props', children: 'Props' }),
      `
`,
      e.jsxs(n.table, {
        children: [
          e.jsx(n.thead, {
            children: e.jsxs(n.tr, {
              children: [
                e.jsx(n.th, { children: 'Prop' }),
                e.jsx(n.th, { children: 'Type' }),
                e.jsx(n.th, { children: 'Description' }),
                e.jsx(n.th, { children: 'Default' }),
                e.jsx(n.th, { children: 'Required' }),
              ],
            }),
          }),
          e.jsxs(n.tbody, {
            children: [
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: e.jsx(n.strong, { children: 'children' }) }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'ReactNode' }) }),
                  e.jsx(n.td, { children: 'Inputs, buttons, and other elements that will be rendered inside the form.' }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'undefined' }) }),
                  e.jsx(n.td, { children: 'No' }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: e.jsx(n.strong, { children: 'columns' }) }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'number' }) }),
                  e.jsx(n.td, { children: 'Number of columns in the form.' }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: '1' }) }),
                  e.jsx(n.td, { children: 'No' }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: e.jsx(n.strong, { children: 'initialValues' }) }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'ChopLogicFormData' }) }),
                  e.jsx(n.td, { children: 'Object with default values for form inputs.' }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'undefined' }) }),
                  e.jsx(n.td, { children: 'No' }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: e.jsx(n.strong, { children: 'hasReset' }) }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'boolean' }) }),
                  e.jsx(n.td, { children: 'Indicator of whether the form has the Reset button' }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'true' }) }),
                  e.jsx(n.td, { children: 'No' }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: e.jsx(n.strong, { children: 'onClickSubmit' }) }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: '(data: ChopLogicFormData) => void' }) }),
                  e.jsx(n.td, {
                    children:
                      'Function that will be called when the Submit button is clicked. It will receive an object with the current input values as a parameter.',
                  }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'undefined' }) }),
                  e.jsx(n.td, { children: 'No' }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: e.jsx(n.strong, { children: 'id' }) }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'string' }) }),
                  e.jsx(n.td, {
                    children: 'The id global attribute defines an identifier (ID) which must be unique in the whole document.',
                  }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'undefined' }) }),
                  e.jsx(n.td, { children: 'No' }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: e.jsx(n.strong, { children: 'className' }) }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'string' }) }),
                  e.jsx(n.td, { children: 'The class global attribute is a list of the classes of the element.' }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'undefined' }) }),
                  e.jsx(n.td, { children: 'No' }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: e.jsx(n.strong, { children: 'style' }) }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'CSSProperties' }) }),
                  e.jsx(n.td, { children: 'The style global attribute contains CSS styling declarations to be applied to the element.' }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'undefined' }) }),
                  e.jsx(n.td, { children: 'No' }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: e.jsx(n.strong, { children: 'tabIndex' }) }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'number' }) }),
                  e.jsx(n.td, { children: 'The tabindex global attribute allows developers to make HTML elements focusable.' }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'undefined' }) }),
                  e.jsx(n.td, { children: 'No' }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: e.jsx(n.strong, { children: 'title' }) }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'string' }) }),
                  e.jsx(n.td, {
                    children:
                      'The title global attribute contains text representing advisory information related to the element it belongs to.',
                  }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'undefined' }) }),
                  e.jsx(n.td, { children: 'No' }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: e.jsx(n.strong, { children: 'theme' }) }),
                  e.jsxs(n.td, { children: [e.jsx(n.code, { children: "'light'" }), ' or ', e.jsx(n.code, { children: "'dark'" })] }),
                  e.jsx(n.td, { children: "The component's color theme." }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'undefined' }) }),
                  e.jsx(n.td, { children: 'No' }),
                ],
              }),
            ],
          }),
        ],
      }),
      `
`,
      e.jsx(n.h3, { id: 'types', children: 'Types' }),
      `
`,
      e.jsx(n.pre, {
        children: e.jsx(n.code, {
          className: 'language-ts',
          children: `export type ChopLogicFormProps = React.PropsWithChildren &
  CommonComponentProps & {
    columns?: number;
    initialValues?: ChopLogicFormData;
    hasReset?: boolean;
    onClickSubmit?: (data: ChopLogicFormData) => void;
    onReset?: React.FormEventHandler<HTMLFormElement>;
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
  };

export type ChopLogicFormData = { [key: string]: unknown };

export type ChopLogicFormContextProps = {
  onChangeFormInput?: (params: ChopLogicFormInputParams) => void;
  initialValues?: ChopLogicFormData;
  resetSignal?: number;
};

export type ChopLogicFormInputParams = { name: string; value: unknown; valid?: boolean };

export type CommonComponentProps = {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  tabIndex?: number;
  title?: string;
  theme?: 'dark' | 'light';
};
`,
        }),
      }),
    ],
  });
}
function _(t = {}) {
  const { wrapper: n } = { ...i(), ...t.components };
  return n ? e.jsx(n, { ...t, children: e.jsx(r, { ...t }) }) : r(t);
}
export { _ as default };
