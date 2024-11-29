import { j as t } from './jsx-runtime-OAISXtky.js';
import { d as p, o as s, a as u, g } from './get-chop-logic-theme-C9Q9v90u.js';
const d = p.button`
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline: none;
  transition: filter 250ms;
  width: ${(e) => (e.$extended ? '100%' : 'inherit')};

  &[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }

  .chop-logic-button_shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: ${(e) => e.theme.blockBorderRadius};
    background: hsl(0deg 0% 0% / 0.25);
    will-change: transform;
    transform: translateY(2px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }

  .chop-logic-button_edge {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: ${(e) => e.theme.blockBorderRadius};
    background: ${(e) => e.theme.primaryGradient};
  }

  .chop-logic-button_front {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${(e) => e.theme.smallGap};
    position: relative;
    padding: ${(e) => `${e.theme.mediumGap} ${e.theme.bigGap}`};
    border-radius: ${(e) => e.theme.blockBorderRadius};
    font-size: ${(e) => e.theme.baseFontSize};
    color: ${(e) => e.theme.backgroundColor};
    background: ${(e) => e.theme.secondaryColor};
    will-change: transform;
    transform: translateY(-4px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }

  &:hover {
    filter: brightness(110%);
  }

  &:hover .chop-logic-button_front {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  &:active .chop-logic-button_front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }

  &:hover .chop-logic-button_shadow {
    transform: translateY(4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  &:active .chop-logic-button_shadow {
    transform: translateY(1px);
    transition: transform 34ms;
  }

  &:focus-visible {
    outline: revert;
    outline: ${(e) => e.theme.outlineBorder};
    outline-offset: 4px;
  }
`,
  c = p.button`
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(e) => e.theme.smallGap};
  padding: ${(e) => `${e.theme.mediumGap} ${e.theme.bigGap}`};
  border-radius: ${(e) => e.theme.blockBorderRadius};
  font-size: ${(e) => e.theme.baseFontSize};
  color: ${(e) => e.theme.secondaryColor};
  background: transparent;
  width: ${(e) => (e.$extended ? '100%' : 'inherit')};

  &:hover,
  &:active {
    filter: brightness(110%);
    color: ${(e) => e.theme.backgroundColor};
    background: ${(e) => e.theme.secondaryColor};
    transition: all 0.3s ease 0s;
  }

  &:focus-visible {
    outline: ${(e) => e.theme.outlineBorder};
  }

  &[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
`,
  m = p.button`
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(e) => e.theme.mediumGap};
  border-radius: ${(e) => e.theme.blockBorderRadius};
  font-size: ${(e) => e.theme.baseFontSize};
  color: ${(e) => e.theme.primaryColor};
  background: transparent;

  &:hover {
    filter: drop-shadow(${(e) => e.theme.textShadow});
    color: ${(e) => e.theme.secondaryColor};
    transition: all 0.3s ease 0s;
  }

  &:focus-visible {
    outline: ${(e) => e.theme.outlineBorder};
  }

  &[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }

  svg {
    height: ${(e) => e.theme.iconSize};
    width: ${(e) => e.theme.iconSize};
  }
`;
try {
  (d.displayName = 'Styled3DButton'),
    (d.__docgenInfo = {
      description: '',
      displayName: 'Styled3DButton',
      props: {
        theme: { defaultValue: null, description: '', name: 'theme', required: !1, type: { name: 'DefaultTheme' } },
        as: { defaultValue: null, description: '', name: 'as', required: !1, type: { name: 'void | WebTarget' } },
        forwardedAs: { defaultValue: null, description: '', name: 'forwardedAs', required: !1, type: { name: 'void | WebTarget' } },
      },
    });
} catch {}
try {
  (c.displayName = 'StyledFlatButton'),
    (c.__docgenInfo = {
      description: '',
      displayName: 'StyledFlatButton',
      props: {
        theme: { defaultValue: null, description: '', name: 'theme', required: !1, type: { name: 'DefaultTheme' } },
        as: { defaultValue: null, description: '', name: 'as', required: !1, type: { name: 'void | WebTarget' } },
        forwardedAs: { defaultValue: null, description: '', name: 'forwardedAs', required: !1, type: { name: 'void | WebTarget' } },
      },
    });
} catch {}
try {
  (m.displayName = 'StyledIconButton'),
    (m.__docgenInfo = {
      description: '',
      displayName: 'StyledIconButton',
      props: {
        theme: { defaultValue: null, description: '', name: 'theme', required: !1, type: { name: 'DefaultTheme' } },
        as: { defaultValue: null, description: '', name: 'as', required: !1, type: { name: 'void | WebTarget' } },
        forwardedAs: { defaultValue: null, description: '', name: 'forwardedAs', required: !1, type: { name: 'void | WebTarget' } },
      },
    });
} catch {}
const $ = ({
  onClick: e,
  text: f,
  icon: a,
  label: n,
  disabled: r = !1,
  extended: h = !1,
  type: o = 'button',
  view: b = '3D',
  theme: v,
  ...l
}) => {
  const i = g(v);
  switch (b) {
    case '3D':
      return t.jsx(s, {
        theme: i,
        children: t.jsxs(d, {
          $extended: h,
          'aria-label': n,
          type: o,
          onClick: e,
          disabled: r,
          ...l,
          children: [
            t.jsx('span', { className: 'chop-logic-button_shadow' }),
            t.jsx('span', { className: 'chop-logic-button_edge' }),
            t.jsxs('span', { className: 'chop-logic-button_front', children: [t.jsx(u, { name: a }), f] }),
          ],
        }),
      });
    case 'flat':
      return t.jsx(s, {
        theme: i,
        children: t.jsxs(c, {
          $extended: h,
          'aria-label': n,
          type: o,
          onClick: e,
          disabled: r,
          ...l,
          children: [t.jsx(u, { name: a }), f],
        }),
      });
    case 'icon':
      return t.jsx(s, {
        theme: i,
        children: t.jsx(m, { 'aria-label': n, type: o, onClick: e, disabled: r, ...l, children: t.jsx(u, { name: a }) }),
      });
    default:
      return null;
  }
};
try {
  (Button.displayName = 'Button'),
    (Button.__docgenInfo = {
      description: '',
      displayName: 'Button',
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
        label: { defaultValue: null, description: '', name: 'label', required: !1, type: { name: 'string' } },
        name: { defaultValue: null, description: '', name: 'name', required: !1, type: { name: 'string' } },
        disabled: { defaultValue: { value: 'false' }, description: '', name: 'disabled', required: !1, type: { name: 'boolean' } },
        required: { defaultValue: null, description: '', name: 'required', required: !1, type: { name: 'boolean' } },
        onClick: {
          defaultValue: null,
          description: '',
          name: 'onClick',
          required: !1,
          type: { name: 'MouseEventHandler<HTMLButtonElement>' },
        },
        view: {
          defaultValue: { value: '3D' },
          description: '',
          name: 'view',
          required: !1,
          type: { name: 'enum', value: [{ value: '"icon"' }, { value: '"3D"' }, { value: '"flat"' }] },
        },
        icon: {
          defaultValue: null,
          description: '',
          name: 'icon',
          required: !1,
          type: {
            name: 'enum',
            value: [
              { value: '"arrow-down"' },
              { value: '"arrow-up"' },
              { value: '"back"' },
              { value: '"cancel"' },
              { value: '"checkbox-checked"' },
              { value: '"checkbox-unchecked"' },
              { value: '"check-mark"' },
              { value: '"chevron-down"' },
              { value: '"chevron-left"' },
              { value: '"chevron-right"' },
              { value: '"chevron-up"' },
              { value: '"clear"' },
              { value: '"copy"' },
              { value: '"cut"' },
              { value: '"delete"' },
              { value: '"download"' },
              { value: '"error"' },
              { value: '"forward"' },
              { value: '"help"' },
              { value: '"hide"' },
              { value: '"info"' },
              { value: '"paste"' },
              { value: '"question"' },
              { value: '"save"' },
              { value: '"show"' },
              { value: '"upload"' },
              { value: '"warning"' },
              { value: '"remove"' },
            ],
          },
        },
        text: { defaultValue: null, description: '', name: 'text', required: !1, type: { name: 'string' } },
        extended: { defaultValue: { value: 'false' }, description: '', name: 'extended', required: !1, type: { name: 'boolean' } },
        type: {
          defaultValue: { value: 'button' },
          description: '',
          name: 'type',
          required: !1,
          type: { name: 'enum', value: [{ value: '"button"' }, { value: '"reset"' }, { value: '"submit"' }] },
        },
      },
    });
} catch {}
export { $ as C };
