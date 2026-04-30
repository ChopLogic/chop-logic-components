export function toPascalCase(str: string): string;
export function getAllComponentDirs(basePath: string): Array<{
  dir: string;
  componentFile: string;
  componentName: string;
}>;
export function generateIndexFiles(overrideDistPath?: string): void;
