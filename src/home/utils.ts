export const push = <T>(x: T[], val: T) => {
  return [...x, val];
};

export const pop = <T>(x: T[]) => {
  let a = [...x];
  a.pop();
  return a;
};

export const slice = <T>(x: T[], ...args: Parameters<Array<T>["slice"]>) => {
  let a = [...x];
  a.slice(...args);
  return a;
};

export const splice = <T>(x: T[], ...args: Parameters<Array<T>["splice"]>) => {
  let a = [...x];
  a.splice(...args);
  return a;
};
