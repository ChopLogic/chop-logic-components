import { j as e } from './jsx-runtime-OAISXtky.js';
import { useMDXComponents as r } from './index-DOvxcyG1.js';
import { ae as s, af as i } from './index-BZ-G-mNy.js';
import { T as l, D as c } from './TextInput.stories-CmQxyakZ.js';
import './index-qVDZzPEr.js';
import './iframe-rVyc2Aj9.js';
import '../sb-preview/runtime.js';
import './index-DzcqJxd1.js';
import './index-D-8MO0q_.js';
import './index-D2o5vtt7.js';
import './index-DrFu-skq.js';
import './TextInput-Bou9Y0KU.js';
import './get-chop-logic-theme-C9Q9v90u.js';
import './chop-logic-form-context-lL0zfSzs.js';
import './index-B0wHt5J_.js';
function d(t) {
  const n = {
    a: 'a',
    code: 'code',
    h1: 'h1',
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
    ...r(),
    ...t.components,
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(s, { of: l, title: 'TextInput' }),
      `
`,
      e.jsx(n.h1, { id: 'choplogictextinput', children: 'ChopLogicTextInput' }),
      `
`,
      e.jsx(n.p, {
        children:
          'Styled component for entering text, email or password. Supports validation with custom error message and all standard HTML input attributes.',
      }),
      `
`,
      e.jsx(n.h3, { id: 'example', children: 'Example' }),
      `
`,
      e.jsx(i, { of: c }),
      `
`,
      e.jsx(n.h3, { id: 'usage', children: 'Usage' }),
      `
`,
      e.jsx(n.pre, {
        children: e.jsx(n.code, {
          className: 'language-tsx',
          children: `import { ChopLogicTextInput } from 'chop-logic-components';

const Example = () => {
  return (
    <ChopLogicTextInput
      label='Enter the formula:'
      name='formula'
      errorMessage='Only latin letters are allowed'
      validator={{ regexp: '^[A-Za-z ]+$' }}
      required
    />
  );
};

export default Example;
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
                  e.jsx(n.td, { children: e.jsx(n.strong, { children: 'name' }) }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'string' }) }),
                  e.jsx(n.td, { children: 'A string representing the name attribute of the component, used for form submissions.' }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'undefined' }) }),
                  e.jsx(n.td, { children: 'Yes' }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: e.jsx(n.strong, { children: 'label' }) }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'string' }) }),
                  e.jsx(n.td, { children: 'A string that represents the label for the component.' }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'undefined' }) }),
                  e.jsx(n.td, { children: 'Yes' }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: e.jsx(n.strong, { children: 'type' }) }),
                  e.jsxs(n.td, {
                    children: [
                      e.jsx(n.code, { children: "'text'" }),
                      ' or ',
                      e.jsx(n.code, { children: "'email'" }),
                      ' or ',
                      e.jsx(n.code, { children: "'password'" }),
                    ],
                  }),
                  e.jsx(n.td, { children: 'The input type attribute.' }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: "'text'" }) }),
                  e.jsx(n.td, { children: 'No' }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: e.jsx(n.strong, { children: 'placeholder' }) }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'string' }) }),
                  e.jsx(n.td, {
                    children:
                      'The placeholder property of the input interface represents a hint to the user of what can be entered in the control.',
                  }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: "'Type here...'" }) }),
                  e.jsx(n.td, { children: 'No' }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: e.jsx(n.strong, { children: 'defaultValue' }) }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'string' }) }),
                  e.jsx(n.td, { children: 'The string that will be supplied as the default value of the input.' }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'undefined' }) }),
                  e.jsx(n.td, { children: 'No' }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: e.jsx(n.strong, { children: 'clearable' }) }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'boolean' }) }),
                  e.jsx(n.td, { children: 'A boolean indicating whether to display the input clear button.' }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'false' }) }),
                  e.jsx(n.td, { children: 'No' }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: e.jsx(n.strong, { children: 'validator' }) }),
                  e.jsxs(n.td, {
                    children: [
                      e.jsx(n.code, { children: 'RegExpWithFlags' }),
                      ' or ',
                      e.jsx(n.code, { children: 'TextValidationFunction' }),
                    ],
                  }),
                  e.jsx(n.td, {
                    children:
                      'A function or regular expression that allows you to validate an input value and display an error message if validation fails.',
                  }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'undefined' }) }),
                  e.jsx(n.td, { children: 'No' }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: e.jsx(n.strong, { children: 'errorMessage' }) }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'string' }) }),
                  e.jsx(n.td, { children: 'An optional string that displays when the input value is incorrect.' }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'undefined' }) }),
                  e.jsx(n.td, { children: 'No' }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: e.jsx(n.strong, { children: 'onChange' }) }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'ChangeEventHandler' }) }),
                  e.jsx(n.td, {
                    children:
                      'A function that is called when a user type something in the input. It receives a ChangeEventHandler for handling the event on the input.',
                  }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'undefined' }) }),
                  e.jsx(n.td, { children: 'No' }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: e.jsx(n.strong, { children: 'onFocus' }) }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'FocusEventHandler' }) }),
                  e.jsx(n.td, { children: 'A function that is called when focus is set on the input.' }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'undefined' }) }),
                  e.jsx(n.td, { children: 'No' }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: e.jsx(n.strong, { children: 'onBlur' }) }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'FocusEventHandler' }) }),
                  e.jsx(n.td, { children: 'A function that is called when focus leaves the input.' }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'undefined' }) }),
                  e.jsx(n.td, { children: 'No' }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: e.jsx(n.strong, { children: 'onClear' }) }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: '() => void' }) }),
                  e.jsx(n.td, { children: 'A function that is called when the clear input button is clicked.' }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'undefined' }) }),
                  e.jsx(n.td, { children: 'No' }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: e.jsx(n.strong, { children: 'maxLength' }) }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'number' }) }),
                  e.jsx(n.td, { children: 'Maximum number of characters in the input.' }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'undefined' }) }),
                  e.jsx(n.td, { children: 'No' }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: e.jsx(n.strong, { children: 'autoComplete' }) }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'string' }) }),
                  e.jsxs(n.td, {
                    children: [
                      'The ',
                      e.jsx(n.a, {
                        href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete',
                        rel: 'nofollow',
                        children: 'HTML autocomplete attribute',
                      }),
                      '.',
                    ],
                  }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: '"off"' }) }),
                  e.jsx(n.td, { children: 'No' }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: e.jsx(n.strong, { children: 'disabled' }) }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'boolean' }) }),
                  e.jsx(n.td, { children: 'When disabled, the input cannot be interacted with.' }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'false' }) }),
                  e.jsx(n.td, { children: 'No' }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: e.jsx(n.strong, { children: 'required' }) }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'boolean' }) }),
                  e.jsx(n.td, { children: 'When required, the input must be filled before form submission.' }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'false' }) }),
                  e.jsx(n.td, { children: 'No' }),
                ],
              }),
              e.jsxs(n.tr, {
                children: [
                  e.jsx(n.td, { children: e.jsx(n.strong, { children: 'readOnly' }) }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'boolean' }) }),
                  e.jsx(n.td, { children: 'When readonly, the input cannot be changed.' }),
                  e.jsx(n.td, { children: e.jsx(n.code, { children: 'false' }) }),
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
          children: `export type ChopLogicTextInputProps = CommonInputProps & {
  errorMessage?: string;
  clearable?: boolean;
  readOnly?: boolean;
  type?: 'text' | 'email' | 'password';
  validator?: RegExpWithFlags | TextValidationFunction;
  maxLength?: number;
  placeholder?: string;
  defaultValue?: string;
  onClear?: () => void;
  autoComplete?: React.HTMLInputAutoCompleteAttribute;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
};

export type RegExpWithFlags = {
  regexp: string;
  flags?: string;
};

export type TextValidationFunction = (input: string) => boolean;

export type CommonInputProps = CommonComponentProps & {
  label: string;
  name: string;
  disabled?: boolean;
  required?: boolean;
};

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
function N(t = {}) {
  const { wrapper: n } = { ...r(), ...t.components };
  return n ? e.jsx(n, { ...t, children: e.jsx(d, { ...t }) }) : d(t);
}
export { N as default };
