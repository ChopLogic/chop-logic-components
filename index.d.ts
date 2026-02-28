import { AnchorHTMLAttributes } from 'react';
import { ButtonHTMLAttributes } from 'react';
import { ChangeEventHandler } from 'react';
import { ComponentType } from 'react';
import { Context } from 'react';
import { CSSProperties } from 'react';
import { FC } from 'react';
import { FocusEventHandler } from 'react';
import { FormEventHandler } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { HTMLAttributes } from 'react';
import { HTMLInputAutoCompleteAttribute } from 'react';
import { InputHTMLAttributes } from 'react';
import { MouseEvent as MouseEvent_2 } from 'react';
import { PropsWithChildren } from 'react';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import { ReactPortal } from 'react';
import { RefAttributes } from 'react';
import { RefObject } from 'react';

export declare const Accordion: FC<AccordionProps>;

export declare type AccordionItemProps = PropsWithChildren & {
    summary: string;
};

export declare interface AccordionProps extends ChopLogicComponentProps {
    items: AccordionItemProps[];
}

export declare const Alert: FC<AlertProps>;

export declare enum AlertMode {
    Success = "success",
    Error = "error",
    Warning = "warning",
    Info = "info",
    Help = "help"
}

export declare interface AlertProps extends ChopLogicComponentProps {
    isOpened: boolean;
    onClose: () => void;
    message: string;
    mode?: AlertMode;
    icon?: IconName;
    autoClose?: boolean;
    autoCloseDelay?: number;
}

export declare interface Breadcrumb {
    label: string;
    icon?: IconName;
    link?: string;
}

export declare const Breadcrumbs: FC<BreadcrumbsProps>;

export declare interface BreadcrumbsProps extends ChopLogicComponentProps {
    items: Breadcrumb[];
}

export declare const Button: FC<ButtonProps & {
    tooltip?: string;
    visibleOn?: "hover" | "click" | "focus" | "contextmenu";
}>;

export declare interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    view?: ButtonView;
    icon?: IconName;
    text?: string;
    extended?: boolean;
    tooltip?: string;
    label?: string;
    iconSize?: ElementSize;
}

export declare enum ButtonView {
    Primary = "primary",
    Secondary = "secondary",
    Icon = "icon",
    Inner = "inner"
}

/**
 * Checkbox component factory
 * Renders either a stateful or stateless component
 * based on the `stateless` prop.
 */
export declare const Checkbox: FC<CheckboxProps>;

export declare interface CheckboxProps extends ChopLogicInputProps {
    noLabel?: boolean;
    iconPosition?: 'left' | 'right';
    onChange?: ChangeEventHandler<HTMLInputElement>;
    defaultChecked?: boolean;
    checked?: boolean;
}

export declare interface ChopLogicComponentProps {
    id?: string;
    className?: string;
    style?: CSSProperties;
    tabIndex?: number;
    title?: string;
}

export declare interface ChopLogicInputProps extends ChopLogicComponentProps {
    label: string;
    name: string;
    disabled?: boolean;
    required?: boolean;
    stateless?: boolean;
    value?: string | number | readonly string[];
}

export declare type ChopLogicRegExpWithFlags = {
    regexp: string;
    flags?: string;
};

export declare interface ChopLogicTabItem {
    content: ReactElement;
    title: string;
    id: string;
    disabled?: boolean;
}

export declare const CL_DARK_THEME_CLASS = "cl-components-dark-theme";

export declare const CL_LIGHT_THEME_CLASS = "cl-components-light-theme";

export declare const Dialog: FC<DialogProps>;

export declare interface DialogProps extends ChopLogicComponentProps, PropsWithChildren {
    isOpened: boolean;
    onClose: () => void;
    title: string;
    icon?: IconName;
}

export declare type Dimensions = {
    width: number;
    height: number;
};

export declare const EditableText: FC<EditableTextProps>;

export declare interface EditableTextProps extends ChopLogicComponentProps {
    value: string;
    autoSelectTextOnEditMode?: boolean;
    isEditMode?: boolean;
    multiline?: boolean;
    onChange?: (value: string) => void;
    onClick?: (event: MouseEvent_2) => void;
    placeholder?: string;
    readOnly?: boolean;
}

export declare enum ElementSize {
    ExtraSmall = "xs",
    Small = "s",
    Medium = "m",
    Large = "l",
    ExtraLarge = "xl",
    ExtraExtraLarge = "2xl"
}

