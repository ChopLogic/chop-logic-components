type ClassNameCondition = {
  [key in string]: boolean;
};

type ClassNameInput = string | ClassNameCondition | undefined | null;

function createClassName(input: ClassNameInput[]): string {
  const names = input
    .map((item) => {
      if (typeof item === 'string') return item.trim();

      if (typeof item === 'object') {
        const keys = [];
        for (const key in item) {
          if (item[key]) {
            keys.push(key.trim());
          }
        }

        return keys.join(' ');
      }
    })
    .filter((item) => !!item);

  return names.join(' ');
}

export default createClassName;
