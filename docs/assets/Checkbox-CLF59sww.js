import { j as o } from './jsx-runtime-OAISXtky.js';
import { d as x, o as C, b as g, c as k, e as v, g as q } from './get-chop-logic-theme-C9Q9v90u.js';
import { r as m } from './index-qVDZzPEr.js';
import { C as _, u as V } from './chop-logic-form-context-lL0zfSzs.js';
import { u as I } from './index-B0wHt5J_.js';
const f = x.div`
  display: flex;
  gap: ${(e) => e.theme.smallGap};
  padding: ${(e) => e.theme.smallGap} 0;
  position: relative;
  overflow: hidden;

  & svg {
    color: ${(e) => e.theme.secondaryColor};
  }

  & label {
    cursor: pointer;
    gap: ${(e) => e.theme.smallGap};
    font-size: ${(e) => e.theme.baseFontSize} !important;
    &:hover,
    &:active {
      text-shadow: ${(e) => e.theme.textShadow};
    }
  }
  ${(e) =>
    e.$disabled &&
    `
      pointer-events: none;
      opacity: 0.5;
    `}

  & input {
    position: absolute;
    z-index: -1;
    opacity: 0;
    top: 4px;
    left: 0;
    margin: 0;

    &:focus-visible + label {
      outline: ${(e) => e.theme.outlineBorder};
      outline-offset: 2px;
    }
  }
`;
try {
  (f.displayName = 'StyledCheckbox'),
    (f.__docgenInfo = {
      description: '',
      displayName: 'StyledCheckbox',
      props: {
        theme: { defaultValue: null, description: '', name: 'theme', required: !1, type: { name: 'DefaultTheme' } },
        as: { defaultValue: null, description: '', name: 'as', required: !1, type: { name: 'void | WebTarget' } },
        forwardedAs: { defaultValue: null, description: '', name: 'forwardedAs', required: !1, type: { name: 'void | WebTarget' } },
      },
    });
} catch {}
function $({ defaultChecked: e, initialValues: t, name: a }) {
  return t && (t == null ? void 0 : t[a]) !== void 0 ? !!(t != null && t[a]) : !!e;
}
function j({ name: e, defaultChecked: t, onChange: a }) {
  const { onChangeFormInput: l, initialValues: r } = m.useContext(_),
    n = $({ initialValues: r, name: e, defaultChecked: t }),
    [u, d] = m.useState(n),
    c = (s) => {
      const i = s.target.checked;
      d(i), a == null || a(s), l == null || l({ name: e, value: i });
    },
    p = m.useCallback(() => {
      d(n), l == null || l({ name: e, value: n });
    }, [e]);
  return I(p), { handleChange: c, checked: u };
}
const E = ({
  name: e,
  label: t,
  disabled: a,
  noLabel: l,
  required: r = !1,
  iconPosition: n = 'left',
  defaultChecked: u,
  onChange: d,
  id: c,
  theme: p,
  ...s
}) => {
  const { handleChange: i, checked: h } = j({ name: e, defaultChecked: u, onChange: d }),
    { elementId: b } = V(c),
    y = q(p);
  return o.jsx(C, {
    theme: y,
    children: o.jsxs(f, {
      $disabled: !!a,
      ...s,
      children: [
        o.jsx('input', {
          id: b,
          name: e,
          type: 'checkbox',
          disabled: a,
          required: r,
          checked: h,
          onChange: i,
          'aria-label': l ? t : void 0,
        }),
        o.jsx(g, { label: t, required: r, inputId: b, isTextHidden: l, icon: h ? o.jsx(k, {}) : o.jsx(v, {}), iconPosition: n }),
      ],
    }),
  });
};
try {
  (Checkbox.displayName = 'Checkbox'),
    (Checkbox.__docgenInfo = {
      description: '',
      displayName: 'Checkbox',
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
        disabled: { defaultValue: null, description: '', name: 'disabled', required: !1, type: { name: 'boolean' } },
        required: { defaultValue: { value: 'false' }, description: '', name: 'required', required: !1, type: { name: 'boolean' } },
        noLabel: { defaultValue: null, description: '', name: 'noLabel', required: !1, type: { name: 'boolean' } },
        iconPosition: {
          defaultValue: { value: 'left' },
          description: '',
          name: 'iconPosition',
          required: !1,
          type: { name: 'enum', value: [{ value: '"left"' }, { value: '"right"' }] },
        },
        onChange: {
          defaultValue: null,
          description: '',
          name: 'onChange',
          required: !1,
          type: { name: 'ChangeEventHandler<HTMLInputElement>' },
        },
        defaultChecked: { defaultValue: null, description: '', name: 'defaultChecked', required: !1, type: { name: 'boolean' } },
      },
    });
} catch {}
export { E as C };