export declare const ErrorMessage: FC<ErrorMessageProps>;

declare type ErrorMessageProps = {
    errorId: string;
    visible?: boolean;
    message?: string;
    testId?: string;
    className?: string;
};

export declare const Form: FC<FormProps>;

export declare const FormContext: Context<FormContextProps>;

export declare interface FormContextProps {
    onChangeFormInput?: (params: FormInputParams) => void;
    initialValues?: FormValues;
    resetSignal?: number;
}

export declare interface FormInputParams {
    name: string;
    value: unknown;
    valid?: boolean;
}

export declare interface FormProps extends PropsWithChildren, ChopLogicComponentProps {
    initialValues?: FormValues;
    hasReset?: boolean;
    onClickSubmit?: (data: FormValues) => void;
    onReset?: FormEventHandler<HTMLFormElement>;
    onSubmit?: FormEventHandler<HTMLFormElement>;
}

export declare type FormValidationState = [string, boolean][];

export declare type FormValues = {
    [key: string]: unknown;
};

export declare const Grid: FC<GridProps>;

export declare type GridColumn = {
    field: string;
    title?: string;
    component?: ReactElement;
    highlighted?: boolean;
    className?: string;
};

export declare type GridItem = {
    id: string;
    disabled?: boolean;
    [key: string]: unknown;
};

export declare interface GridProps extends ChopLogicComponentProps {
    columns: GridColumn[];
    data: GridItem[];
    caption?: string;
    selectable?: boolean;
    renderDataItem?: RenderDataItemCallback;
    onSelect?: (ids: string[]) => void;
}

export declare type GridRowValue = {
    field: string;
    value: string | ReactElement;
};

export declare const Header: FC<HeaderProps>;

declare type HeaderLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export declare interface HeaderProps extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
    as?: HeaderLevel;
    icon?: IconName;
}

export declare const Icon: FC<IconProps>;

