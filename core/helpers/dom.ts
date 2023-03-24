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

export const preventPageScrollingHandler = (prevent?: boolean) => {
  if (domExistsHandler() && document.body) {
    document.body.style.overflow = prevent ? 'hidden' : 'unset';
  }
};
