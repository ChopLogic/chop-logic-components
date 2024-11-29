import { j as n } from './jsx-runtime-OAISXtky.js';
import { d as M, o as N, b as R, I as j, C as I, f as F, g as P } from './get-chop-logic-theme-C9Q9v90u.js';
import { r as m } from './index-qVDZzPEr.js';
import { C as A, u as G } from './chop-logic-form-context-lL0zfSzs.js';
import { u as W } from './index-B0wHt5J_.js';
function z({ value: e, required: a, validator: t }) {
  return a && !t && !e.length
    ? !1
    : t && typeof t == 'function'
      ? t(e)
      : t && typeof t == 'object'
        ? new RegExp(t.regexp, t == null ? void 0 : t.flags).test(e)
        : !0;
}
function D({ name: e, initialValues: a, defaultValue: t }) {
  return a && a != null && a[e] ? a[e].toString() : t && typeof t == 'string' ? t : '';
}
function O({ name: e, defaultValue: a, onChange: t, onClear: s, required: g, validator: x }) {
  const { onChangeFormInput: l, initialValues: v } = m.useContext(A),
    i = D({ initialValues: v, defaultValue: a, name: e }),
    [b, u] = m.useState(i),
    [V, o] = m.useState(!0),
    [r, d] = m.useState(!1),
    q = (h) => {
      const p = h.target.value,
        y = z({ value: p, required: g, validator: x });
      u(p), o(y), l == null || l({ name: e, value: p, valid: y }), t == null || t(h);
    },
    c = () => {
      u(''), o(!0), l == null || l({ name: e, value: '', valid: !0 }), s == null || s();
    },
    w = m.useCallback(() => {
      u(i), o(!0), l == null || l({ name: e, value: i, valid: !0 });
    }, [e]),
    f = () => {
      d(!r);
    };
  return W(w), { value: b, valid: V, passwordShown: r, handleChange: q, handleClear: c, togglePassword: f };
}
const T = M.div`
  display: flex;
  flex-direction: column;
  gap: ${(e) => e.theme.mediumGap};

  & > div:nth-child(2) {
    display: flex;
    gap: ${(e) => e.theme.smallGap};
    align-items: center;
    border: ${(e) => e.theme.regularBorder};
    border-radius: ${(e) => e.theme.blockBorderRadius};
    padding: ${(e) => e.theme.mediumGap};

    &:has(input:focus) {
      border: ${(e) => e.theme.outlineBorder};
    }

    &:has(input[aria-invalid='true']) {
      border: ${(e) => e.theme.accentBorder};
    }

    &:has(input[disabled]) {
      pointer-events: none;
      opacity: 0.5;
    }

    & > span:nth-child(2) {
      display: flex;
      gap: ${(e) => e.theme.smallGap};
      align-items: center;
      min-width: 0;
    }
  }

  & input {
    font-size: ${(e) => e.theme.baseFontSize};
    padding: 0;
    border: none;
    font-family: ${(e) => e.theme.coreFontFamily};
    color: ${(e) => e.theme.primaryColor};
    display: inline-block;
    background: transparent;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    flex-grow: 1;
    min-width: 0;

    &:focus-visible {
      outline: none;
    }

    &:placeholder-shown + span {
      display: none !important;
    }
  }
`;
try {
  (T.displayName = 'StyledTextInput'),
    (T.__docgenInfo = {
      description: '',
      displayName: 'StyledTextInput',
      props: {
        theme: { defaultValue: null, description: '', name: 'theme', required: !1, type: { name: 'DefaultTheme' } },
        as: { defaultValue: null, description: '', name: 'as', required: !1, type: { name: 'void | WebTarget' } },
        forwardedAs: { defaultValue: null, description: '', name: 'forwardedAs', required: !1, type: { name: 'void | WebTarget' } },
      },
    });
} catch {}
const Y = ({
  name: e,
  label: a,
  errorMessage: t,
  defaultValue: s,
  onChange: g,
  onBlur: x,
  onFocus: l,
  onClear: v,
  validator: i,
  maxLength: b,
  id: u,
  tabIndex: V,
  placeholder: o = 'Type here...',
  disabled: r = !1,
  required: d = !1,
  clearable: q = !0,
  readOnly: c = !1,
  autoComplete: w = 'off',
  type: f = 'text',
  theme: h,
  ...p
}) => {
  const {
      value: y,
      valid: C,
      handleChange: E,
      handleClear: $,
      passwordShown: _,
      togglePassword: B,
    } = O({ defaultValue: s, name: e, onChange: g, onClear: v, required: d, validator: i }),
    { elementId: L, errorId: S } = G(u),
    H = f === 'password',
    k = P(h);
  return n.jsx(N, {
    theme: k,
    children: n.jsxs(T, {
      ...p,
      children: [
        n.jsx(R, { label: a, required: d, inputId: L }),
        n.jsxs('div', {
          children: [
            n.jsx('input', {
              id: L,
              name: e,
              type: _ ? 'text' : f,
              disabled: r,
              placeholder: o,
              required: d,
              readOnly: c,
              autoComplete: w,
              'aria-invalid': !C,
              'aria-errormessage': S,
              'aria-readonly': c,
              value: y,
              onChange: E,
              maxLength: b,
              onBlur: x,
              onFocus: l,
              tabIndex: V,
            }),
            n.jsxs('span', {
              children: [
                q && n.jsx(j, { onClick: $, label: `Clear input for ${a}`, icon: I.Remove, disabled: r }),
                H && n.jsx(j, { onClick: B, label: 'Toggle password visibility', icon: _ ? I.Hide : I.Show, disabled: r }),
              ],
            }),
          ],
        }),
        n.jsx(F, { errorId: S, message: t, visible: !C }),
      ],
    }),
  });
};
try {
  (TextInput.displayName = 'TextInput'),
    (TextInput.__docgenInfo = {
      description: '',
      displayName: 'TextInput',
      props: {
        id: { defaultValue: null, description: '', name: 'id', required: !1, type: { name: 'string' } },
        className: { defaultValue: null, description: '', name: 'className', required: !1, type: { name: 'string' } },
        style: { defaultValue: null, description: '', name: 'style', required: !1, type: { name: 'CSSProperties' } },
        tabIndex: { defaultValue: null, description: '', name: 'tabIndex', required: !1, type: { name: 'number' } },
        title: { defaultValue: null, description: '', name: 'title', required: !1, type: { name: 'string' } },
        theme: {
          defaultValue: null,
          description: '',
          name: 'theme',
          required: !1,
          type: { name: 'enum', value: [{ value: '"dark"' }, { value: '"light"' }] },
        },
        label: { defaultValue: null, description: '', name: 'label', required: !0, type: { name: 'string' } },
        name: { defaultValue: null, description: '', name: 'name', required: !0, type: { name: 'string' } },
        disabled: { defaultValue: { value: 'false' }, description: '', name: 'disabled', required: !1, type: { name: 'boolean' } },
        required: { defaultValue: { value: 'false' }, description: '', name: 'required', required: !1, type: { name: 'boolean' } },
        errorMessage: { defaultValue: null, description: '', name: 'errorMessage', required: !1, type: { name: 'string' } },
        clearable: { defaultValue: { value: 'true' }, description: '', name: 'clearable', required: !1, type: { name: 'boolean' } },
        readOnly: { defaultValue: { value: 'false' }, description: '', name: 'readOnly', required: !1, type: { name: 'boolean' } },
        type: {
          defaultValue: { value: 'text' },
          description: '',
          name: 'type',
          required: !1,
          type: { name: 'enum', value: [{ value: '"text"' }, { value: '"email"' }, { value: '"password"' }] },
        },
        validator: {
          defaultValue: null,
          description: '',
          name: 'validator',
          required: !1,
          type: { name: 'RegExpWithFlags | TextValidationFunction' },
        },
        maxLength: { defaultValue: null, description: '', name: 'maxLength', required: !1, type: { name: 'number' } },
        placeholder: {
          defaultValue: { value: 'Type here...' },
          description: '',
          name: 'placeholder',
          required: !1,
          type: { name: 'string' },
        },
        defaultValue: { defaultValue: null, description: '', name: 'defaultValue', required: !1, type: { name: 'string' } },
        autoComplete: {
          defaultValue: { value: 'off' },
          description: '',
          name: 'autoComplete',
          required: !1,
          type: { name: 'HTMLInputAutoCompleteAttribute' },
        },
        onClear: { defaultValue: null, description: '', name: 'onClear', required: !1, type: { name: '(() => void)' } },
        onChange: {
          defaultValue: null,
          description: '',
          name: 'onChange',
          required: !1,
          type: { name: 'ChangeEventHandler<HTMLInputElement>' },
        },
        onBlur: {
          defaultValue: null,
          description: '',
          name: 'onBlur',
          required: !1,
          type: { name: 'FocusEventHandler<HTMLInputElement>' },
        },
        onFocus: {
          defaultValue: null,
          description: '',
          name: 'onFocus',
          required: !1,
          type: { name: 'FocusEventHandler<HTMLInputElement>' },
        },
      },
    });
} catch {}
export { Y as C };