export declare enum IconName {
    Activity = "chop-icon__activity",
    Airplay = "chop-icon__airplay",
    AlertCircle = "chop-icon__alert-circle",
    AlertOctagon = "chop-icon__alert-octagon",
    AlertTriangle = "chop-icon__alert-triangle",
    AlignCenter = "chop-icon__align-center",
    AlignJustify = "chop-icon__align-justify",
    AlignLeft = "chop-icon__align-left",
    AlignRight = "chop-icon__align-right",
    Anchor = "chop-icon__anchor",
    Aperture = "chop-icon__aperture",
    Archive = "chop-icon__archive",
    ArrowDown = "chop-icon__arrow-down",
    ArrowDownCircle = "chop-icon__arrow-down-circle",
    ArrowDownLeft = "chop-icon__arrow-down-left",
    ArrowDownRight = "chop-icon__arrow-down-right",
    ArrowLeft = "chop-icon__arrow-left",
    ArrowLeftCircle = "chop-icon__arrow-left-circle",
    ArrowRight = "chop-icon__arrow-right",
    ArrowRightCircle = "chop-icon__arrow-right-circle",
    ArrowUp = "chop-icon__arrow-up",
    ArrowUpCircle = "chop-icon__arrow-up-circle",
    ArrowUpLeft = "chop-icon__arrow-up-left",
    ArrowUpRight = "chop-icon__arrow-up-right",
    AtSign = "chop-icon__at-sign",
    Award = "chop-icon__award",
    BarChart = "chop-icon__bar-chart",
    BarChart2 = "chop-icon__bar-chart-2",
    Battery = "chop-icon__battery",
    BatteryCharging = "chop-icon__battery-charging",
    Bell = "chop-icon__bell",
    BellOff = "chop-icon__bell-off",
    Bluetooth = "chop-icon__bluetooth",
    Bold = "chop-icon__bold",
    Book = "chop-icon__book",
    BookOpen = "chop-icon__book-open",
    Bookmark = "chop-icon__bookmark",
    Box = "chop-icon__box",
    Briefcase = "chop-icon__briefcase",
    Calendar = "chop-icon__calendar",
    Camera = "chop-icon__camera",
    CameraOff = "chop-icon__camera-off",
    Cast = "chop-icon__cast",
    Check = "chop-icon__check",
    CheckCircle = "chop-icon__check-circle",
    CheckSquare = "chop-icon__check-square",
    ChevronDown = "chop-icon__chevron-down",
    ChevronLeft = "chop-icon__chevron-left",
    ChevronRight = "chop-icon__chevron-right",
    ChevronUp = "chop-icon__chevron-up",
    ChevronsDown = "chop-icon__chevrons-down",
    ChevronsLeft = "chop-icon__chevrons-left",
    ChevronsRight = "chop-icon__chevrons-right",
    ChevronsUp = "chop-icon__chevrons-up",
    Chrome = "chop-icon__chrome",
    Circle = "chop-icon__circle",
    Clipboard = "chop-icon__clipboard",
    Clock = "chop-icon__clock",
    Cloud = "chop-icon__cloud",
    CloudDrizzle = "chop-icon__cloud-drizzle",
    CloudLightning = "chop-icon__cloud-lightning",
    CloudOff = "chop-icon__cloud-off",
    CloudRain = "chop-icon__cloud-rain",
    CloudSnow = "chop-icon__cloud-snow",
    Code = "chop-icon__code",
    Codepen = "chop-icon__codepen",
    Codesandbox = "chop-icon__codesandbox",
    Coffee = "chop-icon__coffee",
    Columns = "chop-icon__columns",
    Command = "chop-icon__command",
    Compass = "chop-icon__compass",
    Copy = "chop-icon__copy",
    CornerDownLeft = "chop-icon__corner-down-left",
    CornerDownRight = "chop-icon__corner-down-right",
    CornerLeftDown = "chop-icon__corner-left-down",
    CornerLeftUp = "chop-icon__corner-left-up",
    CornerRightDown = "chop-icon__corner-right-down",
    CornerRightUp = "chop-icon__corner-right-up",
    CornerUpLeft = "chop-icon__corner-up-left",
    CornerUpRight = "chop-icon__corner-up-right",
    Cpu = "chop-icon__cpu",
    CreditCard = "chop-icon__credit-card",
    Crop = "chop-icon__crop",
    Crosshair = "chop-icon__crosshair",
    Database = "chop-icon__database",
    Delete = "chop-icon__delete",
    Disc = "chop-icon__disc",
    DollarSign = "chop-icon__dollar-sign",
    Download = "chop-icon__download",
    DownloadCloud = "chop-icon__download-cloud",
    Droplet = "chop-icon__droplet",
    Edit = "chop-icon__edit",
    Edit2 = "chop-icon__edit-2",
    Edit3 = "chop-icon__edit-3",
    ExternalLink = "chop-icon__external-link",
    Eye = "chop-icon__eye",
    EyeOff = "chop-icon__eye-off",
    Facebook = "chop-icon__facebook",
    FastForward = "chop-icon__fast-forward",
    Feather = "chop-icon__feather",
    Figma = "chop-icon__figma",
    File = "chop-icon__file",
    FileMinus = "chop-icon__file-minus",
    FilePlus = "chop-icon__file-plus",
    FileText = "chop-icon__file-text",
    Film = "chop-icon__film",
    Filter = "chop-icon__filter",
    Flag = "chop-icon__flag",
    Folder = "chop-icon__folder",
    FolderMinus = "chop-icon__folder-minus",
    FolderPlus = "chop-icon__folder-plus",
    Framer = "chop-icon__framer",
    Frown = "chop-icon__frown",
    Gift = "chop-icon__gift",
    GitBranch = "chop-icon__git-branch",
    GitCommit = "chop-icon__git-commit",
    GitMerge = "chop-icon__git-merge",
    GitPullRequest = "chop-icon__git-pull-request",
    Github = "chop-icon__github",
    Gitlab = "chop-icon__gitlab",
    Globe = "chop-icon__globe",
    Grid = "chop-icon__grid",
    HardDrive = "chop-icon__hard-drive",
    Hash = "chop-icon__hash",
    Headphones = "chop-icon__headphones",
    Heart = "chop-icon__heart",
    HelpCircle = "chop-icon__help-circle",
    Hexagon = "chop-icon__hexagon",
    Home = "chop-icon__home",
    Image = "chop-icon__image",
    Inbox = "chop-icon__inbox",
    Info = "chop-icon__info",
    Instagram = "chop-icon__instagram",
    Italic = "chop-icon__italic",
    Key = "chop-icon__key",
    Layers = "chop-icon__layers",
    Layout = "chop-icon__layout",
    LifeBuoy = "chop-icon__life-buoy",
    Link = "chop-icon__link",
    Link2 = "chop-icon__link-2",
    Linkedin = "chop-icon__linkedin",
    List = "chop-icon__list",
    Loader = "chop-icon__loader",
    Lock = "chop-icon__lock",
    LogIn = "chop-icon__log-in",
    LogOut = "chop-icon__log-out",
    Mail = "chop-icon__mail",
    Map = "chop-icon__map",
    MapPin = "chop-icon__map-pin",
    Maximize = "chop-icon__maximize",
    Maximize2 = "chop-icon__maximize-2",
    Meh = "chop-icon__meh",
    Menu = "chop-icon__menu",
    MessageCircle = "chop-icon__message-circle",
    MessageSquare = "chop-icon__message-square",
    Mic = "chop-icon__mic",
    MicOff = "chop-icon__mic-off",
    Minimize = "chop-icon__minimize",
    Minimize2 = "chop-icon__minimize-2",
    Minus = "chop-icon__minus",
    MinusCircle = "chop-icon__minus-circle",
    MinusSquare = "chop-icon__minus-square",
    Monitor = "chop-icon__monitor",
    Moon = "chop-icon__moon",
    MoreHorizontal = "chop-icon__more-horizontal",
    MoreVertical = "chop-icon__more-vertical",
    MousePointer = "chop-icon__mouse-pointer",
    Move = "chop-icon__move",
    Music = "chop-icon__music",
    Navigation = "chop-icon__navigation",
    Navigation2 = "chop-icon__navigation-2",
    Octagon = "chop-icon__octagon",
    Package = "chop-icon__package",
    Paperclip = "chop-icon__paperclip",
    Pause = "chop-icon__pause",
    PauseCircle = "chop-icon__pause-circle",
    PenTool = "chop-icon__pen-tool",
    Percent = "chop-icon__percent",
    Phone = "chop-icon__phone",
    PhoneCall = "chop-icon__phone-call",
    PhoneForwarded = "chop-icon__phone-forwarded",
    PhoneIncoming = "chop-icon__phone-incoming",
    PhoneMissed = "chop-icon__phone-missed",
    PhoneOff = "chop-icon__phone-off",
    PhoneOutgoing = "chop-icon__phone-outgoing",
    PieChart = "chop-icon__pie-chart",
    Play = "chop-icon__play",
    PlayCircle = "chop-icon__play-circle",
    Plus = "chop-icon__plus",
    PlusCircle = "chop-icon__plus-circle",
    PlusSquare = "chop-icon__plus-square",
    Pocket = "chop-icon__pocket",
    Power = "chop-icon__power",
    Printer = "chop-icon__printer",
    Radio = "chop-icon__radio",
    RefreshCcw = "chop-icon__refresh-ccw",
    RefreshCw = "chop-icon__refresh-cw",
    Repeat = "chop-icon__repeat",
    Rewind = "chop-icon__rewind",
    RotateCcw = "chop-icon__rotate-ccw",
    RotateCw = "chop-icon__rotate-cw",
    Rss = "chop-icon__rss",
    Save = "chop-icon__save",
    Scissors = "chop-icon__scissors",
    Search = "chop-icon__search",
    Send = "chop-icon__send",
    Server = "chop-icon__server",
    Settings = "chop-icon__settings",
    Share = "chop-icon__share",
    Share2 = "chop-icon__share-2",
    Shield = "chop-icon__shield",
    ShieldOff = "chop-icon__shield-off",
    ShoppingBag = "chop-icon__shopping-bag",
    ShoppingCart = "chop-icon__shopping-cart",
    Shuffle = "chop-icon__shuffle",
    Sidebar = "chop-icon__sidebar",
    SkipBack = "chop-icon__skip-back",
    SkipForward = "chop-icon__skip-forward",
    Slack = "chop-icon__slack",
    Slash = "chop-icon__slash",
    Sliders = "chop-icon__sliders",
    Smartphone = "chop-icon__smartphone",
    Smile = "chop-icon__smile",
    Speaker = "chop-icon__speaker",
    Square = "chop-icon__square",
    Star = "chop-icon__star",
    StopCircle = "chop-icon__stop-circle",
    Sun = "chop-icon__sun",
    Sunrise = "chop-icon__sunrise",
    Sunset = "chop-icon__sunset",
    Tablet = "chop-icon__tablet",
    Tag = "chop-icon__tag",
    Target = "chop-icon__target",
    Terminal = "chop-icon__terminal",
    Thermometer = "chop-icon__thermometer",
    ThumbsDown = "chop-icon__thumbs-down",
    ThumbsUp = "chop-icon__thumbs-up",
    ToggleLeft = "chop-icon__toggle-left",
    ToggleRight = "chop-icon__toggle-right",
    Tool = "chop-icon__tool",
    Trash = "chop-icon__trash",
    Trash2 = "chop-icon__trash-2",
    Trello = "chop-icon__trello",
    TrendingDown = "chop-icon__trending-down",
    TrendingUp = "chop-icon__trending-up",
    Triangle = "chop-icon__triangle",
    Truck = "chop-icon__truck",
    Tv = "chop-icon__tv",
    Twitch = "chop-icon__twitch",
    Twitter = "chop-icon__twitter",
    Type = "chop-icon__type",
    Umbrella = "chop-icon__umbrella",
    Underline = "chop-icon__underline",
    Unlock = "chop-icon__unlock",
    Upload = "chop-icon__upload",
    UploadCloud = "chop-icon__upload-cloud",
    User = "chop-icon__user",
    UserCheck = "chop-icon__user-check",
    UserMinus = "chop-icon__user-minus",
    UserPlus = "chop-icon__user-plus",
    UserX = "chop-icon__user-x",
    Users = "chop-icon__users",
    Video = "chop-icon__video",
    VideoOff = "chop-icon__video-off",
    Voicemail = "chop-icon__voicemail",
    Volume = "chop-icon__volume",
    Volume1 = "chop-icon__volume-1",
    Volume2 = "chop-icon__volume-2",
    VolumeX = "chop-icon__volume-x",
    Watch = "chop-icon__watch",
    Wifi = "chop-icon__wifi",
    WifiOff = "chop-icon__wifi-off",
    Wind = "chop-icon__wind",
    X = "chop-icon__x",
    XCircle = "chop-icon__x-circle",
    XOctagon = "chop-icon__x-octagon",
    XSquare = "chop-icon__x-square",
    Youtube = "chop-icon__youtube",
    Zap = "chop-icon__zap",
    ZapOff = "chop-icon__zap-off",
    ZoomIn = "chop-icon__zoom-in",
    ZoomOut = "chop-icon__zoom-out"
}

