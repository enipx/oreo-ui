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
