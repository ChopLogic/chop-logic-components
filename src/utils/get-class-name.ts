type ClassNameInput =
  | string
  | {
      [key in string]: boolean;
    }
  | undefined
  | null;

export function getClassName(input: ClassNameInput[]): string {
  const names = input
    .map((item) => {
      if (typeof item === 'string') {
        return item.trim();
      }
      if (typeof item === 'object') {
        const trueKeys = [];
        for (const key in item) {
          if (item[key]) {
            trueKeys.push(key.trim());
          }
        }

        return trueKeys.join(' ');
      }
    })
    .filter((item) => !!item);

  return names.join(' ');
}