declare interface IconProps extends ChopLogicComponentProps {
    name?: IconName;
    testId?: string;
    hidden?: boolean;
    size?: ElementSize;
}

declare const Image_2: FC<ImageProps & {
    caption?: string;
}>;
export { Image_2 as Image }

export declare interface ImageProps {
    src: string;
    alt: string;
    sources?: ImageSource[];
    sizes?: string;
    caption?: string;
    width?: number | string;
    height?: number | string;
    aspectRatio?: string;
    loading?: 'lazy' | 'eager';
    decoding?: 'sync' | 'async' | 'auto';
    className?: string;
    decorative?: boolean;
    onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export declare interface ImageSource {
    src: string;
    descriptor?: string;
    media?: string;
    type?: string;
}

export declare const Input: ForwardRefExoticComponent<InputHTMLAttributes<HTMLInputElement> & {
    children?: ReactNode | undefined;
} & RefAttributes<HTMLInputElement>>;

export declare const Label: FC<LabelProps>;

declare type LabelProps = {
    label: string;
    required: boolean;
    inputId: string;
    isTextHidden?: boolean;
    icon?: IconName;
    iconPosition?: 'left' | 'right';
    iconSize?: ElementSize;
    disabled?: boolean;
    className?: string;
    testId?: string;
};

export declare const Link: FC<LinkProps>;

export declare interface LinkProps extends PropsWithChildren, AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    icon?: IconName;
    iconPosition?: 'left' | 'right';
    external?: boolean;
    disabled?: boolean;
}

