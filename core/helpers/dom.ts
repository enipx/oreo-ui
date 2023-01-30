// @imports
/**
 *
 * method returns if window exist
 */
export const domExistsHandler = () => {
  const domExists =
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement;

  return !!domExists;
};
