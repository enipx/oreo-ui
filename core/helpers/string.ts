// @imports
export const getNameInitialsHandler = (name?: string) => {
  const initials = !name
    ? ''
    : name
        .split(' ')
        .map((i) => i[0])
        .slice(0, 2)
        .join('');

  return initials;
};

/**
 *
 * @param value: string
 * @returns new value with it case converted to kebab-case
 */
export const convertToKebabCaseHandler = (value: string) => {
  const regex = new RegExp(/[A-Z]/g);

  return value.replace(regex, (v) => `-${v.toLowerCase()}`);
};