export declare interface LoaderProps extends ChopLogicComponentProps, HTMLAttributes<HTMLSpanElement> {
    view?: LoaderView;
}

export declare enum LoaderView {
    Dots = "dots",
    Brackets = "brackets",
    Linear = "linear",
    Square = "square",
    Circle = "circle",
    Pulse = "pulse",
    Arrow = "arrow",
    Filler = "filler",
    Rotation = "rotation"
}

export declare const Menu: FC<MenuProps>;

export declare interface MenuItem {
    label: string;
    id: string;
    nestedItems?: MenuItem[];
    icon?: IconName;
    link?: string;
    onClick?: () => void;
    onHover?: () => void;
    onFocus?: () => void;
}

export declare interface MenuProps extends ChopLogicComponentProps {
    items: MenuItem[];
    mode?: OrientationMode;
    openedOn?: 'hover' | 'click';
}

declare type ModalFocusTrapParams = {
    modalRef: RefObject<HTMLElement | null>;
    isOpened: boolean;
};

export declare const MultiSelect: FC<MultiSelectProps>;

export declare interface MultiSelectProps extends ChopLogicInputProps {
    options: SelectValue[];
    onChange?: (values?: SelectValue[]) => void;
    defaultValue?: string | number | readonly string[];
    placeholder?: string;
}

