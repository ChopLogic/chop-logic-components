type ClassNameInput = string | {
    [key in string]: boolean;
} | undefined | null;
export declare function getClassName(input: ClassNameInput[]): string;
export {};
