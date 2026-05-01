export declare const CL_LIGHT_THEME_CLASS = "cl-components-light-theme";
export declare const CL_DARK_THEME_CLASS = "cl-components-dark-theme";
type ThemeMode = typeof CL_LIGHT_THEME_CLASS | typeof CL_DARK_THEME_CLASS;
export declare const ThemeContext: import('../../../../node_modules/react').Context<{
    mode?: ThemeMode;
    setMode: (mode: ThemeMode) => void;
}>;
export {};