export declare type MultiSelectValue = SelectValue & {
    selected: boolean;
};

/**
 * NumericInput component factory
 * Renders either a stateful or stateless component
 * based on the `stateless` prop.
 */
export declare const NumericInput: FC<NumericInputProps>;

export declare interface NumericInputProps extends ChopLogicInputProps {
    errorMessage?: string;
    validator?: NumericInputValidator;
    hasSpinButtons?: boolean;
    min?: number;
    max?: number;
    step?: number;
    readOnly?: boolean;
    defaultValue?: number;
    stateless?: boolean;
    value?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    onFocus?: FocusEventHandler<HTMLInputElement>;
}

export declare type NumericInputValidator = (input?: number) => boolean;

export declare enum OrientationMode {
    Vertical = "vertical",
    Horizontal = "horizontal"
}

export declare const Portal: ({ children }: {
    children: ReactElement;
}) => ReactPortal;

export declare type RenderDataItemCallback = (item: GridItem, field: string) => ReactElement;

export declare const Search: FC<SearchProps>;

export declare interface SearchProps extends ChopLogicInputProps {
    maxLength?: number;
    minLength?: number;
    placeholder?: string;
    autoComplete?: HTMLInputAutoCompleteAttribute;
    clearable?: boolean;
    spellCheck?: boolean;
    searchMode?: 'automatic' | 'manual';
    onSearch?: (searchTerm: string) => void;
    onClear?: () => void;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    onFocus?: FocusEventHandler<HTMLInputElement>;
    debounceDelay?: number;
}

export declare const Select: FC<SelectProps>;

export declare interface SelectProps extends ChopLogicInputProps {
    options: SelectValue[];
    onChange?: (value?: SelectValue) => void;
    placeholder?: string;
    defaultValue?: string | number | readonly string[];
}

export declare type SelectValue = {
    id: string;
    label: string;
} & {
    [key in string]: unknown;
};

export declare enum SemanticColor {
    Default = "default",
    Info = "info",
    Success = "success",
    Warning = "warning",
    Danger = "danger"
}

export declare const Switch: FC<SwitchProps>;

export declare interface SwitchProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    value?: string;
    hasIndicator?: boolean;
    label: string;
    name: string;
    disabled?: boolean;
    id?: string;
    className?: string;
    style?: CSSProperties;
}

export declare const Tabs: FC<TabsProps>;

export declare interface TabsProps extends ChopLogicComponentProps {
    tabs: ChopLogicTabItem[];
    defaultTabId?: string;
    mode?: OrientationMode;
    stretched?: boolean;
    editable?: boolean;
    extendable?: boolean;
    extendedTabLabel?: string;
    extendedTabContent?: ReactElement;
    onTabTitleChange?: (tabId: string, newTitle: string) => void;
    onTabAdd?: () => void;
    onTabSelect?: (id: string) => void;
    onTabDelete?: (id: string) => void;
}

/**
 * TextInput component factory
 * Renders either a stateful or stateless component
 * based on the `stateless` prop.
 */
export declare const TextInput: FC<TextInputProps>;

export declare interface TextInputProps extends ChopLogicInputProps {
    errorMessage?: string;
    clearable?: boolean;
    readOnly?: boolean;
    type?: 'text' | 'email' | 'password';
    validator?: ChopLogicRegExpWithFlags | TextInputValidator;
    maxLength?: number;
    placeholder?: string;
    defaultValue?: string;
    autoComplete?: HTMLInputAutoCompleteAttribute;
    onClear?: () => void;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    onFocus?: FocusEventHandler<HTMLInputElement>;
}

export declare type TextInputValidator = (input: string) => boolean;

export declare const ThemeContext: Context<    {
    mode?: ThemeMode;
    setMode: (mode: ThemeMode) => void;
}>;

declare type ThemeMode = typeof CL_LIGHT_THEME_CLASS | typeof CL_DARK_THEME_CLASS;

declare type ThemeMode_2 = typeof CL_LIGHT_THEME_CLASS | typeof CL_DARK_THEME_CLASS;

export declare const ThemeProvider: FC<{
    children: ReactNode;
    injectedMode?: ThemeMode_2;
}>;

export declare const Tooltip: FC<TooltipProps>;

export declare enum TooltipContainer {
    Span = "span",
    Div = "div",
    P = "p",
    Strong = "strong",
    Em = "em"
}

export declare interface TooltipProps extends PropsWithChildren, ChopLogicComponentProps {
    tooltipContent: string | ReactElement;
    containerTag?: TooltipContainer;
    visibleOn?: 'hover' | 'click' | 'focus' | 'contextmenu';
    autoClose?: boolean;
    autoCloseDelay?: number;
    color?: SemanticColor;
}

export declare const useAutoClose: ({ isOpened, onClose, autoClose, autoCloseDelay, }: {
    isOpened: boolean;
    onClose: () => void;
    autoClose?: boolean;
    autoCloseDelay?: number;
}) => void;

export declare const useClickOutside: ({ ref, onClickOutsideHandler, dependentRef, }: UseClickOutsideParams) => void;

declare type UseClickOutsideParams = {
    ref: RefObject<HTMLElement | null>;
    onClickOutsideHandler: () => void;
    dependentRef?: RefObject<HTMLElement | null>;
};

export declare const useContainerDimensions: ({ ref, isVisible, }: useContainerDimensionsParams) => Dimensions;

declare type useContainerDimensionsParams = {
    ref: RefObject<HTMLElement | null>;
    isVisible?: boolean;
};

export declare const useDebounce: <T>(value: T, delay: number) => T;

export declare function useElementIds(id?: string): {
    elementId: string;
    errorId: string;
    dropdownId: string;
};

export declare function useIsHovered(ref: RefObject<HTMLElement | null>, isMounted?: boolean): boolean;

export declare const useIsMounted: (isOpened: boolean, delay?: number) => boolean;

export declare const useIsOverflow: ({ ref, dimension, isMounted, }: {
    ref: RefObject<HTMLElement | null>;
    dimension: "width" | "height";
    isMounted?: boolean;
}) => boolean;

export declare const useKeyPress: ({ ref, keyCode, onKeyPress }: useKeyPressParams) => void;

declare type useKeyPressParams = {
    keyCode: string;
    ref: RefObject<HTMLElement | null>;
    onKeyPress: () => void;
};

export declare const useModalFocusTrap: ({ modalRef, isOpened }: ModalFocusTrapParams) => void;

export declare function useRemainingTimer({ isOpened, isHovered, onClose, autoClose, autoCloseDelay, }: UseRemainingTimerProps): number;

declare type UseRemainingTimerProps = {
    isOpened: boolean;
    isHovered: boolean;
    onClose: () => void;
    autoClose?: boolean;
    autoCloseDelay?: number;
};

export declare const useResetFormInput: (onReset: () => void) => void;

export declare const useTheme: () => {
    mode?: "cl-components-light-theme" | "cl-components-dark-theme";
    setMode: (mode: "cl-components-light-theme" | "cl-components-dark-theme") => void;
};

export declare const useTooltipPosition: ({ wrapperRef, tooltipRef, isOpened, spacing, }: useTooltipPositionParams) => {
    top: number;
    left: number;
};

declare type useTooltipPositionParams = {
    wrapperRef: RefObject<HTMLElement | null>;
    tooltipRef: RefObject<HTMLElement | null>;
    isOpened: boolean;
    spacing?: number;
};

export declare function useWindowDimensions(): Dimensions;

export declare function withFigureCaption<P extends object>(Component: ComponentType<P>): FC<P & WithFigureCaptionProps>;

declare type WithFigureCaptionProps = {
    caption?: string;
};

export declare function withTooltip<P extends object>(Component: ComponentType<P>): FC<P & WithTooltipProps>;

declare type WithTooltipProps = {
    tooltip?: string;
    visibleOn?: 'hover' | 'click' | 'focus' | 'contextmenu';
};

export { }
